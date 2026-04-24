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
    learnMoreText: string
    cards: CardItem[]
  }
  developers: {
    eyebrow: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    points: { title: string; description: string }[]
  }
  beyondWallet: {
    eyebrow: string
    title: string
    description: string
    tags: string[]
    cta: string
  }
  finalCTA: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    ctaPlatform: string
    supporting: string
  }
  footer: {
    brandName: string
    brandLine: string
    linkGroups: FooterLinkGroup[]
    copyright: string
  }
}
