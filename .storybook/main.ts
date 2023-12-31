import type { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-links", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;