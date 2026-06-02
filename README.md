# @polis/theme-mantine

Card Collecting theme for Polis-family apps. Bundles the SCSS variables, font
hooks, base element styles, and responsive helpers used by the Card Collecting
web app, plus the Mantine `createTheme` override that ships alongside them.

This is a sibling of [`@polis/react`](https://github.com/PomeloProductions/polis-react)
and [`@polis/polis-laravel`](https://github.com/PomeloProductions/polis-laravel):
consumed via a `github:` dependency, pinned by tag.

## Install

In a consuming app's `package.json`:

```jsonc
{
  "dependencies": {
    "@polis/theme-mantine": "github:PomeloProductions/polis-theme-mantine#v0.1.0"
  }
}
```

## Use the Mantine theme

```tsx
import { MantineProvider } from '@mantine/core';
import { theme } from '@polis/theme-mantine';

export function App({ children }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}
```

## Use the SCSS

Import the aggregate entrypoint, which pulls in Bootstrap, fonts, variables,
base elements, and responsive helpers:

```scss
@import '@polis/theme-mantine/styles/main';
```

Or pull partials individually:

```scss
@import '@polis/theme-mantine/styles/variables';
@import '@polis/theme-mantine/styles/elements';
@import '@polis/theme-mantine/styles/responsive';
```

The Bootstrap import in `main.scss` uses the `~bootstrap/...` resolver, which
relies on your bundler resolving from `node_modules`. Make sure `bootstrap` is
installed in the consuming app.

## Contents

```
src/
  index.ts              # re-exports the Mantine theme
  theme.ts              # Mantine createTheme override (indigo, system font, md radius)
  styles/
    variables.scss      # CSS custom properties (light + dark palettes)
    fonts.scss          # placeholder for @font-face declarations
    main.scss           # aggregate entrypoint: bootstrap + partials
    elements.scss       # base element + UI primitive styles
    responsive.scss     # breakpoint helpers + utility classes
```

## Versioning

Tagged releases follow `vMAJOR.MINOR.PATCH`. Consumers pin via the `#v0.1.0`
suffix in the `github:` dep so theme updates are explicit.
