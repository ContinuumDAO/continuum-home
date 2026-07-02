'use client'

import WhoWeAreGraphic from '../images/who-we-are-graphic.gif'
import Image from 'next/image'

export function WhatWeDo() {
  return (
    <div
      id="what-we-do"
      className=" "
    >
      <div className="mx-auto max-w-7xl sm:px-6">
        <div className="relative isolate px-6 xxs:py-10 sm:px-10 sm:py-20 sm:selection:rounded-3xl lg:py-12 xl:px-24">
          <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="xxs:text-center lg:row-start-2 lg:max-w-xl lg:text-left xl:-ml-24">
              <p className="font-bold tracking-tight text-white xxs:text-4xl xs:text-5xl">
              ContinuumDAO
              </p>
              <p className="mt-10 font-medium leading-8 text-white xxs:text-2xl sm:text-3xl whitespace-nowrap">
              Permissionless service <span className="font-extrabold">•</span> Autonomous operation <span className="font-extrabold">•</span> Programable MPC functions <span className="font-extrabold">•</span> Unlimited node scaling
              </p>
              <p className="mt-10 font-light leading-8 text-gray-300 xs:text-xl sm:text-2xl xl:pr-24">
              Continuum is a decentralized Multi-Party Computation network designed to serve as a public good and run by a DAO. Anyone can run a node, join an MPC signer pool and earn rewards. Our products include:<br/><br/><span className="font-bold text-white">C3Caller</span> for seamless integration of dApps across blockchains with MPC message-passing<br/><br/><span className="font-bold text-white">Multi-Party Agent Wallet</span> for human-in-the-loop transactions, designed for AI agents with ContinuumDAO's custom harness<br/><br/><span className="font-bold text-white">C3Governor</span> for Cross-chain and On-chain Governance, extending Open Zeppelin&apos;s Governor functionality for multi-option and multi-chain governance<br/><br/><span className="font-bold text-white">Private VPN</span>. Multi-Party Agent nodes come equipped with their own VPN exits, which can be shared with other configured nodes. Egress is shielded for maximum privacy
              </p>
              <div className="mt-10 flex xs:justify-center lg:justify-start">
                <a
                  href="https://docs.continuumdao.org/ContinuumDAO/WhitePaper"
                  className="backdrop-blur-[2px] link relative overflow-hidden border border-white py-4 text-base font-semibold leading-6 text-white xxs:px-8 xs:px-10"
                >
                  Read Our Whitepaper <span aria-hidden="true">↗</span>
                  <span className="link-bg"></span>
                </a>
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
            <div className="-z-20 xs:-mt-10 sm:-mt-24 lg:row-span-4 lg:-ml-24 lg:max-w-none">
              <Image
                className="main-shadow md:items-center lg:ml-16 lg:mt-20 lg:scale-100 xl:ml-32 xl:mt-24"
                src={WhoWeAreGraphic}
                alt="Network Graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
