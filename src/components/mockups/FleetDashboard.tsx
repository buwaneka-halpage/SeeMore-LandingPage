import CountUp from '@/components/CountUp'

const guides = [
  { name: 'N. Perera', lang: 'EN', status: 'On route', ping: '12ms' },
  { name: 'S. Fernando', lang: 'EN', status: 'Sigiriya', ping: '18ms' },
  { name: 'A. Jayasuriya', lang: 'EN', status: 'Idle', ping: '9ms' },
]

export function FleetDashboard() {
  return (
    <div
      id="fleet"
      className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#12151c] p-5 sm:p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Fleet command
          </p>
          <h3 className="mt-1 text-lg font-medium tracking-tight">Operator dashboard</h3>
        </div>
        <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-xs text-teal">
          LIVE
        </span>
      </div>

      <div className="rounded-xl border border-teal/20 bg-teal/5 p-4">
        <p className="font-mono text-xs tracking-widest text-teal/80 uppercase">
          Monthly profit
        </p>
        <p className="mt-1 font-mono text-3xl font-medium tracking-tight text-teal sm:text-4xl">
          +$
          <CountUp to={4280} separator="," duration={2.2} />
        </p>
        <p className="mt-1 text-sm text-muted-foreground">86-glass DMC fleet · HaaS lease paid</p>
      </div>

      <div className="mt-4 space-y-2">
        {guides.map((guide) => (
          <div
            key={guide.name}
            className="flex items-center justify-between rounded-lg border border-white/6 bg-black/25 px-3 py-2.5"
          >
            <div>
              <p className="text-[15px] text-foreground">{guide.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {guide.lang} · {guide.status}
              </p>
            </div>
            <span className="font-mono text-xs text-teal">{guide.ping}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
