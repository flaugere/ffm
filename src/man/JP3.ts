import { BodyFat } from "../common/BodyFat";

export default class JP3 {
  /**
   * @param chest number Chest skinfold (mm)
   * @param abdominal number Abdominal skinfold (mm)
   * @param thigh number Thigh skinfold (mm)
   * @param age number In years
   *
   * @returns Body fat percentage
   */
  static calculate(
    chest: number,
    abdominal: number,
    thigh: number,
    age: number
  ): number {
    let sumSkinFolds = chest + abdominal + thigh;
    let bodyDensity =
      1.10938 -
      0.0008267 * sumSkinFolds +
      0.0000016 * sumSkinFolds * sumSkinFolds -
      0.0002574 * age;
    return BodyFat.getPercentageFromDensity(bodyDensity);
  }
}
