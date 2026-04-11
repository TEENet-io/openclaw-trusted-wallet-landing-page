'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface FinalCTAProps {
  content: ContentData['finalCTA']
  locale: Locale
  onBetaClick: () => void
}

export default function FinalCTA({ content, locale, onBetaClick }: FinalCTAProps) {
  function handlePrimaryClick() {
    trackEvent('final_cta_primary', { locale })
    onBetaClick()
  }

  function handleSecondaryClick() {
    trackEvent('final_cta_secondary', { locale })
  }

  function handleTertiaryClick() {
    trackEvent('demo_click', { locale, source: 'final_cta' })
  }

  return (
    <section className="bg-gray-50 py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {content.title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 mt-5 leading-relaxed max-w-2xl mx-auto">
          {content.subtitle}
        </p>

        {/* Button row */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={handlePrimaryClick}
            className="inline-flex items-center px-7 py-3 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            {content.ctaPrimary}
          </button>
          <a
            href="#"
            onClick={handleSecondaryClick}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {content.ctaSecondary}
          </a>
        </div>

        {/* Tertiary links */}
        <div className="mt-4 flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleTertiaryClick}
            className="text-sm text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
          >
            {content.ctaTertiary}
          </button>
          <a
            href={`/${locale}/platform`}
            className="text-sm text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
          >
            {content.ctaPlatform} &rarr;
          </a>
        </div>

        {/* Supporting line */}
        <p className="text-sm text-gray-400 mt-8">{content.supporting}</p>
      </div>
    </section>
  )
}
