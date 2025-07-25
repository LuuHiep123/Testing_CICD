# Todo List với CI/CD Testing

![CI/CD Pipeline](https://github.com/YOUR_USERNAME/demoCICDTesting/workflows/CI%2FCD%20Pipeline/badge.svg)
![Tests](https://img.shields.io/badge/tests-9%20passed-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

Dự án Todo List đơn giản được xây dựng với React + Vite và tích hợp CI/CD testing hoàn chỉnh.

## ✨ Tính năng

- ✅ Thêm task mới
- ❌ Xóa task
- 🧪 Testing với Vitest
- 📊 Code coverage report
- 🚀 CI/CD với GitHub Actions
- 📱 Responsive design

## 🛠️ Công nghệ sử dụng

- **React 19**: Frontend framework
- **Vite**: Build tool và dev server
- **Vitest**: Testing framework
- **React Testing Library**: Testing utilities
- **ESLint**: Code linting
- **GitHub Actions**: CI/CD pipeline

## 🚀 Cài đặt và chạy

### Yêu cầu

- Node.js >= 18.x
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:5173](http://localhost:5173) để xem ứng dụng.

### Build cho production

```bash
npm run build
```

## 🧪 Testing

Dự án sử dụng **Vitest** và **React Testing Library** để testing. Tất cả test files được đặt cạnh component tương ứng với suffix `.test.jsx`.

### Các lệnh testing cơ bản

#### Chạy tests trong watch mode (khuyến nghị cho development)

```bash
npm run test
```

- Tests sẽ chạy tự động khi có thay đổi file
- Hiển thị kết quả realtime
- Có thể filter tests bằng pattern

#### Chạy tests một lần duy nhất

```bash
npm run test:run
```

- Chạy tất cả tests một lần và exit
- Thích hợp cho CI/CD pipeline
- Không watch file changes

#### Chạy tests với watch mode manual

```bash
npm run test:watch
```

- Tương tự `npm run test` nhưng explicit watch mode
- Có thể restart manual bằng `r` key

### Testing với Coverage Report

#### Chạy tests với coverage

```bash
npm run test:coverage
```

- Chạy tất cả tests và tạo coverage report
- Hiển thị % coverage trên terminal
- Tạo folder `coverage/` với HTML reports

#### Xem coverage report chi tiết

Sau khi chạy coverage, mở file HTML report:

```bash
# Windows
start coverage/index.html

# MacOS
open coverage/index.html

# Linux
xdg-open coverage/index.html
```

### Testing với UI (Vitest UI)

#### Chạy tests với web interface

```bash
npm run test:ui
```

- Mở giao diện web tại `http://localhost:51204`
- Xem tests, coverage, và results trực quan
- Debug tests dễ dàng hơn

### Các lệnh hỗ trợ khác

#### Lint và fix code style

```bash
npm run lint        # Kiểm tra lỗi code style
npm run lint:fix    # Tự động fix các lỗi có thể sửa
```

#### Chạy toàn bộ CI pipeline local

```bash
npm run ci
```

- Chạy lint → test → build
- Giống với CI/CD pipeline trên GitHub

#### Clean build và coverage files

```bash
npm run clean
```

### 📋 Test Structure

```
src/
├── App.jsx              # Component chính
├── App.test.jsx         # 9 test cases cho App
└── setupTests.js        # Cấu hình global cho tests
```

### 🎯 Current Test Coverage

- **App.jsx**: 100% coverage
- **Total**: 9 test cases
- **Test types**: Component rendering, user interactions, edge cases

### ⚡ Quick Test Examples

```bash
# Chạy specific test file
npx vitest App.test.jsx

# Chạy tests với pattern
npx vitest --run --reporter=verbose "task"

# Debug một test cụ thể
npx vitest --run --reporter=verbose "thêm task mới"
```

### 📊 Understanding Coverage Metrics

- **Statements**: Phần trăm câu lệnh được execute
- **Branches**: Phần trăm nhánh if/else được test
- **Functions**: Phần trăm functions được gọi
- **Lines**: Phần trăm dòng code được chạy

### 🐛 Debugging Tests

1. **Sử dụng Vitest UI**: `npm run test:ui`
2. **Console.log trong tests**: Sẽ hiển thị trong terminal
3. **VS Code debugging**: Cài extension Vitest
4. **Browser debugging**: Mở DevTools trong Vitest UI

## 📊 Coverage Report Details

### Cách đọc Coverage Report

Coverage report cung cấp 4 metrics chính:

1. **% Stmts (Statements)**: Phần trăm câu lệnh code được thực thi
2. **% Branch**: Phần trăm nhánh điều kiện (if/else) được test
3. **% Funcs (Functions)**: Phần trăm hàm được gọi trong tests
4. **% Lines**: Phần trăm dòng code được chạy

### Coverage Outputs

Sau khi chạy `npm run test:coverage`, bạn sẽ có:

```
coverage/
├── index.html              # HTML report (main)
├── lcov.info              # LCOV format cho CI/CD
├── coverage-final.json    # JSON data
└── lcov-report/           # Detailed HTML reports
    ├── index.html
    └── src/
        ├── index.html
        └── App.jsx.html   # Per-file coverage
```

### Mở Coverage Report

```bash
# Trên Windows
start coverage/index.html

# Hoặc drag & drop file vào browser
# Hoặc mở VS Code Live Server extension
```

### Current Coverage Stats

- **App.jsx**: 100% tất cả metrics
- **Overall**: High coverage với comprehensive test suite
- **Uncovered**: Chỉ config files (được exclude)

## 🔄 CI/CD Pipeline

Pipeline tự động chạy khi:

- Push code lên branch `main` hoặc `develop`
- Tạo Pull Request đến branch `main`

### Các bước trong pipeline:

1. **Test**: Chạy tests trên Node.js 18.x và 20.x
2. **Lint**: Kiểm tra code style với ESLint
3. **Build**: Build ứng dụng
4. **Deploy**: Tự động deploy lên GitHub Pages (chỉ từ branch main)

## 📁 Cấu trúc dự án

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx             # Component chính
│   ├── App.test.jsx        # Tests cho App
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── setupTests.js       # Test setup
│   └── assets/
├── package.json
├── vite.config.js          # Vite config
├── vitest.config.js        # Vitest config
└── README.md
```

## 🧪 Test Cases

### Test Coverage Overview

- ✅ **Component Rendering**: Kiểm tra UI elements render đúng
- ✅ **User Interactions**: Test click, input, form submit
- ✅ **State Management**: Verify state updates correctly
- ✅ **Edge Cases**: Empty input, whitespace, multiple items
- ✅ **Data Flow**: Add/remove operations work properly

### Detailed Test Cases

1. **render todo list title** - Verify main heading displays
2. **render input và button** - Check form elements exist
3. **thêm task mới vào danh sách** - Add new todo functionality
4. **không thêm task rỗng** - Prevent empty todo creation
5. **không thêm task chỉ có khoảng trắng** - Validate whitespace input
6. **input được xóa sau khi thêm task** - Clear input after submit
7. **xóa task khỏi danh sách** - Delete todo functionality
8. **thêm nhiều task** - Multiple todos support
9. **xóa task đúng khi có nhiều task** - Correct deletion with multiple items

### 🔧 Testing Best Practices

#### Viết Tests Hiệu Quả

```javascript
// ✅ Good: Descriptive test names
test("thêm task mới vào danh sách", () => {
  // Test implementation
});

// ❌ Bad: Vague test names
test("test 1", () => {
  // Test implementation
});
```

#### Sử dụng Queries Đúng Cách

```javascript
// ✅ Preferred: Accessible queries
screen.getByRole("button", { name: "Thêm" });
screen.getByLabelText("Todo input");

// ✅ Fallback: Text content
screen.getByText("Thêm");
screen.getByPlaceholderText("Nhập việc cần làm");

// ❌ Avoid: Test IDs (unless necessary)
screen.getByTestId("add-button");
```

### 🐛 Troubleshooting Common Issues

#### Tests không chạy?

```bash
# Check Node version
node --version  # Should be >= 18.x

# Clear cache
npm run clean
rm -rf node_modules package-lock.json
npm install
```

#### Coverage không đúng?

```bash
# Make sure all test files end with .test.jsx
# Check vitest.config.js coverage settings
# Verify setupTests.js is being loaded
```

#### Tests bị lỗi import?

```bash
# Check that globals are enabled in vitest config
# Verify setupTests.js imports @testing-library/jest-dom
# Make sure ES modules are configured correctly
```

## 🚀 Quick Start Guide

### Bắt đầu Development

```bash
# 1. Clone và cài đặt
git clone <repository-url>
cd demoCICDTesting
npm install

# 2. Chạy development server
npm run dev

# 3. Chạy tests trong tab terminal khác
npm run test
```

### Workflow Thông Thường

```bash
# 1. Phát triển feature mới
npm run dev                    # Start dev server

# 2. Viết tests cho feature
npm run test                   # Watch mode testing

# 3. Kiểm tra coverage
npm run test:coverage          # Generate coverage report

# 4. Kiểm tra code quality
npm run lint                   # Check for issues
npm run lint:fix               # Auto-fix issues

# 5. Test toàn bộ pipeline
npm run ci                     # Full CI pipeline locally

# 6. Build cho production
npm run build                  # Production build
```

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phân phối dưới MIT License.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
