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
    learnMoreText: 'Learn more about TEENet',
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
    title: 'Open source. Ready to fork.',
    subtitle: 'The wallet app and agent skills are fully open source. Clone it, customize it, or use it as a reference for your own agent workflow.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Read the docs',
    points: [
      { title: 'App structure', description: 'Wallet actions, approval flows, and Passkey integration — see how it\'s wired together.' },
      { title: 'Agent skills', description: 'Pre-built skills for transfers, balance checks, and contract interactions. Extend or replace them.' },
      { title: 'Fork and build', description: 'Use the wallet as a starting point. Swap the UI, change the rules, connect your own agent.' },
    ],
  },
  beyondWallet: {
    eyebrow: 'BEYOND THE WALLET',
    title: 'TEENet is a platform — not just a wallet backend',
    description: 'This wallet is one application built on TEENet. The platform provides a hardware-isolated runtime and managed key custody for any application that needs to protect secrets and enforce rules — from AI agent wallets to autonomous trading systems to cross-chain bridges.',
    tags: ['Hardware-isolated runtime', 'Managed key custody', 'Hardware-enforced access control'],
    cta: 'Explore TEENet Platform',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions you may still have',
    subtitle: 'About the wallet, approvals, and building on TEENet.',
    items: [
      {
        question: 'What makes this different from a regular wallet?',
        answer: 'Most wallets either give your agent full access or no access. This wallet lets your agent handle routine actions while enforcing transfer limits, contract allowlists, and approval requirements inside a hardware-protected environment — not just in application code.',
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
      {
        question: 'Can I build my own agent app on TEENet?',
        answer: 'Yes. TEENet is a general-purpose platform for applications that need hardware-isolated execution, managed key custody, and configurable approval policies. The wallet is one example — you can build any AI agent application that needs secure key management and rule enforcement. Start with the SDK at github.com/TEENet-io/teenet-sdk.',
      },
      {
        question: 'Can I export my private keys?',
        answer: 'No. During the Beta period, private keys are generated and stored exclusively inside hardware-protected environments and cannot be exported. This is a security decision to protect your assets while the platform matures — it ensures your keys are never exposed to software or operators. Your on-chain assets are always yours: you can transfer them to any external wallet at any time. We will revisit this policy based on community feedback and security assessments as the platform evolves.',
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
    ctaPlatform: 'Explore TEENet',
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
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
          { label: 'TEENet Platform', href: '/en/platform' },
          { label: 'Developer Preview', href: '#developers' },
          { label: 'Contact', href: 'mailto:contact@teenet.io' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Watch Demo', href: '#' },
          { label: 'Join Beta', href: '#' },
          { label: 'OpenClaw', href: '#' },
          { label: 'TEENet', href: 'https://github.com/TEENet-io' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/en/privacy' },
          { label: 'Terms', href: '/en/terms' },
          { label: 'Contact', href: 'mailto:contact@teenet.io' },
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
