import { BodyFat } from "../common/BodyFat";

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
  static calculate(
    chest: number,
    abdominal: number,
    thigh: number,
    suprailiac: number,
    axillary: number,
    tricep: number,
    subscapular: number,
    age: number
  ): number {
    let sumSkinFolds =
      tricep + suprailiac + thigh + abdominal + chest + axillary + subscapular;
    let bodyDensity =
      1.112 -
      0.00043499 * sumSkinFolds +
      0.00000055 * sumSkinFolds * sumSkinFolds -
      0.00028826 * age;
    return BodyFat.getPercentageFromDensity(bodyDensity);
  }
}
