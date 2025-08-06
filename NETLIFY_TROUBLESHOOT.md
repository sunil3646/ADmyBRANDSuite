# Netlify Deployment Troubleshooting Guide

## 🔧 Common 404 Error Solutions

If you're still getting a 404 error on Netlify, try these steps:

### Step 1: Check Build Settings in Netlify Dashboard
1. Go to your site settings in Netlify
2. Navigate to "Build & deploy" → "Build settings"
3. Verify these settings:
   - **Build command**: `vite build`
   - **Publish directory**: `dist/public`
   - **Base directory**: (leave empty)

### Step 2: Manual Deploy Check
1. Run `npm run build` locally in Replit
2. Check that `dist/public/index.html` exists
3. Verify `dist/public/_redirects` file exists with content: `/* /index.html 200`

### Step 3: Force Redeploy
1. In Netlify dashboard, go to "Deploys"
2. Click "Trigger deploy" → "Deploy site"
3. Wait for deployment to complete

### Step 4: Check Deploy Logs
1. In Netlify, click on the failed deploy
2. Look for build errors in the logs
3. Common issues:
   - Node version mismatch
   - Missing dependencies
   - Build command failures

### Step 5: Alternative Configuration
If still having issues, try this simpler approach:

**Option A: Simple _redirects only**
Remove `netlify.toml` and just use `_redirects` file in `client/public/`:
```
/*    /index.html   200
```

**Option B: Alternative Build Command**
In Netlify dashboard, try:
- Build command: `cd client && npm install && npm run build`
- Publish directory: `client/dist`

### Step 6: Check for Common Issues

1. **Wrong publish directory**: Should be `dist/public` not just `dist`
2. **Missing _redirects**: Must be in the publish directory
3. **Base path issues**: Ensure no trailing slashes in configuration
4. **Node version**: Set NODE_VERSION=20 in environment variables

### Step 7: Debug Build Output
1. Download the deployed files from Netlify
2. Check if `index.html` and `_redirects` are present
3. Verify asset paths in `index.html` are correct

## 🚀 Working Configuration

This is the confirmed working setup:

**netlify.toml**:
```toml
[build]
  base = "."
  publish = "dist/public"
  command = "vite build"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**client/public/_redirects**:
```
/*    /index.html   200
```

## 📱 Test Your Site
After deployment, test:
- Homepage loads correctly
- Navigation menu works
- Contact form submits
- Mobile responsiveness
- All sections scroll properly

## 🆘 If Still Having Issues
1. Check Netlify's build logs for specific errors
2. Verify your Git repository has the latest changes
3. Try deploying a simple HTML file first to test basic functionality
4. Contact Netlify support if the issue persists

Your ADmyBRAND landing page should work perfectly once these configurations are applied!