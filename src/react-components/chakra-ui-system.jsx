import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import Hex from "../shared/utils/Hex";
import adjust_lightness from "../shared/utils/generate_color_shades";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                "pickme-primary": generateColorScale("--pickme-color-primary"),
                "pickme-secondary": generateColorScale("--pickme-color-secondary"),
                "pickme-tertiary": generateColorScale("--pickme-color-tertiary"),
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

// 색상 스케일(50~950) 생성 함수
function generateColorScale(color) {
    const token_keys = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
    // CSS 변수를 사용하여 색상 코드 가져오기
    const root = document.documentElement;
    const code = getComputedStyle(root).getPropertyValue(color);
    const hsl = new Hex(code).to_hsl();
    // 색상 스케일 생성
    const shades = token_keys
        .map((key) => (key - 500) / 10)
        .map(adjust_lightness(hsl))
        .map((adjusted_hsl) => adjusted_hsl.to_rgb().to_hex().toString());

    return zip(token_keys, shades)
        .map(([key, shade]) => ({ [key]: { value: shade } }))
        .reduce((acc, cur) => ({ ...acc, ...cur }));
}

// 색상 시맨틱 토큰 생성 함수
function generateColorSemantic(color) {
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

function zip(...arrays) {
    const length = Math.min(...arrays.map((arr) => arr.length));
    return Array.from({ length }, (_, i) => arrays.map((arr) => arr[i]));
}
