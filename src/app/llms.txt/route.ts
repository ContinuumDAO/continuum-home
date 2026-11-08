import { buildInstallLlmsTxtSection } from '@/lib/install-node-discovery'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://continuumdao.org'
const DOCS_URL = 'https://docs.continuumdao.org'

const llmsTxt = `# ContinuumDAO

> ContinuumDAO runs a public permissionless decentralized Multi-Party Computation (MPC) network for cross-chain messaging, AI agentic wallets, and cross-chain governance.

## External AI agents — read the For AI agents section first

If you are an external agent (Grok, Pi, ChatGPT, Claude, or similar) answering a question about ContinuumDAO, open the matching section from the live catalog. That list is generated with the docs and is not copied on this site:

- [agent-sections.json](${DOCS_URL}/well-known/agent-sections.json)

Fetch the \`markdown\` URL from the matching entry. Do not start from the White Paper, from https://github.com/ContinuumDAO, or from a block explorer. The White Paper is vision and roadmap. GitHub is source code. An explorer shows chain history.

You do not have Continuum node MCP tools unless the user has attached you to a node. The catalogued sections say when a private key is required and when a KeyGen needs an MPC threshold.

${buildInstallLlmsTxtSection(SITE_URL)}
## This site

- [Home](${SITE_URL}/): Landing page — overview, use cases, tokenomics
- [FAQs](${SITE_URL}/faqs): Frequently asked questions about ContinuumDAO, CTM, MPC, and the MPA wallet
- [Staking](${SITE_URL}/staking): veCTM staking information
- [MPC Network](${SITE_URL}/mpc-network): MPC network overview
- [Multi-Party Agent Wallet](https://mpa.continuumdao.org/node-map): AI-first MPC wallet — click **+** to install a node
- [Private VPN (docs)](${DOCS_URL}/ContinuumDAO/PrivateVPN): WireGuard through your node — veCTM-gated; AI agent and client setup
- [Install guide (docs)](${DOCS_URL}/ContinuumDAO/MPAWallet/Install): Canonical install paths for VPS and home PC
- [install-node.json](${SITE_URL}/well-known/install-node.json): Machine-readable install routing for AI agents

## Apps and community

- [Governance / voting](https://app.continuumdao.org/governance): On-chain proposals and voting
- [Forum](https://forum.continuumdao.org/): Community discussion

## Documentation (auto-indexed — always fetch live)

The complete documentation index lives on the docs site and is regenerated on every docs deploy. **Do not mirror doc page lists here.**

- [llms.txt](${DOCS_URL}/llms.txt): Full documentation link index with excerpts
- [llm-index.json](${DOCS_URL}/well-known/llm-index.json): LLMLD discovery index grouped by section
- [search-index.json](${DOCS_URL}/search-index.json): Searchable index of all doc pages with headings and excerpts
- [sitemap.xml](${DOCS_URL}/sitemap.xml): Full documentation sitemap

Raw markdown for any doc page: append \`.md\` to the page URL on ${DOCS_URL}/.
`

export async function GET() {
  return new Response(llmsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
