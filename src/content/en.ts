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
    eyebrow: 'For developers, builders, and OpenClaw users',
    headline: 'A Wallet Your Agent Can Use\nWithout Putting Your Assets at Risk',
    subheadline: 'Let your agent act. Keep approval for what matters.',
    badges: ['Open source', 'Your rules, enforced by hardware', 'Passkey approval'],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
    tagline: 'Built for OpenClaw. Secured by TEENet.',
    flowDiagram: {
      nodes: [
        { title: 'Agent acts', subtitle: 'Send 0.8 ETH' },
        { title: 'Rules check', subtitle: 'Exceeds 0.1 ETH limit' },
        { title: 'You approve', subtitle: 'Passkey confirmed' },
      ],
    },
  },
  whyThisMatters: {
    transition: 'What changes when your agent has a wallet',
    title: 'Why you\'d actually want this wallet',
    subtitle: 'Your agent handles the routine. You handle what matters. Here\'s what that looks like.',
    cards: [
      { title: 'Let your agent do real work', description: 'Balances, transfers, activity checks — your agent handles day-to-day wallet tasks so you don\'t have to.' },
      { title: 'Stay in control', description: 'Set transfer limits, restrict which contracts your agent can interact with, and require approval for rule changes — all configurable by you.' },
      { title: 'Step in when it matters', description: 'When an action exceeds your rules, you get a clear review prompt. One Passkey confirmation and it\'s done — no gas fees, no multisig coordination.' },
    ],
    passkey: {
      tooltipTitle: 'Why Passkey for approval?',
      tooltipBody: 'Security best practices recommend human approval for high-risk agent actions. Passkeys are a phishing-resistant way to make that approval simple and strong.',
      tooltipRef: 'Based on guidance from OWASP, NIST, and FIDO.',
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'A real transaction, start to finish',
    subtitle: 'Your agent prepares a transfer. The wallet checks it against your rules. You confirm with Passkey.',
    steps: [
      {
        title: 'You ask, your agent prepares',
        description: 'Describe what you need in plain language. Your agent handles the blockchain interaction.',
      },
      {
        title: 'Rules are checked inside the TEE',
        description: 'Before anything is signed, your rules are enforced inside a hardware-protected environment — not by the agent.',
      },
      {
        title: 'You confirm with Passkey — or reject',
        description: 'Actions that exceed your limits need your approval. Routine actions within limits go through automatically.',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: 'Why you can trust it',
    title: 'Security that doesn\'t depend on trust',
    subtitle: 'Keys, rules, and signing are protected by hardware — not by promises from a backend.',
    learnMoreText: 'Learn more about TEENet security',
    cards: [
      {
        title: 'Runs inside hardware-protected enclaves',
        description: 'Wallet logic — rule checks, authorization, signing — executes inside TEEs (Trusted Execution Environments). The CPU itself enforces isolation. No external process can read or modify what\'s running.',
      },
      {
        title: 'Keys are sharded across multiple nodes',
        description: 'Private keys are generated inside the TEE and never exported. They\'re split across multiple independent nodes using threshold cryptography. No single node — and no single person — ever holds a complete key.',
      },
      {
        title: 'Every node is verified by hardware',
        description: 'Before any node can participate in signing, it must pass remote attestation — a cryptographic proof from the CPU that its software hasn\'t been tampered with.',
      },
      {
        title: 'No single point of failure or control',
        description: 'Signing requires multiple TEE nodes to cooperate. No operator, cloud provider, or compromised server can unilaterally access your keys or execute transactions.',
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
