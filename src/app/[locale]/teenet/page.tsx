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
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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

      {/* ====== Intro Section ====== */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 pt-16 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Headline + supporting copy */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {content.intro.headline}
            </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              {content.intro.supporting}
            </p>
            <p className="text-gray-700 mt-6 leading-relaxed">
              {content.intro.introParagraph}
            </p>
          </div>

          {/* 3-Layer Relationship Diagram */}
          <div className="mt-12 max-w-lg mx-auto">
            {/* Layer 1 — OpenClaw */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{content.intro.diagramLayers.openclaw.title}</p>
                  <p className="text-xs text-gray-500">{content.intro.diagramLayers.openclaw.label}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pl-11">{content.intro.diagramLayers.openclaw.description}</p>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-2">
              <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>

            {/* Layer 2 — Wallet App */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{content.intro.diagramLayers.walletApp.title}</p>
                  <p className="text-xs text-gray-500">{content.intro.diagramLayers.walletApp.label}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pl-11 mb-3">{content.intro.diagramLayers.walletApp.description}</p>
              <div className="ml-11">
                <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {content.intro.diagramLayers.walletApp.tag}
                </span>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-2">
              <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>

            {/* Layer 3 — TEENet Control Layer */}
            <div className="rounded-xl border-2 border-gray-800 bg-gray-900 p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{content.intro.diagramLayers.teenet.title}</p>
                  <p className="text-xs text-gray-400">{content.intro.diagramLayers.teenet.label}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 pl-11 mb-3">{content.intro.diagramLayers.teenet.description}</p>
              <div className="flex flex-wrap gap-2 pl-11">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {content.intro.diagramLayers.teenet.highlights[0]}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {content.intro.diagramLayers.teenet.highlights[1]}
                </span>
              </div>
            </div>
          </div>

          {/* Summary line */}
          <p className="text-center text-gray-800 font-semibold mt-8 text-lg">
            {content.intro.summaryLine}
          </p>

          {/* Two-bullet summary */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6">
            {content.intro.bullets.map((bullet, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{bullet}</span>
              </div>
            ))}
          </div>

          {/* Transition line */}
          <p className="text-center text-sm text-gray-500 mt-10">
            {content.intro.transitionLine}
          </p>
        </div>
      </section>

      {/* ====== Detailed Content ====== */}
      <article className="max-w-3xl mx-auto px-6 py-16">
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
