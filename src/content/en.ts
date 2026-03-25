import { ContentData } from './types'

export const en: ContentData = {
  locale: 'en',
  meta: {
    title: 'A Trusted Wallet for OpenClaw | TEENet OpenClaw Wallet',
    description: 'Create and use on-chain wallets through chat, set rules for sensitive actions, and approve risk with Passkey — powered by TEENet trusted execution.',
    ogLocale: 'en_US',
  },
  header: {
    brandName: 'TEENet OpenClaw Wallet',
    nav: [
      { label: 'Product', href: '#product' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Security', href: '#security' },
      { label: 'Developers', href: '#developers' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
  },
  hero: {
    eyebrow: 'For OpenClaw users, developers, and builders',
    headline: 'A Wallet Your Agent Can Use\n— Without Putting Your Assets at Risk',
    subheadline: 'Let your agent act. Keep approval for what matters.',
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
    microcopy: 'The wallet app can request an action — but it cannot approve it by itself.',
    trustLinePrefix: 'Built for OpenClaw. Secured by',
    trustLineLinkText: 'TEENet',
  },
  whyThisMatters: {
    transition: 'You want your agent to help — not to take over.',
    title: 'Why you\'d actually want this wallet',
    subtitle: 'Because giving an agent wallet access should feel useful, controlled, and natural.',
    cards: [
      { title: 'Let your agent do real work', description: 'Check balances, prepare transactions, and handle routine actions — without doing everything yourself.' },
      { title: 'Stay in control', description: 'Your agent acts within the rules you set, so transfers, contract interactions, and other sensitive actions don\'t happen unchecked.' },
      { title: 'Step in when it matters', description: 'When something needs your sign-off, confirm it with a familiar Passkey flow that keeps security simple.' },
    ],
    passkey: {
      tooltipTitle: 'Why Passkey for approval?',
      tooltipBody: 'Security best practices recommend human approval for high-risk agent actions. Passkeys are a phishing-resistant way to make that approval simple and strong.',
      tooltipRef: 'Based on guidance from OWASP, NIST, and FIDO.',
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'From chat to action — with control built in',
    subtitle: 'Ask your agent. TEENet checks the action. Approve if needed.',
    steps: [
      {
        title: 'Ask your agent',
        description: 'Start with a simple request in OpenClaw.',
      },
      {
        title: 'TEENet checks the action',
        description: 'Rules and approval requirements are verified below the wallet app.',
      },
      {
        title: 'Approve if needed',
        description: 'Use Passkey when an action needs your sign-off.',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: 'Why you can trust it',
    title: 'Protected where it matters most',
    subtitle: 'Because the wallet app is not the final authority. Sensitive approvals are verified by TEENet below the app layer.',
    supportingLine: 'So even if the app or backend has a problem, it still cannot approve critical actions on its own.',
    learnMoreText: 'Learn how TEENet protects your wallet',
    cards: [
      {
        title: 'The app cannot approve by itself',
        description: 'Sensitive approvals are verified by TEENet\'s protected control layer, not by the wallet app alone.',
      },
      {
        title: 'Keys stay out of reach',
        description: 'Signing happens in a protected environment, not inside the agent or a conventional backend.',
      },
      {
        title: 'Rules are enforced, not optional',
        description: 'Limits, contract restrictions, and approval requirements are applied before an action can go through.',
      },
      {
        title: 'No single backend can bypass you',
        description: 'Critical wallet actions do not depend on one ordinary service acting alone.',
      },
    ],
  },
  developers: {
    eyebrow: 'For developers and builders',
    title: 'Explore the wallet on GitHub',
    subtitle: 'See how the wallet app and skills are structured, then build your own OpenClaw flows on top.',
    supportingLine: 'Start with the code, then adapt the flow to your own product, agent, or user experience.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Read the docs',
    points: [
      { title: 'Explore the app', description: 'See how wallet actions, approvals, and user flows are put together.' },
      { title: 'Inspect the skills', description: 'Understand how agent actions connect to wallet capabilities.' },
      { title: 'Build your own flow', description: 'Adapt the app logic and skills for your own OpenClaw use case.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions you may still have',
    subtitle: 'Here are the most common questions about how the wallet works, how approvals work, and how to get started.',
    items: [
      {
        question: 'What makes this different from a regular wallet?',
        answer: 'This wallet is built for agent workflows. Your agent can help with wallet actions, but limits, approvals, and execution boundaries stay in place.',
      },
      {
        question: 'Does every action require approval?',
        answer: 'No. Routine actions can move through normally. Approval is only required when an action crosses a rule you\'ve set, such as a transfer limit or another sensitive condition.',
      },
      {
        question: 'Can the agent move funds on its own?',
        answer: 'The agent can only act within the rules and approval requirements attached to the wallet. It does not get unlimited authority.',
      },
      {
        question: 'How does approval work?',
        answer: 'When an action needs your sign-off, you review it and confirm it with Passkey in a dedicated approval flow.',
      },
      {
        question: 'Why use Passkey here?',
        answer: 'Passkey makes important approvals feel familiar and simple, while keeping them tied to a stronger, user-controlled confirmation step.',
      },
      {
        question: 'Is this built for developers too?',
        answer: 'Yes. Developers and builders can explore the wallet app and skills on GitHub, then adapt the flow for their own OpenClaw experiences.',
      },
      {
        question: 'Why is approval more trustworthy here?',
        answer: 'Because approval is not enforced only by the wallet app itself. Sensitive actions are verified in TEENet\'s protected control layer, so a normal app or backend cannot approve them on its own.',
      },
      {
        question: 'How do I get started?',
        answer: 'You can join the beta, watch the demo, or go to GitHub if you want to explore the implementation and build on top of it.',
      },
    ],
    ctaBridge: 'Ready to try it — or build with it?',
  },
  finalCTA: {
    title: 'Ready to try it — or build with it?',
    subtitle: 'Use your OpenClaw agent with more control, safer approvals, and a wallet flow built for real use.',
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'View on GitHub',
    ctaTertiary: 'Watch Demo',
    supporting: 'Built for OpenClaw. Protected where wallet control matters most.',
  },
  footer: {
    brandName: 'TEENet OpenClaw Wallet',
    brandLine: 'Built for OpenClaw. Protected where wallet control matters most.',
    linkGroups: [
      {
        title: 'Product',
        links: [
          { label: 'Product', href: '#product' },
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Security', href: '#security' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'GitHub', href: '#' },
          { label: 'Docs', href: '#' },
          { label: 'Developer Preview', href: '#developers' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Watch Demo', href: '#' },
          { label: 'Join Beta', href: '#' },
          { label: 'OpenClaw', href: '#' },
          { label: 'TEENet', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
    ],
    copyright: '\u00a9 2026 TEENet OpenClaw Wallet',
  },
  betaForm: {
    title: 'Join the Beta',
    placeholder: 'Enter your email',
    submit: 'Sign Up',
    success: "Thanks! We'll be in touch.",
    error: 'Please enter a valid email address.',
    close: 'Close',
  },
}
