function FingerprintIcon() {
  return (
    <svg
      className="h-10 w-10 text-gray-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
      />
    </svg>
  )
}

function ArrowConnector() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 px-1">
      <div className="h-px w-8 bg-gray-300" />
      <svg
        className="-ml-1 h-3 w-3 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default function ApprovalMockup() {
  return (
    <div
      role="img"
      aria-label="Two-panel illustration showing approval flow from chat to passkey confirmation"
      className="flex w-full max-w-md items-center gap-2"
    >
      {/* Left panel: Chat trigger */}
      <div className="flex-1 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
          <span className="text-xs font-medium text-gray-500">Agent Chat</span>
        </div>
        <div className="px-4 py-4">
          {/* Agent message */}
          <div className="max-w-full rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2.5">
            <p className="text-xs text-gray-700">
              Confirm transfer of{' '}
              <span className="font-semibold">0.5 ETH</span>?
            </p>
            <div className="mt-2">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-800"
              >
                Approve this transfer
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Connector arrow */}
      <ArrowConnector />

      {/* Right panel: Approval page */}
      <div className="flex-1 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium text-gray-500">Secure Approval</span>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 py-5 text-center">
          {/* Summary */}
          <div className="mb-3 w-full rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5">
            <p className="text-xs text-gray-500">You are about to send</p>
            <p className="mt-0.5 text-lg font-bold text-gray-900">0.5 ETH</p>
            <p className="font-mono text-xs text-gray-400">to 0xabc…def</p>
          </div>

          {/* Fingerprint / Passkey */}
          <FingerprintIcon />
          <p className="mt-1 text-xs font-medium text-gray-500">Passkey</p>

          {/* Approve button */}
          <button className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors">
            Approve
          </button>
          <button className="mt-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
