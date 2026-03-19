import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCALES, Locale } from '@/lib/i18n'
import { getTeenetPageContent } from '@/content/teenet-page'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const content = getTeenetPageContent(locale)
  return {
    title: content.meta.title,
    description: content.meta.description,
  }
}

export default async function TeenetPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validatedLocale: Locale = LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : 'en'
  const content = getTeenetPageContent(validatedLocale)

  return (
    <main className="min-h-screen bg-white">
      {/* Header bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href={`/${validatedLocale}`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {content.backLink}
          </Link>
          <Link
            href={`/${validatedLocale === 'en' ? 'zh' : 'en'}/teenet`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {validatedLocale === 'en' ? '中文' : 'EN'}
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {content.title}
        </h1>

        {/* What Is TEENet */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {content.whatIs.title}
          </h2>
          {content.whatIs.body.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* How TEENet Protects Your Wallet */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            {content.howProtects.title}
          </h2>

          {[content.howProtects.hardware, content.howProtects.keys, content.howProtects.attestation].map(
            (sub, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {sub.title}
                </h3>
                {sub.body.map((p, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
              </div>
            )
          )}
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Concerns Table */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {content.concerns.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                    {content.concerns.headers[0]}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                    {content.concerns.headers[1]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.concerns.items.map((item, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50/50' : ''}>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100 font-medium">
                      {item.concern}
                    </td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">
                      {item.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Architecture Diagram */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {content.architecture.title}
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[320px] max-w-md mx-auto space-y-3">
              {/* User Box */}
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center bg-white">
                <p className="font-semibold text-gray-900 text-sm">{content.architecture.userBox[0]}</p>
                <p className="text-xs text-gray-500 mt-1">{content.architecture.userBox[1]}</p>
              </div>

              {/* Bi-directional Arrow */}
              <div className="flex justify-center">
                <svg className="w-4 h-8 text-gray-400" fill="none" viewBox="0 0 16 32" stroke="currentColor" strokeWidth={2}>
                  <path d="M8 4v24M3 8l5-5 5 5M3 24l5 5 5-5" />
                </svg>
              </div>

              {/* TEE Runtime Box */}
              <div className="border-2 border-gray-800 rounded-lg p-4 bg-gray-900/5">
                <p className="font-bold text-gray-900 text-sm mb-3">{content.architecture.runtimeLabel}</p>

                {/* Policy Engine */}
                <div className="border border-gray-300 rounded-md p-3 bg-white mb-2">
                  <p className="font-semibold text-gray-800 text-xs">{content.architecture.policyBox[0]}</p>
                  <p className="text-xs text-gray-500">{content.architecture.policyBox[1]} {content.architecture.policyBox[2]}</p>
                </div>

                {/* Bi-directional Arrow */}
                <div className="flex justify-center my-1">
                  <svg className="w-3 h-6 text-gray-400" fill="none" viewBox="0 0 12 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 4v16M2 7l4-4 4 4M2 17l4 4 4-4" />
                  </svg>
                </div>

                {/* Key Custody */}
                <div className="border border-gray-300 rounded-md p-3 bg-white mb-3">
                  <p className="font-semibold text-gray-800 text-xs">{content.architecture.custodyBox[0]}</p>
                  <p className="text-xs text-gray-500">{content.architecture.custodyBox[1]}</p>
                  <p className="text-xs text-gray-500">{content.architecture.custodyBox[2]}</p>
                </div>

                <p className="text-xs text-gray-500 italic">{content.architecture.hardwareLabel}</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Key Differentiators */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {content.differentiators.title}
          </h2>
          <div className="space-y-4">
            {content.differentiators.items.map((item, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">{item.bold}</strong>{' '}
                {item.body}
              </p>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-8" />

        {/* Disclaimer */}
        <p className="text-sm text-gray-400 italic">
          {content.disclaimer}
        </p>
      </article>
    </main>
  )
}
