# Sass Styles Structure

This project uses modern Sass (Dart Sass) with the latest syntax and best practices.

## Structure

```
styles/
├── _index.scss          # Main entry point that forwards all modules
├── main.scss            # Entry point for compilation
├── _config.scss         # Imports all component modules
├── _utilities.scss      # Forwards utility modules (breakpoints, mixins)
├── breakpoints.scss     # Responsive breakpoint mixins
├── tw_mixins.scss      # Tailwind utility mixins
├── _reset.scss         # CSS reset styles
├── _typography.scss    # Typography and font imports
├── _globals.scss       # Global styles and CSS custom properties
├── _header.scss        # Header component styles
├── _hero.scss          # Hero section styles
├── _cards.scss         # Card component styles
├── _about.scss         # About section styles
├── _team.scss          # Team section styles
├── _reviews.scss       # Reviews section styles
├── _contact.scss       # Contact section styles
├── _footer.scss        # Footer component styles
├── _success.scss       # Success page styles
├── _subscription.scss  # Subscription form styles
└── _articles.scss      # Articles component styles
```

## Modern Sass Features Used

### @use and @forward

-   **@use**: Imports modules with namespace control
-   **@forward**: Forwards modules to create clean import hierarchies
-   **No more @import**: Eliminates global namespace pollution

### Benefits of the New Structure

1. **Better namespace control** - No more global variable conflicts
2. **Explicit dependencies** - Clear what each file needs
3. **Better performance** - Sass only compiles what's actually used
4. **Future-proof** - Compatible with latest Sass versions

## Usage

### Importing Styles

```scss
// In your main entry point
@use "index";

// Or import specific components
@use "header";
@use "hero";
```

### Using Utilities

```scss
// Utilities are available globally through the utilities module
@use "utilities" as *;

// Now you can use mixins directly
@include respond(lg) {
    // Large screen styles
}

@include hover() {
    // Hover styles
}
```

### Adding New Components

1. Create your component file (e.g., `_new-component.scss`)
2. Add it to `_config.scss` using `@use 'new-component';`
3. Import utilities if needed: `@use 'utilities' as *;`

## Tailwind CSS v4 Compatibility

This project uses Tailwind CSS v4 syntax:

```scss
@import "tailwindcss/preflight"; // Base styles
@import "tailwindcss/utilities"; // Utility classes
```

## Best Practices

1. **Always use @use instead of @import** for local files
2. **Use @forward to create clean module hierarchies**
3. **Keep utilities in the utilities module** for easy access
4. **Use descriptive namespaces** when importing with @use
5. **Avoid global variables** - use CSS custom properties instead

## Migration Notes

-   All deprecated `@import` statements have been replaced with `@use`
-   Division operations (if any) would use `math.div()` in modern Sass
-   The structure is now modular and maintainable
-   Each component is self-contained with explicit dependencies
