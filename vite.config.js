import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "pickme/style-guide",
            filename: "pickme-style-guide.js",
            exposes: {
                "./GlobalStyles": "./src/pickme-style-guide", // 글로벌 스타일
                "./Button": "./src/react-components/Button",
            },
            shared: ["react", "react-dom", "@chakra-ui/react"],
        }),
    ],
    build: {
        modulePreload: false,
        assetsDir: "", // 루트로 저장
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
});
