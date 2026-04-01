'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface HeroProps {
  content: ContentData['hero']
  locale: Locale
  onBetaClick: () => void
}

export default function Hero({ content, locale, onBetaClick }: HeroProps) {
  function handlePrimaryClick() {
    trackEvent('hero_cta_primary', { locale })
    onBetaClick()
  }

  function handleSecondaryClick() {
    trackEvent('hero_cta_secondary', { locale })
    trackEvent('demo_click', { locale, source: 'hero' })
    const el = document.getElementById('faq')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const { nodes } = content.flowDiagram

  return (
    <section
      id="product"
      className="bg-[#0f172a] pt-28 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        {/* Eyebrow */}
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-8">
          {content.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15]">
          {content.headline.split('\n').map((line, i, arr) => (
            <span key={i} className={i === 0 ? 'text-white' : 'text-slate-300'}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-300 mt-10 leading-relaxed max-w-2xl mx-auto">
          {content.subheadline}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {content.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700"
            >
              <svg
                className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
          <button
            onClick={handlePrimaryClick}
            className="bg-white text-slate-900 px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
          >
            {content.ctaPrimary}
          </button>
          <button
            onClick={handleSecondaryClick}
            className="border border-slate-600 text-slate-300 px-7 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            {content.ctaSecondary}
          </button>
        </div>

        {/* Tagline */}
        <p className="text-sm text-slate-400 mt-8 font-medium tracking-wide">
          {content.tagline}
        </p>

        {/* Flow Diagram */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {nodes.map((node, i) => {
            const isLast = i === nodes.length - 1
            const isMiddle = i === 1

            let borderColor = 'border-slate-700'
            let bgColor = 'bg-slate-800/80'
            let accentColor = ''
            if (isMiddle) {
              borderColor = 'border-amber-500/40'
              bgColor = 'bg-amber-950/30'
              accentColor = 'text-amber-400'
            } else if (isLast) {
              borderColor = 'border-emerald-500/40'
              bgColor = 'bg-emerald-950/30'
              accentColor = 'text-emerald-400'
            }

            return (
              <div key={i} className="flex flex-col md:flex-row items-center">
                {/* Node card */}
                <div
                  className={`relative ${bgColor} ${borderColor} border rounded-xl px-8 py-6 w-64 text-center`}
                >
                  <p className={`text-base font-semibold ${accentColor || 'text-white'}`}>
                    {node.title}
                    {isLast && (
                      <svg
                        className="inline-block w-4 h-4 ml-1.5 -mt-0.5 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </p>
                  <p className="text-sm text-slate-400 mt-1.5">{node.subtitle}</p>
                </div>

                {/* Arrow between nodes */}
                {!isLast && (
                  <>
                    {/* Horizontal arrow — desktop */}
                    <svg
                      className="hidden md:block w-14 h-5 text-slate-500 flex-shrink-0"
                      viewBox="0 0 40 20"
                      fill="none"
                    >
                      <line x1="0" y1="10" x2="32" y2="10" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M30 4 L38 10 L30 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    </svg>
                    {/* Vertical arrow — mobile */}
                    <svg
                      className="block md:hidden w-5 h-8 text-slate-500"
                      viewBox="0 0 20 32"
                      fill="none"
                    >
                      <line x1="10" y1="0" x2="10" y2="24" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M4 22 L10 30 L16 22" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    </svg>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
