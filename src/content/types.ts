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

export interface ScenarioItem {
  title: string
  description: string
  level: 'low' | 'medium' | 'high'
}

export interface TrustCardItem {
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
    headline: string
    subheadline: string
    supporting: string
    tags: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  whyThisMatters: {
    title: string
    intro: string
    items: CardItem[]
  }
  howItWorks: {
    title: string
    steps: StepItem[]
  }
  coreFeatures: {
    title: string
    features: FeatureItem[]
  }
  rulesAndApprovals: {
    title: string
    scenarios: ScenarioItem[]
  }
  trustSection: {
    title: string
    cards: TrustCardItem[]
    closingLine: string
  }
  builtOnTEENet: {
    title: string
    points: string[]
    closingPhrase: string
    learnMoreText: string
  }
  developerSection: {
    title: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  faq: {
    title: string
    items: FAQItem[]
  }
  finalCTA: {
    headline: string
    body: string[]
    ctaPrimary: string
    ctaSecondary: string
    supporting: string
  }
  footer: {
    brandLine: string
    linkGroups: FooterLinkGroup[]
    bottomLine: string
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
