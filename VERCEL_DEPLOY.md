# Vercel Deployment Guide

This guide explains how to deploy your Netflix-style streaming application to Vercel.

## Prerequisites

1. A Vercel account (free tier available)
2. A PostgreSQL database (recommend Neon or Supabase for free tier)
3. TMDB API key

## Required Environment Variables

Set these environment variables in your Vercel project dashboard:

```
DATABASE_URL=your_postgresql_connection_string
TMDB_API_KEY=your_tmdb_api_key
NODE_ENV=production
```

## Deployment Steps

### 1. Prepare Your Repository

Make sure your repository contains:
- `vercel.json` configuration file
- `api/index.ts` serverless function entry point
- All necessary dependencies in `package.json`

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your repository from GitHub/GitLab/Bitbucket
4. Vercel will automatically detect the framework and configuration

### 3. Configure Environment Variables

In your Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add the required environment variables listed above
3. Make sure they're available for all environments (Production, Preview, Development)

### 4. Deploy

1. Click "Deploy" - Vercel will automatically build and deploy your application
2. The build process will:
   - Install dependencies
   - Run `vite build` to create the frontend build
   - Set up serverless functions for the API routes
   - Deploy static files to Vercel's CDN

## How It Works

### Frontend
- Built with Vite and served as static files from Vercel's CDN
- All client-side routing handled by the React application
- Assets optimized and cached automatically

### Backend
- API routes run as serverless functions in the `/api` directory
- Each request creates a new serverless function instance
- Database connections use connection pooling for efficiency

### Database
- PostgreSQL database (recommended: Neon for free tier)
- Uses Drizzle ORM for type-safe database operations
- Connection pooling configured for serverless environment

## File Structure for Vercel

```
├── api/
│   └── index.ts          # Serverless function entry point
├── client/               # React frontend source
├── server/               # Express server code (used by API)
├── shared/               # Shared types and schemas
├── dist/public/          # Built frontend files (generated)
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

## Troubleshooting

### Build Issues
- Check that all dependencies are listed in `package.json`
- Verify TypeScript configuration is correct
- Ensure all file paths are relative and work in a serverless environment

### Database Issues
- Verify `DATABASE_URL` is set correctly
- Check that database allows connections from Vercel's IP ranges
- Test database connection locally first

### API Issues
- Check Vercel function logs in the dashboard
- Verify API routes are working locally
- Ensure all environment variables are set

## Performance Optimization

1. **Frontend**: Vite automatically optimizes bundles and enables tree-shaking
2. **API**: Serverless functions scale automatically based on demand
3. **Database**: Use connection pooling and efficient queries
4. **CDN**: Static assets served from Vercel's global CDN

## Monitoring

Use Vercel's built-in analytics to monitor:
- Function execution times
- Error rates
- Traffic patterns
- Core Web Vitals

## Cost Considerations

- Vercel Free Tier: 100GB bandwidth, 6000 function executions/month
- Database: Use free tier from Neon or Supabase
- Monitor usage in Vercel dashboard

## Custom Domain

To use a custom domain:
1. Go to Settings → Domains in Vercel dashboard
2. Add your domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provisioned