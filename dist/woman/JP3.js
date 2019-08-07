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
    JP3.calculate = function (tricep, suprailiac, thigh, age) {
        var sumSkinFolds = tricep + suprailiac + thigh;
        var bodyDensity = 1.0994921 - (0.0009929 * sumSkinFolds) + (0.0000023 * sumSkinFolds * sumSkinFolds) - (0.0001392 * age);
        return BodyFat.getPercentageFromDensity(bodyDensity);
    };
    return JP3;
}());
export default JP3;
//# sourceMappingURL=JP3.js.map