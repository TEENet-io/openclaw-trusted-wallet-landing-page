'use client'

import Link from 'next/link'
import { Locale, getAlternateLocale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

interface LanguageToggleProps {
  locale: Locale
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const alternate = getAlternateLocale(locale)
  const label = locale === 'en' ? '中文' : 'EN'
  const href = `/${alternate}`

  function handleClick() {
    trackEvent('language_switch', { from: locale, to: alternate })
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded"
      aria-label={`Switch language to ${alternate === 'en' ? 'English' : '中文'}`}
    >
      {label}
    </Link>
  )
}
