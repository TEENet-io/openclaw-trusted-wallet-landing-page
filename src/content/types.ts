export interface NavItem {
  label: string
  href: string
}

export interface CardItem {
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface FeatureItem {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FooterLinkGroup {
  title: string
  links: { label: string; href: string }[]
}

export interface ContentData {
  locale: 'en' | 'zh'
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  header: {
    brandName: string
    nav: NavItem[]
    ctaPrimary: string
    ctaSecondary: string
  }
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    badges: string[]
    ctaPrimary: string
    ctaSecondary: string
    tagline: string
    flowDiagram: {
      nodes: { title: string; subtitle: string }[]
    }
  }
  whyThisMatters: {
    transition: string
    title: string
    subtitle: string
    cards: CardItem[]
    passkey: {
      tooltipTitle: string
      tooltipBody: string
      tooltipRef: string
    }
  }
  howItWorks: {
    eyebrow: string
    title: string
    subtitle: string
    steps: StepItem[]
  }
  whyTrustIt: {
    eyebrow: string
    title: string
    subtitle: string
    supportingLine: string
    learnMoreText: string
    cards: CardItem[]
  }
  developers: {
    eyebrow: string
    title: string
    subtitle: string
    supportingLine: string
    ctaPrimary: string
    ctaSecondary: string
    points: { title: string; description: string }[]
  }
  faq: {
    eyebrow: string
    title: string
    subtitle: string
    items: FAQItem[]
    ctaBridge: string
  }
  finalCTA: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    ctaTertiary: string
    supporting: string
  }
  footer: {
    brandName: string
    brandLine: string
    linkGroups: FooterLinkGroup[]
    copyright: string
  }
  betaForm: {
    title: string
    placeholder: string
    submit: string
    success: string
    error: string
    close: string
  }
}
