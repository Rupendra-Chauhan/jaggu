# For Jaggu 💜

A beautiful, heartfelt page created with React and Vite.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can serve them using any static file server.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

This project is ready to deploy on Vercel! Follow these steps:

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):

```bash
npm i -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy:

```bash
vercel
```

4. For production deployment:

```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will automatically detect it's a Vite project and configure the build settings:

   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

7. Your site will be live in seconds! 🚀

### Vercel Configuration

The project includes a `vercel.json` file with optimized settings for Vercel deployment. Vercel will automatically:

- Build your React app
- Serve it as a static site
- Provide a custom domain or use the default `.vercel.app` domain
- Enable automatic deployments on every push to your main branch

### Environment Variables

If you need to add environment variables:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables there

That's it! Your beautiful page will be live on Vercel! 🌻✨
