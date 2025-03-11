import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        react(),
        federation({
            name: "pickme/style-guide",
            filename: "pickme-style-guide.js",
            exposes: {
                "./global": "./src/styles/global", // 글로벌 스타일
                "./vue": "./src/vue-components", // 뷰 컴포넌트
                "./react": "./src/react-components", // 리액트 컴포넌트
            },
            shared: {
                vue: {
                    requiredVersion: "^3.5.13",
                },
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
        minify: true,
        cssMinify: true,
        cssCodeSplit: false,
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: "src/main.js", // index.html 없이 빌드
            },
        },
    },
    preview: {
        port: 9001,
    },
});
