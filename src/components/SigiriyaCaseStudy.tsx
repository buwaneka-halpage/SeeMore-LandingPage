import { ArrowUpRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function SigiriyaCaseStudy({ triggerClassName }: { triggerClassName?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="xl" className={triggerClassName}>
          See the Sigiriya Case Study
          <ArrowUpRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg sm:max-w-lg border-white/10 bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl tracking-tight">Sigiriya, reconstructed</DialogTitle>
          <DialogDescription>
            A boutique operator ran a 24-glass pilot on the Lion Rock circuit. Guests kept the English-speaking
            guide. The glasses did the rest.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 text-sm">
          <div className="rounded-xl border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-[10px] tracking-widest text-amber uppercase">Problem</p>
            <p className="mt-1 text-muted-foreground">
              Crowded terraces swallowed the briefing. Without visual context, the palace gardens read as dry
              stone and empty pools.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-[10px] tracking-widest text-teal uppercase">See Mo overlay</p>
            <p className="mt-1 text-muted-foreground">
              Spatial audio isolated the guide in German and Mandarin. AR water filled the fountains exactly
              where each guest looked. First-person captures synced to phones at the coach.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ['38%', 'AR attach rate'],
              ['4.9', 'Guest score'],
              ['Month 4', 'Break-even'],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-white/8 bg-black/20 p-3 text-center">
                <p className="font-mono text-lg text-teal">{n}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
