const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Stock = require('../models/stock.js');

// Hàm để lấy thông tin cổ phiếu từ API proxy
async function getStockData(symbol) {
  try {
    const response = await fetch(`https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${symbol}/quote`);
    const data = await response.json();
    
    if (data === 'Invalid Symbol') {
      return { error: 'Invalid Symbol' };
    }
    
    return {
      stock: data.symbol,
      price: data.latestPrice
    };
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu cổ phiếu:', error);
    return { error: 'Lỗi khi lấy dữ liệu cổ phiếu' };
  }
}

// Hàm để ẩn danh hóa địa chỉ IP
function anonymizeIP(ip) {
  // Chỉ giữ lại 3 octet đầu tiên, thay thế octet cuối bằng 0
  return ip.split('.').slice(0, 3).join('.') + '.0';
}

// API endpoint để lấy thông tin cổ phiếu
router.get('/stock-prices', async (req, res) => {
  try {
    const { stock, like } = req.query;
    
    // Kiểm tra xem có tham số stock không
    if (!stock) {
      return res.json({ error: 'Thiếu tham số stock' });
    }
    
    // Xử lý trường hợp một hoặc hai mã cổ phiếu
    const stockSymbols = Array.isArray(stock) ? stock : [stock];
    
    if (stockSymbols.length > 2) {
      return res.json({ error: 'Chỉ được phép truy vấn tối đa 2 mã cổ phiếu' });
    }
    
    // Lấy thông tin cổ phiếu từ API
    const stockDataPromises = stockSymbols.map(symbol => getStockData(symbol));
    const stockDataResults = await Promise.all(stockDataPromises);
    
    // Kiểm tra lỗi
    if (stockDataResults.some(result => result.error)) {
      return res.json({ error: 'Mã cổ phiếu không hợp lệ' });
    }
    
    // Xử lý like nếu có
    if (like === 'true') {
      const anonymizedIP = anonymizeIP(req.ip);
      
      // Cập nhật likes cho mỗi mã cổ phiếu
      for (const result of stockDataResults) {
        await Stock.findOneAndUpdate(
          { symbol: result.stock },
          { 
            $inc: { likes: 1 },
            $addToSet: { likedIPs: anonymizedIP }
          },
          { upsert: true }
        );
      }
    }
    
    // Lấy thông tin likes từ database
    const stockInfo = await Promise.all(
      stockDataResults.map(async (result) => {
        const stockDoc = await Stock.findOne({ symbol: result.stock });
        return {
          stock: result.stock,
          price: result.price,
          likes: stockDoc ? stockDoc.likes : 0
        };
      })
    );
    
    // Xử lý kết quả dựa trên số lượng mã cổ phiếu
    if (stockSymbols.length === 1) {
      return res.json({ stockData: stockInfo[0] });
    } else {
      // Tính toán rel_likes cho trường hợp 2 mã cổ phiếu
      const rel_likes = stockInfo[0].likes - stockInfo[1].likes;
      return res.json({
        stockData: [
          { ...stockInfo[0], rel_likes },
          { ...stockInfo[1], rel_likes: -rel_likes }
        ]
      });
    }
  } catch (error) {
    console.error('Lỗi API:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

module.exports = router; 