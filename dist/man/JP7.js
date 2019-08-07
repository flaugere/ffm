import { BodyFat } from '../common/BodyFat';
var JP7 = /** @class */ (function () {
    function JP7() {
    }
    /**
     * @param chest number Skinfold (mm)
     * @param abdominal number Skinfold (mm)
     * @param thigh number Skinfold (mm)
     * @param suprailiac number Skinfold (mm)
     * @param axillary number Skinfold (mm)
     * @param tricep number Skinfold (mm)
     * @param subscapular number Skinfold (mm)
     * @param age number In years
     *
     * @returns Body fat percentage
     */
    JP7.calculate = function (chest, abdominal, thigh, suprailiac, axillary, tricep, subscapular, age) {
        var sumSkinFolds = tricep + suprailiac + thigh + abdominal + chest + axillary + subscapular;
        var bodyDensity = 1.112 - (0.00043499 * sumSkinFolds) + (0.00000055 * sumSkinFolds * sumSkinFolds) - (0.00028826 * age);
        return BodyFat.getPercentageFromDensity(bodyDensity);
    };
    return JP7;
}());
export default JP7;
//# sourceMappingURL=JP7.js.map