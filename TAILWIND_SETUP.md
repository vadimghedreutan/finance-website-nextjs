# Tailwind CSS v4 Setup Guide

This project has been successfully configured with Tailwind CSS v4 alongside the existing SCSS architecture.

## What Was Configured

### 1. Tailwind CSS v4 Installation

-   ✅ Tailwind CSS v4 is already installed (`tailwindcss: ^4`)
-   ✅ PostCSS plugin is configured (`@tailwindcss/postcss: ^4`)
-   ✅ Autoprefixer added for better CSS compatibility

### 2. Configuration Files

#### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./providers/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom color variables from your SCSS
                "clr-red-500": "#904417",
                "clr-gray-500": "rgba(107, 114, 128, var(--text-opacity))",
                "clr-team": "#17C68D",
                "clr-primery": "#034A75",
            },
            fontFamily: {
                roboto: ["var(--font-roboto)", "sans-serif"],
            },
        },
    },
    plugins: [],
}
```

#### `postcss.config.mjs`

```javascript
const config = {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {},
    },
}

export default config
```

### 3. File Structure Updates

#### `app/globals.css`

-   ✅ Contains Tailwind CSS v4 import: `@import "tailwindcss"`
-   ✅ Includes custom theme variables
-   ✅ Maintains project-specific CSS custom properties

#### `styles/main.scss`

-   ✅ Updated to include Tailwind directives
-   ✅ Maintains existing SCSS structure
-   ✅ Uses modern `@use` syntax for modules

#### `app/layout.tsx`

-   ✅ Removed duplicate SCSS import
-   ✅ Now only imports `globals.css` which includes Tailwind

## How It Works

### Build Pipeline

1. **PostCSS** processes `globals.css` with Tailwind CSS v4
2. **Tailwind** generates utility classes and base styles
3. **SCSS** compiles custom styles and components
4. **Autoprefixer** adds vendor prefixes for compatibility

### Class Usage

-   Use Tailwind utility classes directly in your JSX/TSX files
-   Custom SCSS styles are still available for complex components
-   Both systems work together without conflicts

## Benefits of This Setup

1. **Modern Tailwind CSS v4**: Latest features and performance improvements
2. **Hybrid Approach**: Combines Tailwind utilities with custom SCSS
3. **No Conflicts**: PostCSS handles Tailwind, Sass handles custom styles
4. **Maintainable**: Clear separation of concerns
5. **Performance**: Tailwind only generates used classes

## Usage Examples

### Tailwind Classes in Components

```tsx
<div className="flex flex-col min-h-screen bg-gray-50">
    <header className="sticky top-0 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
            {/* Navigation content */}
        </nav>
    </header>
</div>
```

### Custom SCSS Styles

```scss
// In your component SCSS files
.custom-component {
    @include respond(lg) {
        // Custom responsive styles
    }

    // Custom animations and complex layouts
}
```

### Custom Colors

```tsx
// Use your custom color variables
<div className="bg-clr-primery text-white">Custom branded content</div>
```

## Development Workflow

1. **Add Tailwind classes** directly in your JSX/TSX files
2. **Use custom SCSS** for complex layouts, animations, and project-specific styles
3. **Extend Tailwind theme** in `tailwind.config.js` for project-specific design tokens
4. **Build and test** - the pipeline handles everything automatically

## Troubleshooting

### If Tailwind classes aren't working:

1. Check that `globals.css` is imported in `layout.tsx`
2. Verify PostCSS configuration is correct
3. Ensure `tailwind.config.js` content paths include your files

### If SCSS isn't compiling:

1. Check that `main.scss` is properly configured
2. Verify all `@use` statements are at the top of files
3. Ensure no circular dependencies exist

### Build issues:

1. Run `pnpm build` to check for errors
2. Verify all dependencies are installed
3. Check PostCSS and Sass configurations

## Next Steps

1. **Start using Tailwind classes** in your components
2. **Gradually migrate** simple styles from SCSS to Tailwind
3. **Keep complex layouts** in SCSS for maintainability
4. **Extend the theme** in `tailwind.config.js` as needed

## Commands

```bash
# Development
pnpm dev

# Build
pnpm build

# Install dependencies
pnpm install

# Add new packages
pnpm add package-name
pnpm add -D package-name  # dev dependency
```

Your project is now fully configured with Tailwind CSS v4 and ready for development! 🎉
