import { createTheme } from '@mantine/core';

/**
 * Mantine theme overrides for the Card Collecting app.
 *
 * Lifted from Card Collecting's `apps/web/src/theme/index.ts`. Kept here so
 * the same Mantine palette/typography that drives the React tree lives next
 * to the SCSS variables that drive the rest of the DOM.
 */
export const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  defaultRadius: 'md',
});

export default theme;
