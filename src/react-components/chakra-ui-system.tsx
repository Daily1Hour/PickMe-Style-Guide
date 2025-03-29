import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import generateColorScale from "@/shared/utils/generateColorScale";
import zip from "@/shared/utils/zip";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                "pickme-primary": createShadeMapping("--pickme-color-primary"),
                "pickme-secondary": createShadeMapping("--pickme-color-secondary"),
                "pickme-tertiary": createShadeMapping("--pickme-color-tertiary"),
            },
        },
        semanticTokens: {
            colors: {
                "pickme-primary": generateColorSemantic("pickme-primary"),
                "pickme-secondary": generateColorSemantic("pickme-secondary"),
                "pickme-tertiary": generateColorSemantic("pickme-tertiary"),
            },
        },
    },
});

export default createSystem(defaultConfig, config);

// CSS 변수를 가져오는 함수
function getCSSVariable(variable: string) {
    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue(variable).trim() as `#${string}`;
}

// 색상 스케일을 생성하는 함수
function createShadeMapping(variable: string) {
    const token_keys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    const colorScale = generateColorScale(getCSSVariable(variable), token_keys);

    return zip(token_keys, colorScale)
        .map(([key, shade]) => ({ [key]: { value: shade.toString() } }))
        .reduce((acc, cur) => ({ ...acc, ...cur }));
}

// 색상 시맨틱 토큰 생성 함수
function generateColorSemantic(color: string) {
    return {
        solid: { value: `{colors.${color}.500}` }, // 기본 색상
        contrast: { value: "white" }, // 대비 (글자 등)
        fg: { value: `{colors.${color}.700}` }, // 전경색 (글자 등)
        muted: { value: `{colors.${color}.300}` }, // 덜 강조된 색상 (버튼/텍스트 등)
        subtle: { value: `{colors.${color}.100}` }, // 더 약한 강조 색상 (경계선, 배경 등)
        emphasized: { value: `{colors.${color}.700}` }, // 강조 색상 (활성화된 버튼 등)
        focusRing: { value: `{colors.${color}.400}` }, // 포커스 효과 색상 (입력 필드 등)
    };
}
