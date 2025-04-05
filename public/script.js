document.addEventListener('DOMContentLoaded', function() {
  const stock1Input = document.getElementById('stock1');
  const stock2Input = document.getElementById('stock2');
  const likeCheckbox = document.getElementById('like');
  const getStockButton = document.getElementById('get-stock');
  const stockResult = document.getElementById('stock-result');
  
  getStockButton.addEventListener('click', async function() {
    // Xóa kết quả cũ
    stockResult.innerHTML = '';
    
    // Lấy giá trị từ input
    const stock1 = stock1Input.value.trim().toUpperCase();
    const stock2 = stock2Input.value.trim().toUpperCase();
    const like = likeCheckbox.checked;
    
    // Kiểm tra input
    if (!stock1) {
      showError('Vui lòng nhập mã cổ phiếu thứ nhất');
      return;
    }
    
    try {
      // Xây dựng URL API
      let apiUrl = `/api/stock-prices?stock=${stock1}`;
      
      // Thêm mã cổ phiếu thứ hai nếu có
      if (stock2) {
        apiUrl += `&stock=${stock2}`;
      }
      
      // Thêm tham số like nếu checkbox được chọn
      if (like) {
        apiUrl += '&like=true';
      }
      
      // Gọi API
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Kiểm tra lỗi
      if (data.error) {
        showError(data.error);
        return;
      }
      
      // Hiển thị kết quả
      displayStockData(data.stockData);
    } catch (error) {
      console.error('Lỗi:', error);
      showError('Đã xảy ra lỗi khi lấy dữ liệu cổ phiếu');
    }
  });
  
  // Hàm hiển thị dữ liệu cổ phiếu
  function displayStockData(stockData) {
    // Xử lý trường hợp một mã cổ phiếu
    if (!Array.isArray(stockData)) {
      const card = createStockCard(stockData);
      stockResult.appendChild(card);
      return;
    }
    
    // Xử lý trường hợp hai mã cổ phiếu
    stockData.forEach(data => {
      const card = createStockCard(data);
      stockResult.appendChild(card);
    });
  }
  
  // Hàm tạo card hiển thị thông tin cổ phiếu
  function createStockCard(data) {
    const card = document.createElement('div');
    card.className = 'stock-card';
    
    const title = document.createElement('h2');
    title.textContent = data.stock;
    card.appendChild(title);
    
    const info = document.createElement('div');
    info.className = 'stock-info';
    
    // Thêm thông tin giá
    const priceInfo = document.createElement('p');
    priceInfo.innerHTML = `<span class="label">Giá:</span> $${data.price.toFixed(2)}`;
    info.appendChild(priceInfo);
    
    // Thêm thông tin likes hoặc rel_likes
    if (data.hasOwnProperty('likes')) {
      const likesInfo = document.createElement('p');
      likesInfo.innerHTML = `<span class="label">Lượt thích:</span> ${data.likes}`;
      info.appendChild(likesInfo);
    } else if (data.hasOwnProperty('rel_likes')) {
      const relLikesInfo = document.createElement('p');
      relLikesInfo.innerHTML = `<span class="label">Lượt thích tương đối:</span> ${data.rel_likes}`;
      info.appendChild(relLikesInfo);
    }
    
    card.appendChild(info);
    return card;
  }
  
  // Hàm hiển thị lỗi
  function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    stockResult.appendChild(errorElement);
  }
}); 