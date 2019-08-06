export default class JP3 {
    /**
     * @param chest number Chest skinfold (mm)
     * @param abdominal number Abdominal skinfold (mm)
     * @param thigh number Thigh skinfold (mm)
     * @param age number In years
     * 
     * @returns Body fat percentage
     */
    static calculate(chest: number, abdominal: number, thigh: number, age: number, rounded: number = 2): number {
        /**
         * Body Density = 1.10938 - (0.0008267 * sum of skinfolds) + (0.0000016 * square of the sum of skinfolds) - (0.0002574 * age)
         * Body Fat Percentage (%) = (495 / Body Density) - 450
         */
        let sumSkinFolds = chest + abdominal + thigh;
        let bodyDensity = 1.10938 - (0.0008267 * sumSkinFolds) + (0.0000016 * sumSkinFolds * sumSkinFolds ) - (0.0002574 * age); 
        return 495 / bodyDensity - 450;
    }
}