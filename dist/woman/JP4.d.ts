export default class JP4 {
    /**
     * @param tricep number Skinfold (mm)
     * @param suprailiac number Skinfold (mm)
     * @param thigh number Skinfold (mm)
     * @param abdominal number Skinfold (mm)
     * @param age number In years
     *
     * @returns Body fat percentage
     */
    static calculate(tricep: number, suprailiac: number, thigh: number, abdominal: number, age: number): number;
}
