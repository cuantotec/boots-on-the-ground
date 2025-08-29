# Overview

This is a React-based business website for "Boots On The Ground" (BOTG), a professional real estate documentation service company operating in the Tri-State area. The application provides a modern, responsive landing page that showcases the company's visual documentation services for distressed properties, targeting real estate investors, agents, and property managers. The website features service listings with pricing, contact forms, and comprehensive company information presented through a clean, professional interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based single-page application (SPA) architecture built with Vite as the build tool. The frontend implements a component-based structure using TypeScript for type safety and follows a modular design pattern with separate sections for different page content.

**Key Design Decisions:**
- **React with TypeScript**: Chosen for type safety and modern development experience
- **Vite Build Tool**: Selected for fast development server and optimized production builds
- **Component Architecture**: Organized into layout components (navbar, footer) and section components (hero, services, contact)
- **Routing**: Uses Wouter for lightweight client-side routing, though currently only implements a single home page route

## UI and Styling System
The application uses a comprehensive design system built on Tailwind CSS with shadcn/ui components for consistent, accessible user interface elements.

**Component Strategy:**
- **shadcn/ui Integration**: Provides pre-built, customizable UI components following modern design patterns
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **CSS Custom Properties**: Uses CSS variables for theme consistency and easy customization
- **Responsive Design**: Mobile-first approach with responsive breakpoints for desktop, tablet, and mobile

## State Management and Data Flow
The application implements React Query (TanStack Query) for server state management and uses React's built-in state management for local component state.

**State Architecture:**
- **React Query**: Handles API communication, caching, and server state synchronization
- **Local State**: Component-level state using React hooks for form handling and UI interactions
- **Context Providers**: Tooltip and Toast providers for global UI state management

## Backend Architecture
The server uses Express.js with TypeScript, implementing a RESTful API structure with middleware for request logging and error handling.

**Server Design:**
- **Express.js**: Node.js web framework chosen for simplicity and flexibility
- **TypeScript**: Ensures type safety across the full stack
- **Middleware Architecture**: Request logging, JSON parsing, and error handling middleware
- **Development Integration**: Vite integration for development mode with HMR support

## Data Storage
The application is configured to use PostgreSQL with Drizzle ORM for database operations, though the current implementation uses in-memory storage for simplicity.

**Database Strategy:**
- **Drizzle ORM**: Type-safe SQL toolkit for database operations
- **PostgreSQL**: Production database (Neon Database configured)
- **Schema Definition**: Centralized schema definitions in shared directory for type consistency
- **Migration Support**: Drizzle Kit for database schema management

# External Dependencies

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for building the component library
- **shadcn/ui**: Pre-built component system built on top of Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx**: Utility for conditional CSS class management

## State Management and Data Fetching
- **@tanstack/react-query**: Server state management, caching, and data synchronization
- **wouter**: Lightweight routing library for client-side navigation

## Database and ORM
- **drizzle-orm**: TypeScript-first ORM for database operations
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Type checking and enhanced development experience
- **@replit/vite-plugin-***: Replit-specific plugins for development environment integration

## Form Handling and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation library for type-safe form validation

## Utilities and Helpers
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library with React components