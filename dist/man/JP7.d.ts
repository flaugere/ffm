export default class JP7 {
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
    static calculate(chest: number, abdominal: number, thigh: number, suprailiac: number, axillary: number, tricep: number, subscapular: number, age: number): number;
}
