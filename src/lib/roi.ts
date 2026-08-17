export type RoiInput = {
  glasses: number
  tours: number
  surcharge: number
  lease?: number
  hardwareBuy?: number
}

export type RoiResult = {
  grossPerGlass: number
  profitPerGlass: number
  monthlyProfit: number
  breakEvenMonth: number
  hardwareBuy: number
  lease: number
}

export function computeRoi({
  glasses,
  tours,
  surcharge,
  lease = 50,
  hardwareBuy = 200,
}: RoiInput): RoiResult {
  const grossPerGlass = tours * surcharge
  const profitPerGlass = grossPerGlass - lease
  const monthlyProfit = glasses * profitPerGlass
  const breakEvenMonth =
    profitPerGlass > 0 ? Math.max(1, Math.ceil(hardwareBuy / profitPerGlass)) : Number.POSITIVE_INFINITY

  return {
    grossPerGlass,
    profitPerGlass,
    monthlyProfit,
    breakEvenMonth,
    hardwareBuy,
    lease,
  }
}
