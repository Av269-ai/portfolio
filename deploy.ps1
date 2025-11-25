# PowerShell script to deploy portfolio to GitHub
# Run this script after creating your GitHub repository

Write-Host "=== Portfolio GitHub Deployment Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Error: Git repository not initialized!" -ForegroundColor Red
    Write-Host "Run: git init" -ForegroundColor Yellow
    exit 1
}

# Get GitHub username and repo name
$githubUsername = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter repository name (default: portfolio)" 
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio"
}

# Construct GitHub URL
$githubUrl = "https://github.com/$githubUsername/$repoName.git"

Write-Host ""
Write-Host "Repository URL: $githubUrl" -ForegroundColor Green
Write-Host ""

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $update = Read-Host "Update to new URL? (y/n)"
    if ($update -eq "y" -or $update -eq "Y") {
        git remote set-url origin $githubUrl
        Write-Host "Remote URL updated!" -ForegroundColor Green
    }
} else {
    git remote add origin $githubUrl
    Write-Host "Remote 'origin' added!" -ForegroundColor Green
}

# Check current branch
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch" -ForegroundColor Cyan

# Rename to main if needed
if ($currentBranch -ne "main") {
    Write-Host "Renaming branch to 'main'..." -ForegroundColor Yellow
    git branch -M main
}

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host ""
    Write-Host "Uncommitted changes detected:" -ForegroundColor Yellow
    git status --short
    $commit = Read-Host "Commit changes before pushing? (y/n)"
    if ($commit -eq "y" -or $commit -eq "Y") {
        git add .
        $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Update portfolio"
        }
        git commit -m $commitMessage
        Write-Host "Changes committed!" -ForegroundColor Green
    }
}

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "Make sure you have created the repository on GitHub first!" -ForegroundColor Yellow
Write-Host ""

$push = Read-Host "Push to GitHub now? (y/n)"
if ($push -eq "y" -or $push -eq "Y") {
    try {
        git push -u origin main
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "View your repository: $githubUrl" -ForegroundColor Cyan
    } catch {
        Write-Host ""
        Write-Host "❌ Error pushing to GitHub!" -ForegroundColor Red
        Write-Host "Make sure:" -ForegroundColor Yellow
        Write-Host "  1. Repository exists on GitHub" -ForegroundColor Yellow
        Write-Host "  2. You have proper authentication set up" -ForegroundColor Yellow
        Write-Host "  3. Repository is empty or you have push access" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "Skipped push. Run manually with:" -ForegroundColor Yellow
    Write-Host "  git push -u origin main" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host "1. Verify your code is on GitHub: $githubUrl" -ForegroundColor White
Write-Host "2. Deploy to Vercel: https://vercel.com" -ForegroundColor White
Write-Host "3. Update contact links in src/components/Contact.jsx" -ForegroundColor White
Write-Host ""


