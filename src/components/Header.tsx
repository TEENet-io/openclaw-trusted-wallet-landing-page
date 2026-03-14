'use client'

import { useState, useEffect, useRef } from 'react'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'
import LanguageToggle from './LanguageToggle'

interface HeaderProps {
  content: ContentData['header']
  locale: Locale
  onBetaClick: () => void
}

export default function Header({ content, locale, onBetaClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus management: when drawer opens, focus first interactive element inside
  useEffect(() => {
    if (menuOpen && drawerRef.current) {
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      focusable[0]?.focus()
    }
  }, [menuOpen])

  // Close drawer on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  function handleNavClick(item: string) {
    trackEvent('nav_click', { locale, item })
    setMenuOpen(false)
  }

  function handleDemoClick() {
    trackEvent('demo_click', { locale, source: 'header' })
    setMenuOpen(false)
    const el = document.getElementById('faq')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleBetaClick() {
    setMenuOpen(false)
    onBetaClick()
  }

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900">
              <span className="text-sm font-bold text-white leading-none">T</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
              {content.brandName}
            </span>
          </div>

          {/* Center nav — desktop */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleDemoClick}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {content.ctaSecondary}
            </button>
            <button
              onClick={handleBetaClick}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              {content.ctaPrimary}
            </button>
            <LanguageToggle locale={locale} />
          </div>

          {/* Hamburger — mobile */}
          <button
            ref={hamburgerRef}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile drawer overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Mobile drawer */}
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 lg:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-900">{content.brandName}</span>
            <button
              onClick={() => {
                setMenuOpen(false)
                hamburgerRef.current?.focus()
              }}
              aria-label="Close menu"
              className="flex items-center justify-center h-8 w-8 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-gray-100 px-4 py-4">
            <button
              onClick={handleDemoClick}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {content.ctaSecondary}
            </button>
            <button
              onClick={handleBetaClick}
              className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              {content.ctaPrimary}
            </button>
            <div className="flex justify-center pt-1">
              <LanguageToggle locale={locale} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
