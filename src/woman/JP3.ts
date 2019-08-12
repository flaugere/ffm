import { BodyFat } from "../common/BodyFat";

export class JP3 {
  /**
   * @param chest number Chest skinfold (mm)
   * @param abdominal number Abdominal skinfold (mm)
   * @param thigh number Thigh skinfold (mm)
   * @param age number In years
   *
   * @returns Body fat percentage
   */
  public static calculate(
    tricep: number,
    suprailiac: number,
    thigh: number,
    age: number
  ): number {
    const sumSkinFolds = tricep + suprailiac + thigh;
    const bodyDensity =
      1.0994921 -
      0.0009929 * sumSkinFolds +
      0.0000023 * sumSkinFolds * sumSkinFolds -
      0.0001392 * age;
    return BodyFat.getPercentageFromDensity(bodyDensity);
  }
}
