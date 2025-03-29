import BaseModel from "./ColorModel";
import Hex from "./Hex";
import RGB from "./RGB";

export default class HSL extends BaseModel {
    /**
     * @param h - hue(색상) 0-360
     * @param s - saturation(채도) 0-100
     * @param l - lightness(밝기) 0-100
     */
    constructor(public h: number, public s: number, public l: number) {
        super();
    }

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

    public to_hex(): Hex {
        return this.to_rgb().to_hex();
    }

    public to_hsl(): HSL {
        return this;
    }
}
