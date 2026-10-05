'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { faqItems } from '@/data/faqs'

const URL_REGEX = /(https?:\/\/[^\s<>"']+)/g

function answerWithLinks(text: string): React.ReactNode {
  const parts = text.split(URL_REGEX)
  return parts.map((part, i) =>
    part.startsWith('http://') || part.startsWith('https://') ? (
      <a
        key={i}
        href={part.replace(/[.,;:)]+$/, '')}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline hover:text-white/90"
      >
        {part}
      </a>
    ) : (
      part
    )
  )
}

export function FAQs() {
  return (
    <div className="z-10">
      <div className="mx-auto max-w-[115rem] px-6 pt-44 pb-16 sm:pt-52 sm:py-24 lg:px-8 lg:pt-56 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="xxs:text-4xl xxs:text-center xxs:leading-snug pb-12 font-bold tracking-tight text-white sm:text-5xl sm:leading-10 lg:text-left">
            Frequently Asked Questions
          </h1>
          <div className="border-b border-white/70" />
          <dl className="xxs:-ml-4 sm:ml-0">
            {faqItems.map((item, index) => (
              <Disclosure as="div" key={index} className="pt-6 focus:outline-none">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="relative flex w-full items-start justify-between text-left text-white focus:outline-none py-4 pl-0 pr-4">
                        <span className="text-xl font-medium leading-7 sm:text-2xl">
                          {item.question}
                        </span>
                        <span
                          className={`ml-2 flex h-7 items-center text-white/70 transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          }`}
                          aria-hidden
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      show={open}
                      enter="transition transition-[max-height] duration-300 ease-in"
                      enterFrom="transform max-h-0 opacity-0"
                      enterTo="transform max-h-[120rem] opacity-100"
                      leave="transition transition-[max-height] duration-200 ease-out"
                      leaveFrom="transform max-h-[120rem] opacity-100"
                      leaveTo="transform max-h-0 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="pb-4">
                        <div className="space-y-4 text-base leading-7 text-gray-300 sm:text-lg pl-0 pr-8">
                          {item.answer.split(/\n\n+/).map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>{answerWithLinks(paragraph)}</p>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                    <div className="border-b border-white/70" />
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
