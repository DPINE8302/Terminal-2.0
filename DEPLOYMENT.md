# Deployment Guide

## GitHub Pages Deployment (Recommended)

### Automatic Deployment Setup

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Setup deployment for v1.5.2"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Deploy**
   - The workflow will automatically trigger on every push to main
   - Your site will be available at: `https://yourusername.github.io/Terminal/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build and deploy
npm run deploy
```

## Configuration

The project is pre-configured with:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite configuration for GitHub Pages (`vite.config.js`)
- ✅ Base path set to `/Terminal/`
- ✅ Build optimization enabled

## Troubleshooting

**Issue**: 404 errors on GitHub Pages
- **Solution**: Make sure the base path in `vite.config.js` matches your repository name

**Issue**: GitHub Actions failing
- **Solution**: Check that GitHub Pages is enabled and source is set to "GitHub Actions"

**Issue**: Assets not loading
- **Solution**: Verify the base path configuration in `vite.config.js`

---

**Version 1.5.2**  
**© 2025 Wiqnnc_. All Rights Reserved.**  
**Made with love by Win.**