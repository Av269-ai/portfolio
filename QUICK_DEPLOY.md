# Quick Deploy to GitHub - Step by Step

## ✅ Your Repository is Ready!

Your portfolio is already:
- ✅ Git initialized
- ✅ All files committed
- ✅ Ready to push to GitHub

## 🚀 Deploy in 3 Steps:

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Description: `Cybersecurity and Web Development Portfolio`
4. Choose **Public** or **Private**
5. **IMPORTANT**: Do NOT check "Add a README file" (we already have one)
6. Click **Create repository**

### Step 2: Copy Your Repository URL

After creating the repo, GitHub will show you a URL like:
```
https://github.com/YOUR_USERNAME/portfolio.git
```

### Step 3: Run These Commands

Open PowerShell in this folder and run:

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔐 Authentication

If prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)
  - Create one at: https://github.com/settings/tokens
  - Select scope: `repo`

## ✅ Verify

1. Go to your repository on GitHub
2. You should see all your portfolio files
3. Done! 🎉

## 🌐 Deploy to Vercel (Get Live URL)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `portfolio` repository
5. Click "Deploy"
6. Your portfolio will be live in 2 minutes!

## 📝 Next Steps

After deploying:
1. Update `src/components/Contact.jsx` with your real GitHub/LinkedIn URLs
2. Update project links in `src/components/ProjectDetail.jsx`
3. Share your live portfolio URL!

---

**Need help?** Check `DEPLOY_TO_GITHUB.md` for detailed instructions.

