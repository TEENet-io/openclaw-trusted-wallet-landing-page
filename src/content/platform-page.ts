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
  inlineLink?: { label: string; href: string }
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
      'You just saw a wallet where an AI agent manages assets without ever touching a private key. Spending limits enforced by hardware. Approval flows no backend can bypass.',
      'That security model isn\u2019t specific to wallets \u2014 or even to blockchain keys. Any secret your agent needs to act on the world (private keys, API keys, OAuth tokens) faces the same risks.',
      'TEENet is the infrastructure that makes it possible.',
    ],
  },

  problems: {
    title: 'If your agent touches secrets, you have a problem',
    painPoints: [
      {
        title: 'Your secrets live in your infrastructure',
        description:
          'Your secrets sit in .env files, databases, or server memory. One breach \u2014 a vulnerability, a misconfiguration, an insider \u2014 and they\u2019re gone. This applies to private keys, API keys, OAuth tokens, and any credential your agent needs.',
      },
      {
        title: 'Your security logic can be bypassed',
        description:
          'You write transfer limits, allowlists, and approval checks into your code. But that code runs on an ordinary server \u2014 anyone with access can modify it, skip the checks, and call signing directly. Your security is only as strong as your deployment environment.',
      },
      {
        title: 'You can\u2019t prove you won\u2019t cheat',
        description:
          'Even if you would never misuse a user\u2019s secrets, you have no technical way to prove it. \u201CTrust me\u201D is a promise, not a guarantee.',
      },
    ],
  },

  solutions: {
    title: 'Hardware-enforced trust, not promises',
    items: [
      {
        title: 'Secrets never leave the hardware boundary',
        description:
          'Secrets are generated inside Trusted Execution Environments (TEEs) and never exported. The CPU enforces memory isolation \u2014 no external process, no OS, no operator can read them. Even if the server is fully compromised, the secrets stay inaccessible.',
      },
      {
        title: 'Code integrity guaranteed by hardware',
        description:
          'Your application runs inside the TEE. The hardware guarantees the running code is exactly the code that was verified \u2014 it cannot be modified, replaced, or bypassed at runtime. The security logic you write runs with the same hardware-enforced integrity as the rest of your application.',
      },
      {
        title: 'Provably unable to cheat',
        description:
          'TEENet combines hardware isolation (TEE) with threshold signatures (TSS) and multi-party computation (MPC) to shard keys across multiple independent nodes. No single party \u2014 including the operator \u2014 can reconstruct a key or sign alone. Even physical compromise of any single node yields only a useless shard, not a complete key. \u201CWe can\u2019t access your secrets\u201D becomes a hardware-enforced fact, verifiable through remote attestation.',
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
      'You could spin up your own TEE instance with Intel TDX or AMD SEV. But going from a single enclave to a production system means solving key sharding, multi-party signing, mutual attestation, and node failover on your own.',
      'TEENet handles all of this so you can focus on your application \u2014 the security of a distributed TEE network with the convenience of a managed service.',
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
        title: 'Documentation',
        description: 'Full platform documentation, SDK reference, and integration guides:',
        inlineLink: {
          label: 'https://teenet-io.github.io',
          href: 'https://teenet-io.github.io',
        },
      },
    ],
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
      '你刚刚看到了一个钱包——AI Agent 在完全不接触私钥的情况下管理资产。支出限额由硬件强制执行。审批流程无法被任何后端绕过。',
      '这种安全模型并不只适用于钱包——甚至不只适用于区块链密钥。任何你的 Agent 需要用来与外部世界交互的秘密（私钥、API key、OAuth token）都面临同样的风险。',
      'TEENet 就是让这一切成为可能的基础设施。',
    ],
  },

  problems: {
    title: '如果你的 Agent 接触秘密，你就有麻烦了',
    painPoints: [
      {
        title: '你的秘密就在你自己的基础设施里',
        description:
          '你的秘密放在 .env 文件、数据库，或者服务器的内存中。一次攻破——一个漏洞、一次配置失误、一个内部人员——它们就没了。这适用于私钥、API key、OAuth token，以及你的 Agent 需要的任何凭证。',
      },
      {
        title: '你的安全逻辑可以被绕过',
        description:
          '你把转账限额、白名单和审批检查写在代码里。但这些代码运行在普通的服务器上——任何能访问这台服务器的人都可以修改代码、跳过检查，直接调用签名。你的安全性只取决于部署环境的牢靠程度。',
      },
      {
        title: '你无法证明自己不会作恶',
        description:
          '即使你绝不会滥用用户的秘密，你也没有任何技术手段可以证明这一点。"请相信我"只是承诺，而不是保证。',
      },
    ],
  },

  solutions: {
    title: '硬件强制的信任，而不是承诺',
    items: [
      {
        title: '秘密永远不会离开硬件边界',
        description:
          '秘密在可信执行环境（TEE）内生成，永远不会被导出。CPU 强制执行内存隔离——任何外部进程、操作系统或运营方都无法读取它们。即使服务器被完全攻破，秘密仍然无法被访问。',
      },
      {
        title: '代码完整性由硬件保证',
        description:
          '你的应用在 TEE 内运行。硬件保证正在运行的代码与经过验证的代码完全一致——运行时无法被修改、替换或绕过。你写下的安全逻辑与应用的其余部分享有同等级别的硬件强制完整性。',
      },
      {
        title: '可证明无法作恶',
        description:
          'TEENet 将硬件隔离（TEE）与门限签名（TSS）和多方安全计算（MPC）相结合，将密钥分片到多个独立节点上。没有任何单一方——包括运营方——能独自重建密钥或完成签名。即使某个节点被物理攻破，攻击者得到的也只是一个无用的分片，而非完整密钥。"我们无法访问你的秘密"成为一项由硬件强制执行的事实，可通过远程证明进行验证。',
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
      '你当然可以自己用 Intel TDX 或 AMD SEV 启动一个 TEE 实例。但从单个 enclave 走向生产系统，意味着你要独自解决密钥分片、多方签名、相互证明以及节点故障切换等难题。',
      'TEENet 已经替你把这些全部处理好，让你能够专注在自己的应用上——分布式 TEE 网络的安全特性，以及托管服务的便利。',
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
        title: '文档',
        description: '完整的平台文档、SDK 参考和集成指南：',
        inlineLink: {
          label: 'https://teenet-io.github.io',
          href: 'https://teenet-io.github.io',
        },
      },
    ],
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
