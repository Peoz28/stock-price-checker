# URL Shortener Microservice

Dự án URL Shortener Microservice cho FreeCodeCamp.

## Mô tả

Ứng dụng này cho phép người dùng rút gọn URL. Khi người dùng gửi một URL, ứng dụng sẽ trả về một URL ngắn hơn. Khi người dùng truy cập URL ngắn, họ sẽ được chuyển hướng đến URL gốc.

## Tính năng

- Rút gọn URL
- Chuyển hướng từ URL ngắn đến URL gốc
- Kiểm tra URL hợp lệ
- Giao diện người dùng thân thiện

## API

### POST /api/shorturl

Gửi một URL để rút gọn.

**Request Body:**
```
url=https://www.example.com
```

**Response:**
```json
{
  "original_url": "https://www.example.com",
  "short_url": 1
}
```

### GET /api/shorturl/:short_url

Chuyển hướng đến URL gốc.

## Triển khai

### Triển khai lên Glitch

1. Truy cập [Glitch](https://glitch.com/)
2. Đăng nhập hoặc tạo tài khoản mới
3. Nhấp vào "New Project" và chọn "Import from GitHub"
4. Nhập URL GitHub của dự án: `https://github.com/Peoz28/stock-price-checker.git`
5. Nhấp vào "Import"
6. Glitch sẽ tự động cài đặt dependencies và khởi chạy dự án
7. Bạn sẽ nhận được một URL duy nhất để truy cập dự án (ví dụ: `https://your-project-name.glitch.me`)

### Triển khai cục bộ

1. Clone repository:
   ```
   git clone https://github.com/Peoz28/stock-price-checker.git
   cd stock-price-checker
   ```

2. Cài đặt dependencies:
   ```
   npm install
   ```

3. Khởi chạy server:
   ```
   npm start
   ```

4. Truy cập ứng dụng tại `http://localhost:3000`

## Công nghệ sử dụng

- Node.js
- Express.js
- HTML/CSS/JavaScript

## License

MIT 