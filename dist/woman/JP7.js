import { BodyFat } from '../common/BodyFat';
var JP7 = /** @class */ (function () {
    function JP7() {
    }
    /**
     * @param chest number Skinfold (mm)
     * @param abdominal number Skinfold (mm)
     * @param thigh number Skinfold (mm)
     * @param abdominal number Skinfold (mm)
     * @param chest number Skinfold (mm)
     * @param axillary number Skinfold (mm)
     * @param subscapular number Skinfold (mm)
     * @param age number In years
     *
     * @returns Body fat percentage
     */
    JP7.calculate = function (tricep, suprailiac, thigh, abdominal, chest, axillary, subscapular, age) {
        var sumSkinFolds = tricep + suprailiac + thigh + abdominal + chest + axillary + subscapular;
        var bodyDensity = 1.097 - (0.00046971 * sumSkinFolds) + (0.00000056 * sumSkinFolds * sumSkinFolds) - (0.00012828 * age);
        return BodyFat.getPercentageFromDensity(bodyDensity);
    };
    return JP7;
}());
export default JP7;
//# sourceMappingURL=JP7.js.map