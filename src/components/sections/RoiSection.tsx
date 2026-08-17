import { useMemo, useState } from 'react'
import AnimatedContent from '@/components/AnimatedContent'
import CountUp from '@/components/CountUp'
import { BreakEvenChart } from '@/components/mockups/BreakEvenChart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { computeRoi } from '@/lib/roi'

export function RoiSection() {
  const [glasses, setGlasses] = useState(20)
  const [tours, setTours] = useState(20)
  const [surcharge, setSurcharge] = useState(5)
  const roi = useMemo(
    () => computeRoi({ glasses, tours, surcharge, lease: 50, hardwareBuy: 200 }),
    [glasses, tours, surcharge]
  )

  return (
    <section id="roi" className="border-y border-white/8 bg-[#0E1016]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <AnimatedContent distance={36} duration={0.7}>
          <p className="font-mono text-[11px] tracking-[0.22em] text-amber uppercase">Unit economics</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">The HaaS business case</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Operators lease glasses at $50 / unit / month and upsell the AR experience at $5. Twenty tours
            cover the lease. Everything after that is margin.
          </p>
        </AnimatedContent>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: 'Lease', v: `$${roi.lease}`, d: 'per glass / month' },
            { k: 'Surcharge', v: `$${surcharge}`, d: 'AR add-on / guest' },
            { k: 'Gross / glass', v: `$${roi.grossPerGlass}`, d: `${tours} tours × $${surcharge}` },
            { k: 'Net / glass', v: `$${roi.profitPerGlass}`, d: 'profit after lease' },
          ].map((item) => (
            <Card key={item.k} className="bg-card ring-white/8">
              <CardHeader>
                <CardDescription className="font-mono text-[10px] tracking-widest uppercase">
                  {item.k}
                </CardDescription>
                <CardTitle className="font-mono text-2xl text-teal">{item.v}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">{item.d}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-card ring-white/8">
            <CardHeader>
              <CardTitle>ROI calculator</CardTitle>
              <CardDescription>Tune fleet size, tour load, and surcharge.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Field
                label="Fleet size"
                value={`${glasses} glasses`}
                min={5}
                max={120}
                current={glasses}
                onChange={setGlasses}
              />
              <Field
                label="Tours per glass / month"
                value={`${tours} tours`}
                min={8}
                max={40}
                current={tours}
                onChange={setTours}
              />
              <Field
                label="AR tourist surcharge"
                value={`$${surcharge}`}
                min={3}
                max={12}
                current={surcharge}
                onChange={setSurcharge}
              />
              <div className="rounded-xl border border-teal/20 bg-teal/5 p-4">
                <p className="font-mono text-[10px] tracking-widest text-teal uppercase">
                  Monthly fleet profit
                </p>
                <p className="mt-1 font-mono text-3xl text-teal">
                  ${' '}
                  <CountUp
                    key={roi.monthlyProfit}
                    to={roi.monthlyProfit}
                    separator=","
                    duration={1.1}
                  />
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Result: ${roi.profitPerGlass} net profit per glass, per month.
                  {Number.isFinite(roi.breakEvenMonth)
                    ? ` Break-even vs. a $${roi.hardwareBuy} hardware buy: month ${roi.breakEvenMonth}.`
                    : ' Raise tours or surcharge to clear the lease.'}
                </p>
              </div>
            </CardContent>
          </Card>

          <BreakEvenChart profitPerGlass={roi.profitPerGlass} hardwareBuy={roi.hardwareBuy} />
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  min,
  max,
  current,
  onChange,
}: {
  label: string
  value: string
  min: number
  max: number
  current: number
  onChange: (n: number) => void
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <span className="font-mono text-xs text-muted-foreground">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={1}
        value={[current]}
        onValueChange={(v) => onChange(v[0] ?? current)}
      />
    </div>
  )
}
