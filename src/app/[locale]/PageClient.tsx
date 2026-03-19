'use client'

import { useState, useEffect, useCallback } from 'react'
import { ContentData } from '@/content/types'
import { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyThisMatters from '@/components/WhyThisMatters'
import HowItWorks from '@/components/HowItWorks'
import WhyTrustIt from '@/components/WhyTrustIt'
import Developers from '@/components/Developers'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import BetaSignupForm from '@/components/BetaSignupForm'
import ScrollReveal from '@/components/ScrollReveal'

interface PageClientProps {
  content: ContentData
  locale: Locale
}

export default function PageClient({ content, locale }: PageClientProps) {
  const [betaFormOpen, setBetaFormOpen] = useState(false)

  const handleBetaClick = useCallback(() => {
    setBetaFormOpen(true)
  }, [])

  const handleBetaClose = useCallback(() => {
    setBetaFormOpen(false)
  }, [])

  // Scroll depth tracking
  useEffect(() => {
    const milestones = [25, 50, 75, 100]
    const reached = new Set<number>()

    function handleScroll() {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const depth = Math.min(100, Math.round((window.scrollY / scrollHeight) * 100))
      for (const m of milestones) {
        if (depth >= m && !reached.has(m)) {
          reached.add(m)
          trackEvent('scroll_depth', { locale, depth: `${m}%` })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [locale])

  return (
    <main id="main-content">
      <Header
        content={content.header}
        locale={locale}
        onBetaClick={handleBetaClick}
      />
      <ScrollReveal>
        <Hero
          content={content.hero}
          locale={locale}
          onBetaClick={handleBetaClick}
        />
      </ScrollReveal>
      <ScrollReveal>
        <WhyThisMatters content={content.whyThisMatters} />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks content={content.howItWorks} />
      </ScrollReveal>
      <ScrollReveal>
        <WhyTrustIt content={content.whyTrustIt} />
      </ScrollReveal>
      <ScrollReveal>
        <Developers content={content.developers} />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ content={content.faq} locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTA
          content={content.finalCTA}
          locale={locale}
          onBetaClick={handleBetaClick}
        />
      </ScrollReveal>
      <ScrollReveal>
        <Footer content={content.footer} locale={locale} />
      </ScrollReveal>
      <BetaSignupForm
        content={content.betaForm}
        locale={locale}
        isOpen={betaFormOpen}
        onClose={handleBetaClose}
      />
    </main>
  )
}
