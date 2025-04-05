# Ứng Dụng Kiểm Tra Giá Cổ Phiếu

Ứng dụng web cho phép người dùng kiểm tra giá cổ phiếu và thích các mã cổ phiếu. Ứng dụng sử dụng API proxy để lấy dữ liệu cổ phiếu thời gian thực.

## Tính Năng

- Kiểm tra giá cổ phiếu theo mã NASDAQ
- So sánh hai mã cổ phiếu
- Thích các mã cổ phiếu (chỉ cho phép 1 lượt thích từ mỗi IP)
- Hiển thị số lượt thích tương đối khi so sánh hai mã cổ phiếu

## Cài Đặt

1. Clone repository:
```
git clone <repository-url>
cd stock-price-checker
```

2. Cài đặt dependencies:
```
npm install
```

3. Tạo file .env với các biến môi trường sau:
```
NODE_ENV=test
MONGO_URI=mongodb://localhost:27017/stock-price-checker
PORT=3000
```

4. Khởi động MongoDB (nếu chưa có):
```
mongod
```

5. Chạy ứng dụng:
```
npm start
```

6. Truy cập ứng dụng tại: http://localhost:3000

## Chạy Tests

```
npm test
```

## Cấu Trúc Dự Án

- `server.js`: File chính của server
- `routes/api.js`: Xử lý các API endpoints
- `models/stock.js`: Mô hình dữ liệu cho cổ phiếu
- `public/`: Thư mục chứa các file frontend
  - `index.html`: Giao diện người dùng
  - `styles.css`: CSS cho giao diện
  - `script.js`: JavaScript cho giao diện
- `tests/`: Thư mục chứa các file test
  - `2_functional-tests.js`: Tests chức năng

## API Endpoints

### GET /api/stock-prices

Lấy thông tin cổ phiếu.

**Tham số:**
- `stock`: Mã cổ phiếu (bắt buộc)
- `like`: true/false (tùy chọn)

**Ví dụ:**
- Lấy thông tin một mã cổ phiếu: `/api/stock-prices?stock=AAPL`
- Lấy thông tin và thích một mã cổ phiếu: `/api/stock-prices?stock=AAPL&like=true`
- So sánh hai mã cổ phiếu: `/api/stock-prices?stock=AAPL&stock=MSFT`
- So sánh và thích hai mã cổ phiếu: `/api/stock-prices?stock=AAPL&stock=MSFT&like=true`

## Giấy Phép

MIT 