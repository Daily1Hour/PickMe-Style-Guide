export class Hex {
    /**
     * @param code - hex code(헥스 코드) #000000-#ffffff
     */
    constructor(public code: `#${string}`) {}

    public to_rgb(): RGB {
        return new RGB(
            parseInt(this.code.substring(1, 3), 16) / 0xff,
            parseInt(this.code.substring(3, 5), 16) / 0xff,
            parseInt(this.code.substring(5, 7), 16) / 0xff,
        );
    }

    public to_hsl(): HSL {
        return this.to_rgb().to_hsl();
    }

    public toString(): string {
        return this.code;
    }
}

export class RGB {
    /**
     * @param r - red(빨강) 0-255
     * @param g - green(초록) 0-255
     * @param b - blue(파랑) 0-255
     */
    constructor(public r: number, public g: number, public b: number) {}

    public to_hex(): Hex {
        return new Hex(
            `#${((1 << 24) | (this.r << 16) | (this.g << 8) | this.b)
                .toString(16)
                .slice(1)
                .toUpperCase()}`,
        );
    }

    public to_hsl(): HSL {
        // RGB에서 최대값과 최소값 계산
        const max = Math.max(this.r, this.g, this.b);
        const min = Math.min(this.r, this.g, this.b);
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
                    [this.r]: (this.g - this.b) / d + (this.g < this.b ? 6 : 0),
                    [this.g]: (this.b - this.r) / d + 2,
                    [this.b]: (this.r - this.g) / d + 4,
                }[max] / 6;
        }

        // HSL 값을 퍼센트로 변환
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        return new HSL(h, s, l);
    }

    [Symbol.iterator](): Iterator<number> {
        return [this.r, this.g, this.b][Symbol.iterator]();
    }

    static to_hex(rgb: RGB): Hex {
        return rgb.to_hex();
    }
}

export class HSL {
    /**
     * @param h - hue(색상) 0-360
     * @param s - saturation(채도) 0-100
     * @param l - lightness(밝기) 0-100
     */
    constructor(public h: number, public s: number, public l: number) {}

    public to_rgb(): RGB {
        // chroma(채도 강도), m(보정값)
        const c = ((1 - Math.abs((2 * this.l) / 100 - 1)) * this.s) / 100;
        const x = c * (1 - Math.abs(((this.h / 60) % 2) - 1));
        const m = this.l / 100 - c / 2;

        // RGB 값 계산
        const [r, g, b] = (() => {
            if (this.h < 60) return [c, x, 0];
            if (this.h < 120) return [x, c, 0];
            if (this.h < 180) return [0, c, x];
            if (this.h < 240) return [0, x, c];
            if (this.h < 300) return [x, 0, c];
            return [c, 0, x];
        })().map((v) => Math.round((v + m) * 0xff));

        return new RGB(r, g, b);
    }

    static to_rgb(hsl: HSL): RGB {
        return hsl.to_rgb();
    }
}

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
