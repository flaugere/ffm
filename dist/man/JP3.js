import { BodyFat } from '../common/BodyFat';
var JP3 = /** @class */ (function () {
    function JP3() {
    }
    /**
     * @param chest number Chest skinfold (mm)
     * @param abdominal number Abdominal skinfold (mm)
     * @param thigh number Thigh skinfold (mm)
     * @param age number In years
     *
     * @returns Body fat percentage
     */
    JP3.calculate = function (chest, abdominal, thigh, age) {
        var sumSkinFolds = chest + abdominal + thigh;
        var bodyDensity = 1.10938 - (0.0008267 * sumSkinFolds) + (0.0000016 * sumSkinFolds * sumSkinFolds) - (0.0002574 * age);
        return BodyFat.getPercentageFromDensity(bodyDensity);
    };
    return JP3;
}());
export default JP3;
//# sourceMappingURL=JP3.js.map