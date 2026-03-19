import { ContentData } from '@/content/types'

interface DevelopersProps {
  content: ContentData['developers']
}

const CODE_SNIPPET = `import { WalletSkill } from "@openclaw/wallet"

const action = await WalletSkill.transfer({
  amount: "0.1 ETH",
  requireApproval: true,
})`

const FOLDER_TREE = ['app/', 'skills/', 'approval-flow/', 'wallet-actions/', 'docs/']

const POINT_ICONS = [
  // Folder — Explore the app
  <svg key="folder" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>,
  // Puzzle — Inspect the skills
  <svg key="puzzle" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.166 3.283-.108 4.946a.638.638 0 01-.657.643c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58z" />
  </svg>,
  // Wrench — Build your own flow
  <svg key="wrench" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.84 5.66a2.12 2.12 0 01-3-3l5.66-5.84m0 0L3.577 7.33a8.1 8.1 0 01-.52-6.855 8.096 8.096 0 016.855.52l4.66 4.66a8.098 8.098 0 01.52 6.857 8.1 8.1 0 01-6.855-.52l-4.66-4.66z" />
  </svg>,
]

export default function Developers({ content }: DevelopersProps) {
  return (
    <section id="developers" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: left-aligned header + CTAs | right: repo visual */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14">
          {/* Left: Copy + CTAs */}
          <div className="lg:w-1/2">
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
              {content.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              {content.title}
            </h2>
            <p className="text-base text-gray-500 mt-3 leading-relaxed">
              {content.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {content.ctaPrimary}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right: Repo visual */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">openclaw-wallet</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-100">
                {FOLDER_TREE.map((name) => (
                  <div key={name} className="flex items-center gap-2 py-1">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    <span className="text-xs text-gray-600 font-mono">{name}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 bg-gray-900">
                <pre className="text-[11px] leading-relaxed text-gray-300 font-mono overflow-x-auto">
                  <code>{CODE_SNIPPET}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 3 builder points — full-width row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {content.points.map((point, index) => (
            <div
              key={point.title}
              className="border border-gray-200 rounded-xl p-5 bg-white"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
                {POINT_ICONS[index]}
              </div>
              <p className="text-sm font-semibold text-gray-900">{point.title}</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <p className="text-sm text-gray-400 text-center mt-10">
          {content.supportingLine}
        </p>
      </div>
    </section>
  )
}
