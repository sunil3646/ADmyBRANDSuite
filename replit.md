# Overview

ADmyBRAND is a modern full-stack web application that serves as an AI-powered marketing suite. The application provides a comprehensive platform for businesses to create compelling campaigns, optimize content, and scale their brand presence using artificial intelligence. It features a landing page with multiple sections including hero, features, pricing, testimonials, FAQ, and contact forms.

The application is built as a single-page application with a marketing-focused frontend and a lightweight backend API that handles contact form submissions and basic data storage.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using React with TypeScript, featuring a component-based architecture with the following key decisions:
- **React Router**: Uses Wouter for lightweight client-side routing
- **UI Framework**: Implements shadcn/ui components with Radix UI primitives for accessibility and consistency
- **Styling**: TailwindCSS with custom CSS variables for theming and glassmorphism effects
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Animations**: Custom scroll-based animations using Intersection Observer API

## Backend Architecture
The server-side follows a minimal Express.js REST API pattern:
- **Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful endpoints with JSON request/response format
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging middleware for API endpoint monitoring
- **Development**: Vite integration for hot module reloading and development server

## Data Storage
The application uses a hybrid storage approach:
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema**: Type-safe database schema with Zod validation integration
- **Data Models**: Users and contact submissions with UUID primary keys and timestamp tracking

## Form Processing & Validation
- **Validation**: Zod schemas for both client and server-side validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Error Handling**: Structured validation error responses with field-level feedback
- **User Feedback**: Toast notifications for form submission status

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle Kit**: Database migration and schema management tool

## UI & Styling
- **shadcn/ui**: Pre-built accessible React components
- **Radix UI**: Low-level UI primitives for complex interactive components
- **TailwindCSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server with HMR support
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

## Third-Party Integrations
- **TanStack Query**: Server state management and caching library
- **React Hook Form**: Forms library with validation integration
- **Date-fns**: Date manipulation and formatting utilities
- **Wouter**: Minimalist router for React applications

## Development & Deployment
- **Replit**: Development environment with custom plugins for error handling and debugging
- **Node.js**: Runtime environment for server-side execution
- **Connect-PG-Simple**: PostgreSQL session store for Express sessions