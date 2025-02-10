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
                "./global": "./src/styles/global", // 글로벌 스타일
                "./react": "./src/react-components", // 아토믹 컴포넌트
            },
            shared: {
                react: {
                    requiredVersion: "^18.3.1",
                },
                "react-dom": {
                    requiredVersion: "^18.3.1",
                },
                "@chakra-ui/react": {
                    requiredVersion: "^3.2.3",
                },
            }, // 공유 모듈 중복 번들링 방지
        }),
    ],
    build: {
        modulePreload: false,
        assetsDir: "", // 루트로 저장
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
    preview: {
        port: 9001,
    },
});
