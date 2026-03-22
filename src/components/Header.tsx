'use client'

import { Fragment, useRef, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Logo from '@/images/logo.png'
import './Header.css'

const useCases = [
  { name: 'Cross chain Messaging', href: '#use-cases' },
  { name: 'Multi-Party Agent Wallet', href: '#use-cases' },
  { name: 'Cross-on-chain-governance', href: '#use-cases' },
]

const governance = [
  { name: 'Forum', href: 'https://forum.continuumdao.org/' },
  { name: 'Vote', href: 'https://app.continuumdao.org/governance' },
  { name: 'Tokens in Escrow', href: 'https://app.continuumdao.org/escrow' },
  { name: 'Vote (legacy snapshot)', href: 'https://snapshot.org/#/continuumdao.eth' },
  { name: 'Our Constitution', href: 'https://docs.continuumdao.org/ContinuumDAO/Governance/Constitution' },
]

const contactUs = [
  { name: 'X', href: 'https://twitter.com/ContinuumDAO' },
  { name: 'Telegram', href: 'https://t.me/ContinuumDAO' },
  { name: 'Medium', href: 'https://medium.com/@continuumdao' },
  { name: 'Forum', href: 'https://forum.continuumdao.org/' },
  { name: 'GitHub', href: 'https://github.com/ContinuumDAO' },
]

const ourToken = [
  { name: 'The CTM Token', href: '#ctm-token' },
  { name: 'Staking', href: '/staking' },
  { name: 'Metrics', href: 'https://app.continuumdao.org/metrics' },
]

const mpcMenu = [
  { name: 'Multi-Party Agent Wallet', href: 'https://mpa.continuumdao.org' },
  { name: 'What is MPC?', href: 'https://docs.continuumdao.org/ContinuumDAO/MPC/WhatIsMPC' },
  { name: 'Our MPC Network', href: '/mpc-network' },
]

const learnMore = [
  { name: 'Docs', href: 'https://docs.continuumdao.org/' },
  { name: 'Whitepaper', href: 'https://docs.continuumdao.org/ContinuumDAO/WhitePaper' },
  { name: 'FAQs', href: '/faqs' },
]

const auditsSubmenu = [
  { name: 'QuillAudit Dec 2025', href: 'https://www.quillaudits.com/leaderboard/continuumdao' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [auditsSubmenuOpen, setAuditsSubmenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const buttonRef3 = useRef<HTMLButtonElement>(null)
  const buttonRef4 = useRef<HTMLButtonElement>(null)
  const buttonRef5 = useRef<HTMLButtonElement>(null)
  const buttonRef6 = useRef<HTMLButtonElement>(null)
  const timeoutDuration = 200
  let timeout: ReturnType<typeof setTimeout>

  const closePopover = () => buttonRef.current?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
  const closePopover2 = () => buttonRef2.current?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
  const closePopover3 = () => buttonRef3.current?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
  const closePopover4 = () => buttonRef4.current?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
  const closePopover5 = () => buttonRef5.current?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
  const closePopover6 = () => buttonRef6.current?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))

  const onMouseEnter = (open: boolean) => { clearTimeout(timeout); if (!open) buttonRef.current?.click() }
  const onMouseEnter2 = (open: boolean) => { clearTimeout(timeout); if (!open) buttonRef2.current?.click() }
  const onMouseEnter3 = (open: boolean) => { clearTimeout(timeout); if (!open) buttonRef3.current?.click() }
  const onMouseEnter4 = (open: boolean) => { clearTimeout(timeout); if (!open) buttonRef4.current?.click() }
  const onMouseEnter5 = (open: boolean) => { clearTimeout(timeout); if (!open) buttonRef5.current?.click() }
  const onMouseEnter6 = (open: boolean) => { clearTimeout(timeout); if (!open) buttonRef6.current?.click() }

  const onMouseLeave = (open: boolean) => { if (open) timeout = setTimeout(closePopover, timeoutDuration) }
  const onMouseLeave2 = (open: boolean) => { if (open) timeout = setTimeout(closePopover2, timeoutDuration) }
  const onMouseLeave3 = (open: boolean) => { if (open) timeout = setTimeout(closePopover3, timeoutDuration) }
  const onMouseLeave4 = (open: boolean) => { if (open) timeout = setTimeout(closePopover4, timeoutDuration) }
  const onMouseLeave5 = (open: boolean) => { if (open) timeout = setTimeout(closePopover5, timeoutDuration) }
  const onMouseLeave6 = (open: boolean) => { if (open) timeout = setTimeout(closePopover6, timeoutDuration) }

  return (
    <header
      className={`${mobileMenuOpen ? 'z-20' : 'z-50'} fixed top-0 w-full pt-8 bg-[transparent] backdrop-blur-[6px] isolate`}
    >
      <nav
        className="mx-auto flex max-w-[110rem] items-center justify-between border-b border-t border-white/30 px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="p-1.5 lg:-mx-8">
            <span className="sr-only">Continuum</span>
            <div className="flex flex-row items-center xxs:-ml-4 md:ml-0 lg:ml-10 xl:ml-0">
              <Image
                className="-mr-4 max-w-auto scale-[0.6] pt-1.5 lg:scale-[0.5] w-[76px]"
                src={Logo}
                alt="Logo"
              />
              <span className="hidden pl-3 pt-0.5 font-sans font-semibold text-white xl:inline xl:text-2xl 2xl:text-3xl">
                Continuum
              </span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden items-center lg:flex">
          <Popover className="relative">
            {({ open, close }: { open: boolean; close: () => void }) => (
              <>
                <div>
                  <Popover.Button ref={buttonRef} onMouseEnter={() => onMouseEnter(open)} onMouseLeave={() => onMouseLeave(open)} className="custom-link group relative px-8 py-8 text-center font-medium leading-6 text-white focus:outline-none lg:text-sm xl:text-lg 2xl:text-left">
                    <span className="flex items-center gap-x-1">Use Cases <ChevronDownIcon className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500" aria-hidden /></span>
                    <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full" />
                  </Popover.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel className="absolute left-0 top-full z-10 mt-2 w-56 overflow-hidden rounded-lg bg-[#171717] shadow-lg ring-1 ring-white/30" onMouseEnter={() => onMouseEnter(open)} onMouseLeave={() => onMouseLeave(open)}>
                      <div className="px-4 py-2">
                        {useCases.map((item, i) => (
                          <div key={item.name} className="relative flex items-center gap-x-6 p-4 text-sm leading-6">
                            <a onClick={() => close()} href={item.href} className="block font-semibold text-white">{item.name}</a>
                            {i !== useCases.length - 1 && <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform animate-grow-border bg-white/30" />}
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Popover>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block" />
          <Popover className="relative">
            {({ open, close }: { open: boolean; close: () => void }) => (
              <>
                <div>
                  <Popover.Button ref={buttonRef2} onMouseEnter={() => onMouseEnter2(open)} onMouseLeave={() => onMouseLeave2(open)} className="custom-link group relative px-8 py-8 text-center font-medium leading-6 text-white focus:outline-none lg:text-sm xl:text-lg 2xl:text-left">
                    <span className="flex items-center gap-x-1">Governance <ChevronDownIcon className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500" aria-hidden /></span>
                    <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full" />
                  </Popover.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel className="absolute left-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-lg bg-[#171717] shadow-lg ring-1 ring-white/30" onMouseEnter={() => onMouseEnter2(open)} onMouseLeave={() => onMouseLeave2(open)}>
                      <div className="px-4 py-2">
                        {governance.map((item, i) => (
                          <div key={item.name} className="relative flex items-center gap-x-6 p-4 text-sm leading-6">
                            <a onClick={() => close()} href={item.href} target="_blank" rel="noopener noreferrer" className="block font-semibold text-white">{item.name}</a>
                            {i !== governance.length - 1 && <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform animate-grow-border bg-white/30" />}
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Popover>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block" />
          <Popover className="relative">
            {({ open, close }: { open: boolean; close: () => void }) => (
              <>
                <div>
                  <Popover.Button ref={buttonRef3} onMouseEnter={() => onMouseEnter3(open)} onMouseLeave={() => onMouseLeave3(open)} className="custom-link group relative px-8 py-8 text-center font-medium leading-6 text-white focus:outline-none lg:text-sm xl:text-lg 2xl:text-left">
                    <span className="flex items-center gap-x-1">Our Token <ChevronDownIcon className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500" aria-hidden /></span>
                    <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full" />
                  </Popover.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel className="absolute left-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-lg bg-[#171717] shadow-lg ring-1 ring-white/30" onMouseEnter={() => onMouseEnter3(open)} onMouseLeave={() => onMouseLeave3(open)}>
                      <div className="px-4 py-2">
                        {ourToken.map((item, i) => (
                          <div key={item.name} className="relative flex items-center gap-x-6 p-4 text-sm leading-6">
                            <a onClick={() => close()} href={item.href} {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block font-semibold text-white">{item.name}</a>
                            {i !== ourToken.length - 1 && <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform animate-grow-border bg-white/30" />}
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Popover>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block" />
          <Popover className="relative">
            {({ open, close }: { open: boolean; close: () => void }) => (
              <>
                <div>
                  <Popover.Button ref={buttonRef6} onMouseEnter={() => onMouseEnter6(open)} onMouseLeave={() => onMouseLeave6(open)} className="custom-link group relative px-8 py-8 text-center font-medium leading-6 text-white focus:outline-none lg:text-sm xl:text-lg 2xl:text-left">
                    <span className="flex items-center gap-x-1">MPC <ChevronDownIcon className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500" aria-hidden /></span>
                    <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full" />
                  </Popover.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel className="absolute left-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-lg bg-[#171717] shadow-lg ring-1 ring-white/30" onMouseEnter={() => onMouseEnter6(open)} onMouseLeave={() => onMouseLeave6(open)}>
                      <div className="px-4 py-2">
                        {mpcMenu.map((item, i) => (
                          <div key={item.name} className="relative flex items-center gap-x-6 p-4 text-sm leading-6">
                            <a onClick={() => close()} href={item.href} {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block font-semibold text-white">{item.name}</a>
                            {i !== mpcMenu.length - 1 && <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform animate-grow-border bg-white/30" />}
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Popover>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block" />
          <Popover className="relative">
            {({ open, close }: { open: boolean; close: () => void }) => (
              <>
                <div>
                  <Popover.Button ref={buttonRef4} onMouseEnter={() => onMouseEnter4(open)} onMouseLeave={() => onMouseLeave4(open)} className="custom-link group relative px-8 py-8 text-center font-medium leading-6 text-white focus:outline-none lg:text-sm xl:text-lg 2xl:text-left">
                    <span className="flex items-center gap-x-1">Contact Us <ChevronDownIcon className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500" aria-hidden /></span>
                    <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full" />
                  </Popover.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel className="absolute left-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-lg bg-[#171717] shadow-lg ring-1 ring-white/30" onMouseEnter={() => onMouseEnter4(open)} onMouseLeave={() => onMouseLeave4(open)}>
                      <div className="px-4 py-2">
                        {contactUs.map((item, i) => (
                          <div key={item.name} className="relative flex items-center gap-x-6 p-4 text-sm leading-6">
                            <a onClick={() => close()} href={item.href} target="_blank" rel="noopener noreferrer" className="block font-semibold text-white">{item.name}</a>
                            {i !== contactUs.length - 1 && <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform animate-grow-border bg-white/30" />}
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Popover>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block" />
          <Popover className="relative">
            {({ open, close }: { open: boolean; close: () => void }) => (
              <>
                <div>
                  <Popover.Button ref={buttonRef5} onMouseEnter={() => onMouseEnter5(open)} onMouseLeave={() => onMouseLeave5(open)} className="custom-link group relative px-8 py-8 text-center font-medium leading-6 text-white focus:outline-none lg:text-sm xl:text-lg 2xl:text-left">
                    <span className="flex items-center gap-x-1">Learn More <ChevronDownIcon className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500" aria-hidden /></span>
                    <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full" />
                  </Popover.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel className="absolute left-0 top-full z-10 mt-2 flex rounded-lg bg-[#171717] shadow-lg ring-1 ring-white/30" onMouseEnter={() => onMouseEnter5(open)} onMouseLeave={() => { onMouseLeave5(open); setAuditsSubmenuOpen(false) }}>
                      <div className="min-w-[12rem] py-2">
                        {learnMore.map((item, i) => (
                          <div key={item.name} className="relative flex items-center gap-x-6 px-4 py-2 text-sm leading-6">
                            <a onClick={() => close()} href={item.href} {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block font-semibold text-white">{item.name}</a>
                            {i !== learnMore.length - 1 && <div className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform animate-grow-border bg-white/30" />}
                          </div>
                        ))}
                        <div
                          className="relative flex items-center px-4 py-2 text-sm leading-6"
                          onMouseEnter={() => setAuditsSubmenuOpen(true)}
                          onMouseLeave={() => setAuditsSubmenuOpen(false)}
                        >
                          <span className="font-semibold text-white">Audits</span>
                          {auditsSubmenuOpen && (
                            <div className="absolute left-full top-0 z-20 min-w-[12rem] rounded-r-lg border-l border-white/20 bg-[#171717] py-2 shadow-lg">
                              {auditsSubmenu.map((item) => (
                                <a
                                  key={item.name}
                                  onClick={() => close()}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 font-semibold text-white hover:bg-white/10"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Popover>
        </Popover.Group>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-white/30 bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Image
              className="-mb-1.5 -ml-5 scale-50 pt-1.5 w-[76px]"
              src={Logo}
              alt="Logo"
            />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/30">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Use Cases
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {useCases.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Governance
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {governance.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Our Token
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {ourToken.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        MPC
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {mpcMenu.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Contact Us
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {contactUs.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Learn More
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {learnMore.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                        <Disclosure as="div" className="-mx-3">
                          {({ open: auditsOpen }: { open: boolean }) => (
                            <>
                              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-6 pr-3.5 text-sm font-semibold leading-7 text-white hover:bg-white/10">
                                Audits
                                <ChevronDownIcon
                                  className={classNames(auditsOpen ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="mt-1 space-y-1">
                                {auditsSubmenu.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg py-2 pl-10 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
