import Link from 'next/link'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'

interface WhyTrustItProps {
  content: ContentData['whyTrustIt']
  locale: Locale
}

const CARD_ICONS = [
  // CPU chip — Hardware-protected enclaves
  <svg key="cpu" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
  </svg>,
  // Key — Keys sharded across nodes
  <svg key="key" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>,
  // Shield check — Remote attestation / hardware verified
  <svg key="attest" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Server stack — No single point of failure
  <svg key="distributed" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
  </svg>,
]

export default function WhyTrustIt({ content, locale }: WhyTrustItProps) {
  return (
    <section id="security" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase text-center">
          {content.eyebrow}
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-3">
          {content.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base text-gray-500 text-center mt-3 max-w-2xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {content.cards.map((card, index) => (
            <div
              key={card.title}
              className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                {CARD_ICONS[index]}
              </div>
              <h3 className="font-semibold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Learn more — button-style link */}
        <div className="text-center mt-10">
          <Link
            href={`/${locale}/platform`}
            className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            {content.learnMoreText}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
