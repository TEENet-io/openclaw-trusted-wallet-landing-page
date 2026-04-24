'use client'

import { useEffect, useRef } from 'react'

interface DemoVideoMockupProps {
  elapsed: number
}

export default function DemoVideoMockup({ elapsed }: DemoVideoMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || Number.isNaN(video.duration)) return

    const targetTime = elapsed / 1000
    if (Math.abs(video.currentTime - targetTime) > 0.45) {
      video.currentTime = targetTime
    }
  }, [elapsed])

  return (
    <div
      role="img"
      aria-label="Recorded TEENet Wallet approval flow"
      className="relative mx-auto w-full max-w-[300px] rounded-[2rem] border border-gray-900 bg-gray-950 p-2 shadow-2xl shadow-gray-900/20"
    >
      <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-950" />
      <video
        ref={videoRef}
        className="block aspect-[1080/2340] w-full rounded-[1.5rem] bg-gray-950 object-cover"
        src="/videos/teenet-wallet-how-it-works-loop.mp4"
        poster="/videos/teenet-wallet-how-it-works-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  )
}
