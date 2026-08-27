const DOCS_URL = 'https://docs.continuumdao.org'
const MPA_NODE_MAP = 'https://mpa.continuumdao.org/node-map'
const PRIVATE_VPN_DOC = `${DOCS_URL}/ContinuumDAO/PrivateVPN.md`
const PRIVATE_VPN_URL = `${DOCS_URL}/ContinuumDAO/PrivateVPN`

/** veCTM-gated WireGuard VPN — canonical doc for AI crawlers. */
export const privateVpnDiscovery = {
  task: 'private-vpn',
  summary:
    'Enable Private VPN on an MPA node: attach veCTM at the governance voting-power threshold, enable WireGuard on the node, download client configs (optional obfuscation). Not a separate paid subscription.',
  canonicalDoc: PRIVATE_VPN_DOC,
  canonicalDocUrl: PRIVATE_VPN_URL,
  keywords: [
    'private vpn',
    'wireguard',
    'veCTM',
    'vpn',
    'shadowsocks',
    'egress',
    'vpn mcp',
  ],
} as const

/** Machine-readable install routing for external AI agents. */
export const installNodeDiscovery = {
  task: 'install-mpa-node',
  summary:
    'Install a Multi-Party Agent Wallet node on a Linux VPS or home PC (Windows 11, macOS, or Linux).',
  defaultForHumans: MPA_NODE_MAP,
  canonicalDoc: `${DOCS_URL}/ContinuumDAO/MPAWallet/Install.md`,
  canonicalDocUrl: `${DOCS_URL}/ContinuumDAO/MPAWallet/Install`,
  agentsGuide: 'https://github.com/ContinuumDAO/mpc-config/blob/main/AGENTS.md',
  avoidForAgents: `${DOCS_URL}/ContinuumDAO/RunningInstructions/NodeRunningInstruction.md`,
  routes: [
    {
      platform: 'linux-vps',
      when: 'Ubuntu or Debian VPS; agent can run shell commands as root',
      primary: 'oneshot-script',
      script:
        'https://raw.githubusercontent.com/ContinuumDAO/mpc-config/main/scripts/install-node-debian-ubuntu.sh',
      guide:
        'https://github.com/ContinuumDAO/mpc-config/blob/main/docs/CREATE_NODE_ONESHOT.md',
      fallback: MPA_NODE_MAP,
    },
    {
      platform: 'windows-11',
      when: 'Home or office Windows 11 PC; interactive user',
      primary: 'node-map-or-docker-extension',
      nodeMap: MPA_NODE_MAP,
      guide:
        'https://github.com/ContinuumDAO/mpc-config/blob/main/docs/INSTALL_NODE_WINDOWS_DOCKER_DESKTOP.md',
      prerequisites: [
        'Install Docker Desktop for Windows (WSL2 backend)',
        'Install Continuum Node extension from Docker Desktop Marketplace',
        'Use public WAN IPv4 and router port forward TCP 18080 (and 8883 if relay)',
      ],
    },
    {
      platform: 'macos',
      when: 'Home or office Mac; interactive user',
      primary: 'node-map-or-docker-extension',
      nodeMap: MPA_NODE_MAP,
      guide:
        'https://github.com/ContinuumDAO/mpc-config/blob/main/docs/INSTALL_NODE_MACOS_DOCKER_DESKTOP.md',
      prerequisites: [
        'Install Docker Desktop for Mac',
        'Install Continuum Node extension from Docker Desktop Marketplace',
        'Use public WAN IPv4 and router port forward TCP 18080 (and 8883 if relay)',
      ],
    },
    {
      platform: 'linux-pc',
      when: 'Home Linux workstation or laptop',
      primary: 'node-map-or-docker-extension',
      nodeMap: MPA_NODE_MAP,
      doc: `${DOCS_URL}/ContinuumDAO/MPAWallet/Install.md`,
      prerequisites: [
        'Docker Desktop for Linux or node-map installer flow',
        'Public WAN IPv4 and port forwarding when peers are on the internet',
      ],
    },
  ],
  homeNetwork: {
    portForwardGuide:
      'https://github.com/ContinuumDAO/mpc-config/blob/main/docs/PORT_FORWARDING_HOME_NETWORK.md',
    ports: [
      { port: 18080, protocol: 'tcp', purpose: 'Discovery (required for all home nodes)' },
      { port: 8883, protocol: 'tcp', purpose: 'Messaging (required if this PC is the relay)' },
    ],
  },
  afterInstall: [
    {
      step: 'attach-node',
      name: 'Attach your node in the browser',
      url: `${DOCS_URL}/ContinuumDAO/MPAWallet/AttachYourNode.md`,
    },
    {
      step: 'backup',
      name: 'Back up bootstrap key and encrypted database',
      url: `${DOCS_URL}/ContinuumDAO/MPAWallet/BackupAndRestoration.md`,
    },
    {
      step: 'peers-group-keygen',
      name: 'Add a second node, configure peers, create Group and KeyGen (minimum 2/2)',
      url: `${DOCS_URL}/ContinuumDAO/MPAWallet/Install.md`,
      anchor: 'post-install-steps',
    },
    {
      step: 'ai-harness',
      name: 'Optional: configure the built-in AI harness',
      url: `${DOCS_URL}/ContinuumDAO/MPAWallet/AIHarness/Configure.md`,
    },
    {
      step: 'private-vpn',
      name: 'Optional: Private VPN (requires attached veCTM at voting-power threshold)',
      url: PRIVATE_VPN_DOC,
    },
  ],
  keyFacts: [
    'One node alone cannot create a shared wallet address — add at least one peer (typical personal setup: 2/2 human-in-the-loop).',
    'For almost all human users, start at the node map + button; do not default to manual git clone.',
    'AI agents provisioning Ubuntu/Debian VPS should use the one-shot script, not NodeRunningInstruction.md.',
    'Home PCs need Docker Desktop plus the Continuum Node extension, public WAN IP, and router port forwarding.',
    `Private VPN (WireGuard through your node): ${PRIVATE_VPN_URL} — veCTM privilege, not a Linea subscription; see docs for MCP vpn tools and client setup.`,
  ],
} as const

/** LLMLD block for llm-index.json */
export function llmldGetStarted(siteUrl: string) {
  return {
    task: installNodeDiscovery.task,
    summary: installNodeDiscovery.summary,
    defaultForHumans: installNodeDiscovery.defaultForHumans,
    canonicalDoc: installNodeDiscovery.canonicalDoc,
    installNodeJson: `${siteUrl}/well-known/install-node.json`,
    agentsGuide: installNodeDiscovery.agentsGuide,
    routes: installNodeDiscovery.routes,
    afterInstall: installNodeDiscovery.afterInstall,
    avoidForAgents: installNodeDiscovery.avoidForAgents,
    keyFacts: installNodeDiscovery.keyFacts,
  }
}

/** Plain-text install section for llms.txt */
export function buildInstallLlmsTxtSection(siteUrl: string): string {
  const d = installNodeDiscovery
  return `## Install an MPA wallet node (for AI agents guiding users)

**Ask the user:** VPS (always-on) or home PC? Which OS (Windows 11, macOS, Linux)?

| User situation | Lead them to |
|----------------|--------------|
| Any human — easiest path | [Node map + button](${d.defaultForHumans}) |
| Linux VPS — agent can run shell as root | [One-shot script](${d.routes[0].script}) + [CREATE_NODE_ONESHOT.md](${d.routes[0].guide}) |
| Windows 11 home PC | [Install.md](${d.canonicalDoc}) + [Windows Docker Desktop guide](${d.routes[1].guide}) |
| macOS home PC | [Install.md](${d.canonicalDoc}) + [macOS Docker Desktop guide](${d.routes[2].guide}) |
| Linux home PC / laptop | [Install.md](${d.canonicalDoc}) or node-map + button |
| Advanced / manual shell only | [NodeRunningInstruction.md](${d.avoidForAgents}) — **not** the default |
| Private VPN on your node (veCTM required) | [Private VPN](${PRIVATE_VPN_URL}) |

**After one node is running:** user still needs a second peer, Group, and KeyGen (minimum 2/2) — see [Post install steps](${d.canonicalDoc}#post-install-steps).

**Private VPN:** [Private VPN docs](${PRIVATE_VPN_URL}) — WireGuard through your node; requires attached veCTM at the governance voting-power threshold (not a separate subscription).

**Home network:** forward TCP **18080** (discovery); **8883** if this machine is the relay — [port forwarding guide](${d.homeNetwork.portForwardGuide}).

**Full machine-readable routing:** [install-node.json](${siteUrl}/well-known/install-node.json)

**Fetch full install steps:** ${d.canonicalDoc}
`
}
