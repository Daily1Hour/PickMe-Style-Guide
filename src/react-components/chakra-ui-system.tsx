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

/**
 * 색상 음영을 해당 CSS 변수 값에 매핑하는 객체를 생성합니다.
 *
 * @param variable - 색상 스케일을 생성할 CSS 변수의 이름입니다.
 * @returns 음영 수준(예: 50, 100, 200 등)을 해당 CSS 변수 값에 매핑하는 객체입니다.
 *
 * @example
 * ```typescript
 * const shadeMapping = createShadeMapping('--primary-color');
 * // {
 * //   50: { value: '#f0f8ff' },
 * //   100: { value: '#dbeafe' },
 * //   ...
 * //   900: { value: '#1e3a8a' },
 * //   950: { value: '#172554' }
 * // }
 * ```
 */
function createShadeMapping(variable: string) {
    const token_keys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    const colorScale = generateColorScale(getCSSVariable(variable), token_keys);

    return zip(token_keys, colorScale)
        .map(([key, shade]) => ({ [key]: { value: shade.toString() } }))
        .reduce((acc, cur) => ({ ...acc, ...cur }));
}

/**
 * 주어진 기본 색상에 대한 시맨틱 색상 객체를 생성합니다.
 *
 * 이 함수는 제공된 기본 색상을 기반으로 시맨틱 색상 값을 생성합니다.
 * Chakra UI 디자인 시스템에서 일관된 색상 스키마를 정의합니다.
 *
 * @param color - 시맨틱 색상 값을 생성하는 데 사용되는 기본 색상 이름
 *                (예: "blue", "red", "green").
 * @returns 시맨틱 색상 값을 포함하는 객체:
 * - `solid`: 기본 단색 (예: 버튼 또는 아이콘).
 * - `contrast`: 대비 색상 (예: 단색 배경 위의 텍스트).
 * - `fg`: 전경색 (예: 텍스트 또는 아이콘).
 * - `muted`: 덜 강조된 색상 (예: 보조 버튼 또는 텍스트).
 * - `subtle`: 미묘한 색상 (예: 경계선 또는 배경 강조).
 * - `emphasized`: 더 강하게 강조된 색상 (예: 활성 상태).
 * - `focusRing`: 포커스 링 효과에 사용되는 색상 (예: 입력 필드).
 */
function generateColorSemantic(color: string) {
    return {
        solid: { value: `{colors.${color}.500}` },
        contrast: { value: "white" },
        fg: { value: `{colors.${color}.700}` },
        muted: { value: `{colors.${color}.300}` },
        subtle: { value: `{colors.${color}.100}` },
        emphasized: { value: `{colors.${color}.700}` },
        focusRing: { value: `{colors.${color}.400}` },
    };
}

/**
 * 루트 요소의 계산된 스타일에서 CSS 변수의 값을 가져옵니다.
 *
 * @param variable - 가져올 CSS 변수의 이름 (예: "--primary-color").
 * @returns `#RRGGBB` 형식의 색상 코드.
 */
function getCSSVariable(variable: string): `#${string}` {
    const rootStyles = getComputedStyle(document.documentElement);
    const value = rootStyles.getPropertyValue(variable).trim();
    return value as `#${string}`;
}
