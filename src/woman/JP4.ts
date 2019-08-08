import { BodyFat } from "../common/BodyFat";

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
  static calculate(
    tricep: number,
    suprailiac: number,
    thigh: number,
    abdominal: number,
    age: number
  ): number {
    let sumSkinFolds = tricep + suprailiac + thigh + abdominal;
    return (
      0.29669 * sumSkinFolds -
      0.00043 * sumSkinFolds * sumSkinFolds +
      0.02963 * age +
      1.4072
    );
  }
}
