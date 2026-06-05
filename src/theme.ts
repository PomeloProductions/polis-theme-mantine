import { createTheme } from '@mantine/core';
import type { PolisTheme } from '@polis/react/theme/PolisTheme';

/**
 * Mantine theme overrides for the Card Collecting app.
 *
 * Lifted from Card Collecting's `apps/web/src/theme/index.ts`. Kept here so
 * the same Mantine palette/typography that drives the React tree lives next
 * to the SCSS variables that drive the rest of the DOM.
 *
 * Exposed standalone for direct callers, and re-exported below at
 * `theme.mantineTheme` so `<PolisProvider>` from `@polis/react` can forward
 * it into Mantine.
 */
export const mantineTheme = createTheme({
    primaryColor: 'indigo',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    defaultRadius: 'md',
});

/**
 * `@polis/theme-mantine` — the Polis token bundle that drives the Card
 * Collecting visual identity: Mantine's indigo palette, system fonts, and
 * the medium default radius.
 *
 * Pass this to `<PolisProvider theme={theme}>` from `@polis/react`.
 *
 * Primary palette values track Mantine's `indigo` palette so the SCSS
 * surface stays in lockstep with the Mantine surface.
 */
export const theme: PolisTheme = {
    name: 'mantine',

    colors: {
        // Mantine's indigo[6] / [7] / [8] — these are the actual rendered
        // primary tones Mantine produces given `primaryColor: 'indigo'`.
        primary: '#4c6ef5',
        primaryHover: '#4263eb',
        primaryActive: '#3b5bdb',
        surface: '#ffffff',
        surfaceAlt: '#f8f9fa',
        textPrimary: '#212529',
        textMuted: '#868e96',
        border: '#dee2e6',
        success: '#40c057',
        warning: '#fab005',
        danger: '#fa5252',
        info: '#15aabf',
    },

    fonts: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },

    radius: {
        sm: '4px',
        // Mantine `md` radius is 8px; the theme sets `defaultRadius: 'md'`
        // so the Polis token tracks that.
        md: '8px',
        lg: '12px',
        full: '9999px',
    },

    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },

    mantineTheme,
};

export default theme;
