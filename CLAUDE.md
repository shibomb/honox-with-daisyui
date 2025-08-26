# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a HonoX web application template integrated with daisyUI v5 and Tailwind CSS v4, designed for deployment on Cloudflare Workers. It demonstrates modern full-stack web development with server-side rendering, theming capabilities, and responsive design.

**Tech Stack:**
- **HonoX**: Full-stack framework built on Hono web framework
- **Hono**: Ultrafast web framework for edge runtime environments
- **daisyUI v5**: CSS framework providing semantic component classes for Tailwind CSS
- **Tailwind CSS v4**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript development
- **Cloudflare Workers**: Edge computing platform for deployment
- **Vite with rolldown-vite**: Fast build tool with Rolldown bundler integration
- **PrismJS**: Syntax highlighting library

## Development Commands

**Development server:**
```bash
bun run dev
# or
npm run dev
```

**Build for production:**
```bash
bun run build
# or
npm run build
```

**Preview production build:**
```bash
bun run preview
# or
npm run preview
```

**Deploy to Cloudflare Workers:**
```bash
bun run deploy
# or
npm run deploy
```

## Architecture & Key Concepts

### File-based Routing
HonoX uses file-based routing in the `app/routes/` directory:
- `index.tsx` - Homepage route
- `_renderer.tsx` - Global layout renderer with HTML document structure
- `_404.tsx` - 404 error page
- `_error.tsx` - General error handler
- Route files export JSX components that become page handlers

### Islands Architecture
Interactive components are placed in `app/islands/` and are hydrated on the client:
- `counter.tsx` - Interactive counter component example
- `theme-controller.tsx` - Theme switching functionality
- `code-block.tsx` - Syntax-highlighted code blocks

### Component Structure
- `app/components/layout/` - Reusable layout components (header, footer, main layout)
- `app/components/` - Shared UI components (OGP meta, tag manager components)
- Components use JSX and can be server-rendered or client-hydrated

### Styling Architecture
- **Main CSS**: `app/style.css` imports Tailwind CSS v4 and daisyUI plugin
- **daisyUI Configuration**: All built-in themes enabled, follows daisyUI v5 component patterns
- **Theme System**: Uses daisyUI's theme-controller for runtime theme switching
- **Typography**: @tailwindcss/typography plugin for rich text styling

### Configuration
- `app/config.ts` - Application configuration including metadata, GTM ID, and utility functions
- `wrangler.jsonc` - Cloudflare Workers deployment configuration
- `vite.config.ts` - Build configuration with HonoX, Tailwind, PrismJS, and rolldown-vite plugins

### Development Guidelines

**Component Development:**
- Follow existing patterns in `app/components/layout/` for new components
- Use daisyUI semantic classes (e.g., `btn`, `card`, `navbar`) instead of raw Tailwind utilities when possible
- Leverage the theme system - use semantic colors (`primary`, `secondary`, etc.) rather than fixed colors
- Follow HonoX patterns: server components in `components/`, interactive components in `islands/`

**Styling Guidelines:**
- Refer to `.cursor/rules/daisyui.mdc` for comprehensive daisyUI v5 component usage
- Use responsive design patterns (`sm:`, `lg:` prefixes)
- Follow daisyUI color system for consistent theming
- Utilize `app/config.ts` for app-wide constants and configuration

**Code Organization:**
- Server-side logic goes in route handlers
- Shared utilities and configuration in `app/config.ts`
- Type definitions in `app/global.d.ts`
- Static assets in `public/` directory

### Build & Deployment
- Vite with rolldown-vite plugin handles both client and server builds for improved performance
- PrismJS integration provides syntax highlighting for code blocks
- Cloudflare Workers deployment configured in `wrangler.jsonc`
- Environment variables managed through `.dev.vars` file (copy from `.dev.vars.example`)
- Build outputs to `./dist` directory with proper structure for Workers

### Testing & Development
- No specific test framework is configured - check with user if testing setup is needed
- Development server supports hot reloading through Vite with Rolldown optimization
- Built-in route debugging with `showRoutes()` in development mode