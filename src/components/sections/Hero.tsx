import { ArrowRight } from 'lucide-react'
import Aurora from '@/components/Aurora'
import BlurText from '@/components/BlurText'
import GradientText from '@/components/GradientText'
import GlareHover from '@/components/GlareHover'
import Magnet from '@/components/Magnet'
import { Button } from '@/components/ui/button'
import { FleetDashboard } from '@/components/mockups/FleetDashboard'
import { GlassesHud } from '@/components/mockups/GlassesHud'
import { SigiriyaCaseStudy } from '@/components/SigiriyaCaseStudy'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Aurora
          colorStops={['#E8A54B', '#2DD4C8', '#1C202B']}
          amplitude={0.85}
          blend={0.55}
          speed={0.6}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D11]/40 to-[#0B0D11]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-amber uppercase">
            Hardware-as-a-Service · Sri Lanka DMCs
          </p>
          <div className="mt-5 space-y-2">
            <h1 className="sr-only">Transform Sightseeing. Multiply Your Tour Margins.</h1>
            <div aria-hidden="true">
              <BlurText
                text="Transform Sightseeing."
                animateBy="words"
                delay={80}
                className="text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              />
              <GradientText
                className="mx-0 text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl"
                colors={['#E8A54B', '#2DD4C8', '#F4F1EA', '#E8A54B']}
                animationSpeed={7}
              >
                Multiply Your Tour Margins.
              </GradientText>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Equip your tour groups with See Mo smart glasses. Deliver real-time translations, stunning AR
            historical recreations, and monitor guide quality—all for one monthly HaaS lease.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnet padding={48} magnetStrength={3} wrapperClassName="inline-block">
              <Button variant="teal" size="xl" asChild>
                <a href="#pilot">
                  Request a Demo Fleet
                  <ArrowRight />
                </a>
              </Button>
            </Magnet>
            <SigiriyaCaseStudy triggerClassName="border border-white/15 text-foreground hover:bg-white/5 hover:text-teal" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <GlareHover
            width="100%"
            height="auto"
            background="transparent"
            borderColor="transparent"
            borderRadius="16px"
            glareColor="#2DD4C8"
            glareOpacity={0.2}
            className="h-full border-0"
          >
            <GlassesHud />
          </GlareHover>
          <FleetDashboard />
        </div>
      </div>
    </section>
  )
}
