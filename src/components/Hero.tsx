'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'
import ChatMockup from './mockups/ChatMockup'

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
      className="bg-[#0f172a] py-16 md:py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left column: text */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {content.headline}
            </h1>

            <p className="text-lg text-slate-300 mt-6 leading-relaxed">
              {content.subheadline}
            </p>

            <p className="text-sm text-slate-400 mt-2">
              {content.supporting}
            </p>

            {/* Product tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-800 text-slate-300 rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={handlePrimaryClick}
                className="bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
              >
                {content.ctaPrimary}
              </button>
              <button
                onClick={handleSecondaryClick}
                className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {content.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right column: mockup */}
          <div className="mt-12 lg:mt-0 flex-shrink-0 flex justify-center lg:justify-end">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
