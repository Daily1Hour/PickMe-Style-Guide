import { Hex, RGB, HSL } from "./colorModel";

// hsl 객체를 받아서 밝기를 조절
export function adjustLightness({ h, s, l }: HSL): (percentage: number) => HSL {
    return function (percentage: number): HSL {
        const new_l = Math.max(0, Math.min(100, l - percentage));

        return new HSL(h, s, new_l);
    };
}

// 색상 스케일 생성 함수
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
