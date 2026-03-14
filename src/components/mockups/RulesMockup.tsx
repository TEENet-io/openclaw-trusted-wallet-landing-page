function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-default items-center rounded-full transition-colors ${
        on ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${
          on ? 'translate-x-4' : 'translate-x-0.5'
        }`}
      />
    </div>
  )
}

function EditIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600 transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
      />
    </svg>
  )
}

export default function RulesMockup() {
  return (
    <div
      role="img"
      aria-label="Rule configuration panel for wallet agent permissions"
      className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-700">Wallet Rules</span>
        </div>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          Active
        </span>
      </div>

      {/* Rules list */}
      <ul className="divide-y divide-gray-100">
        {/* Transfer threshold */}
        <li className="flex items-center justify-between px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-800">Transfer threshold</p>
            <p className="mt-0.5 text-xs text-gray-500">Max per transaction</p>
          </div>
          <div className="ml-4 flex items-center gap-3">
            <span className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-xs font-medium text-gray-700">
              0.1 ETH
            </span>
            <Toggle on={true} />
          </div>
        </li>

        {/* Allowed contracts */}
        <li className="flex items-start justify-between px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-800">Allowed contracts</p>
            <div className="mt-1 flex flex-col gap-0.5">
              <span className="font-mono text-xs text-gray-400">0xUnis…d3a1</span>
              <span className="font-mono text-xs text-gray-400">0xAave…c990</span>
            </div>
          </div>
          <div className="ml-4 mt-1 flex-shrink-0">
            <EditIcon />
          </div>
        </li>

        {/* Require approval */}
        <li className="flex items-center justify-between px-5 py-4">
          <div className="min-w-0 flex-1 pr-3">
            <p className="text-sm font-medium text-gray-800">Require approval for rule changes</p>
            <p className="mt-0.5 text-xs text-gray-500">Passkey confirmation needed</p>
          </div>
          <div className="flex-shrink-0">
            <Toggle on={true} />
          </div>
        </li>

        {/* Daily limit */}
        <li className="flex items-center justify-between px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-800">Daily spending limit</p>
            <p className="mt-0.5 text-xs text-gray-500">Rolling 24-hour cap</p>
          </div>
          <div className="ml-4 flex items-center gap-3">
            <span className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-xs font-medium text-gray-700">
              2.0 ETH
            </span>
            <Toggle on={false} />
          </div>
        </li>
      </ul>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
        <p className="text-xs text-gray-400">
          Changes require Passkey confirmation
        </p>
      </div>
    </div>
  )
}
