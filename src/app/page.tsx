import Image from 'next/image'
import { DAO } from '@/components/DAO'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WhatWeDo } from '@/components/WhatWeDo'
import { UseCases } from '@/components/UseCases'
import { SideNav } from '@/components/SideNav'

export default function Home() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 min-h-screen min-w-full overflow-hidden pointer-events-none"
        aria-hidden
      >
        <Image
          src="/images/background-graphic.gif"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10">
        <Header />
        <SideNav />
        <main>
        <Hero />
        <WhatWeDo />
        <UseCases />
        <DAO />
        <section id="ctm-token" className="z-10 mx-auto max-w-[115rem] px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="pb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl text-left sm:leading-10">
              The CTM Token
            </h2>
            <div className="border-b border-white/70" />
            <div className="pt-6 text-left text-white/90 space-y-4 text-base sm:text-lg leading-7">
              <p>
                The CTM token represents the entire value of ContinuumDAO. The DAO, or any associated entity does not have any equity. CTM is a multi-chain token, and only 100 million of them can ever be minted. CTM can only be minted through Governance voting. ContinuumDAO is a &apos;pure&apos; DAO, governed by voting alone. The uses of CTM are as follows:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li>When locked in escrow in veCTM for up to 4 years, these veCTM can be used for voting.</li>
                <li>A Multi-Party Agent wallet node can stake veCTM to avoid basic wallet usage fees (Stake to subscribe).</li>
                <li>When an MPC node runner attaches their veCTM to a node in an MPC signer, they earn payment in CTM for providing the MPC service. The CTM used for rewards must be minted through Governance voting.</li>
                <li>CTM can optionally be used for discounted payment for C3Caller cross-chain messaging rather than USD stablecoin payments.</li>
              </ol>
              <p>
                <a
                  href="https://app.continuumdao.org/metrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:no-underline"
                >
                  Token Metrics
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
        <Footer />
      </div>
    </>
  )
}
