import type { StorybookConfig } from "@storybook/react-vite";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
const PUBLIC_URL = process.env.PUBLIC_URL;

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    refs: {
        vue: {
            title: "Vue Components",
            url: PUBLIC_URL ? PUBLIC_URL + "/vue" : "http://localhost:6007",
        },
        react: {
            title: "React Components",
            url: PUBLIC_URL ? PUBLIC_URL + "/react" : "http://localhost:6008",
        },
    },
    framework: "@storybook/react-vite",
};

export default config;
