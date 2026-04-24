import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCALES, Locale } from '@/lib/i18n'
import { getPlatformPageContent } from '@/content/platform-page'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const content = getPlatformPageContent(locale)
  return {
    title: content.meta.title,
    description: content.meta.description,
  }
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validatedLocale: Locale = LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : 'en'
  const content = getPlatformPageContent(validatedLocale)

  return (
    <main className="min-h-screen bg-white">
      {/* Header bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href={`/${validatedLocale}`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {content.backLink}
          </Link>
          <Link
            href={`/${validatedLocale === 'en' ? 'zh' : 'en'}/platform`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {validatedLocale === 'en' ? '中文' : 'EN'}
          </Link>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {content.title}
          </h1>
          <div className="mt-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {content.fromWallet.title}
            </h2>
            {content.fromWallet.body.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </header>

        <section className="mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {content.problems.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            {content.problems.painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {content.solutions.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            {content.solutions.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="max-w-md mx-auto">
              <div className="rounded-xl border-2 border-gray-800 bg-white p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-800 text-center mb-5">
                  {content.diagram.platformLabel}
                </p>

                <div className="rounded-lg border border-gray-300 bg-white p-4 text-center">
                  <p className="font-semibold text-gray-900 text-sm">
                    {content.diagram.appLabel}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ({content.diagram.appSublabel})
                  </p>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-medium text-gray-500 mb-0.5">
                      {content.diagram.sdkLabel}
                    </span>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-400 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900 text-sm text-center mb-3">
                    {content.diagram.custodyLabel}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {content.diagram.custodyCapabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 rounded-md border border-gray-300 bg-white text-[11px] font-medium text-gray-600"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-dashed border-gray-300 text-center">
                  <p className="text-xs font-medium text-gray-600">
                    {content.diagram.hardwareLabel}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {content.diagram.hardwarePlatforms}
                  </p>
                  <p className="text-[11px] text-gray-400 italic mt-1">
                    ({content.diagram.attestationNote})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {content.getStarted.title}
          </h2>
          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            {content.getStarted.description}
          </p>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            {content.getStarted.paths.map((path) => (
              <div
                key={path.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {path.description}
                </p>
                {path.links && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {path.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {link.label}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-2xl bg-gray-900 px-6 py-8 md:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
              TEENet
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {content.whyPlatform.title}
            </h2>
            <div className="mt-4 max-w-3xl space-y-3">
              {content.whyPlatform.body.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-300">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
