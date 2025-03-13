import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";

const config: StorybookConfig = {
    stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx|vue)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    async viteFinal(config) {
        return {
            ...config,
            plugins: [vue(), ...(config.plugins ?? [])],
        };
    },
};
export default config;
