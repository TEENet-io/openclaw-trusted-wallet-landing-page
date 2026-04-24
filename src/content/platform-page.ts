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
    actions: { label: string; href: string }[]
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
}

export const platformPageEn: PlatformPageContent = {
  meta: {
    title: 'TEENet Platform | TEENet Wallet',
    description:
      'The builder-facing platform behind TEENet Wallet. Hardware-isolated execution, key custody, and policy enforcement for agentic applications.',
  },
  backLink: '← Back to Home',
  title: 'TEENet Platform',

  fromWallet: {
    title: 'A control layer for agentic applications',
    body: [
      'TEENet Platform provides hardware-isolated execution, managed custody, and policy enforcement for applications that handle secrets or sign requests.',
      'TEENet Wallet is one open-source example of what builders can run on top of it.',
    ],
    actions: [
      { label: 'Wallet on GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
      { label: 'Wallet Docs', href: 'https://teenet-io.github.io/teenet-wallet/' },
      { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
    ],
  },

  problems: {
    title: 'What breaks first when your app handles secrets',
    painPoints: [
      {
        title: 'Secrets sit in your infrastructure',
        description:
          'Private keys, API keys, and OAuth tokens end up in env files, databases, or ordinary server memory.',
      },
      {
        title: 'Policy checks are soft',
        description:
          'Allowlists, limits, and approval rules live in normal backend code and can be bypassed by anyone who controls the server.',
      },
      {
        title: 'Signing is a single point of failure',
        description:
          'If one service or node controls signing, one compromise can approve sensitive actions.',
      },
    ],
  },

  solutions: {
    title: 'What TEENet adds',
    items: [
      {
        title: 'Hardware-isolated execution',
        description:
          'Sensitive logic runs inside Trusted Execution Environments instead of ordinary backend memory.',
      },
      {
        title: 'Managed custody and policy enforcement',
        description:
          'Keys are created inside the TEE, stay there, and only sign when the policy you defined allows it.',
      },
      {
        title: 'Distributed signing with attested nodes',
        description:
          'Keys are sharded across attested nodes, removing single-node signing power.',
      },
    ],
  },

  diagram: {
    platformLabel: 'TEENet Platform',
    appLabel: 'Your application',
    appSublabel: 'wallet, agentic app, oracle',
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
      'A single enclave is not enough. TEENet packages sharding, attestation, distributed signing, and failover into one builder-facing platform.',
    ],
  },

  getStarted: {
    title: 'Start building',
    description:
      'The platform is still early. Today the best entry points are the wallet reference app, the docs, and the SDK.',
    paths: [
      {
        title: 'Explore the wallet reference app',
        description:
          'Read the open-source wallet, inspect the approval flow, and compare it with the live alpha app.',
        links: [
          { label: 'Wallet on GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: 'Wallet Documentation', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: 'Live Alpha App', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: 'Read docs and SDK',
        description: 'Use the platform docs and SDK reference as your builder entry point.',
        links: [
          { label: 'Platform Docs', href: 'https://teenet-io.github.io' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
        ],
      },
      {
        title: 'Talk with us early',
        description: 'If you are building an agentic application and need custody or policy primitives, reach out early.',
        links: [
          { label: 'Email Us', href: 'mailto:contact@teenet.io' },
          { label: 'TEENet GitHub', href: 'https://github.com/TEENet-io' },
        ],
      },
    ],
  },
}

export const platformPageZh: PlatformPageContent = {
  meta: {
    title: 'TEENet 平台 | TEENet Wallet',
    description:
      '面向 builder 的 TEENet 平台介绍。为 Agent 应用提供硬件隔离执行、密钥保管和策略控制。',
  },
  backLink: '← 返回首页',
  title: 'TEENet 平台',

  fromWallet: {
    title: '面向 Agent 应用的控制层',
    body: [
      'TEENet Platform 为需要处理秘密或发起签名的应用提供硬件隔离执行、托管式密钥保管和策略执行。',
      'TEENet Wallet 是一个开源示例，展示 builder 可以在这层平台之上运行什么。',
    ],
    actions: [
      { label: '钱包 GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
      { label: '钱包文档', href: 'https://teenet-io.github.io/teenet-wallet/' },
      { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
    ],
  },

  problems: {
    title: '你的应用一碰秘密，最先坏掉的是什么',
    painPoints: [
      {
        title: '秘密仍然放在你的基础设施里',
        description:
          '私钥、API key 和 OAuth token 最终还是会落在 .env、数据库或普通服务器内存里。',
      },
      {
        title: '策略检查其实很软',
        description:
          '白名单、限额和审批规则都写在普通后端代码里，只要有人控制服务器，就能绕过它们。',
      },
      {
        title: '签名权很容易变成单点',
        description:
          '如果签名权集中在一个服务或节点里，一次入侵就可能直接放行敏感操作。',
      },
    ],
  },

  solutions: {
    title: 'TEENet 补上的是什么',
    items: [
      {
        title: '硬件隔离执行',
        description:
          '敏感逻辑在 TEE 内运行，而不是在普通后端内存中运行。',
      },
      {
        title: '托管式密钥保管与策略执行',
        description:
          '密钥在 TEE 内生成并留在那里，只有满足你定义的策略时才会参与签名。',
      },
      {
        title: '基于证明的分布式签名',
        description:
          '密钥被分片到多个已证明节点上，从而去掉单点签名权。',
      },
    ],
  },

  diagram: {
    platformLabel: 'TEENet 平台',
    appLabel: '你的应用',
    appSublabel: '钱包、Agent 应用、预言机',
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
      '单个 enclave 不够用。TEENet 把分片、证明、分布式签名和故障切换打包成一个真正可用的 builder 平台。',
    ],
  },

  getStarted: {
    title: '开始构建',
    description:
      '平台还很早期。现阶段最好的入口是钱包参考实现、文档和 SDK。',
    paths: [
      {
        title: '先看钱包参考实现',
        description:
          '阅读开源钱包、理解审批流，并和线上 Alpha App 对照着看。',
        links: [
          { label: '钱包 (GitHub)', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: '钱包文档', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: '线上 Alpha App', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: '查看文档和 SDK',
        description: '从平台文档和 SDK 参考开始，了解怎么接入。',
        links: [
          { label: '平台文档', href: 'https://teenet-io.github.io' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
        ],
      },
      {
        title: '尽早和我们沟通',
        description: '如果你正在构建需要托管密钥或策略控制的 Agent 应用，欢迎尽早联系。',
        links: [
          { label: '发送邮件', href: 'mailto:contact@teenet.io' },
          { label: 'TEENet GitHub', href: 'https://github.com/TEENet-io' },
        ],
      },
    ],
  },
}

export function getPlatformPageContent(locale: string): PlatformPageContent {
  return locale === 'zh' ? platformPageZh : platformPageEn
}
