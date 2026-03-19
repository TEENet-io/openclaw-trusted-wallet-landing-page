import { ContentData } from './types'

export const zh: ContentData = {
  locale: 'zh',
  meta: {
    title: '给 OpenClaw 的可信安全钱包 | TEENet Secure Wallet',
    description: '通过对话创建和使用链上钱包，为敏感操作设置规则，并通过 Passkey 完成授权，由 TEENet 提供可信执行能力。',
    ogLocale: 'zh_CN',
  },
  header: {
    brandName: 'TEENet Secure Wallet',
    nav: [
      { label: '产品', href: '#product' },
      { label: '如何工作', href: '#how-it-works' },
      { label: '安全与授权', href: '#security' },
      { label: '开发者', href: '#developers' },
      { label: '常见问题', href: '#faq' },
    ],
    ctaPrimary: '申请试用',
    ctaSecondary: '查看 Demo',
  },
  hero: {
    eyebrow: '面向 OpenClaw 用户、开发者与创业者',
    headline: '一个让你放心交给 Agent 的钱包',
    subheadline: '日常操作交给 Agent，重要的时候你来点头。',
    chips: ['密钥始终受到保护', 'Agent 必须遵守你的规则', '敏感操作需要你的批准', '用 Passkey 完成确认'],
    ctaPrimary: '加入 Beta',
    ctaSecondary: '观看演示',
    supporting: '让 Agent 处理日常钱包操作；涉及敏感动作时，通过受保护的签名与审批流程保持控制权。',
    trustLine: '为 OpenClaw 而生，由 TEENet 提供安全保障。',
  },
  whyThisMatters: {
    transition: '你想让 Agent 帮你做事，不是替你做主。',
    title: '为什么你会真的想用这个钱包',
    subtitle: '因为 Agent 用钱包这件事，既要真的有用，也要始终可控。',
    cards: [
      { title: '让 Agent 真正帮你做事', description: '查余额、准备交易、处理日常操作——不用每一步都自己完成。' },
      { title: '该管住的，始终管得住', description: 'Agent 只能在你设定的规则里行动。转账、合约交互和其他敏感操作，不会在你看不见的地方越界发生。' },
      { title: '重要的时候，你来确认', description: '当操作需要你点头时，用熟悉的 Passkey 流程快速确认，不把安全变成额外负担。' },
    ],
    passkey: {
      tooltipTitle: '为什么这里用 Passkey？',
      tooltipBody: '对于高风险的 Agent 操作，安全最佳实践强调由人来确认；而 Passkey 提供了更抗钓鱼、更自然的确认体验。',
      tooltipRef: '基于 OWASP、NIST 和 FIDO 的安全指引。',
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: '从聊天到执行，控制始终在线',
    subtitle: '告诉 Agent，规则先检查，需要时你再确认。',
    steps: [
      {
        title: '告诉 Agent 你要做什么',
        description: '在 OpenClaw 里发起一个简单请求。',
      },
      {
        title: '规则先检查这次操作',
        description: '限额和批准要求会自动生效。',
      },
      {
        title: '需要时，再由你确认',
        description: '当操作需要你点头时，用 Passkey 快速确认。',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: 'Why you can trust it',
    title: '最关键的部分，始终受到保护',
    subtitle: '因为钱包里最敏感的部分，不会交给 Agent 或普通后端单独处理。',
    supportingLine: '在最关键的钱包控制环节，由 TEENet 提供保护。',
    cards: [
      {
        title: '密钥和签名权不暴露',
        description: '签名在受保护环境中完成，不交给 Agent，也不交给普通后端直接处理。',
      },
      {
        title: '规则不是建议，而是硬约束',
        description: '限额、合约限制和审批要求会在执行前生效，不会被 Agent 绕过去。',
      },
      {
        title: '重要的时候，决定权回到你手里',
        description: '当敏感操作需要你点头时，用熟悉的 Passkey 流程快速确认。',
      },
      {
        title: '没有单一后端能拿到全部控制权',
        description: '关键的钱包操作，不会只依赖某一个普通服务单独决定。',
      },
    ],
  },
  developers: {
    eyebrow: 'For developers and builders',
    title: '在 GitHub 上查看这个钱包',
    subtitle: '先看清钱包应用和 skills 的组织方式，再基于它构建自己的 OpenClaw 流程。',
    supportingLine: '从代码开始理解，再把这套流程接进你自己的产品、Agent 或用户体验。',
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '查看文档',
    points: [
      { title: '看应用怎么组织', description: '查看钱包操作、审批流程和用户交互是如何串起来的。' },
      { title: '看 skills 怎么接入', description: '理解 Agent 的动作是如何连接到钱包能力上的。' },
      { title: '基于它继续构建', description: '把应用逻辑和 skills 改造成你自己的 OpenClaw 场景。' },
    ],
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: '这是什么产品？',
        answer: 'TEENet Secure Wallet 是为 OpenClaw 打造的钱包应用，让用户通过对话创建和管理链上钱包、为执行设置规则、并通过 Passkey 授权敏感操作。它运行在 TEENet 可信执行底座上。',
      },
      {
        question: '它和普通钱包有什么区别？',
        answer: '与普通钱包不同，TEENet Secure Wallet 通过规则强制执行边界，并要求对敏感操作进行独立的 Passkey 授权。钱包逻辑运行在可信执行环境中，而非标准后端。',
      },
      {
        question: '每个操作都需要审批吗？',
        answer: '不需要。在预定义规则范围内的日常操作无需中断即可执行。只有超出阈值或与白名单外合约交互的操作才会触发审批。',
      },
      {
        question: '审批是怎么运作的？',
        answer: '当敏感操作被触发时，你会在聊天中收到授权链接。打开授权页面，通过 Passkey 或生物识别验证。只有验证成功后操作才会继续。',
      },
      {
        question: '为什么这套授权值得信任？',
        answer: '授权不是聊天回复——而是使用 Passkey 的独立验证步骤。规则定义的是真正的执行边界，不是 UI 提示。而且钱包逻辑运行在 TEENet 上，一个硬件保护的可信执行环境，信任是可验证的。',
      },
      {
        question: '它是完全开源的吗？',
        answer: '应用集成层是开放的。TEENet 运行时本身不开源。该产品提供可信执行能力，而不要求整个技术栈开源。',
      },
    ],
  },
  finalCTA: {
    headline: '更强能力，同等控制。',
    body: [
      '用对话管理钱包。',
      '用规则控制风险。',
      '用 Passkey 批准关键动作。',
    ],
    ctaPrimary: '申请试用',
    ctaSecondary: '查看 Demo',
    supporting: '为 OpenClaw 而生，由 TEENet 提供可信执行能力',
  },
  footer: {
    brandLine: 'TEENet Secure Wallet',
    linkGroups: [
      {
        title: '产品',
        links: [
          { label: '产品', href: '#product' },
          { label: '如何工作', href: '#how-it-works' },
          { label: '安全与授权', href: '#security' },
        ],
      },
      {
        title: '开发者',
        links: [
          { label: '开发者', href: '#developers' },
          { label: '常见问题', href: '#faq' },
        ],
      },
      {
        title: '法律',
        links: [
          { label: '隐私政策', href: '#' },
          { label: '使用条款', href: '#' },
          { label: '联系我们', href: '#' },
        ],
      },
    ],
    bottomLine: '为 OpenClaw 而生，由 TEENet 提供支持。',
  },
  betaForm: {
    title: '申请试用',
    placeholder: '请输入邮箱地址',
    submit: '提交',
    success: '感谢！我们会尽快联系您。',
    error: '请输入有效的邮箱地址。',
    close: '关闭',
  },
}
