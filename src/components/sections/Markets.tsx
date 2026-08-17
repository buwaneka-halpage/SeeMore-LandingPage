import { Building2, Gem } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import SpotlightCard from '@/components/SpotlightCard'

export function Markets() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <AnimatedContent distance={36} duration={0.7}>
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
          Target markets
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Built for two operator scales</h2>
      </AnimatedContent>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <SpotlightCard className="border-white/8 bg-card" spotlightColor="rgba(45, 212, 200, 0.18)">
          <div className="relative z-10">
            <div className="mb-5 flex size-10 items-center justify-center rounded-lg border border-teal/25 bg-teal/10 text-teal">
              <Building2 className="size-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight">For Tier-1 operators</h3>
            <p className="mt-1 font-mono text-[11px] tracking-widest text-teal uppercase">
              e.g. Aitken Spence
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Cut operational language costs by 40% and monitor 50 buses simultaneously. Standardize the
              briefing, keep your best English-speaking guides, and stop hiring to the language of the week.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard className="border-white/8 bg-card" spotlightColor="rgba(232, 165, 75, 0.18)">
          <div className="relative z-10">
            <div className="mb-5 flex size-10 items-center justify-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
              <Gem className="size-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight">For boutique agencies</h3>
            <p className="mt-1 font-mono text-[11px] tracking-widest text-amber uppercase">
              Ultra-premium USP
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Offer an exclusive, ultra-premium USP that justifies your luxury tour pricing. Guests leave
              with reconstructed memory — not another crowded ruin on a phone camera roll.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
