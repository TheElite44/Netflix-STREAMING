# Overview

This is a Netflix-style streaming application built with React and Express. The application provides a modern, responsive interface for browsing and watching movies and TV shows, featuring a hero banner, content rows, search functionality, and a "My List" feature for saving favorite content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Netflix-inspired theme variables
- **State Management**: React Context API for theme and "My List" functionality
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: Hot reloading with Vite middleware integration

### Key Components

#### Database Schema
- **Users table**: Basic user authentication with username and password
- **My List Items table**: User's saved content with references to TMDB content IDs
- **Drizzle ORM**: Type-safe database operations with Zod validation schemas

#### External API Integration
- **TMDB (The Movie Database)**: Primary data source for movies and TV shows
- **Content Types**: Movies, TV shows, trending content, search results
- **Image Handling**: TMDB image URLs with fallback error handling

#### Authentication System
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Current Implementation**: In-memory storage for development
- **Future Support**: Ready for PostgreSQL database integration

#### Content Management
- **My List**: Local storage-based user content saving
- **Content Cards**: Interactive movie/TV show tiles with hover effects
- **Hero Banner**: Dynamic featured content selection
- **Video Player**: Embedded streaming with IMDB integration

### Data Flow

1. **Content Discovery**: TMDB API → React Query → Component State → UI
2. **User Interactions**: UI Events → Context Updates → Local Storage
3. **Authentication**: Form Input → Express Routes → Storage Layer → Session Management
4. **Search**: User Input → TMDB Search API → Results Display
5. **Content Playback**: Content Selection → IMDB ID Resolution → Video Player

### External Dependencies

#### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting
- **Validation**: Zod for schema validation
- **Carousel**: Embla Carousel for content sliding

#### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL support
- **Session Store**: connect-pg-simple for persistent sessions
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

#### Third-Party Services
- **TMDB API**: Movie and TV show data, images, and metadata
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit Integration**: Development environment optimizations

### Deployment Strategy

#### Development Setup
- **Hot Reloading**: Vite middleware integrated with Express
- **Type Safety**: Shared TypeScript types between client and server
- **Error Handling**: Runtime error overlay for development debugging
- **Asset Handling**: Static file serving with proper MIME types

#### Production Build
- **Client**: Vite build system with optimized bundle splitting
- **Server**: esbuild compilation to ESM format
- **Database**: Drizzle migrations with schema synchronization
- **Environment**: NODE_ENV-based configuration switching

#### Vercel Deployment
- **Frontend**: Static files served from Vercel's global CDN
- **Backend**: API routes run as serverless functions in `/api` directory
- **Database**: PostgreSQL with connection pooling for serverless environment
- **Configuration**: `vercel.json` handles routing and build configuration
- **Environment**: Production environment variables set in Vercel dashboard

#### Key Design Decisions

1. **Monorepo Structure**: Shared types and utilities between client/server
2. **Type Safety**: End-to-end TypeScript with strict configuration
3. **Modern React**: Hooks-based architecture with context for global state
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
5. **Performance**: Query caching, lazy loading, and optimized images
6. **Accessibility**: Radix UI components ensure ARIA compliance
7. **Error Boundaries**: Graceful error handling with user-friendly messages

The application is designed to be scalable, maintainable, and provide a smooth user experience similar to modern streaming platforms.