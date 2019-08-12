export class Parillo {
  /**
   * @param chest number Skinfold (mm)
   * @param abdominal number Skinfold (mm)
   * @param thigh number Skinfold (mm)
   * @param suprailiac number Skinfold (mm)
   * @param lowerBack number Skinfold (mm)
   * @param tricep number Skinfold (mm)
   * @param subscapular number Skinfold (mm)
   * @param calf number Skinfold (mm)
   * @param bicep number Skinfold (mm)
   * @param weight number In kg
   *
   * @returns Body fat percentage
   */
  public static calculate(
    chest: number,
    abdominal: number,
    thigh: number,
    suprailiac: number,
    lowerBack: number,
    tricep: number,
    subscapular: number,
    calf: number,
    bicep: number,
    weight: number
  ): number {
    const sumSkinFolds =
      tricep +
      bicep +
      calf +
      suprailiac +
      thigh +
      abdominal +
      chest +
      lowerBack +
      subscapular;
    return (sumSkinFolds * 27) / (weight * 2.20462);
  }
}
