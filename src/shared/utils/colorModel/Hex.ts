import BaseModel from "./BaseModel";
import HSL from "./HSL";
import RGB from "./RGB";

export default class Hex extends BaseModel {
    /**
     * @param code - hex code(헥스 코드) #RRGGBB 형태로 입력
     */
    constructor(public code: `#${string}`) {
        super();
    }

    public toRGB(): RGB {
        return new RGB(
            parseInt(this.code.substring(1, 3), 16) / 0xff,
            parseInt(this.code.substring(3, 5), 16) / 0xff,
            parseInt(this.code.substring(5, 7), 16) / 0xff,
        );
    }

    public toHSL(): HSL {
        return this.toRGB().toHSL();
    }

    public toHex(): Hex {
        return this;
    }

    public toString(): string {
        return this.code;
    }
}
