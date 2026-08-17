export function GlassesHud() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#12151c] p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs tracking-[0.18em] text-teal uppercase">
          Aria-class optics
        </p>
        <span className="font-mono text-xs text-amber">REC · 4K POV</span>
      </div>

      <div className="relative mx-auto aspect-[16/10] max-w-md">
        <svg viewBox="0 0 420 240" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="lensGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2DD4C8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#E8A54B" stopOpacity="0.08" />
            </linearGradient>
            <clipPath id="leftLens">
              <rect x="28" y="58" width="150" height="96" rx="28" />
            </clipPath>
            <clipPath id="rightLens">
              <rect x="242" y="58" width="150" height="96" rx="28" />
            </clipPath>
          </defs>

          <path
            d="M18 108 H28 M392 108 H402"
            stroke="#5b6478"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <rect x="28" y="58" width="150" height="96" rx="28" fill="#0b0d11" stroke="#c5ccd8" strokeWidth="3.5" />
          <rect x="242" y="58" width="150" height="96" rx="28" fill="#0b0d11" stroke="#c5ccd8" strokeWidth="3.5" />
          <path d="M178 100c10-16 54-16 64 0" stroke="#c5ccd8" strokeWidth="3.5" fill="none" />
          <rect x="28" y="58" width="150" height="96" rx="28" fill="url(#lensGlow)" />
          <rect x="242" y="58" width="150" height="96" rx="28" fill="url(#lensGlow)" />

          <g clipPath="url(#leftLens)" opacity="0.9">
            <path d="M48 140 L78 88 L108 140" fill="none" stroke="#2DD4C8" strokeWidth="1.2" />
            <path d="M70 140 L90 102 L118 140" fill="none" stroke="#E8A54B" strokeWidth="1" opacity="0.7" />
            <rect x="48" y="114" width="108" height="22" rx="4" fill="#0B0D11" opacity="0.82" />
            <text x="56" y="129" fill="#2DD4C8" fontSize="13" fontFamily="ui-monospace, monospace">
              DE → EN live
            </text>
          </g>

          <g clipPath="url(#rightLens)" opacity="0.9">
            <rect x="262" y="78" width="110" height="56" rx="6" fill="none" stroke="#2DD4C8" strokeWidth="0.8" strokeDasharray="3 3" />
            <path d="M274 122 L300 92 L330 122 L352 104" fill="none" stroke="#E8A54B" strokeWidth="1.2" />
            <text x="268" y="140" fill="#E8A54B" fontSize="12" fontFamily="ui-monospace, monospace">
              SIGIRIYA · L3
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
        {[
          ['LAT', '7.96°N'],
          ['AUDIO', 'ISO'],
          ['MESH', '94%'],
        ].map(([k, v]) => (
          <div
            key={k}
            className="min-w-0 overflow-hidden rounded-lg border border-white/8 bg-black/30 px-1.5 py-2 sm:px-2.5 sm:py-2.5"
          >
            <p className="font-mono text-[9px] tracking-widest text-muted-foreground sm:text-[10px]">{k}</p>
            <p className="mt-1 truncate font-mono text-[11px] leading-tight text-foreground sm:text-xs">
              {v}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
