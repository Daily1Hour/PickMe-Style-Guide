import Hex from "./Hex";
import HSL from "./HSL";
import RGB from "./RGB";

type M = {
    to_hex(): Hex;
    to_rgb(): RGB;
    to_hsl(): HSL;
};

export default class BaseModel {
    static to_hex<T extends M>(model: T): Hex {
        return model.to_hex();
    }
    static to_rgb<T extends M>(model: T): RGB {
        return model.to_rgb();
    }
    static to_hsl<T extends M>(model: T): HSL {
        return model.to_hsl();
    }
}
