import Hex from "./Hex";
import HSL from "./HSL";
import RGB from "./RGB";

export interface IColorModel {
    toHex(): Hex;
    toRGB(): RGB;
    toHSL(): HSL;
};

export default abstract class BaseModel implements IColorModel {
    abstract toHex(): Hex;
    abstract toRGB(): RGB;
    abstract toHSL(): HSL;

    static toHex<T extends IColorModel>(model: T): Hex {
        return model.toHex();
    }
    static toRGB<T extends IColorModel>(model: T): RGB {
        return model.toRGB();
    }
    static toHSL<T extends IColorModel>(model: T): HSL {
        return model.toHSL();
    }
}
