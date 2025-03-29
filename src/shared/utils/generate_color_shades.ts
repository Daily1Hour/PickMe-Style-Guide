import Hex from "./Hex";
import HSL from "./HSL";
import RGB from "./RGB";

// hsl 객체를 받아서 밝기를 조절
export function adjust_lightness({ h, s, l }: HSL): (percentage: number) => HSL {
    return function (percentage: number): HSL {
        const new_l = Math.max(0, Math.min(100, l - percentage));

        return new HSL(h, s, new_l);
    };
}

// 헥사코드를 받아서 10단계의 색상을 생성
export default function generate_color_shades(code: `#${string}`): Hex[] {
    const length = 10;
    const hsl = new Hex(code).to_hsl();

    return Array.from({ length }, (_, index) => (length / 2 - index) * (100 / length))
        .map(adjust_lightness(hsl))
        .map(HSL.to_rgb)
        .map(RGB.to_hex);
}
