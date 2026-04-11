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
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Page title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {content.title}
        </h1>

        {/* Section 1: From the wallet to the platform */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {content.fromWallet.title}
          </h2>
          {content.fromWallet.body.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Section 2: The real problems you face today */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            {content.problems.title}
          </h2>
          {content.problems.painPoints.map((point, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Section 3: How TEENet solves each one */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            {content.solutions.title}
          </h2>
          {content.solutions.items.map((item, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* Platform layer diagram
            Spec-critical structure:
            - Outer border = TEENet Platform (everything inside it)
            - "Your application" sits INSIDE the platform
            - SDK is the arrow between app and Key Custody (both inside)
            - Single Key Custody block with sub-capabilities
            - Hardware TEE layer at the bottom, still inside the platform border
            - "with mutual attestation" is a hardware-layer annotation, not a separate service */}
        <div className="mb-12">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="max-w-md mx-auto">
              {/* Outer platform border */}
              <div className="rounded-xl border-2 border-gray-800 bg-white p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-800 text-center mb-5">
                  {content.diagram.platformLabel}
                </p>

                {/* Application — inside the platform border */}
                <div className="rounded-lg border border-gray-300 bg-white p-4 text-center">
                  <p className="font-semibold text-gray-900 text-sm">
                    {content.diagram.appLabel}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ({content.diagram.appSublabel})
                  </p>
                </div>

                {/* SDK arrow */}
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

                {/* Single Key Custody block with sub-capabilities */}
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

                {/* Hardware TEE layer — annotation only, not a separate service */}
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
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* Section 4: Why a platform, not a toolkit */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {content.whyPlatform.title}
          </h2>
          {content.whyPlatform.body.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Section 6: Get started */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {content.getStarted.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            {content.getStarted.description}
          </p>
          {content.getStarted.paths.map((path, i) => (
            <div key={i} className="mb-8 pl-4 border-l-2 border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {i + 1}. {path.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                {path.description}
              </p>
              {path.links && (
                <div className="flex flex-wrap gap-3">
                  {path.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Section 7: Documentation and hardware support */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {content.hardware.title}
          </h2>
          {content.hardware.body.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-3">
              {p}
            </p>
          ))}
          <p className="text-gray-500 text-sm italic mt-4">
            {content.hardware.docNote}
          </p>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Section 8: Get in touch */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {content.contact.title}
          </h2>
          {content.contact.body.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-3">
              {p}
            </p>
          ))}
          <a
            href={`mailto:${content.contact.email}`}
            className="text-gray-900 font-medium hover:underline"
          >
            {content.contact.email}
          </a>
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-3">{content.contact.followLabel}</p>
            <div className="flex gap-4">
              {content.contact.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
