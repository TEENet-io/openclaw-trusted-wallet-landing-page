import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'

interface BeyondWalletProps {
  content: ContentData['beyondWallet']
  locale: Locale
}

export default function BeyondWallet({ content, locale }: BeyondWalletProps) {
  return (
    <section id="teenet" className="bg-gray-900 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400">
          {content.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
          {content.title}
        </h2>
        <p className="text-base text-gray-400 mt-4 leading-relaxed">
          {content.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={`/${locale}/platform`}
          className="inline-flex items-center gap-2 mt-12 bg-white text-gray-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          {content.cta}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}
