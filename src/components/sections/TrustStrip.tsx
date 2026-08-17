import LogoLoop from '@/components/LogoLoop'

const partners = [
  { name: 'Aitken Spence', mark: 'AS' },
  { name: 'Walkers Tours', mark: 'WT' },
  { name: 'Jetwing Travels', mark: 'JT' },
  { name: 'Experience Travel', mark: 'ET' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-white/8 bg-[#0E1016]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm text-muted-foreground">
          Built for Sri Lanka&apos;s leading DMCs and Boutique Operators.
        </p>
        <div className="mt-6">
          <LogoLoop
            logos={partners.map((p) => ({
              node: (
                <span className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid size-8 place-items-center rounded-md border border-white/10 font-mono text-[10px] tracking-widest text-foreground/70">
                    {p.mark}
                  </span>
                  <span className="text-sm tracking-wide">{p.name}</span>
                </span>
              ),
              title: p.name,
              ariaLabel: `${p.name} placeholder`,
            }))}
            speed={70}
            gap={56}
            logoHeight={28}
            fadeOut
            fadeOutColor="#0E1016"
            pauseOnHover
          />
        </div>
      </div>
    </section>
  )
}
