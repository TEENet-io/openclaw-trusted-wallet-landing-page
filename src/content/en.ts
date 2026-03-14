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
    headline: 'A Trusted Wallet for OpenClaw',
    subheadline: 'Create and use on-chain wallets through chat. Set rules for transfers and contract interactions, and approve sensitive actions with Passkey.',
    supporting: "A wallet application running on TEENet's trusted runtime.",
    tags: ['Chat-native wallet', 'Rule-based execution', 'Passkey approvals', 'Built on TEENet'],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
  },
  whyThisMatters: {
    title: 'An agent being able to use a wallet does not mean it should have unlimited authority.',
    intro: 'Once OpenClaw interacts with on-chain assets, the key question is not capability — it is control. Which actions run automatically? Which require approval? Which contracts are allowed?',
    items: [
      { title: 'Execution boundaries matter', description: 'Not every action should execute freely. Users need clear control over what the agent can do with their assets.' },
      { title: 'Some actions need approval', description: 'Transfers above a threshold, interactions with unfamiliar contracts — these should require explicit user confirmation.' },
      { title: 'Contracts should be restricted', description: 'Not all contract addresses should be accessible. Allowlists define what the agent can interact with.' },
      { title: 'Rule changes need oversight', description: 'Modifying execution rules is itself a sensitive action. Changes to thresholds or allowlists may require their own approval.' },
    ],
  },
  howItWorks: {
    title: 'Use Wallets with OpenClaw in Three Steps',
    steps: [
      {
        title: 'Create or use wallets through chat',
        description: 'Create wallets on supported chains like Ethereum or Solana. Check balances, review transaction history, initiate transfers and contract calls — all through conversation.',
      },
      {
        title: 'Set rules before the agent takes action',
        description: 'Define transfer thresholds that require approval, specify allowed contract addresses, flag sensitive actions for confirmation, and optionally require authorization for rule changes themselves.',
      },
      {
        title: 'Approve sensitive actions with Passkey before execution',
        description: 'When an action triggers a rule, you receive an approval link in chat. Open the approval page, verify with Passkey or biometrics, and the action proceeds only after successful approval.',
      },
    ],
  },
  coreFeatures: {
    title: 'Not just another wallet UI, but a control model designed for the agent era',
    features: [
      {
        title: 'Chat-native wallet experience',
        description: 'Create wallets, check balances and history, initiate transfers and contract calls — all through natural conversation with OpenClaw.',
      },
      {
        title: 'Rules apply before execution',
        description: 'Transfer thresholds, contract allowlists, and high-risk action restrictions form the default execution boundary. Policy is enforced, not suggested.',
      },
      {
        title: 'Real authorization, not a casual chat confirmation',
        description: 'Sensitive actions generate an approval link leading to a dedicated approval page. Verification uses Passkey — execution proceeds only after approval.',
      },
      {
        title: 'Trusted execution, not just a front-end prompt',
        description: "Sensitive wallet logic runs on TEENet's trusted runtime. Authorization and execution are tied together at the infrastructure level, not layered on as a UI flow.",
      },
    ],
  },
  rulesAndApprovals: {
    title: 'Automate the routine. Approve the risky.',
    scenarios: [
      {
        title: 'Routine, low-risk actions',
        description: 'Actions within predefined rules execute normally. No interruption, no delay.',
        level: 'low',
      },
      {
        title: 'Transfers above a threshold',
        description: 'Triggers an approval link. The action waits for Passkey confirmation before proceeding.',
        level: 'medium',
      },
      {
        title: 'Contract calls outside the allowlist',
        description: 'Blocked directly or escalated for stronger approval. Unapproved contracts cannot execute.',
        level: 'high',
      },
    ],
  },
  trustSection: {
    title: 'Why is this approval flow trustworthy?',
    cards: [
      {
        title: 'Approval is independent, not just a chat reply',
        description: 'Sensitive actions do not continue because of a casual chat reply. Users must complete a separate approval flow using Passkey or biometrics.',
      },
      {
        title: 'Rules are not UI hints — they define execution boundaries',
        description: 'Thresholds and allowlists are not cosmetic. They determine whether execution can proceed. Requests can be blocked or escalated based on policy.',
      },
      {
        title: 'Execution relies on a trusted runtime, not just a regular backend',
        description: 'TEENet uses hardware-protected isolated execution for sensitive wallet logic. Runtime trust is verifiable, not merely claimed.',
      },
    ],
    closingLine: 'This means your agent can use the wallet, but it cannot bypass your approval boundary.',
  },
  builtOnTEENet: {
    title: 'Built not only for convenience, but for trusted execution boundaries',
    points: [
      'This is a wallet application built on TEENet — not a fully open-source wallet stack.',
      'It provides wallet capabilities to OpenClaw at the application layer.',
      'Sensitive approval flows use Passkey for user verification.',
      "Execution relies on TEENet's trusted runtime and policy capabilities.",
    ],
    closingPhrase: 'Open integration, trusted execution.',
    learnMoreText: 'Learn more about TEENet trust and security',
  },
  developerSection: {
    title: 'Open integration surfaces for OpenClaw developers',
    description: 'Skills and integration surfaces are available for developers to integrate wallet interactions, rule controls, and approval flows. TEENet runtime itself is not open source, but application-facing integration is open and straightforward.',
    ctaPrimary: 'Developer Preview',
    ctaSecondary: 'Request Access',
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
    headline: 'Give OpenClaw more execution power — without giving up control.',
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
