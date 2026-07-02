'use client'

import Image from 'next/image'
import C3callExample from '@/images/C3call_Example.png'
import MultiPartyAgentWallet from '@/images/Multi_Party_Agent_Wallet.png'
import CreateProposal from '@/images/Create_Proposal.png'

const useCaseItems = [
  {
    title: 'C3Caller: Cross-chain Messaging',
    image: C3callExample,
    text: 'An immutable messaging protocol for multi-chain interoperable applications. Developers or AI Agents can create dApps that use cross-chain messaging. DApps can either use randomly selected public MPC signers from the pool, or choose to trust only their own selection of signers, or choose which ones to trust based on the public identity of the node runners. No MPC node knows more than a fraction of the Public Key used to sign.',
  },
  {
    title: 'Multi-Party Agent Wallet',
    image: MultiPartyAgentWallet,
    text: 'A multi-auth wallet where a private key, generated collectively by multiple nodes is used in signatures. The nodes can either be humans (for human-in-the-loop transactions) or AI agents. AI agents and humans together can use a sophisticated set of built-in tools, including unified UX to many popular DeFi protocols. The dedicated AI harness allows users to plan research and execute trades, access hundreds of custom MCP tools, use cron tasks, Plan mode, looping and AI generated custom trading charts. Also suitable for DAOs, so that complex proposals can be summarized by AI before voting. Multi-Party Agent Wallets can optionally join the C3Caller MPC signer pool to earn rewards. The MPA wallet can be installed on a PC (Windows 11/MacOS/Linux), or on a VPS easily with a single command.',
    scrollable: true,
  },
  {
    title: 'C3Governor: Cross-on-chain DAO Governance',
    image: CreateProposal,
    text: 'Governance that coordinates and executes across multiple chains so DAOs can operate cross-chain and on-chain. Complex multi-option, multi-outcome proposals can be generated that execute on any chain.',
  },
]

export function UseCases() {
  return (
    <div
      id="use-cases"
      className="xxs:py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 xl:px-24">
        <div className="max-w-2xl">
          <p className="text-3xl font-bold tracking-tight text-white xxs:text-5xl text-left whitespace-nowrap">
            Use Cases for Developers, DAOs and AI Agents
          </p>
        </div>
        <ul className="flex flex-col gap-12 xxs:mt-10 sm:mt-20 w-full">
          {useCaseItems.map((item, index) => (
            <li
              key={item.title}
              className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end -mr-6 sm:-mr-10 xl:-mr-24'}`}
            >
              <div className="flex flex-col border border-white bg-black py-8 px-6 text-left max-w-2xl">
                <h3 className="pb-4 text-xl font-bold tracking-tight text-white sm:text-2xl text-left">
                  {item.title}
                </h3>
                <div className="mb-4 relative w-full overflow-hidden rounded border border-white/30 bg-white/5">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-auto w-full object-contain"
                      width={800}
                      height={400}
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center text-white/50 text-sm">
                      Image to be added
                    </div>
                  )}
                </div>
                <p
                  className={`font-light leading-7 text-white/70 text-base sm:text-lg text-left ${
                    item.scrollable
                      ? 'use-case-scroll max-h-48 overflow-y-auto pr-2'
                      : ''
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function BuildOnCtmStart() {
  return (
    <div></div>
  )
}



export function C3WalletStart() {
  return (
    <div></div>
  )
}

export function C3WalletEnd() {
  return (
    <div></div>
  )
}

export function C3GovernorStart() {
  return (
   <div></div>
  )
}

export function C3GovernorEnd() {
  return (
    <div></div>
  )
}

export function C3CallerStart() {
  return (
   <div></div>
  )
}

export function C3CallerEnd() {
  return (
    <div></div>
  )
}
