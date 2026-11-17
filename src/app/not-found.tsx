'use client'

import Link from 'next/link'
import Logo from '@/images/logo.png'
import Image from 'next/image'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Image className="-ml-4 scale-75 w-[76px]" src={Logo} alt="Logo" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-white">404</p>
      <h1 className="mt-3 text-lg font-semibold text-white/70">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-white/70">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex justify-start">
        <Link
          href="/"
          className="backdrop-blur-[2px] link relative overflow-hidden border border-white px-8 py-3 text-xs font-semibold leading-6 text-white"
        >
          Go Back Home <span aria-hidden="true">↗</span>
          <span className="link-bg"></span>
        </Link>
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
    </SlimLayout>
  )
}
