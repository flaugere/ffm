import { BodyFat } from "../common/BodyFat";

export abstract class Durnin {

  /**
   * @param tricep number Tricep skinfold (mm)
   * @param bicep number Bicep skinfold (mm)
   * @param subscapular number Subscapular skinfold (mm)
   * @param suprailiac number Suprailiac skinfold (mm)
   * @param constant number
   * @param coefficient number
   *
   * @returns Body fat percentage
   */
  protected static getBodyFat(
    tricep: number,
    bicep: number,
    subscapular: number,
    suprailiac: number,
    constant: number,
    coefficient: number
  ): number {
    return BodyFat.getPercentageFromDensity(
      constant -
        coefficient * Math.log10(tricep + bicep + suprailiac + subscapular)
    );
  }
}
