function ShieldIcon() {
  return (
    <svg
      className="h-4 w-4 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  )
}

function InnerBox({ label }: { label: string }) {
  return (
    <div className="flex-1 rounded-lg border border-gray-200 bg-white px-2 py-2 text-center shadow-sm min-w-0">
      <p className="text-xs font-medium leading-tight text-gray-700">{label}</p>
    </div>
  )
}

export default function RuntimeDiagram() {
  return (
    <div
      role="img"
      aria-label="Diagram showing execution boundary between OpenClaw agent and TEENet Trusted Runtime"
      className="w-full max-w-md"
    >
      {/* Outer dashed box — Your Agent */}
      <div className="relative rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-5">
        {/* Outer label */}
        <div className="mb-3 flex items-center gap-1.5">
          <svg
            className="h-3.5 w-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
            />
          </svg>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Your Agent (OpenClaw)
          </span>
        </div>

        {/* Request arrow — downward into inner box */}
        <div className="mb-2 flex items-center gap-1.5 pl-2">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>Request</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Inner solid box — TEENet Trusted Runtime */}
        <div className="rounded-xl border-2 border-gray-700 bg-white p-4 shadow-sm">
          {/* Inner label */}
          <div className="mb-3 flex items-center gap-1.5">
            <ShieldIcon />
            <span className="text-xs font-bold text-gray-800">
              TEENet Trusted Runtime
            </span>
          </div>

          {/* Three sub-boxes */}
          <div className="flex gap-2">
            <InnerBox label="Wallet Logic" />
            <InnerBox label="Rules Engine" />
            <InnerBox label="Signing" />
          </div>
        </div>

        {/* Approval Required arrow — upward from inner box */}
        <div className="mt-2 flex items-center justify-end gap-1.5 pr-2">
          <div className="flex items-center gap-1 text-xs text-amber-600">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <span className="font-medium">Approval Required</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-4 border-t border-gray-200 pt-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-5 rounded-sm border-2 border-dashed border-gray-400" />
            <span className="text-xs text-gray-400">Agent boundary</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-5 rounded-sm border-2 border-gray-700" />
            <span className="text-xs text-gray-400">Trusted enclave</span>
          </div>
        </div>
      </div>
    </div>
  )
}
