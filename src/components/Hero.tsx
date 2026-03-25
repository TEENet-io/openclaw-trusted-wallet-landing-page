'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'
import HeroMockup from './mockups/HeroMockup'

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

  return (
    <section
      id="product"
      className="bg-[#0f172a] pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left column: value proposition */}
          <div className="flex-1 min-w-0 max-w-2xl">
            {/* Eyebrow */}
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">
              {content.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white leading-[1.15]">
              {content.headline.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 mt-8 leading-relaxed">
              {content.subheadline}
            </p>

            {/* Microcopy — key trust differentiator */}
            <p className="text-[15px] text-emerald-400/90 mt-7 font-medium leading-relaxed border-l-2 border-emerald-500/40 pl-3">
              {content.microcopy}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
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

            {/* Trust Line */}
            <p className="text-sm text-slate-400 mt-6 font-medium tracking-wide">
              {content.trustLinePrefix}{' '}
              <a
                href={`/${locale}/teenet`}
                className="text-slate-200 underline decoration-slate-500 underline-offset-2 hover:text-white hover:decoration-slate-300 transition-colors"
              >
                {content.trustLineLinkText}
              </a>
              .
            </p>
          </div>

          {/* Right column: 3-layer stacked mockup */}
          <div className="mt-14 lg:mt-0 flex-shrink-0 flex justify-center lg:justify-end">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
