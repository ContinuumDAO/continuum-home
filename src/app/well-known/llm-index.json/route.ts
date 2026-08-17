import { llmldGetStarted } from '@/lib/install-node-discovery'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://continuumdao.org'
const DOCS_URL = 'https://docs.continuumdao.org'

const llmIndex = {
  '@context': [
    'https://schema.org',
    'https://llmld.org/v1',
  ],
  '@type': 'llmld:AIWebsite',
  'llmld:summary': {
    one_liner:
      'ContinuumDAO is a DAO that runs a public permissionless decentralized Multi-Party Computation (MPC) network for cross-chain messaging, AI agentic wallets and cross-chain governance.',
    key_facts: [
      'Governance and minting are 100% on-chain and vote-based.',
      'MPC network is permissionless; anyone can run a node, create Multi-Party Agent Wallets and earn CTM rewards.',
      'CTM is the governance and rewards token; veCTM is voting escrow (lock up to 4 years).',
      'C3Caller provides cross-chain messaging; C3Governor extends governance across chains.',
      'Multi-Party Agent Wallet supports human-in-the-loop and AI agentic signing.',
      'Install an MPA node from the node map (+ button) on VPS or home PC (Windows 11, macOS, Linux); one node is not enough for a wallet — add peers, a Group, and a KeyGen.',
    ],
  },
  'llmld:getStarted': llmldGetStarted(SITE_URL),
  'llmld:actions': {
    primary: [
      {
        name: 'Install an MPA node',
        url: 'https://mpa.continuumdao.org/node-map',
        description:
          'Start here for new users: click + on the node map, or see Install.md for platform-specific paths (VPS one-shot script, Docker Desktop on Windows/macOS/Linux).',
      },
      {
        name: 'Install guide (docs)',
        url: `${DOCS_URL}/ContinuumDAO/MPAWallet/Install`,
      },
      { name: 'FAQs', url: `${SITE_URL}/faqs` },
      { name: 'Vote / Governance', url: 'https://app.continuumdao.org/governance' },
      { name: 'Forum', url: 'https://forum.continuumdao.org/' },
      { name: 'Staking', url: `${SITE_URL}/staking` },
      { name: 'MPC Network', url: `${SITE_URL}/mpc-network` },
      { name: 'Multi-Party Agent Wallet', url: 'https://mpa.continuumdao.org/node-map' },
    ],
  },
  'llmld:documentation': {
    note: 'Full documentation is auto-indexed on the docs site. Do not mirror page lists here — fetch the live index.',
    llmsTxt: `${DOCS_URL}/llms.txt`,
    llmIndex: `${DOCS_URL}/well-known/llm-index.json`,
    searchIndex: `${DOCS_URL}/search-index.json`,
    sitemap: `${DOCS_URL}/sitemap.xml`,
    baseUrl: `${DOCS_URL}/`,
    markdownSuffix: '.md',
  },
}

export async function GET() {
  return new Response(JSON.stringify(llmIndex, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
