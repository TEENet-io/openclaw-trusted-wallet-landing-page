'use client'

import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface FinalCTAProps {
  content: ContentData['finalCTA']
  locale: Locale
}

const WALLET_REPO_URL = 'https://github.com/TEENet-io/teenet-wallet'
const WALLET_APP_URL = 'https://wallet.teenet.app'

export default function FinalCTA({ content, locale }: FinalCTAProps) {
  function handlePrimaryClick() {
    trackEvent('github_click', { locale, source: 'final_cta' })
  }

  function handleSecondaryClick() {
    trackEvent('app_click', { locale, source: 'final_cta' })
  }

  return (
    <section className="bg-gray-50 py-24 px-6">
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
          <a
            href={WALLET_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePrimaryClick}
            className="inline-flex items-center px-7 py-3 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            {content.ctaPrimary}
          </a>
          <a
            href={WALLET_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSecondaryClick}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5H8.25A2.25 2.25 0 006 6.75v10.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 17.25v-6.75m-6-6h6m0 0v6m0-6L10.5 12"
              />
            </svg>
            {content.ctaSecondary}
          </a>
        </div>

        {/* Platform link */}
        <div className="mt-4 flex justify-center gap-6 flex-wrap">
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
