'use client'

import { useRef, useEffect } from 'react'

interface TelegramAnimationProps {
  elapsed: number
  isGap: boolean
}

/* Thresholds (ms) for each message/card appearance */
const T_USER_MSG = 200
const T_BOT_PREPARING = 1800
const T_WALLET_GUARD = 3200
const T_REVIEW = 5600
const T_BTN_PRESS = 6800
const T_VERIFYING = 7200
const T_SUCCESS = 7800

export default function TelegramAnimation({ elapsed, isGap }: TelegramAnimationProps) {
  const chatRef = useRef<HTMLDivElement>(null)

  /* Count visible elements to trigger auto-scroll */
  const visibleCount = isGap
    ? 0
    : [T_USER_MSG, T_BOT_PREPARING, T_WALLET_GUARD, T_REVIEW, T_SUCCESS]
        .filter(t => elapsed >= t).length

  useEffect(() => {
    if (chatRef.current && visibleCount > 0) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [visibleCount])

  const show = (threshold: number) => elapsed >= threshold && !isGap
  const showTyping = !isGap && elapsed >= 1400 && elapsed < T_BOT_PREPARING

  return (
    <div
      role="img"
      aria-label="Animated chat interaction showing agent wallet flow"
      className="w-full max-w-[380px] mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200/60"
    >
      {/* ── Header ── */}
      <div className="bg-gray-900 px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-300" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-medium leading-tight">OpenClaw Wallet</div>
          <div className="text-gray-400 text-xs leading-tight">Agent</div>
        </div>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* ── Chat Area ── */}
      <div
        ref={chatRef}
        className="h-[380px] bg-gray-50 px-3.5 py-3.5 overflow-y-auto hide-scrollbar flex flex-col justify-end gap-2.5"
        style={{ opacity: isGap ? 0 : 1, transition: 'opacity 0.6s ease' }}
      >
        {/* Message 1: User request */}
        {show(T_USER_MSG) && (
          <div className="flex justify-end animate-[message-in_0.3s_ease-out]">
            <div className="bg-gray-900 rounded-2xl rounded-br-sm px-3.5 py-2.5 max-w-[78%] shadow-sm">
              <p className="text-sm text-white leading-snug">Send 0.8 ETH to</p>
              <p className="text-xs text-gray-400 font-mono mt-0.5">0xabc...def</p>
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {showTyping && (
          <div className="flex justify-start animate-[message-in_0.2s_ease-out]">
            <div className="bg-white rounded-2xl rounded-bl-sm px-3.5 py-2.5 shadow-sm border border-gray-100 flex gap-1.5">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[typing-bounce_1s_0ms_infinite]" />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[typing-bounce_1s_150ms_infinite]" />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[typing-bounce_1s_300ms_infinite]" />
            </div>
          </div>
        )}

        {/* Message 2: Agent preparing */}
        {show(T_BOT_PREPARING) && (
          <div className="flex justify-start animate-[message-in_0.3s_ease-out]">
            <div className="bg-white rounded-2xl rounded-bl-sm px-3.5 py-2.5 max-w-[78%] shadow-sm border border-gray-100">
              <p className="text-sm text-gray-800 leading-snug">Preparing transaction...</p>
            </div>
          </div>
        )}

        {/* Message 3: Wallet Guard system card */}
        {show(T_WALLET_GUARD) && (
          <div className="flex justify-start animate-[card-in_0.4s_ease-out]">
            <div className="bg-white rounded-xl px-4 py-3.5 w-[90%] shadow-md border border-amber-200/60">
              {/* Header */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-md bg-amber-50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-900 tracking-wide uppercase">Wallet Guard</span>
              </div>
              <p className="text-[13px] text-gray-700 font-medium leading-relaxed">
                Transfer exceeds your limit
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Approval required</p>
              {/* Rule details */}
              <div className="mt-3 pt-2.5 border-t border-gray-100 space-y-1.5">
                <RuleRow label="Per-tx limit" value="0.1 ETH" />
                <RuleRow label="Allowed contracts" value="Uniswap, Aave" />
              </div>
            </div>
          </div>
        )}

        {/* Message 4: Approval prompt */}
        {show(T_REVIEW) && (
          <div className="flex justify-start animate-[card-in_0.4s_ease-out]">
            <div className="bg-white rounded-xl px-4 py-4 w-[90%] shadow-md border border-gray-200">
              <p className="text-xs text-gray-500 text-center">You are about to send</p>
              <p className="text-xl font-bold text-gray-900 text-center mt-1.5">0.8 ETH</p>
              <p className="text-xs text-gray-500 text-center mt-1 font-mono">to 0xabc...def</p>

              <button
                className={`w-full mt-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  elapsed >= T_BTN_PRESS
                    ? 'bg-gray-700 text-white scale-[0.97]'
                    : 'bg-gray-900 text-white'
                }`}
                tabIndex={-1}
              >
                {elapsed >= T_VERIFYING ? '\uD83D\uDD10 Verifying...' : 'Approve with Passkey'}
              </button>
              <button
                className="w-full mt-1.5 py-2 rounded-lg text-xs text-gray-400 border border-gray-200"
                tabIndex={-1}
              >
                Reject
              </button>
            </div>
          </div>
        )}

        {/* Message 5: Success */}
        {show(T_SUCCESS) && (
          <div className="flex justify-start animate-[card-in_0.4s_ease-out]">
            <div className="bg-emerald-50 rounded-xl px-4 py-3 w-[90%] border border-emerald-200/60">
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center animate-[pulse-check_0.5s_ease-out]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-emerald-600" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-emerald-700 font-medium">Passkey verified — Transaction sent</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Input Bar ── */}
      <div className="bg-white px-3.5 py-2.5 flex items-center gap-2 border-t border-gray-100">
        <div className="flex-1 bg-gray-50 rounded-lg px-3.5 py-2 text-xs text-gray-400 border border-gray-100 select-none">
          Ask your agent...
        </div>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 shrink-0"
          tabIndex={-1}
        >
          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

/* ── Helper: Rule row in Wallet Guard card ── */
function RuleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-[11px]">
      <span className="text-gray-300 mt-px" aria-hidden="true">&#x2022;</span>
      <span className="text-gray-500">
        {label} — <span className="font-medium text-gray-700">{value}</span>
      </span>
    </div>
  )
}
