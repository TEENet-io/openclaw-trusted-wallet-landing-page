import Link from 'next/link'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'

interface WhyTrustItProps {
  content: ContentData['whyTrustIt']
  locale: Locale
}

const CARD_ICONS = [
  // Shield lock — Keys stay out of reach
  <svg key="shield" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Clipboard check — Rules are enforced
  <svg key="rules" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
  </svg>,
  // Fingerprint — You approve the important moments
  <svg key="fingerprint" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.26 8.415M5.106 18.678A48.59 48.59 0 017.5 13.5c0-2.291.518-4.46 1.442-6.397M12 10.5a48.485 48.485 0 00-1.442 12.56M14.5 10.5a48.588 48.588 0 01-.789 7.236M16.5 10.5a48.736 48.736 0 01-.5 6.153" />
  </svg>,
  // Server stack — No single backend gets full control
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

        {/* Supporting line + learn more link */}
        <p className="text-sm text-gray-400 text-center mt-8">
          {content.supportingLine}
        </p>
        <div className="text-center mt-3">
          <Link
            href={`/${locale}/teenet`}
            className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors"
          >
            {content.learnMoreText} &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
