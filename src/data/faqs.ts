export const faqItems = [
  // —— About ContinuumDAO ——
  {
    question: 'What is ContinuumDAO?',
    answer:
      'ContinuumDAO is a DAO that operates a permissionless Multi-Party Computation (MPC) network for cross-chain messaging, AI-ready wallets, and on-chain governance. Anyone can run a node, form MPC Groups, create a Multi-Party Agent Wallet, or build dApps that use Continuum services. Governance and CTM minting are vote-based and fully on-chain.',
  },
  {
    question: 'How can I get involved?',
    answer:
      'Vote and discuss proposals on https://forum.continuumdao.org and https://app.continuumdao.org/governance, run an MPC node, create an MPA wallet, or propose new cross-chain applications. Technical docs: https://docs.continuumdao.org.',
  },
  {
    question: 'Where can I find documentation?',
    answer:
      'Official documentation: https://docs.continuumdao.org (white paper, MPA wallet, MPC, C3Caller, node setup). Governance app: https://app.continuumdao.org. MPA wallet node map: https://mpa.continuumdao.org/node-map.',
  },

  // —— CTM, veCTM, and governance ——
  {
    question: 'What is the CTM token?',
    answer:
      'CTM is the governance and rewards token of ContinuumDAO. Supply is capped at 100 million; new minting requires governance approval. CTM can be locked as veCTM for voting, attached to MPC nodes to earn signer rewards, and optionally used for discounted C3Caller messaging when the protocol is live.',
  },
  {
    question: 'What is veCTM?',
    answer:
      'veCTM is voting-escrow CTM. Lock CTM for up to four years to receive Voting Power. Longer locks yield more power. veCTM is used to vote on DAO proposals and can be attached to MPC nodes that participate in the C3Caller signer pool.',
  },
  {
    question: 'What is Voting Power?',
    answer:
      'Voting Power determines your weight on governance proposals. It depends on how much CTM you have locked in veCTM and how long it remains locked. Other veCTM holders can delegate Voting Power to you if you do not hold enough to propose alone.',
  },
  {
    question: 'How do I lock CTM in veCTM?',
    answer:
      'Use the governance front end at https://app.continuumdao.org or call the veCTM contract directly. Choose a lock duration up to four years — longer locks grant more Voting Power.',
  },
  {
    question: 'How do I unlock CTM from veCTM before the lock ends?',
    answer:
      'Use the liquidate feature in the front end or the smart contract. Early exit applies a penalty that decreases as the lock matures (for example, up to 50% on a four-year lock at the start, tapering to zero at expiry). You can also split veCTM positions and liquidate one part at a time.',
  },
  {
    question: 'Can I create a governance proposal?',
    answer:
      'Yes, if you hold enough veCTM Voting Power (threshold set by the DAO). If you are below the threshold, you can still propose when other holders delegate sufficient Voting Power to you.',
  },
  {
    question: 'What is the Committee?',
    answer:
      'The Committee is a small group elected yearly by the DAO to handle day-to-day operations such as payments, communications, business development, and engineering. Major decisions remain permissionless through governance voting.',
  },
  {
    question: 'What is C3Governor?',
    answer:
      "C3Governor extends OpenZeppelin Governor for multi-option, multi-chain governance. Proposals can express complex outcomes and execute on different chains. It is part of the Continuum contract stack documented alongside C3Caller — see https://docs.continuumdao.org/ContinuumDAO/C3Caller/Overview and https://docs.continuumdao.org/ContinuumDAO/Governance/Constitution.",
  },

  // —— MPC network ——
  {
    question: 'What is the MPC Network?',
    answer:
      'The MPC Network is a public, decentralized network of MPC nodes organized into Groups. Groups generate shared signing keys (KeyGens) used for wallet custody and, optionally, C3Caller cross-chain messaging. Anyone can run a node; approved Groups can join the relayer signer pool and earn CTM rewards.',
  },
  {
    question: 'Why is the MPC Network run by a DAO?',
    answer:
      'DAO governance keeps the network permissionless and resilient: the community decides trusted signers, supported chains, maintenance policy, and reward allocation rather than a single company.',
  },
  {
    question: 'What is an MPC signer group?',
    answer:
      'An MPC signer group is a set of nodes (typically up to about seven) that form a Group, run KeyGen ceremonies, and hold threshold shares of shared public keys. For C3Caller traffic, groups often use tx-check KeyGens and larger thresholds (for example 3/5 across independent operators).',
  },
  {
    question: 'How do I run an MPC node?',
    answer:
      'For the MPA wallet, open https://mpa.continuumdao.org/node-map, click +, and follow the installer on a VPS or home PC (Windows 11, macOS, or Linux). Full guide: https://docs.continuumdao.org/ContinuumDAO/MPAWallet/Install. Advanced manual setup: https://docs.continuumdao.org/ContinuumDAO/RunningInstructions/NodeRunningInstruction.',
  },
  {
    question: 'How do I join the C3Caller MPC signer pool and earn rewards?',
    answer:
      'Form a Group with other node operators, create the KeyGens required for C3Caller (tx-check keys for EVM and Ed25519 chains), then submit your group for a governance vote to join the relayer pool. Once approved, attach veCTM to your node; rewards depend on attached Voting Power and your node Quality Factor. Details: https://docs.continuumdao.org/ContinuumDAO/MPCSigner/JoinNetwork.',
  },
  {
    question: 'What is the Quality Factor of an MPC node?',
    answer:
      'Quality Factor is a score from 0 to 10 reflecting signer service quality, set and adjusted by governance voting. It affects reward share for nodes in the C3Caller signer pool.',
  },
  {
    question: 'Can I unlock veCTM attached to my MPC node at any time?',
    answer:
      'No. veCTM locked to a node in the signer pool can only be released through a monthly governance process. This is normally routine unless the DAO finds malicious behaviour, in which case slashing or extended lock can apply.',
  },

  // —— C3Caller ——
  {
    question: 'What is C3Caller?',
    answer:
      'C3Caller is ContinuumDAO\'s cross-chain messaging protocol. dApps emit messages on one chain; the relayer and MPC signer pool verify and deliver execution on a destination chain. Smart contracts live in the c3caller repository — install with forge: ContinuumDAO/c3caller. Docs: https://docs.continuumdao.org/ContinuumDAO/C3Caller/C3CallerProtocol.',
  },
  {
    question: 'Is C3Caller live on mainnet?',
    answer:
      'C3Caller is still in final testing; production contract addresses are not published yet. Documentation describes the intended workflow for when the protocol goes live. Check https://docs.continuumdao.org/ContinuumDAO/C3Caller/ContractAddresses for updates.',
  },
  {
    question: 'Why use C3Caller instead of other cross-chain bridges?',
    answer:
      'C3Caller is DAO-governed and permissionless — not tied to a single vendor. dApps choose which MPC signers they trust. Messaging can use full destination gas limits for heavier cross-chain logic. Fees are per byte transmitted plus destination gas. EVM and Ed25519 chains (Solana, NEAR, TON, Stellar, etc.) are in scope.',
  },

  // —— Multi-Party Agent Wallet ——
  {
    question: 'What is the Multi-Party Agent Wallet?',
    answer:
      'The Multi-Party Agent Wallet (MPA wallet) lets people and AI agents jointly control wallet addresses using MPC — there is no full private key on any device until a Group deliberately ejects a KeyGen. Each node includes a built-in AI agent harness and a full manual UI. Typical personal setup: two nodes with 2/2 threshold (AI-assisted node plus human circuit breaker). Overview: https://docs.continuumdao.org/ContinuumDAO/MPAWallet/Overview.',
  },
  {
    question: 'How is the MPA wallet different from a multi-sig wallet?',
    answer:
      'Multi-sig wallets combine signatures from separate on-chain keys. The MPA wallet uses off-chain MPC among your nodes; only the final single signature appears on-chain. Accept/Reject decisions and node coordination are not recorded on-chain, which preserves privacy for the Group\'s decision process.',
  },
  {
    question: 'How do I install an MPA wallet node?',
    answer:
      'Easiest path: https://mpa.continuumdao.org/node-map → click + → choose VPS or home PC (Windows 11, macOS, Linux). Home PCs need Docker Desktop and the Continuum Node extension; VPS users can use the guided installer or the one-shot Linux script. Full steps: https://docs.continuumdao.org/ContinuumDAO/MPAWallet/Install.',
  },
  {
    question: 'Do I need more than one node?',
    answer:
      'Yes, for a shared wallet address. One node alone cannot complete a KeyGen. The simplest useful setup is two nodes with 2/2 threshold — often one AI-assisted node and one human-controlled node so no spend completes without your Accept on the Join tab. After the first node, add peers, configure relay addresses, create a Group, then a KeyGen. See Post install steps in https://docs.continuumdao.org/ContinuumDAO/MPAWallet/Install.',
  },
  {
    question: 'How do I connect my browser to my node?',
    answer:
      'Your browser attaches directly to your node — ContinuumDAO does not custody or proxy wallet control. Options: Node hosted app (local PC), Node hosted app over SSH tunnel (typical for VPS), or Browser HTTPS with your node certificate. Walkthrough: https://docs.continuumdao.org/ContinuumDAO/MPAWallet/AttachYourNode.',
  },
  {
    question: 'What blockchains does the MPA wallet support?',
    answer:
      'EVM chains and Bitcoin (SegWit and Taproot) are supported today. Ed25519 chains such as Solana are rolling out; NEAR, TON, Stellar, and others are planned. Chain configuration is per-node — see https://docs.continuumdao.org/ContinuumDAO/MPAWallet/ChainManagement.',
  },
  {
    question: 'Does ContinuumDAO hold my keys or funds?',
    answer:
      'No. Unlike many MPC products, shares are not stored in a vendor database. Threshold shares, Group state, and encrypted context live only on nodes you run. Back up bootstrap keys and encrypted database snapshots yourself — https://docs.continuumdao.org/ContinuumDAO/MPAWallet/BackupAndRestoration. The hosted UI at mpa.continuumdao.org is optional; management traffic goes to your node.',
  },
  {
    question: 'How do the built-in AI agent and human-in-the-loop work?',
    answer:
      'Every node ships with an AI agent harness (Node → AI Agent). Link an LLM provider, enable the continuum MCP server, and use Agent chat or Plan mode to research and propose trades. On-chain spends still require enough nodes to Accept on the Join tab — the agent cannot bypass your threshold. Configure: https://docs.continuumdao.org/ContinuumDAO/MPAWallet/AIHarness/Configure. You can use the wallet entirely without AI via the node app UI.',
  },
  {
    question: 'What DeFi protocols can the MPA wallet use?',
    answer:
      'Built-in protocol integrations include Uniswap, Aave, Curve, GMX, Hyperliquid, Lido, and others — swaps, lending, staking, perps, and bridges through the node UI or AI agent, always under your MPC threshold. Full list: https://docs.continuumdao.org/ContinuumDAO/MPAWallet/DeFiProtocolSupport.',
  },
  {
    question: 'Does the MPA wallet use encryption?',
    answer:
      'Yes. MPC signing rounds use TLS 1.2 between nodes. Browser attach paths use TLS 1.3 to your node (self-signed or CA certificates) with short-lived JWTs where applicable. Node-to-node messaging and stored agent context are encrypted on your infrastructure.',
  },
  {
    question: 'Is there a fee to use the MPA wallet?',
    answer:
      'Each KeyGen receives a free allowance of sign requests; after that, a small per-signature fee (governed by the DAO, typically a few cents) is deducted from a balance you top up for that address. Running your own nodes and software is free aside from your hosting and chain gas costs.',
  },
  {
    question: 'Can my MPA wallet also earn C3Caller signer rewards?',
    answer:
      'Yes, optionally. The same node software can join a larger Group with tx-check KeyGens for relayer traffic (typically five or more independent operators with a 3/5-style threshold). That is separate from a personal 2/2 wallet — see https://docs.continuumdao.org/ContinuumDAO/MPCSigner/JoinNetwork.',
  },
  {
    question: 'What can I use an MPA wallet for?',
    answer:
      'Common uses: self-custody without a single recoverable private key, human-in-the-loop AI trading, DAO treasuries and committees, proposal summarization before votes, family or multi-party custody with custom thresholds, and optional participation in Continuum cross-chain signing.',
  },
]
