import { BodyFat } from "../common/BodyFat";

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
  public static calculate(
    tricep: number,
    suprailiac: number,
    thigh: number,
    abdominal: number,
    chest: number,
    axillary: number,
    subscapular: number,
    age: number
  ): number {
    const sumSkinFolds =
      tricep + suprailiac + thigh + abdominal + chest + axillary + subscapular;
    const bodyDensity =
      1.097 -
      0.00046971 * sumSkinFolds +
      0.00000056 * sumSkinFolds * sumSkinFolds -
      0.00012828 * age;
    return BodyFat.getPercentageFromDensity(bodyDensity);
  }
}
