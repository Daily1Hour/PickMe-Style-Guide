import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                pickme: generateColorScale("--pickme-color-primary"),
            },
        },
        semanticTokens: {
            colors: {
                pickme: {
                    solid: { value: "{colors.pickme.500}" }, // 기본 색상
                    contrast: { value: "white" }, // 대비 (글자 등)
                    fg: { value: "{colors.pickme.700}" }, // 전경색 (글자 등)
                    muted: { value: "{colors.pickme.300}" }, // 덜 강조된 색상 (버튼/텍스트 등)
                    subtle: { value: "{colors.pickme.100}" }, // 더 약한 강조 색상 (경계선, 배경 등)
                    emphasized: { value: "{colors.pickme.700}" }, // 강조 색상 (활성화된 버튼 등)
                    focusRing: { value: "{colors.pickme.400}" }, // 포커스 효과 색상 (입력 필드 등)
                },
            },
        },
    },
});

export default createSystem(defaultConfig, config);

// 색상 스케일(50~950) 생성 함수
function generateColorScale(color) {
    return {
        DEFAULT: `var(${color})`,
        50: `color-mix(in srgb, white 90%, var(${color}))`,
        100: `color-mix(in srgb, white 70%, var(${color}))`,
        200: `color-mix(in srgb, white 50%, var(${color}))`,
        300: `color-mix(in srgb, white 30%, var(${color}))`,
        400: `color-mix(in srgb, white 10%, var(${color}))`,
        500: `var(${color})`,
        600: `color-mix(in srgb, black 10%, var(${color}))`,
        700: `color-mix(in srgb, black 20%, var(${color}))`,
        800: `color-mix(in srgb, black 30%, var(${color}))`,
        900: `color-mix(in srgb, black 40%, var(${color}))`,
        950: `color-mix(in srgb, black 50%, var(${color}))`,
    };
}
