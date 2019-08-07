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
        return (0.29288 * sumSkinFolds) - (0.0005 * sumSkinFolds * sumSkinFolds) + (0.15845 * age) - 5.76377;
    };
    return JP4;
}());
export default JP4;
//# sourceMappingURL=JP4.js.map