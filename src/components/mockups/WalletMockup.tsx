const transactions = [
  {
    id: 1,
    address: '0x4f8a…3c21',
    amount: '-0.5 ETH',
    status: 'confirmed' as const,
    label: 'Sent',
  },
  {
    id: 2,
    address: '0x91de…77b4',
    amount: '+1.2 ETH',
    status: 'confirmed' as const,
    label: 'Received',
  },
  {
    id: 3,
    address: '0x0023…aa5f',
    amount: '-0.05 ETH',
    status: 'pending' as const,
    label: 'Sent',
  },
]

function StatusDot({ status }: { status: 'confirmed' | 'pending' }) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full flex-shrink-0 ${
        status === 'confirmed' ? 'bg-green-400' : 'bg-yellow-400'
      }`}
    />
  )
}

export default function WalletMockup() {
  return (
    <div
      role="img"
      aria-label="Wallet card showing Ethereum balance and recent transactions"
      className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Card header */}
      <div className="bg-gray-900 px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Ethereum diamond icon */}
            <svg
              className="h-6 w-6 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.37 4.35h.001zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-300">Ethereum</span>
          </div>
          <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">Mainnet</span>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-500">Total balance</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-white">2.45 ETH</p>
          <p className="mt-0.5 text-sm text-gray-400">≈ $6,284.50 USD</p>
        </div>

        <div className="mt-4 font-mono text-xs text-gray-500">0x7a3b…f12e</div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100">
        <button className="flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Send
        </button>
        <button className="flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" transform="rotate(180 12 12)" />
          </svg>
          Receive
        </button>
      </div>

      {/* Transactions */}
      <div className="px-5 py-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Recent Activity
        </p>
        <ul className="flex flex-col divide-y divide-gray-50">
          {transactions.map((tx) => (
            <li key={tx.id} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <StatusDot status={tx.status} />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500">{tx.label}</p>
                  <p className="font-mono text-xs text-gray-400">{tx.address}</p>
                </div>
              </div>
              <div className="ml-3 flex flex-col items-end flex-shrink-0">
                <span
                  className={`text-sm font-medium ${
                    tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'
                  }`}
                >
                  {tx.amount}
                </span>
                <span className="text-xs capitalize text-gray-400">{tx.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
