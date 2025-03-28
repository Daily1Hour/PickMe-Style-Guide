type Hex = `#${string}`;

type RGB = [number, number, number];

type HSL = {
    h: number; // hue(색상)
    s: number; // saturation(채도)
    l: number; // lightness(밝기)
};

function hex_to_rgb(hex: Hex): RGB {
    return [
        parseInt(hex.substring(1, 3), 16) / 0xff,
        parseInt(hex.substring(3, 5), 16) / 0xff,
        parseInt(hex.substring(5, 7), 16) / 0xff,
    ];
}

function rgb_to_hex([r, g, b]: RGB): Hex {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}

function rgb_to_hsl([r, g, b]: RGB): HSL {
    // RGB에서 최대값과 최소값 계산
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number,
        s: number,
        l: number = (max + min) / 2;

    if (max === min) {
        h = s = 0; // 회색조
    } else {
        let d = max - min;
        // 채도 계산
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        // 색상 계산
        h =
            {
                [r]: (g - b) / d + (g < b ? 6 : 0),
                [g]: (b - r) / d + 2,
                [b]: (r - g) / d + 4,
            }[max] / 6;
    }

    // HSL 값을 퍼센트로 변환
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}

function hsl_to_rgb({ h, s, l }: HSL): RGB {
    s /= 100;
    l /= 100;
    // chroma(채도 강도), m(보정값)
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    // RGB 값 계산
    return (() => {
        if (h < 60) return [c, x, 0];
        if (h < 120) return [x, c, 0];
        if (h < 180) return [0, c, x];
        if (h < 240) return [0, x, c];
        if (h < 300) return [x, 0, c];
        return [c, 0, x];
    })().map((v) => Math.round((v + m) * 0xff)) as RGB;
}

// hsl 객체를 받아서 밝기를 조절
export function adjust_lightness(hsl: HSL): (percentage: number) => HSL {
    return function (percentage: number): HSL {
        const l = Math.max(0, Math.min(100, hsl.l - percentage));
        return { ...hsl, l };
    };
}

// 헥사코드를 받아서 10단계의 색상을 생성
export default function generate_color_shades(hex: Hex): string[] {
    const hsl = rgb_to_hsl(hex_to_rgb(hex));

    return Array.from({ length: 10 }, (_, index) => (5 - index) * 10)
        .map(adjust_lightness(hsl))
        .map(hsl_to_rgb)
        .map(rgb_to_hex);
}
