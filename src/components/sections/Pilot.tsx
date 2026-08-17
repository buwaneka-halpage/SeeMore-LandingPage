import { type FormEvent, useState } from 'react'
import Magnet from '@/components/Magnet'
import StarBorder from '@/components/StarBorder'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const STORAGE_KEY = 'see-mo-pilot-applications'

export function Pilot() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = {
      name: String(form.get('name') ?? '').trim(),
      company: String(form.get('company') ?? '').trim(),
      fleetSize: String(form.get('fleetSize') ?? '').trim(),
      at: new Date().toISOString(),
    }
    if (!payload.name || !payload.company || !payload.fleetSize) return
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown
      const list = Array.isArray(existing) ? existing : []
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...list, payload]))
    } catch {
      // ponytail: static host — persist when available, still show success
    }
    setSubmitted(true)
  }

  return (
    <section id="pilot" className="border-t border-white/8 bg-[#0E1016]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-teal uppercase">Q3 2026 · 5 seats</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Join the Q3 2026 Pilot Program.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            We are onboarding 5 forward-thinking Sri Lankan tour operators for our beta rollout. Zero
            upfront CapEx required.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>— Demo fleet delivered to Colombo</li>
            <li>— On-site enablement for one flagship itinerary</li>
            <li>— Fleet dashboard access for head office</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/8 bg-card p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <p className="font-mono text-[11px] tracking-widest text-teal uppercase">Application received</p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight">We’ll be in touch.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pilot seats are limited. A founder will confirm fleet size and itinerary fit.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={onSubmit}>
              <Field id="name" name="name" label="Name" placeholder="Nimal Perera" />
              <Field id="company" name="company" label="Company" placeholder="e.g. Ceylon Expeditions" />
              <Field id="fleetSize" name="fleetSize" label="Fleet size" placeholder="e.g. 24 glasses" />
              <Magnet padding={28} magnetStrength={4} wrapperClassName="block w-full">
                <StarBorder as="div" color="#2DD4C8" speed="5s" thickness={1} className="block w-full rounded-xl">
                  <Button type="submit" variant="teal" size="xl" className="w-full rounded-[18px]">
                    Apply for the Pilot
                  </Button>
                </StarBorder>
              </Magnet>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  name,
  label,
  placeholder,
}: {
  id: string
  name: string
  label: string
  placeholder: string
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        required
        placeholder={placeholder}
        className="h-11 bg-black/25"
      />
    </div>
  )
}
