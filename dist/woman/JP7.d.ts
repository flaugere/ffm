export default class JP7 {
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
    static calculate(tricep: number, suprailiac: number, thigh: number, abdominal: number, chest: number, axillary: number, subscapular: number, age: number): number;
}
