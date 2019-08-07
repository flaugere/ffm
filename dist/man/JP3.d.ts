export default class JP3 {
    /**
     * @param chest number Chest skinfold (mm)
     * @param abdominal number Abdominal skinfold (mm)
     * @param thigh number Thigh skinfold (mm)
     * @param age number In years
     *
     * @returns Body fat percentage
     */
    static calculate(chest: number, abdominal: number, thigh: number, age: number): number;
}
