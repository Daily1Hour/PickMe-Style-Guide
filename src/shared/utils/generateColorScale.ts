import { Hex, RGB, HSL } from "./colorModel";

/**
 * HSL 색상의 밝기를 주어진 비율만큼 조정합니다.
 *
 * @param {HSL} param0 - 색상의 색상(`h`), 채도(`s`), 밝기(`l`) 값을 포함하는 객체입니다.
 * @returns {(percentage: number) => HSL} 밝기를 조정한 새로운 HSL 색상을 반환하는 함수입니다.
 * 밝기는 0과 100 사이로 제한됩니다.
 *
 * @remarks
 * - 이 함수는 커링(curring)을 사용하여 두 단계로 호출됩니다.
 *   첫 번째 단계에서는 HSL 객체를 받아 내부적으로 처리합니다.
 *   두 번째 단계에서는 밝기를 조정할 비율(percentage)을 받아 최종적으로 조정된 HSL 객체를 반환합니다.
 */
export function adjustLightness({ h, s, l }: HSL): (percentage: number) => HSL {
    return function (percentage: number): HSL {
        const new_l = Math.max(0, Math.min(100, l - percentage));

        return new HSL(h, s, new_l);
    };
}

/**
 * 주어진 기본 색상과 토큰 키 배열을 기반으로 색상 스케일을 생성합니다.
 *
 * @param code - `#RRGGBB` 형식의 16진수 색상 코드입니다.
 * @param token_keys - 기본 색상의 밝기를 조정하는 데 사용되는 숫자 토큰 키 배열입니다.
 *                      각 키는 밝기 조정 계수를 계산하는 데 사용됩니다.
 * @returns 생성된 색상 스케일을 나타내는 Hex 배열입니다.
 */
export default function generateColorScale(code: `#${string}`, token_keys: number[]): Hex[] {
    // CSS 변수를 사용하여 색상 코드 가져오기
    const hsl = new Hex(code).toHSL();
    // 색상 스케일 생성
    return token_keys
        .map((key) => (key - 500) / 10)
        .map(adjustLightness(hsl))
        .map(HSL.toRGB)
        .map(RGB.toHex);
}
