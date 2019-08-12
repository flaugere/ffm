export class JP4 {
  /**
   * @param tricep number Skinfold (mm)
   * @param suprailiac number Skinfold (mm)
   * @param thigh number Skinfold (mm)
   * @param abdominal number Skinfold (mm)
   * @param age number In years
   *
   * @returns Body fat percentage
   */
  public static calculate(
    tricep: number,
    suprailiac: number,
    thigh: number,
    abdominal: number,
    age: number
  ): number {
    const sumSkinFolds = tricep + suprailiac + thigh + abdominal;
    return (
      0.29288 * sumSkinFolds -
      0.0005 * sumSkinFolds * sumSkinFolds +
      0.15845 * age -
      5.76377
    );
  }
}
