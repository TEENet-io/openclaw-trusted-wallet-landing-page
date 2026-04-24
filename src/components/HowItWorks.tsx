'use client'

import { useState, useEffect } from 'react'
import { ContentData } from '@/content/types'
import DemoVideoMockup from './mockups/DemoVideoMockup'

/* Animation loop: matched to the 17s edited phone recording */
const TOTAL_LOOP_MS = 17000
const TICK_INTERVAL_MS = 80

/* Phase boundaries (ms) — aligned with the video storyboard */
const STEP_1_END = 2500
const STEP_2_END = 6500

interface HowItWorksProps {
  content: ContentData['howItWorks']
}

export default function HowItWorks({ content }: HowItWorksProps) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      setElapsed((Date.now() - startTime) % TOTAL_LOOP_MS)
    }, TICK_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [])

  const activeStep = elapsed < STEP_1_END ? 0 : elapsed < STEP_2_END ? 1 : 2

  return (
    <section id="how-it-works" className="bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase text-center">
          {content.eyebrow}
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-3">
          {content.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base text-gray-500 text-center mt-3 max-w-xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>

        {/* Desktop: side-by-side  |  Mobile: stacked */}
        <div className="mt-12 flex flex-col lg:flex-row lg:items-center lg:gap-14">
          {/* Animation — left on desktop (55-60%) */}
          <div className="lg:w-[56%] flex justify-center">
            <DemoVideoMockup elapsed={elapsed} />
          </div>

          {/* Steps — right on desktop (40-45%) */}
          <div className="lg:w-[44%] mt-10 lg:mt-0 flex flex-col gap-5">
            {content.steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-white shadow-sm'
                    : 'opacity-40'
                }`}
              >
                {/* Number badge */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500 ${
                    activeStep === index
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                  aria-hidden="true"
                >
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-base leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
