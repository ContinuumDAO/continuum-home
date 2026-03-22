const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://continuumdao.org'

const llmIndex = {
  '@context': [
    'https://schema.org',
    'https://llmld.org/v1',
  ],
  '@type': 'llmld:AIWebsite',
  'llmld:summary': {
    one_liner:
      'ContinuumDAO is a DAO that runs a public permissionlessdecentralized Multi-Party Computation (MPC) network for cross-chain messaging, AI agentic wallets and cross-chaingovernance.',
    key_facts: [
      'Governance and minting are 100% on-chain and vote-based.',
      'MPC network is permissionless; anyone can run a node, create Multi-Party Agent Wallets and earn CTM rewards.',
      'CTM is the governance and rewards token; veCTM is voting escrow (lock up to 4 years).',
      'C3Caller provides cross-chain messaging; C3Governor extends governance across chains.',
      'Multi-Party Agent Wallet supports human-in-the-loop and AI agentic signing.',
    ],
  },
  'llmld:actions': {
    primary: [
      { name: 'FAQs', url: `${SITE_URL}/faqs` },
      { name: 'Docs', url: 'https://docs.continuumdao.org/' },
      { name: 'Vote / Governance', url: 'https://app.continuumdao.org/governance' },
      { name: 'Forum', url: 'https://forum.continuumdao.org/' },
      { name: 'Staking', url: `${SITE_URL}/staking` },
      { name: 'MPC Network', url: `${SITE_URL}/mpc-network` },
      { name: 'Multi-Party Agent Wallet', url: 'https://mpa.continuumdao.org' },
    ],
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
