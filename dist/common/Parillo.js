var Parillo = /** @class */ (function () {
    function Parillo() {
    }
    /**
     * @param chest number Skinfold (mm)
     * @param abdominal number Skinfold (mm)
     * @param thigh number Skinfold (mm)
     * @param suprailiac number Skinfold (mm)
     * @param lowerBack number Skinfold (mm)
     * @param tricep number Skinfold (mm)
     * @param subscapular number Skinfold (mm)
     * @param calf number Skinfold (mm)
     * @param bicep number Skinfold (mm)
     * @param weight number In kg
     *
     * @returns Body fat percentage
     */
    Parillo.calculate = function (chest, abdominal, thigh, suprailiac, lowerBack, tricep, subscapular, calf, bicep, weight) {
        var sumSkinFolds = tricep + bicep + calf + suprailiac + thigh + abdominal + chest + lowerBack + subscapular;
        return sumSkinFolds * 27 / (weight * 2.20462);
    };
    return Parillo;
}());
export default Parillo;
//# sourceMappingURL=Parillo.js.map