var BodyFat = /** @class */ (function () {
    function BodyFat() {
    }
    /**
     * Body fat percentage from body density
     *
     * @param bodyDensity number
     *
     * @return number
     */
    BodyFat.getPercentageFromDensity = function (bodyDensity) {
        return 495 / bodyDensity - 450;
    };
    return BodyFat;
}());
export { BodyFat };
//# sourceMappingURL=BodyFat.js.map