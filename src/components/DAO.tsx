'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { useRef } from 'react'
import { Bobble } from './Bobble'

export function DAO() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const buttonRef3 = useRef<HTMLButtonElement>(null)
  const buttonRef4 = useRef<HTMLButtonElement>(null)
  const timeoutDuration = 200
  let timeout: any

  const closePopover = () => {
    return buttonRef.current?.click()
  }

  const closePopover2 = () => {
    return buttonRef2.current?.click()
  }
  const closePopover3 = () => {
    return buttonRef3.current?.click()
  }
  const closePopover4 = () => {
    return buttonRef4.current?.click()
  }

  const onMouseEnter = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseEnter2 = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef2.current?.click()
  }

  const onMouseEnter3 = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef3.current?.click()
  }

  const onMouseEnter4 = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef4.current?.click()
  }

  const onMouseLeave = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  const onMouseLeave2 = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover2(), timeoutDuration)
  }

  const onMouseLeave3 = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover3(), timeoutDuration)
  }

  const onMouseLeave4 = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover4(), timeoutDuration)
  }

  return (
    <div id="faq" className="z-10">
      <div className="mx-auto max-w-[115rem] px-6 pt-32 pb-16 sm:py-24 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="xxs:text-4xl xxs:text-center xxs:leading-snug pb-12 font-bold tracking-tight text-white sm:text-5xl sm:leading-10 lg:text-left">
            Why are we a DAO?
          </h2>
          <div className="border-b border-white/70"></div>
          <dl className="xxs:-ml-4 sm:ml-0">
            <Disclosure as="div" id="faq" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      id="faq"
                      ref={buttonRef}
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                      className={`${
                        open
                          ? 'ease-in-out" translate-x-8 transition-transform duration-[350ms]'
                          : 'ease-in-out" -translate-x-0 transition-transform delay-[250ms] duration-500'
                      } relative flex w-full items-start justify-between text-left text-white focus:outline-none`}
                    >
                      <span className="flex flex-row py-6 pl-8 focus:outline-none">
                        <div className="flex flex-row">
                          <div
                            className={`opacity-0 ${
                              open
                                ? 'ease-in-out" opacity-100 transition-opacity duration-[350ms]'
                                : 'ease-in-out" opacity-0 transition-opacity duration-[350ms]'
                            } -ml-12 -mt-2 scale-75`}
                          >
                            <Bobble />
                          </div>
                          <div className="xxs:pt-2 text-2xl font-medium leading-7 sm:pt-0.5 sm:text-3xl">
                            Decentralized Governance
                          </div>
                        </div>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition transition-[max-height] duration-500 ease-in"
                    enterFrom="transform max-h-0 scale-95 opacity-0"
                    enterTo="transform max-h-screen scale-100"
                    leave="transition transition-[max-height] duration-500 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      id="faq"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                      className="xxs:h-64 relative -mt-4 pr-0 sm:h-36 xl:mt-2 xl:pr-12"
                    >
                      <Transition.Child
                        as="div"
                        enter="transition ease-in-out duration-500"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition ease-in-out duration-500"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <span className="xxs:top-8 absolute sm:-top-20">
                          <Ellipse />
                        </span>
                        <div className="xxs:px-8 absolute sm:px-12 xl:-top-20 xl:right-0 xl:w-1/2 xl:pl-16">
                          <span className="xxs:text-lg leading-7 text-gray-300 sm:text-xl md:mt-0 md:text-2xl">
                            A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.
                          </span>
                        </div>
                      </Transition.Child>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <dl className="xxs:-ml-4 sm:ml-0">
            <Disclosure as="div" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      id="faq"
                      ref={buttonRef2}
                      onMouseEnter={onMouseEnter2.bind(null, open)}
                      onMouseLeave={onMouseLeave2.bind(null, open)}
                      className={`${
                        open
                          ? 'ease-in-out" translate-x-8 transition-transform duration-[350ms]'
                          : 'ease-in-out" -translate-x-0 transition-transform delay-[250ms] duration-500'
                      } relative flex w-full items-start justify-between text-left text-white focus:outline-none`}
                    >
                      <span className="flex flex-row py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        <div className="flex flex-row">
                          <div
                            className={`opacity-0 ${
                              open
                                ? 'ease-in-out" opacity-100 transition-opacity duration-[350ms]'
                                : 'ease-in-out" opacity-0 transition-opacity duration-[350ms]'
                            } -ml-12 -mt-2 scale-75`}
                          >
                            <Bobble />
                          </div>
                          <div className="xxs:pt-2 text-2xl font-medium leading-7 sm:pt-0.5 sm:text-3xl">
                            Global and Borderless
                          </div>
                        </div>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition transition-[max-height] duration-500 ease-in"
                    enterFrom="transform max-h-0 scale-95 opacity-0"
                    enterTo="transform max-h-screen scale-100"
                    leave="transition transition-[max-height] duration-500 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      id="faq"
                      onMouseEnter={onMouseEnter2.bind(null, open)}
                      onMouseLeave={onMouseLeave2.bind(null, open)}
                      className="xxs:h-64 relative -mt-4 pr-0 sm:h-36 xl:mt-2 xl:pr-12"
                    >
                      <Transition.Child
                        as="div"
                        enter="transition ease-in-out duration-500"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition ease-in-out duration-500"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <span className="xxs:top-8 absolute sm:-top-20">
                          <Ellipse />
                        </span>
                        <div className="xxs:px-8 absolute sm:px-12 xl:-top-20 xl:right-0 xl:w-1/2 xl:pl-16">
                          <span className="xxs:text-lg leading-7 text-gray-300 sm:text-xl md:mt-0 md:text-2xl">
                            Our community members are from all over the world,
                            and we are not tied to a specific jurisdiction. This
                            global perspective enriches CTM by bringing diverse
                            ideas and experiences.
                          </span>
                        </div>
                      </Transition.Child>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <dl className="xxs:-ml-4 sm:ml-0">
            <Disclosure id="faq" as="div" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      id="faq"
                      ref={buttonRef3}
                      onMouseEnter={onMouseEnter3.bind(null, open)}
                      onMouseLeave={onMouseLeave3.bind(null, open)}
                      className={`${
                        open
                          ? 'ease-in-out" translate-x-8 transition-transform duration-[350ms]'
                          : 'ease-in-out" -translate-x-0 transition-transform delay-[250ms] duration-500'
                      } relative flex w-full items-start justify-between text-left text-white focus:outline-none`}
                    >
                      <span className="flex flex-row py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        <div className="flex flex-row">
                          <div
                            className={`opacity-0 ${
                              open
                                ? 'ease-in-out" opacity-100 transition-opacity duration-[350ms]'
                                : 'ease-in-out" opacity-0 transition-opacity duration-[350ms]'
                            } -ml-12 -mt-2 scale-75`}
                          >
                            <Bobble />
                          </div>
                          <div className="xxs:pt-2 text-2xl font-medium leading-7 sm:pt-0.5 sm:text-3xl">
                            Transparency
                          </div>
                        </div>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition transition-[max-height] duration-500 ease-in"
                    enterFrom="transform max-h-0 scale-95 opacity-0"
                    enterTo="transform max-h-screen scale-100"
                    leave="transition transition-[max-height] duration-500 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      id="faq"
                      onMouseEnter={onMouseEnter3.bind(null, open)}
                      onMouseLeave={onMouseLeave3.bind(null, open)}
                      className="xxs:h-64 relative -mt-4 pr-0 sm:h-36 xl:mt-2 xl:pr-12"
                    >
                      <Transition.Child
                        as="div"
                        enter="transition ease-in-out duration-500"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition ease-in-out duration-500"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <span className="xxs:top-8 absolute sm:-top-20">
                          <Ellipse />
                        </span>
                        <div className="xxs:px-8 absolute sm:px-12 xl:-top-20 xl:right-0 xl:w-1/2 xl:pl-16">
                          <span className="xxs:text-lg leading-7 text-gray-300 sm:text-xl md:mt-0 md:text-2xl">
                            We are committed to building trust with our
                            community by providing full visibility into our
                            daily operations as much as possible.
                          </span>
                        </div>
                      </Transition.Child>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <dl className="xxs:-ml-4 sm:ml-0">
            <Disclosure id="faq" as="div" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      id="faq"
                      ref={buttonRef4}
                      onMouseEnter={onMouseEnter4.bind(null, open)}
                      onMouseLeave={onMouseLeave4.bind(null, open)}
                      className={`${
                        open
                          ? 'ease-in-out" translate-x-8 transition-transform duration-[350ms]'
                          : 'ease-in-out" -translate-x-0 transition-transform delay-[250ms] duration-500'
                      } relative flex w-full items-start justify-between text-left text-white focus:outline-none`}
                    >
                      <span className="flex flex-row py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        <div className="flex flex-row">
                          <div
                            className={`opacity-0 ${
                              open
                                ? 'ease-in-out" opacity-100 transition-opacity duration-[350ms]'
                                : 'ease-in-out" opacity-0 transition-opacity duration-[350ms]'
                            } -ml-12 -mt-2 scale-75`}
                          >
                            <Bobble />
                          </div>
                          <div className="xxs:pt-2 text-2xl font-medium leading-7 sm:pt-0.5 sm:text-3xl">
                            Get Involved
                          </div>
                        </div>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition transition-[max-height] duration-500 ease-in"
                    enterFrom="transform max-h-0 scale-95 opacity-0"
                    enterTo="transform max-h-screen scale-100"
                    leave="transition transition-[max-height] duration-500 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      id="faq"
                      onMouseEnter={onMouseEnter4.bind(null, open)}
                      onMouseLeave={onMouseLeave4.bind(null, open)}
                      className="xxs:h-64 relative -mt-4 pr-0 sm:h-36 xl:mt-2 xl:pr-12"
                    >
                      <Transition.Child
                        as="div"
                        enter="transition ease-in-out duration-500"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition ease-in-out duration-500"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <span className="xxs:top-8 absolute sm:-top-20">
                          <Ellipse />
                        </span>
                        <div className="xxs:px-8 absolute sm:px-12 xl:-top-20 xl:right-0 xl:w-1/2 xl:pl-16">
                          <span className="xxs:text-lg leading-7 text-gray-300 sm:text-xl md:mt-0 md:text-2xl">
                            We welcome new members to join our DAO community. Participate in our novel governance. Run a node in our MPC network. Help us build new cross-chain applications. If our DAO likes your ideas, we may back you!
                          </span>
                        </div>
                      </Transition.Child>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export function Ellipse() {
  return (
    <svg
      width="565"
      height="249"
      viewBox="0 0 565 249"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="z-0"
    >
      <g opacity="0.2" filter="url(#filter0_f_870_6165)">
        <ellipse cx="9" cy="246" rx="416" ry="112" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_f_870_6165"
          x="-547"
          y="-6"
          width="1112"
          height="504"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="70"
            result="effect1_foregroundBlur_870_6165"
          />
        </filter>
      </defs>
    </svg>
  )
}
