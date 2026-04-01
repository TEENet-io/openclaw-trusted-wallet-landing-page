import { ContentData } from './types'

export const zh: ContentData = {
  locale: 'zh',
  meta: {
    title: '给 OpenClaw 的可信安全钱包 | TEENet OpenClaw Wallet',
    description: '通过对话创建和使用链上钱包，为敏感操作设置规则，并通过 Passkey 完成授权，由 TEENet 提供可信执行能力。',
    ogLocale: 'zh_CN',
  },
  header: {
    brandName: 'TEENet OpenClaw Wallet',
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
    eyebrow: '面向开发者、创业者与 OpenClaw 用户',
    headline: '一个让你放心交给 Agent 的钱包',
    subheadline: '日常操作交给 Agent，重要的时候你来点头。',
    badges: ['开源', '你的规则，硬件级执行', 'Passkey 授权'],
    ctaPrimary: '加入 Beta',
    ctaSecondary: '观看演示',
    tagline: '为 OpenClaw 而生，由 TEENet 提供安全保障。',
    flowDiagram: {
      nodes: [
        { title: 'Agent 发起操作', subtitle: '发送 0.8 ETH' },
        { title: '规则检查', subtitle: '超过 0.1 ETH 限额' },
        { title: '你来确认', subtitle: 'Passkey 已验证' },
      ],
    },
  },
  whyThisMatters: {
    transition: '当你的 Agent 有了钱包，会发生什么',
    title: '为什么你会真的想用这个钱包',
    subtitle: '日常操作交给 Agent，重要的事你来把关。下面就是它实际的样子。',
    cards: [
      { title: '让 Agent 真正帮你做事', description: '查余额、转账、查看最近交易——日常钱包操作交给 Agent，你不用亲自动手。' },
      { title: '该管住的，始终管得住', description: '设定转账限额、限制 Agent 可以交互的合约、要求规则变更需审批——一切由你配置。' },
      { title: '重要的时候，你来确认', description: '当操作超出你设定的规则，你会收到清晰的审核提示。一次 Passkey 确认即可完成——不用付 gas 费，不用多签协调。' },
    ],
    passkey: {
      tooltipTitle: '为什么这里用 Passkey？',
      tooltipBody: '对于高风险的 Agent 操作，安全最佳实践强调由人来确认；而 Passkey 提供了更抗钓鱼、更自然的确认体验。',
      tooltipRef: '基于 OWASP、NIST 和 FIDO 的安全指引。',
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: '一笔真实交易，从头到尾',
    subtitle: 'Agent 准备一笔转账，钱包对照你的规则检查，你用 Passkey 确认。',
    steps: [
      {
        title: '你说，Agent 来准备',
        description: '用自然语言描述你的需求，Agent 负责处理区块链交互。',
      },
      {
        title: '规则在 TEE 内完成检查',
        description: '在任何签名发生之前，你的规则会在硬件保护的环境中被执行——而不是由 Agent 来执行。',
      },
      {
        title: '你用 Passkey 确认——或拒绝',
        description: '超出限额的操作需要你的批准。限额内的日常操作会自动通过。',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: 'Why you can trust it',
    title: '最关键的部分，始终受到保护',
    subtitle: '因为钱包 App 不是最终裁判。敏感操作的批准会在 App 之下由 TEENet 完成验证。',
    supportingLine: '所以即使 App 或后端出了问题，也不能单独批准关键操作。',
    learnMoreText: '了解 TEENet 如何保护你的钱包',
    cards: [
      {
        title: '钱包 App 不能自己批准通过',
        description: '敏感操作的批准会由 TEENet 的受保护控制层完成验证，而不是由钱包 App 单独放行。',
      },
      {
        title: '密钥和签名权不暴露',
        description: '签名在受保护环境中完成，不交给 Agent，也不交给普通后端直接处理。',
      },
      {
        title: '规则不是建议，而是硬约束',
        description: '限额、合约限制和审批要求会在执行前生效，不会被 Agent 绕过去。',
      },
      {
        title: '没有单一后端能绕过你',
        description: '关键的钱包操作，不会由某一个普通服务单独决定或放行。',
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
    eyebrow: 'FAQ',
    title: '你可能还会想问',
    subtitle: '下面这些问题，基本涵盖了大家最关心的：它怎么工作、什么时候需要批准，以及从哪里开始。',
    items: [
      {
        question: '它和普通钱包有什么不一样？',
        answer: '这不是一个在钱包外面套了聊天界面的产品。它是为 Agent 使用场景设计的：Agent 能帮你做事，但限额、审批和执行边界仍然存在。',
      },
      {
        question: '是不是每个操作都要批准？',
        answer: '不是。日常操作可以正常进行。只有当某个动作触发了你设定的规则，比如超出转账限额或属于敏感操作时，才需要你的批准。',
      },
      {
        question: 'Agent 可以自己转钱吗？',
        answer: 'Agent 只能在钱包绑定的规则和审批要求内行动，不会获得无限制的控制权。',
      },
      {
        question: '批准流程是怎么工作的？',
        answer: '当某个操作需要你点头时，你会先看到审核信息，然后通过独立的 Passkey 流程完成确认。',
      },
      {
        question: '为什么这里用 Passkey？',
        answer: '因为它能让重要确认更自然、更熟悉，同时把最终确认保留在用户自己手里。',
      },
      {
        question: '这也是给开发者做的吗？',
        answer: '是的。开发者和构建者可以在 GitHub 上查看钱包应用和 skills，并在此基础上扩展自己的 OpenClaw 流程。',
      },
      {
        question: '为什么这里的批准流程更值得信任？',
        answer: '因为批准不是只靠钱包 App 自己来执行。敏感操作会在 TEENet 的受保护控制层中完成验证，所以普通 App 或后端不能自己把它放行。',
      },
      {
        question: '我该怎么开始？',
        answer: '你可以先申请 Beta、观看演示，或者直接去 GitHub 看实现并开始构建。',
      },
    ],
    ctaBridge: '准备好试试看，或者直接开始构建了吗？',
  },
  finalCTA: {
    title: '准备好试试看，或者直接开始构建了吗？',
    subtitle: '让 OpenClaw agent 真正用上钱包，同时把控制感、安全确认和顺手的流程留在你手里。',
    ctaPrimary: '加入 Beta',
    ctaSecondary: '前往 GitHub',
    ctaTertiary: '观看演示',
    supporting: '为 OpenClaw 而生，在最关键的钱包控制环节提供保护。',
  },
  footer: {
    brandName: 'TEENet OpenClaw Wallet',
    brandLine: '为 OpenClaw 而生，在最关键的钱包控制环节提供保护。',
    linkGroups: [
      {
        title: '产品',
        links: [
          { label: '产品', href: '#product' },
          { label: 'How it works', href: '#how-it-works' },
          { label: '安全性', href: '#security' },
          { label: '常见问题', href: '#faq' },
        ],
      },
      {
        title: '开发者',
        links: [
          { label: 'GitHub', href: '#' },
          { label: '文档', href: '#' },
          { label: 'Developer Preview', href: '#developers' },
          { label: '联系我们', href: '#' },
        ],
      },
      {
        title: '资源',
        links: [
          { label: '观看演示', href: '#' },
          { label: '加入 Beta', href: '#' },
          { label: 'OpenClaw', href: '#' },
          { label: 'TEENet', href: '#' },
        ],
      },
      {
        title: '法务',
        links: [
          { label: '隐私', href: '#' },
          { label: '条款', href: '#' },
          { label: '联系我们', href: '#' },
        ],
      },
    ],
    copyright: '\u00a9 2026 TEENet OpenClaw Wallet',
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
