# BraveShop - E-commerce Application

## Overview
This repository contains a modern e-commerce application built with React on the frontend and Express on the backend, using Drizzle ORM for database operations. The application follows a client-server architecture with a RESTful API pattern. The UI is built using the Shadcn UI component library with a custom design system.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query for server state management
- **UI Components**: Shadcn UI (based on Radix UI) with Tailwind CSS
- **Animation**: Framer Motion for UI animations

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Pattern**: RESTful API endpoints
- **Database Access**: Drizzle ORM for database operations
- **Authentication**: Session-based authentication (connect-pg-simple)

### Data Storage
- **Database**: PostgreSQL (via Neon DB serverless connector)
- **Schema Management**: Drizzle ORM with schema definitions

### Deployment Strategy
- **Frontend**: Vite for building the client application
- **Backend**: ESBuild for bundling the server code
- **Combined Deployment**: Single-server deployment where Express serves both the API and the static frontend files

## Key Components

### Database Schema
The database includes these primary entities:
- **Users**: Authentication and user management
- **Categories**: Product categories with metadata like icons and colors
- **Products**: Product listings with descriptions, pricing, and images
- **Team Members**: Staff/team information for the About page
- **Reviews**: Customer testimonials and product reviews

### API Routes
The server exposes several RESTful endpoints:
- `/api/categories`: Get all product categories or a specific category
- `/api/products`: Get all products or filter by category
- `/api/reviews`: Get customer testimonials
- `/api/team`: Get team member information

### Frontend Pages
The application includes these main pages:
- **Home**: Featured products, categories, and marketing sections
- **Products**: Product listing with category filtering
- **About**: Company information and team members
- **Reviews**: Customer testimonials
- **Contact**: Contact form and information

### UI Components
The application uses a comprehensive UI component library with:
- Form controls (inputs, selects, checkboxes)
- Layout components (cards, grids)
- Navigation elements (menus, breadcrumbs)
- Feedback components (toasts, modals)

## Data Flow

1. **Product Browsing Flow**:
   - User visits the application
   - Frontend fetches categories and products via React Query
   - User can filter products by category
   - Products are displayed in a responsive grid

2. **Contact Form Flow**:
   - User fills out the contact form
   - Form validation occurs client-side
   - On submission, data is sent to the backend
   - User receives feedback via toast notifications

3. **WhatsApp Integration Flow**:
   - Products have direct WhatsApp messaging capability
   - When a user clicks the WhatsApp button, a pre-formatted message is created
   - User is redirected to WhatsApp with the product details

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: UI primitives for accessible components
- **@tanstack/react-query**: Data fetching and caching
- **framer-motion**: Animations and transitions
- **tailwindcss**: Utility-first CSS framework
- **react-helmet-async**: Document head management

### Backend Dependencies
- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM
- **@neondatabase/serverless**: PostgreSQL database connector
- **zod**: Schema validation
- **connect-pg-simple**: Session management

## Development Workflow

1. **Local Development**:
   - Run `npm run dev` to start the development server
   - The Express server handles API requests and serves the Vite development server
   - API endpoints are logged to the console for easier debugging

2. **Database Schema Changes**:
   - Update schema definitions in `shared/schema.ts`
   - Run `npm run db:push` to apply changes to the database

3. **Production Build**:
   - Run `npm run build` to create production bundles
   - Frontend is built with Vite, backend with ESBuild
   - Run `npm run start` to start the production server