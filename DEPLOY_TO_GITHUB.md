# Deploy Portfolio to GitHub

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in the repository details:
   - **Repository name**: `portfolio` (or your preferred name)
   - **Description**: "Cybersecurity and Web Development Portfolio"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

### Option A: If you haven't created the repo yet
```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Option B: If you already created the repo
GitHub will provide you with the exact commands. They will look like:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Verify Deployment

1. Go to your repository on GitHub
2. You should see all your files there
3. Your portfolio code is now on GitHub!

## Step 4: Deploy to Vercel (Optional but Recommended)

### Quick Deploy to Vercel:

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click **Deploy**
6. Your portfolio will be live in minutes!

### Or deploy via Vercel CLI:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Troubleshooting

### If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys for GitHub

### If branch name is different:
```bash
# Check current branch
git branch

# Rename to main if needed
git branch -M main
```

### If you need to update the remote URL:
```bash
# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

## Next Steps After Deployment

1. Update contact links in `src/components/Contact.jsx` with your real GitHub/LinkedIn URLs
2. Update project repository links in `src/components/ProjectDetail.jsx`
3. Add a custom domain (optional)
4. Enable GitHub Pages (if you want to use GitHub hosting instead of Vercel)


