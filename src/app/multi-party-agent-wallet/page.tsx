'use client'

import { useEffect } from 'react'

const MPA_URL = 'https://mpa.continuumdao.org'

export default function MultiPartyAgentWalletPage() {
  useEffect(() => {
    window.location.replace(MPA_URL)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-black px-6 text-center">
      <p className="text-white text-lg sm:text-xl">
        Redirecting to Multi-Party Agent Wallet…
      </p>
      <p className="text-white/70 text-sm">
        If you are not redirected,{' '}
        <a
          href={MPA_URL}
          className="text-white underline underline-offset-2 hover:text-white/90"
        >
          open the app
        </a>
        .
      </p>
    </main>
  )
}
