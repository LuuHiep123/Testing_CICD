# 🚀 CI/CD Deployment Guide

## Trước khi push lên GitHub

### 1. Kiểm tra local CI pipeline

```bash
npm run ci
```

✅ Đảm bảo tất cả pass: lint → test → build

### 2. Kiểm tra coverage

```bash
npm run test:coverage
```

✅ Verify coverage metrics acceptable

## Push lên GitHub

### 1. Initialize Git (nếu chưa có)

```bash
git init
git add .
git commit -m "Initial commit: Todo List with CI/CD Testing"
```

### 2. Connect to GitHub repository

```bash
# Tạo repository trên GitHub trước
# Sau đó connect:
git remote add origin https://github.com/YOUR_USERNAME/demoCICDTesting.git
git branch -M main
git push -u origin main
```

### 3. Theo dõi CI/CD Pipeline

Sau khi push, pipeline sẽ tự động chạy:

1. **Truy cập GitHub Actions tab** trên repository
2. **Xem workflow run** đang thực hiện
3. **Click vào run** để xem chi tiết

## 🔄 CI/CD Triggers

Pipeline sẽ chạy khi:

### ✅ Push Events

- Push lên `main` branch → **Full pipeline + Deploy**
- Push lên `develop` branch → **Test + Build only**

### ✅ Pull Request Events

- PR đến `main` branch → **Test + Build only**

## 📊 Monitoring CI/CD

### GitHub Actions Dashboard

```
https://github.com/YOUR_USERNAME/demoCICDTesting/actions
```

### Expected Pipeline Steps:

1. **Test Job** (Ubuntu Latest)

   - Node.js 18.x matrix
   - Node.js 20.x matrix
   - Install dependencies
   - Run ESLint
   - Run tests with coverage
   - Build project

2. **Deploy Job** (if main branch)

   - Build for production
   - Deploy to GitHub Pages

3. **Notify Job**
   - Success/failure notifications

## 🌐 GitHub Pages Deployment

Sau khi deploy thành công:

### URL sẽ là:

```
https://YOUR_USERNAME.github.io/demoCICDTesting/
```

### ✅ UPDATED: GitHub Pages Setup (Simplified)

**Workflow sẽ tự động tạo gh-pages branch:**

1. Vào **Settings** tab của repository
2. Scroll xuống **Pages** section
3. **Source**: **Deploy from a branch**
4. **Branch**: **gh-pages** / **(root)**
5. Click **Save**

### How it works:

- ✅ Workflow builds project trong `./dist`
- ✅ Deploy files lên `gh-pages` branch tự động
- ✅ GitHub Pages serve từ gh-pages branch

### Setup Steps:

1. **Wait for first successful deploy** (tạo gh-pages branch)
2. **Go to Settings → Pages**
3. **Select Source**: Deploy from a branch
4. **Select Branch**: gh-pages / (root)
5. **Save**

### Verification Steps:

1. ✅ Check Settings → Pages → Source = "GitHub Actions"
2. ✅ Check Settings → Actions → Permissions = "Read and write"
3. ✅ Re-run workflow nếu cần

## 🐛 Troubleshooting CI/CD

### Pipeline fails?

1. **Check Actions tab** để xem error details
2. **Common issues:**
   - Node version mismatch
   - Dependencies installation failed
   - Tests failed
   - Build failed
   - ESLint errors
   - **Deploy permission issues**

### Deploy Error: "git failed with exit code 128"

Đây là lỗi phổ biến khi GitHub Actions không có quyền deploy. **Đã fix trong workflow!**

#### Solution đã áp dụng:

- ✅ Added `permissions` block trong deploy job
- ✅ Switched to `actions/deploy-pages@v4`
- ✅ Used `actions/configure-pages@v4` for setup
- ✅ Proper artifact upload với `actions/upload-pages-artifact@v3`

#### Nếu vẫn lỗi, kiểm tra:

1. **Repository Settings**:
   - Settings → Pages
   - Source: **GitHub Actions** (not Deploy from branch)
2. **Actions Permissions**:
   - Settings → Actions → General
   - Workflow permissions: **Read and write permissions**
   - Allow GitHub Actions to create and approve pull requests: **✅**

### Fix và re-run:

```bash
# Fix issues locally
npm run ci  # Verify locally first

# Commit và push fix
git add .
git commit -m "Fix CI/CD deploy permissions"
git push
```

### 🔧 Manual GitHub Pages Setup (nếu cần)

Nếu deploy vẫn fail, setup manual:

1. **Go to Repository Settings**
2. **Pages section**
3. **Source**: GitHub Actions
4. **Re-run failed workflow** trên Actions tab

### Common Deploy Errors & Solutions

| Error                           | Solution                              |
| ------------------------------- | ------------------------------------- |
| `git failed with exit code 128` | ✅ Fixed với permissions update       |
| `Page build failed`             | Check build output trong Actions      |
| `404 on deployed site`          | Verify base path trong vite.config.js |
| `Actions permission denied`     | Enable read/write permissions         |

## 📈 CI/CD Best Practices

### Branch Protection Rules

Recommendation: Set up branch protection cho `main`:

1. Require status checks to pass
2. Require branches to be up to date
3. Require review from codeowners

### Status Badges

Add to README:

```markdown
![CI/CD](https://github.com/YOUR_USERNAME/demoCICDTesting/workflows/CI/CD%20Pipeline/badge.svg)
```

### Notifications

GitHub sẽ tự động:

- ✅ Email khi pipeline fails
- ✅ Show status trên commits
- ✅ Block merge nếu checks fail
