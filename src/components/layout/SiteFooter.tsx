import { BrandMark } from '@/components/BrandMark'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <BrandMark />
        <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          Hardware-as-a-Service · Colombo · Q3 2026 Pilot
        </p>
      </div>
    </footer>
  )
}
