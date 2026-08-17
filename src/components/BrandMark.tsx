import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#1C202B" />
        <path
          d="M6 16h3.2c.6 0 1.1.3 1.4.8L12 19.2c.3.5.8.8 1.4.8h5.2c.6 0 1.1-.3 1.4-.8L21.4 16.8c.3-.5.8-.8 1.4-.8H26"
          stroke="#2DD4C8"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="11" cy="16" r="4.2" stroke="#E8A54B" strokeWidth="1.5" />
        <circle cx="21" cy="16" r="4.2" stroke="#2DD4C8" strokeWidth="1.5" />
      </svg>
      <span className="text-[15px] font-medium tracking-tight text-foreground">
        AISee Travel
      </span>
    </span>
  )
}
