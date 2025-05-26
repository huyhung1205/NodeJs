# 🚀 Backend Setup Guide for Node.js

1️⃣ Khởi tạo dự án
npm init -y # Khởi tạo package.json tự động

2️⃣ Cài đặt các thư viện cần thiết
npm install express body-parser fs nodemon

# Giải thích:

express → Framework Node.js để xây dựng API
body-parser → Hỗ trợ xử lý dữ liệu JSON từ client
fs → Đọc và ghi dữ liệu vào tệp JSON
nodemon → Tự động restart server khi có thay đổi

3️⃣ Chạy server

# Chạy thủ công:

node server.js

# hoặc

# Tự động cập nhật:

npx nodemon server.js

4️⃣ Đẩy lên GitHub

# Khởi tạo Git trong thư mục dự án

git init

# Thêm toàn bộ file vào Git

git add .

# Lưu commit đầu tiên

git commit -m "Initial backend setup"

# Kết nối với repository trên GitHub

git remote add origin https://github.com/your-username/your-repo.git

# Đẩy lên GitHub

git push -u origin main
