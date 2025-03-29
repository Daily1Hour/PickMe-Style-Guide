import BaseModel from "./ColorModel";
import HSL from "./HSL";
import RGB from "./RGB";

export default class Hex extends BaseModel {
    /**
     * @param code - hex code(헥스 코드) #000000-#ffffff
     */
    constructor(public code: `#${string}`) {
        super();
    }

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

    public to_hex(): Hex {
        return this;
    }

    public toString(): string {
        return this.code;
    }
}
