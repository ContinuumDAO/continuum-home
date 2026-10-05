'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { LinkIcon } from '@heroicons/react/24/outline'
import Mobius from '@/images/mobius.gif'

const ESCROW_BOX_DEADLINE = new Date('2026-06-01T00:00:00Z')

function getCountdown(deadline: Date): { days: number; hours: number; minutes: number; seconds: number } | null {
  const now = new Date()
  const diff = deadline.getTime() - now.getTime()
  if (diff <= 0) return null
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

function formatCountdown(c: { days: number; hours: number; minutes: number; seconds: number }) {
  const h = String(c.hours).padStart(2, '0')
  const m = String(c.minutes).padStart(2, '0')
  const s = String(c.seconds).padStart(2, '0')
  return `${c.days}d ${h}:${m}:${s}`
}

export function Hero() {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const showEscrowBox = hasMounted && countdown !== null

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.offsetWidth
    }
  }, [])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    const tick = () => {
      const next = getCountdown(ESCROW_BOX_DEADLINE)
      setCountdown(next)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [hasMounted])

  return (
    <div
      id="hero"
      className="  pt-24"
    >
      <div className="relative isolate xxs:py-28 xs:py-32 sm:py-48">
        <div
          className="left-1/2 -translate-x-1/2 flex items-center justify-center absolute z-[1] overflow-hidden main-shadow"
          aria-hidden="true"
        >
          <Image src={Mobius} alt="Mobius Graphic" />
          <div className="absolute  !inset-0 bg-gradient-to-b from-transparent from-0% to-black to-65%"></div>
        </div>

        <div className="relative z-10 py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-[10rem] font-bold tracking-wide text-white/50 xxs:-ml-40 xxs:scale-[0.3] xs:-ml-40 xs:scale-[0.34] sm:-ml-24 sm:scale-50 md:-ml-10 md:scale-[0.70] lg:scale-100">
                <svg
                  width={955}
                  height={122}
                  viewBox="0 0 955 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    opacity={0.5}
                    width={955}
                    height={122}
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0_1009_1759"
                        transform="matrix(0.000789266 0 0 0.00617827 0 -0.000439919)"
                      />
                    </pattern>
                    <image
                      id="image0_1009_1759"
                      width={1267}
                      height={162}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </h1>
              <p className="mt-20 font-semibold leading-normal text-white xxs:text-xl xs:text-2xl sm:text-[30px]">
                The First Decentralized MPC Network
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  ref={linkRef}
                  href="https://docs.continuumdao.org/"
                  className="backdrop-blur-[2px] link relative overflow-hidden border border-white py-4 text-base font-semibold leading-6 text-white xxs:px-10 xs:px-8 sm:px-10"
                >
                  Learn about ContinuumDAO <span aria-hidden="true">↗</span>
                  <span className="link-bg"></span>
                </a>
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-lg font-semibold leading-relaxed text-orange-400 sm:text-xl md:text-2xl">
                Multi-Party Agent Wallet has a free trial this month. Ask your agent to install ContinuumDAO&apos;s MPA wallet, or install manually{' '}
                <a
                  href="https://mpa.continuumdao.org/node-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-2 underline-offset-4 hover:text-orange-300"
                >
                  here
                </a>.
              </p>
              {showEscrowBox && (
                <div className="mt-10 mx-auto max-w-3xl rounded-2xl border-4 border-white px-6 py-8 sm:px-10 sm:py-10 text-center">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
                    Convert your CTMDAOVOTE tokens to veCTM now. The deadline is midnight 31st May 2026.
                  </p>
                  {countdown && (
                    <p className="mt-4 font-extrabold text-xl sm:text-2xl md:text-3xl text-green-300 tabular-nums" role="timer" aria-live="polite">
                      {formatCountdown(countdown)}
                    </p>
                  )}
                  <a
                    href="https://app.continuumdao.org/escrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-[2px] link relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-lg border border-white p-4 text-white hover:border-white/90 xxs:p-5 sm:p-6"
                    aria-label="Convert CTMDAOVOTE to veCTM"
                  >
                    <LinkIcon className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden />
                    <span className="link-bg" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .link {
          position: relative;
          overflow: hidden;
          transition: color 0.5s ease;
          color: white;
        }

        .link-bg {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 100%;
          bottom: 0;
          background-color: white;
          z-index: -1;
          transition: right 0.5s ease;
        }

        .link:hover {
          color: black;
        }
        .link:hover .link-bg {
          right: 0;
        }

        .webkit-center {
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
