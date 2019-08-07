var JP4 = /** @class */ (function () {
    function JP4() {
    }
    /**
     * @param tricep number Skinfold (mm)
     * @param suprailiac number Skinfold (mm)
     * @param thigh number Skinfold (mm)
     * @param abdominal number Skinfold (mm)
     * @param age number In years
     *
     * @returns Body fat percentage
     */
    JP4.calculate = function (tricep, suprailiac, thigh, abdominal, age) {
        var sumSkinFolds = tricep + suprailiac + thigh + abdominal;
        return (0.29669 * sumSkinFolds) - (0.00043 * sumSkinFolds * sumSkinFolds) + (0.02963 * age) + 1.4072;
    };
    return JP4;
}());
export default JP4;
//# sourceMappingURL=JP4.js.map