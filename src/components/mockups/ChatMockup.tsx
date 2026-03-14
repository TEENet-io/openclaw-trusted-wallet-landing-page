export default function ChatMockup() {
  return (
    <div
      role="img"
      aria-label="Chat interface showing AI wallet agent interaction"
      className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-xs font-medium text-gray-500">OpenClaw Agent</span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 px-4 py-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-gray-900 px-3.5 py-2.5">
            <p className="text-sm text-white">Create a new wallet on Ethereum</p>
          </div>
        </div>

        {/* Agent response */}
        <div className="flex justify-start">
          <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2.5">
            <p className="text-sm text-gray-800">Wallet created.</p>
            <p className="mt-0.5 font-mono text-xs text-gray-500">0x7a3b…f12e</p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-gray-900 px-3.5 py-2.5">
            <p className="text-sm text-white">Send 0.5 ETH to</p>
            <p className="font-mono text-xs text-gray-300">0xabc…def</p>
          </div>
        </div>

        {/* Agent warning response */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-amber-200 bg-amber-50 px-3.5 py-2.5">
            <div className="mb-1.5 flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
                />
              </svg>
              <span className="text-xs font-semibold text-amber-700">Approval required</span>
            </div>
            <p className="text-sm text-gray-700">
              This transfer exceeds your threshold.
            </p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 hover:bg-amber-200 transition-colors">
              Review &amp; approve
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-100 px-4 py-3">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
          <span className="flex-1 text-sm text-gray-400">Ask your agent…</span>
          <button className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-900">
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
