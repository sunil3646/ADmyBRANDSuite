# ADmyBRAND - Netlify Deployment Guide

This guide will help you deploy your ADmyBRAND AI Suite landing page to Netlify from your Git repository.

## 🚀 Quick Deployment Steps

### Step 1: Push to Git (If not done already)
1. Add Git tool in Replit workspace
2. Connect to your GitHub repository
3. Commit and push your code

### Step 2: Deploy to Netlify

1. **Go to Netlify**: Visit [netlify.com](https://netlify.com) and log in
2. **Import from Git**: Click "New site from Git"
3. **Connect to GitHub**: Choose your repository
4. **Configure Build Settings**:
   - **Build command**: `vite build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)

5. **Deploy**: Click "Deploy site"

## 📁 Project Configuration

Your project includes a `netlify.toml` file with these settings:

```toml
[build]
  base = "."
  publish = "dist"
  command = "vite build"

[build.environment]
  NODE_VERSION = "20"
  NPM_VERSION = "10"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📧 Contact Form Setup

The project includes two contact form versions:

### Option 1: Netlify Forms (Recommended for static deployment)
- File: `client/src/components/sections/contact-netlify.tsx`
- Works with Netlify's built-in form handling
- No backend required
- Forms automatically appear in Netlify dashboard

### Option 2: Full-stack with Backend API
- File: `client/src/components/sections/contact.tsx`
- Requires backend deployment (Vercel, Railway, etc.)
- More control over form processing

## 🔧 Build Configuration

### Frontend-Only Build
The `netlify.toml` is configured for frontend-only deployment using `vite build`.

### Full-Stack Build (Alternative)
If you want to deploy the full-stack version, consider:
- **Frontend**: Netlify (static)
- **Backend**: Railway, Render, or Vercel
- Update API endpoints in the frontend to point to your backend URL

## 🌍 Environment Variables

For production deployment, you may need to set:
- `VITE_API_URL`: Your backend API URL (if using separate backend)
- `VITE_SITE_URL`: Your site's URL for proper redirects

## 📱 Features Included in Deployment

✅ **Modern SaaS Landing Page**
- Hero section with glassmorphism design
- Features showcase with 6 AI tools
- Pricing section with monthly/annual toggle
- Customer testimonials
- FAQ section
- Contact form

✅ **Responsive Design**
- Mobile-first approach
- Works on all devices
- Touch-friendly interactions

✅ **Performance Optimized**
- Vite build optimization
- Image optimization
- Fast loading times

## 🔍 Post-Deployment Checklist

After deployment:
1. ✅ Test all sections scroll properly
2. ✅ Verify mobile responsiveness
3. ✅ Test contact form submission
4. ✅ Check all animations work
5. ✅ Verify pricing toggle functionality
6. ✅ Test navigation menu

## 🎯 Custom Domain (Optional)

To use a custom domain:
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Configure DNS settings as instructed
4. SSL certificate will be automatically provisioned

## 📊 Analytics & Monitoring

Consider adding:
- Google Analytics
- Netlify Analytics
- Performance monitoring
- Form submission tracking

Your ADmyBRAND landing page is now ready for production! 🚀