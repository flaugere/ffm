import { Durnin as DurninBase } from "../common/Durnin";

export class Durnin extends DurninBase {
  /**
   * @param tricep number Tricep skinfold (mm)
   * @param bicep number Bicep skinfold (mm)
   * @param subscapular number Subscapular skinfold (mm)
   * @param suprailiac number Suprailiac skinfold (mm)
   * @param age number In years
   *
   * @returns Body fat percentage
   */
  public static calculate(
    tricep: number,
    bicep: number,
    subscapular: number,
    suprailiac: number,
    age: number
  ): number {
    if (age < 16) {
      throw new Error("Age should be greater than 16");
    }
    if (age < 17) {
        return this.getBodyFat(tricep, bicep, subscapular, suprailiac, 1.1533, 0.0643);
    } else if (age < 20) {
        return this.getBodyFat(tricep, bicep, subscapular, suprailiac, 1.1620, 0.0630);
    } else if (age < 30) {
        return this.getBodyFat(tricep, bicep, subscapular, suprailiac, 1.1631, 0.0632);
    } else if (age < 40) {
        return this.getBodyFat(tricep, bicep, subscapular, suprailiac, 1.1422, 0.0544);
    } else if (age < 50) {
        return this.getBodyFat(tricep, bicep, subscapular, suprailiac, 1.1620, 0.0700);
    }
    return this.getBodyFat(tricep, bicep, subscapular, suprailiac, 1.1715, 0.0779);
  }
}
