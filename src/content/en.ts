import { ContentData } from './types'

export const en: ContentData = {
  locale: 'en',
  meta: {
    title: 'A Trusted Wallet for OpenClaw | TEENet Secure Wallet',
    description: 'Create and use on-chain wallets through chat, set rules for sensitive actions, and approve risk with Passkey — powered by TEENet trusted execution.',
    ogLocale: 'en_US',
  },
  header: {
    brandName: 'TEENet Secure Wallet',
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
    chips: ['Keys stay protected', 'Your agent follows your rules', 'Sensitive actions need approval', 'Passkey confirmation'],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
    supporting: 'Handle routine actions with your agent. Keep approval for the ones that matter.',
    trustLine: 'Built for OpenClaw. Secured by TEENet.',
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
    subtitle: 'Ask your agent. Rules check the action. Approve if needed.',
    steps: [
      {
        title: 'Ask your agent',
        description: 'Start with a simple request in OpenClaw.',
      },
      {
        title: 'Rules check the action',
        description: 'Limits and approvals apply automatically.',
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
    subtitle: 'Because the most sensitive parts of the wallet are not left to the agent or ordinary backend logic alone.',
    supportingLine: 'Protected by TEENet where wallet control matters most.',
    cards: [
      {
        title: 'Keys stay out of reach',
        description: 'Signing happens in a protected environment, not inside the agent or a conventional backend.',
      },
      {
        title: 'Rules are enforced, not optional',
        description: 'Limits, contract restrictions, and approval requirements are applied before an action can go through.',
      },
      {
        title: 'You approve the important moments',
        description: 'When a sensitive action needs your sign-off, confirm it with Passkey in a familiar flow.',
      },
      {
        title: 'No single backend gets full control',
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
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is this product?',
        answer: "TEENet Secure Wallet is a wallet application for OpenClaw that lets users create and manage on-chain wallets through chat, set rules for execution, and approve sensitive actions with Passkey. It runs on TEENet's trusted runtime.",
      },
      {
        question: 'How is it different from a regular wallet?',
        answer: 'Unlike a regular wallet, TEENet Secure Wallet enforces execution boundaries through rules and requires independent Passkey approval for sensitive actions. The wallet logic runs inside a trusted execution environment, not a standard backend.',
      },
      {
        question: 'Does every action require approval?',
        answer: 'No. Routine actions within predefined rules execute without interruption. Only actions that exceed thresholds or interact with contracts outside the allowlist trigger approval.',
      },
      {
        question: 'How does approval work?',
        answer: 'When a sensitive action is triggered, you receive an approval link in chat. You open the approval page and verify with Passkey or biometrics. The action proceeds only after successful verification.',
      },
      {
        question: 'Why is this approval flow trustworthy?',
        answer: 'Approval is not a chat reply — it is an independent verification step using Passkey. Rules define real execution boundaries, not UI hints. And the wallet logic runs on TEENet, a hardware-protected trusted execution environment where trust is verifiable.',
      },
      {
        question: 'Is it fully open source?',
        answer: 'The application integration layer is open. TEENet runtime itself is not open source. The product provides trusted execution capabilities without requiring the full stack to be open.',
      },
    ],
  },
  finalCTA: {
    headline: 'More Power. Same Control.',
    body: [
      'Use chat to manage wallets.',
      'Use rules to control risk.',
      'Use Passkey to approve critical actions.',
    ],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
    supporting: 'Built for OpenClaw. Powered by TEENet trusted execution.',
  },
  footer: {
    brandLine: 'TEENet Secure Wallet',
    linkGroups: [
      {
        title: 'Product',
        links: [
          { label: 'Product', href: '#product' },
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Security', href: '#security' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'Developers', href: '#developers' },
          { label: 'FAQ', href: '#faq' },
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
    bottomLine: 'Built for OpenClaw. Powered by TEENet.',
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
