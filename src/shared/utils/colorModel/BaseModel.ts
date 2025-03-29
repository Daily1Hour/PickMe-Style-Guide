import Hex from "./Hex";
import HSL from "./HSL";
import RGB from "./RGB";

export interface IColorModel {
    toHex(): Hex;
    toRGB(): RGB;
    toHSL(): HSL;
};

/**
 * 색상 모델을 Hex, RGB, HSL과 같은 다양한 형식으로 변환하기 위한
 * 정적 유틸리티 메서드를 제공하는 기본 모델 클래스입니다.
 */
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
