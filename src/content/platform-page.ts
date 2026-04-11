export interface PainPoint {
  title: string
  description: string
}

export interface Solution {
  title: string
  description: string
}

export interface GetStartedPath {
  title: string
  description: string
  links?: { label: string; href: string }[]
}

export interface PlatformDiagram {
  platformLabel: string
  appLabel: string
  appSublabel: string
  sdkLabel: string
  custodyLabel: string
  custodyCapabilities: string[]
  hardwareLabel: string
  hardwarePlatforms: string
  attestationNote: string
}

export interface PlatformPageContent {
  meta: {
    title: string
    description: string
  }
  backLink: string
  title: string
  fromWallet: {
    title: string
    body: string[]
  }
  problems: {
    title: string
    painPoints: PainPoint[]
  }
  solutions: {
    title: string
    items: Solution[]
  }
  diagram: PlatformDiagram
  whyPlatform: {
    title: string
    body: string[]
  }
  getStarted: {
    title: string
    description: string
    paths: GetStartedPath[]
  }
  hardware: {
    title: string
    body: string[]
    docNote: string
  }
  contact: {
    title: string
    body: string[]
    email: string
    followLabel: string
    socialLinks: { label: string; href: string }[]
  }
}

export const platformPageEn: PlatformPageContent = {
  meta: {
    title: 'TEENet Platform | TEENet OpenClaw Wallet',
    description:
      'The infrastructure behind the TEENet OpenClaw Wallet. Hardware-enforced trust for any application where autonomous agents handle keys, signing, and sensitive operations.',
  },
  backLink: '← Back to Home',
  title: 'TEENet Platform',

  fromWallet: {
    title: 'The wallet was just one example',
    body: [
      'You just saw a wallet where an AI agent can manage assets without ever touching a private key. Spending limits enforced by hardware. Approval flows that no backend can bypass. Keys that not even the operator can access.',
      'That security model isn\u2019t specific to wallets. Any application where an autonomous agent handles sensitive operations \u2014 signing transactions, managing keys, enforcing rules \u2014 faces the same fundamental problems.',
      'The same problem extends beyond blockchain keys. API keys, OAuth tokens, database credentials \u2014 any secret your agent needs to act on the world faces the same risks: leaked from .env files, exposed in logs, or stolen from compromised servers.',
      'TEENet is the infrastructure that makes it possible.',
    ],
  },

  problems: {
    title: 'If your agent touches secrets, you have a problem',
    painPoints: [
      {
        title: 'Your keys live in your infrastructure',
        description:
          'Your private keys sit in .env files, databases, or memory on a server you manage. If that server is compromised \u2014 through a vulnerability, a misconfiguration, or a malicious insider \u2014 the keys are gone. There is no second chance. This isn\u2019t just about blockchain keys. The same risk applies to API keys, OAuth tokens, and any other credential your agent needs to do its job.',
      },
      {
        title: 'Your security logic can be bypassed',
        description:
          'You write transfer limits, contract allowlists, and approval checks into your code. But that code runs on an ordinary server. Anyone with access to the server can modify the code, skip the checks, and call the signing function directly. Your security is only as strong as your deployment environment.',
      },
      {
        title: 'You can\u2019t prove you won\u2019t cheat',
        description:
          'Even if you would never misuse a user\u2019s keys, you have no way to prove it. In a traditional architecture, \u201Ctrust me\u201D is a promise, not a guarantee. Your users have no technical basis to verify that you \u2014 the operator \u2014 cannot access their assets.',
      },
    ],
  },

  solutions: {
    title: 'Hardware-enforced trust, not promises',
    items: [
      {
        title: 'Keys never leave the hardware boundary',
        description:
          'Private keys are generated inside Trusted Execution Environments (TEEs) and never exported. The CPU enforces memory isolation \u2014 no external process, no operating system, no operator can read key material. Even if the server is fully compromised, the keys remain inaccessible.',
      },
      {
        title: 'Code integrity guaranteed by hardware',
        description:
          'Your application runs inside the TEE. The hardware guarantees that the code being executed is exactly the code that was verified \u2014 it cannot be modified, replaced, or bypassed at runtime. The security logic you write \u2014 limit checks, allowlists, approval requirements \u2014 runs with the same hardware-enforced integrity as the rest of your application.',
      },
      {
        title: 'Provably unable to cheat',
        description:
          'TEENet combines hardware isolation (TEE) with threshold signatures (TSS) and multi-party computation (MPC) to shard keys across multiple independent nodes. No single party \u2014 including the operator \u2014 can reconstruct a complete key or execute a signature alone. \u201CWe can\u2019t access your secrets\u201D is not a policy. It is a cryptographic and hardware-enforced fact, verifiable through remote attestation.',
      },
    ],
  },

  diagram: {
    platformLabel: 'TEENet Platform',
    appLabel: 'Your application',
    appSublabel: 'wallet, agent, oracle',
    sdkLabel: 'SDK',
    custodyLabel: 'Key Custody',
    custodyCapabilities: ['generation', 'storage', 'signing', 'access control'],
    hardwareLabel: 'Hardware TEE layer',
    hardwarePlatforms: 'Intel TDX  |  AMD SEV',
    attestationNote: 'with mutual attestation',
  },

  whyPlatform: {
    title: 'Why a platform, not a toolkit',
    body: [
      'You could spin up your own TEE instance with Intel TDX or AMD SEV. But going from a single enclave to a production system means solving hard problems on your own: key generation and storage inside the enclave, key sharding across multiple nodes, multi-party signing coordination, mutual attestation between nodes, and failover when nodes go down.',
      'TEENet handles all of this so you can focus on your application. You get the security properties of a distributed TEE network \u2014 and the convenience of a managed service \u2014 without building one from scratch.',
    ],
  },

  getStarted: {
    title: 'Get started',
    description:
      'TEENet is currently in Developer Preview. We\u2019re working with a select group of developers to refine the platform and SDK.',
    paths: [
      {
        title: 'Explore the open-source wallet',
        description:
          'The TEENet OpenClaw Wallet is fully open source. Clone it, run it, read the code \u2014 no application needed.',
        links: [
          { label: 'OpenClaw Wallet on GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: 'Wallet Documentation', href: 'https://teenet-io.github.io/teenet-wallet/' },
        ],
      },
      {
        title: 'Apply for TEENet Developer Preview',
        description:
          'If you want to build your own application on TEENet, apply for early access. We\u2019ll review your use case and onboard selected developers with SDK access, documentation, and direct support.',
        links: [
          { label: 'Apply for Developer Preview', href: 'mailto:contact@teenet.io' },
        ],
      },
    ],
  },

  hardware: {
    title: 'Documentation and hardware support',
    body: [
      'TEENet currently supports:',
      '• Intel TDX (Trust Domain Extensions)',
      '• AMD SEV (Secure Encrypted Virtualization)',
      'Additional TEE platforms may be supported in the future.',
    ],
    docNote:
      'Full platform documentation \u2014 including SDK reference, integration guides, and architecture overview \u2014 will be available at the TEENet Doc Center (coming soon).',
  },

  contact: {
    title: 'Get in touch',
    body: ['Have questions about the platform, the SDK, or the Developer Preview?'],
    email: 'contact@teenet.io',
    followLabel: 'Follow our progress:',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/TEENet-io' },
      { label: 'Twitter', href: 'https://x.com/AiTeenet' },
    ],
  },
}

export const platformPageZh: PlatformPageContent = {
  meta: {
    title: 'TEENet 平台 | TEENet OpenClaw Wallet',
    description:
      'TEENet OpenClaw Wallet 背后的基础设施。为任何需要由自主 Agent 处理密钥、签名和敏感操作的应用提供硬件强制的信任。',
  },
  backLink: '← 返回首页',
  title: 'TEENet 平台',

  fromWallet: {
    title: '钱包只是其中一个例子',
    body: [
      '你刚刚看到了一个钱包——AI Agent 可以在完全不接触私钥的情况下管理资产。支出限额由硬件强制执行。审批流程无法被任何后端绕过。密钥连运营方本身都无法访问。',
      '这种安全模型并不只适用于钱包。任何由自主 Agent 处理敏感操作的应用——签署交易、管理密钥、执行规则——都面临同样的根本问题。',
      '这个问题也远不止于区块链密钥。API key、OAuth token、数据库凭证——任何你的 Agent 需要用来与外部世界交互的秘密，都面临同样的风险：从 .env 文件泄露、在日志中暴露，或是被从被攻破的服务器中窃取。',
      'TEENet 就是让这一切成为可能的基础设施。',
    ],
  },

  problems: {
    title: '如果你的 Agent 接触秘密，你就有麻烦了',
    painPoints: [
      {
        title: '你的密钥就在你自己的基础设施里',
        description:
          '你的私钥放在 .env 文件、数据库，或者你管理的某台服务器的内存中。一旦那台服务器被攻破——通过漏洞、配置错误或恶意内部人员——密钥就没了。没有第二次机会。而且这不仅仅是区块链密钥的问题。同样的风险也适用于 API key、OAuth token，以及你的 Agent 完成工作所需的任何其他凭证。',
      },
      {
        title: '你的安全逻辑可以被绕过',
        description:
          '你把转账限额、合约白名单和审批检查写在代码里。但这些代码运行在普通的服务器上。任何能访问这台服务器的人都可以修改代码、跳过检查，直接调用签名函数。你的安全性只取决于部署环境的牢靠程度。',
      },
      {
        title: '你无法证明自己不会作恶',
        description:
          '即使你绝不会滥用用户的密钥，你也没有办法证明这一点。在传统架构中，"请相信我"只是承诺，而不是保证。你的用户没有任何技术手段可以验证作为运营方的你无法接触他们的资产。',
      },
    ],
  },

  solutions: {
    title: '硬件强制的信任，而不是承诺',
    items: [
      {
        title: '密钥永远不会离开硬件边界',
        description:
          '私钥在可信执行环境（TEE）内生成，永远不会被导出。CPU 强制执行内存隔离——任何外部进程、操作系统或运营方都无法读取密钥材料。即使服务器被完全攻破，密钥仍然无法被访问。',
      },
      {
        title: '代码完整性由硬件保证',
        description:
          '你的应用在 TEE 内运行。硬件保证正在执行的代码与经过验证的代码完全一致——运行时无法被修改、替换或绕过。你写下的安全逻辑——限额检查、白名单、审批要求——与应用的其余部分享有同等级别的硬件强制完整性。',
      },
      {
        title: '可证明无法作恶',
        description:
          'TEENet 将硬件隔离（TEE）与门限签名（TSS）和多方安全计算（MPC）相结合，将密钥分片到多个独立节点上。没有任何单一方——包括运营方——能独自重建完整密钥或执行一次签名。"我们无法访问你的秘密"不是一条策略，而是一项密码学与硬件共同强制的事实，可通过远程证明进行验证。',
      },
    ],
  },

  diagram: {
    platformLabel: 'TEENet 平台',
    appLabel: '你的应用',
    appSublabel: '钱包、Agent、预言机',
    sdkLabel: 'SDK',
    custodyLabel: '密钥托管',
    custodyCapabilities: ['生成', '存储', '签名', '访问控制'],
    hardwareLabel: '硬件 TEE 层',
    hardwarePlatforms: 'Intel TDX  |  AMD SEV',
    attestationNote: '具备相互证明',
  },

  whyPlatform: {
    title: '为什么是平台，而不是工具包',
    body: [
      '你当然可以自己用 Intel TDX 或 AMD SEV 启动一个 TEE 实例。但从单个 enclave 走向生产系统意味着你要独自解决一堆难题：在 enclave 内生成和保管密钥、在多节点之间分片密钥、多方签名协调、节点之间的相互证明、以及节点故障时的切换。',
      'TEENet 已经替你把这些全部处理好，让你能够专注在自己的应用上。你可以获得分布式 TEE 网络的安全特性——以及托管服务的便利——而无需从头构建。',
    ],
  },

  getStarted: {
    title: '开始使用',
    description:
      'TEENet 目前处于 Developer Preview 阶段。我们正在与一批精选开发者合作，打磨平台和 SDK。',
    paths: [
      {
        title: '探索开源钱包',
        description:
          'TEENet OpenClaw Wallet 完全开源。克隆、运行、阅读代码——无需申请。',
        links: [
          { label: 'OpenClaw Wallet (GitHub)', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: '钱包文档', href: 'https://teenet-io.github.io/teenet-wallet/' },
        ],
      },
      {
        title: '申请 TEENet Developer Preview',
        description:
          '如果你想在 TEENet 上构建自己的应用，请申请早期访问。我们会审核你的用例，并为入选的开发者提供 SDK 访问、文档和直接支持。',
        links: [{ label: '申请 Developer Preview', href: 'mailto:contact@teenet.io' }],
      },
    ],
  },

  hardware: {
    title: '文档与硬件支持',
    body: [
      'TEENet 目前支持：',
      '• Intel TDX（Trust Domain Extensions）',
      '• AMD SEV（Secure Encrypted Virtualization）',
      '未来可能支持更多 TEE 平台。',
    ],
    docNote:
      '完整的平台文档——包括 SDK 参考、集成指南和架构概览——将在 TEENet Doc Center 上线（即将推出）。',
  },

  contact: {
    title: '联系我们',
    body: ['对平台、SDK 或 Developer Preview 有疑问？'],
    email: 'contact@teenet.io',
    followLabel: '关注我们的进展：',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/TEENet-io' },
      { label: 'Twitter', href: 'https://x.com/AiTeenet' },
    ],
  },
}

export function getPlatformPageContent(locale: string): PlatformPageContent {
  return locale === 'zh' ? platformPageZh : platformPageEn
}
