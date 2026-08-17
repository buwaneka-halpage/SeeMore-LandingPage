type Props = {
  profitPerGlass: number
  hardwareBuy?: number
}

export function BreakEvenChart({ profitPerGlass, hardwareBuy = 200 }: Props) {
  const width = 640
  const height = 280
  const pad = { l: 44, r: 16, t: 16, b: 36 }
  const months = 12
  const innerW = width - pad.l - pad.r
  const innerH = height - pad.t - pad.b
  const maxY = Math.max(hardwareBuy * 1.6, profitPerGlass * months, 1)
  const x = (m: number) => pad.l + (m / months) * innerW
  const y = (v: number) => pad.t + innerH - (v / maxY) * innerH
  const points = Array.from({ length: months + 1 }, (_, m) => `${x(m)},${y(m * profitPerGlass)}`).join(' ')
  const cross = profitPerGlass > 0 ? Math.min(months, hardwareBuy / profitPerGlass) : null

  return (
    <div className="overflow-hidden rounded-xl border border-white/8 bg-black/20 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium">Cumulative profit vs. hardware buy</p>
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Per glass
        </p>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="Break-even chart">
        <line x1={pad.l} y1={y(hardwareBuy)} x2={width - pad.r} y2={y(hardwareBuy)} stroke="#E8A54B" strokeDasharray="5 5" strokeWidth="1.2" />
        <text x={width - pad.r} y={y(hardwareBuy) - 8} textAnchor="end" fill="#E8A54B" fontSize="11" fontFamily="ui-monospace, monospace">
          ${hardwareBuy} buy threshold
        </text>
        <polyline
          fill="none"
          stroke="#2DD4C8"
          strokeWidth="2.4"
          points={points}
          style={{ filter: 'drop-shadow(0 0 8px rgba(45,212,200,0.45))' }}
        />
        {cross !== null && profitPerGlass > 0 ? (
          <>
            <circle cx={x(cross)} cy={y(hardwareBuy)} r="5" fill="#0B0D11" stroke="#2DD4C8" strokeWidth="2" />
            <text x={x(cross)} y={y(hardwareBuy) + 22} textAnchor="middle" fill="#2DD4C8" fontSize="11" fontFamily="ui-monospace, monospace">
              Month {Math.ceil(cross)}
            </text>
          </>
        ) : null}
        {Array.from({ length: 5 }, (_, i) => {
          const m = (i * months) / 4
          return (
            <text key={m} x={x(m)} y={height - 10} textAnchor="middle" fill="#9AA3B5" fontSize="11" fontFamily="ui-monospace, monospace">
              {m === 0 ? 'Start' : `Mo ${m}`}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
