import type { StorybookConfig } from "@storybook/react-vite";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const PUBLIC_URL = process.env.PUBLIC_URL!;

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    refs: {
        react: {
            title: "React Components",
            url: PUBLIC_URL + "/react",
        },
        vue: {
            title: "Vue Components",
            url: PUBLIC_URL + "/vue",
        },
    },
    framework: "@storybook/react-vite",
};

export default config;
