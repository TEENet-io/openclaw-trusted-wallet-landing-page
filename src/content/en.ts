import { ContentData } from './types'

export const en: ContentData = {
  locale: 'en',
  meta: {
    title: 'A Trusted Wallet for Agentic Applications | TEENet Wallet',
    description: 'An open-source alpha wallet reference app for agentic applications. Explore the code or try the limited testnet alpha at wallet.teenet.app.',
    ogLocale: 'en_US',
  },
  header: {
    brandName: 'TEENet Wallet',
    nav: [
      { label: 'Wallet', href: '#product' },
      { label: 'Developers', href: '#developers' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Security', href: '#security' },
      { label: 'TEENet', href: '#teenet' },
    ],
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Open Alpha App',
  },
  hero: {
    eyebrow: 'For developers building agentic applications',
    headline: 'An Open-Source Wallet\nfor Agentic Applications',
    subheadline: 'Read the alpha reference app, fork the flow, or try the limited testnet alpha. TEENet keeps risky actions behind hardware-enforced rules and Passkey approval.',
    badges: ['Open source', 'Alpha', 'Testnet only', 'First 500 users'],
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Open Alpha App',
    tagline: 'Limited testnet alpha is live at wallet.teenet.app.',
    flowDiagram: {
      nodes: [
        { title: 'Agent acts', subtitle: 'Send 0.8 tETH' },
        { title: 'Rules check', subtitle: 'Exceeds 0.1 tETH limit' },
        { title: 'You approve', subtitle: 'Passkey confirmed' },
      ],
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'One action, three checks',
    subtitle: 'The agent prepares the transaction, TEENet checks policy, and you approve only when needed.',
    steps: [
      {
        title: 'The agent prepares the action',
        description: 'You describe the goal. The agent handles the transaction details.',
      },
      {
        title: 'TEENet checks policy inside the TEE',
        description: 'Before anything is signed, the policy runs inside hardware-protected execution, not in the app.',
      },
      {
        title: 'You approve only when needed',
        description: 'Actions outside your limits require Passkey approval. Routine actions stay automatic.',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: 'Why you can trust it',
    title: 'Control that sits outside the app',
    subtitle: 'Rules, keys, and approval checks live in TEENet\'s protected control layer, not in ordinary backend code.',
    learnMoreText: 'Learn more about TEENet',
    cards: [
      {
        title: 'Wallet logic runs inside TEEs',
        description: 'Rule checks, authorization, and signing execute inside hardware-protected enclaves instead of normal server memory.',
      },
      {
        title: 'Keys stay sharded',
        description: 'Private keys are created inside TEEs, never exported, and split across independent nodes with threshold cryptography.',
      },
      {
        title: 'Every node must attest first',
        description: 'Before a node can join signing, it has to prove through hardware attestation that the expected code is running.',
      },
      {
        title: 'No one signs alone',
        description: 'Multiple attested nodes must cooperate, so no single operator, cloud provider, or compromised server can sign on its own.',
      },
    ],
  },
  developers: {
    eyebrow: 'For developers and builders',
    title: 'Open source. Built to be forked.',
    subtitle: 'Start with the wallet app, approval flow, and agent skills. Use the repo as your reference app or your base build.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Read the docs',
    points: [
      { title: 'App structure', description: 'Inspect wallet actions, approval flows, and Passkey integration without reverse-engineering the stack.' },
      { title: 'Agent skills', description: 'Reuse the built-in skills for transfers, balance checks, and contract calls, or replace them with your own.' },
      { title: 'Fork and build', description: 'Swap the UI, change the rules, and connect your own agent without starting from scratch.' },
    ],
  },
  beyondWallet: {
    eyebrow: 'BEYOND THE WALLET',
    title: 'The wallet is the first app. TEENet is the platform.',
    description: 'TEENet provides the hardware-isolated runtime, managed custody, and rule enforcement underneath the wallet. The same control layer can power other agentic applications that need to protect secrets and gate sensitive actions.',
    tags: ['Hardware-isolated runtime', 'Managed key custody', 'Hardware-enforced access control'],
    cta: 'Explore TEENet Platform',
  },
  finalCTA: {
    title: 'Start with the wallet. Keep TEENet in view.',
    subtitle: 'Read the code, try the limited alpha app, then dig into the platform behind it.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Open Alpha App',
    ctaPlatform: 'Explore TEENet Platform',
    supporting: 'Limited alpha registration now open for the first 500 testnet users.',
  },
  footer: {
    brandName: 'TEENet Wallet',
    brandLine: 'Open-source alpha wallet and reference app for agentic applications. Testnet only.',
    linkGroups: [
      {
        title: 'Wallet',
        links: [
          { label: 'Wallet', href: '#product' },
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Security', href: '#security' },
          { label: 'Open alpha app', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: 'Docs', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
          { label: 'TEENet Platform', href: '/en/platform' },
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
    copyright: '\u00a9 2026 TEENet Wallet',
  },
}
