import ClickSpark from '@/components/ClickSpark'
import Noise from '@/components/Noise'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Hero } from '@/components/sections/Hero'
import { Markets } from '@/components/sections/Markets'
import { Pilot } from '@/components/sections/Pilot'
import { RoiSection } from '@/components/sections/RoiSection'
import { SolutionBento } from '@/components/sections/SolutionBento'
import { TrustStrip } from '@/components/sections/TrustStrip'

export default function App() {
  return (
    <ClickSpark sparkColor="#2DD4C8" sparkCount={10} sparkRadius={18} sparkSize={8}>
      <div id="top" className="relative min-h-screen bg-background">
        <div className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay">
          <Noise patternAlpha={10} patternRefreshInterval={4} />
        </div>
        <SiteHeader />
        <main>
          <Hero />
          <TrustStrip />
          <SolutionBento />
          <RoiSection />
          <Markets />
          <Pilot />
        </main>
        <SiteFooter />
      </div>
    </ClickSpark>
  )
}
