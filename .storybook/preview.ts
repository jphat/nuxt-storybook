import type { Preview } from "@storybook/vue3";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
// import '../src/tailwind.css'; // import your .css file

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      // https://storybook.js.org/docs/vue/writing-stories/naming-components-and-hierarchy#sorting-stories
      storySort: {
        method: '',
        order: [],
        locales: 'en-US',
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];