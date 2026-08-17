import { BrandMark } from '@/components/BrandMark'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0E1016] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <BrandMark />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            AR smart glasses for destination management companies. Leased and monitored across Sri Lanka.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground sm:text-right">
          <p className="font-mono text-xs tracking-[0.16em] text-foreground/80 uppercase">
            Hardware-as-a-Service
          </p>
          <p>Colombo · Q3 2026 Pilot</p>
          <a href="#pilot" className="text-teal hover:underline">
            Apply for the Pilot
          </a>
        </div>
      </div>
    </footer>
  )
}
