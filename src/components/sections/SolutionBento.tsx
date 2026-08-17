import { Camera, Languages, Landmark, RadioTower } from 'lucide-react'
import AnimatedContent from '@/components/AnimatedContent'
import MagicBento from '@/components/MagicBento'
import ShinyText from '@/components/ShinyText'

const cards = [
  {
    color: '#1C202B',
    label: '01 · Language',
    title: 'One guide. Every language.',
    description:
      'No more scrambling for expensive German or Mandarin guides. AISee translates your standard English-speaking guide in real-time with isolated spatial audio.',
    icon: <Languages className="size-5" />,
  },
  {
    color: '#1C202B',
    label: '02 · AR Experience',
    title: 'Bring ruins to life.',
    description:
      'Dry fountains in Sigiriya burst with 3D augmented reality water exactly where the tourist is looking. Rocks become palaces. Context returns to the site.',
    icon: <Landmark className="size-5" />,
  },
  {
    color: '#1C202B',
    label: '03 · Quality Control',
    title: 'Head office, live.',
    description:
      'The AISee Fleet Dashboard gives head office real-time telemetry on guide performance, location adherence, and incident reports across every coach.',
    icon: <RadioTower className="size-5" />,
  },
  {
    color: '#1C202B',
    label: '04 · Memories',
    title: 'Hands-free capture.',
    description:
      'First-person photo and video capture syncs directly to the tourist’s phone. No phones in the air. No missed Lion Rock summit.',
    icon: <Camera className="size-5" />,
  },
]

export function SolutionBento() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <AnimatedContent distance={36} duration={0.7} threshold={0.15}>
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal uppercase">The product</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          The problem vs.{' '}
          <ShinyText text="the AISee layer" color="#9aa3b5" shineColor="#2DD4C8" speed={3} />
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Operators overpay for multilingual staff. Guests miss the briefing in the crush at the rock.
          Heritage looks like geology until someone reconstructs it in space.
        </p>
      </AnimatedContent>
      <div className="mt-10">
        <MagicBento
          cards={cards}
          textAutoHide={false}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          glowColor="45, 212, 200"
          particleCount={8}
        />
      </div>
    </section>
  )
}
