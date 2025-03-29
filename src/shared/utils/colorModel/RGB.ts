import BaseModel from "./BaseModel";
import Hex from "./Hex";
import HSL from "./HSL";

export default class RGB extends BaseModel {
    /**
     * @param r - red(빨강) 0-255
     * @param g - green(초록) 0-255
     * @param b - blue(파랑) 0-255
     */
    constructor(public r: number, public g: number, public b: number) {
        super();
    }

    public toHex(): Hex {
        return new Hex(
            `#${((1 << 24) | (this.r << 16) | (this.g << 8) | this.b)
                .toString(16)
                .slice(1)
                .toUpperCase()}`,
        );
    }

    public toHSL(): HSL {
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

    public toRGB(): RGB {
        return this;
    }

    /**
     * RGB 구성 요소(빨강, 초록, 파랑)를 구조분해할 수 있도록 합니다.
     *
     * @returns RGB 구성 요소에 대한 이터레이터.
     */
    [Symbol.iterator](): Iterator<number> {
        return [this.r, this.g, this.b][Symbol.iterator]();
    }
}
