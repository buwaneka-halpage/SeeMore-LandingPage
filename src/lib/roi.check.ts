import { computeRoi } from './roi.ts'

const base = computeRoi({ glasses: 1, tours: 20, surcharge: 5, lease: 50, hardwareBuy: 200 })
console.assert(base.grossPerGlass === 100, `gross ${base.grossPerGlass}`)
console.assert(base.profitPerGlass === 50, `profit/glass ${base.profitPerGlass}`)
console.assert(base.monthlyProfit === 50, `monthly ${base.monthlyProfit}`)
console.assert(base.breakEvenMonth === 4, `break-even ${base.breakEvenMonth}`)

const fleet = computeRoi({ glasses: 86, tours: 20, surcharge: 5 })
console.assert(fleet.monthlyProfit === 4300, `fleet ${fleet.monthlyProfit}`)

const stalled = computeRoi({ glasses: 10, tours: 5, surcharge: 5, lease: 50 })
console.assert(!Number.isFinite(stalled.breakEvenMonth), 'should not break even')

console.log('roi.check: ok')
