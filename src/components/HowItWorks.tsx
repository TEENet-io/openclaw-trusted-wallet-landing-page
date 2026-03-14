import { ContentData } from '@/content/types'
import ChatMockup from './mockups/ChatMockup'
import RulesMockup from './mockups/RulesMockup'
import ApprovalMockup from './mockups/ApprovalMockup'

interface HowItWorksProps {
  content: ContentData['howItWorks']
}

const STEP_MOCKUPS = [
  <div key="chat" className="mt-6 flex justify-center scale-90 origin-top">
    <ChatMockup />
  </div>,
  <div key="rules" className="mt-6 flex justify-center scale-90 origin-top">
    <RulesMockup />
  </div>,
  <div key="approval" className="mt-6 flex justify-center scale-90 origin-top">
    <ApprovalMockup />
  </div>,
]

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          {content.title}
        </h2>

        {/* Step grid with connecting lines on desktop */}
        <div className="relative mt-12">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-5 left-[calc(16.667%+20px)] right-[calc(16.667%+20px)] h-px bg-gray-200 hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.steps.map((step, index) => (
              <div key={step.title} className="flex flex-col">
                {/* Step header */}
                <div className="flex lg:flex-col lg:items-start items-center gap-4">
                  {/* Number badge */}
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>

                  <div className="lg:mt-4">
                    <h3 className="font-semibold text-gray-900 text-base">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mockup */}
                {STEP_MOCKUPS[index]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
