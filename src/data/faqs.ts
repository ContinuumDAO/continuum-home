export const faqItems = [
  {
    question: 'What is ContinuumDAO?',
    answer:
      'ContinuumDAO is a protocol that runs a decentralized Multi-Party Computation network. The network is designed to serve as a public good and run by a DAO. Anyone can run a node, join an MPC signer pool and earn rewards. Anyone can create a Multi-Party Agent Wallet. Any dApp can use its services for cross-chain message signing. The MPC Network is a permissionless service.',
  },
  {
    question: 'What is the CTM token?',
    answer:
      'The CTM token represents the entire value of ContinuumDAO. Only 100 million can ever be minted, and minting happens only through governance voting. CTM can be locked in veCTM for voting, used by MPC node runners to earn rewards, and optionally used for discounted C3Caller cross-chain messaging.',
  },
  {
    question: 'What is veCTM?',
    answer:
      'veCTM is a voting escrow token that allows you to lock your CTM for up to 4 years. The longer you lock your CTM, the more Voting Power you gain. veCTM can be used to vote on Governance proposals, and to earn rewards from the MPC network.',
  },
  {
    question: 'What is Voting Power?',
    answer:
      'Voting Power is the size of your power to vote on Governance proposals. The more Voting Power you have, the more influence you have on the outcome of Governance proposals. Voting Power is calculated based on the amount of CTM you have locked in veCTM and the time you have locked it for.',
  },
  {
    question: 'Can I initiate a proposal?',
    answer:
      'Yes you can if you hold enough veCTM Voting Power (determined by the DAO). If you do not have enough Voting Power, you can still initiate a proposal, provided enough other veCTM holders have delegated their Voting Power to you.',
  },
  {
    question: 'How do I lock CTM in veCTM?',
    answer:
      'You can lock CTM in veCTM through the front end, or by calling the smart contract function directly. You can lock your CTM for up to 4 years, and the longer you lock it, the more Voting Power you gain. You can also lock your CTM for a shorter period of time, and the shorter the period, the less Voting Power you gain.',
  },
  {
    question: 'How do I unlock CTM from veCTM?',
    answer:
      'You can unlock CTM from veCTM through the front end liquidate feature, or by calling the smart contract function directly. You can unlock your CTM at any time, and the amount of CTM you unlock will be based on the amount of time you have locked your CTM in veCTM. For a 4 year lock, you will lose 50% of your CTM, linearly decreasing to zero as the unlock time approaches. You can also unlock smaller amounts by splitting your veCTM and liquidating one of them.',
  },
  {
    question: 'Why is the MPC Network run by a DAO?',
    answer:
      'It is run by a DAO because it is designed to be permissionless, resilient and decentralized. The DAO is responsible for making decisions about the network, such as which nodes to trust, which signers to use, which chains to support, how the network is maintained and by whom. The DAO is also responsible for the allocation of rewards to node runners and signer pool members.',
  },
  {
    question: 'What is the role of the Committee?',
    answer:
      'The Committee is a small group of individuals who are responsible for day to day functions, such as managing payments, updating socials, performing Business Development, writing code and other tasks as needed. They are elected every year by the DAO. Most important functions can be undertaken permissionlessly through Governance voting by the DAO.',
  },
  {
    question: 'How can I get involved?',
    answer:
      'You can participate in governance on the forum and by voting, run a node in the MPC network, or propose new cross-chain applications. If the DAO supports your ideas, it may back you.',
  },
  {
    question: 'Where can I find more documentation?',
    answer:
      'Full documentation, the whitepaper, and technical details are available at https://docs.continuumdao.org. Governance and voting take place at https://app.continuumdao.org and the forum.',
  },
  {
    question: 'What is the C3Caller?',
    answer:
      'C3Caller is a cross-chain messaging protocol that allows for seamless integration of dApps across blockchains with MPC message-passing. The code can simply be installed with the command "forge soldeer install @c3caller~0.3.0". Documentation for its usage can be found at https://docs.continuumdao.org/ContinuumDAO/C3Caller/C3Caller.',
  },
  {
    question: 'Why use C3Caller for cross-chain messaging?',
    answer:
       'C3Caller is run by a DAO and will exist for as long as the DAO participates in Governance. It is a permissionless service and does not depend on a company, which could fail. In addition, C3Caller can utilise the whole transaction gas limit (e.g. Fusaka) and so is suitable for heavy cross-chain messaging. dApps are charged per byte of data transmitted and for gas utilised on the destination chain. C3Caller supports both EVMs and other chains such as Solana, NEAR, TON and Stellar. The use of MPC is considered institutional grade security and beyond the inherent security of MPC, dApps have wide ranging control of exactly which MPC signers it will trust.',
  },
  {
    question: 'What is the Multi-Party Agent Wallet?',
    answer:
      'The Multi-Party Agent Wallet is a human-in-the-loop transaction wallet designed for AI agents. It can be used to sign transactions with a private key generated collectively by multiple nodes. The nodes can either be humans (for human-in-the-loop transactions) or AI agents. Context built up over time between AI Agents and humans is stored on the nodes and is accessible by any AI Agent. Suitable for use with Open Claw, to allow controlled access to assets. Also suitable for DAOs, so that complex proposals can be summarized by AI before voting. Multi-Party Agent Wallets can optionally join the C3Caller MPC signer pool to earn rewards.',
  },
  {
    question: 'What is C3Governor?',
    answer:
      "C3Governor is a cross-chain and on-chain governance system that extends Open Zeppelin's Governor functionality for multi-option and multi-chain governance. Complex multi-option, multi-outcome proposals can be generated that execute on any chain. The code is fully open source and can be integrated into any dApp or DAO.",
  },
  {
    question: 'What is the MPC Network?',
    answer:
      'The MPC Network is a public decentralized Multi-Party Computation network comprised of MPC signing Groups. Anyone can run a node and then form a Group and then an MPC signer. Any Group can join the MPC signer pool via Governance voting and nodes can earn rewards for the service they provide. The MPC Network is a permissionless service, that can expand infinitely to service the needs of dApps needing cross-chain services.',
  },
  {
    question: 'What is an MPC signer group?',
    answer:
      'An MPC signer group is a collection of MPC nodes (up to about 7) that join together in a Group, generate one or more KeyGens resulting in unique Public Keys used by the C3Caller to sign messages. The nodes in the group are rewarded with CTM for the service they provide.',
  },
  {
    question: 'How do I run an MPC node?',
    answer:
      'You can run an MPC node by installing the MPC code on a server (preferably a VPS) from the ContinuumDAO GitHub repository using the command git clone git@github.com:ContinuumDAO/mpc-config.git and following instructions. You can then complete the additional steps through the front end.',
  },
  {
    question: 'How do I join an MPC signer group?',
    answer:
      'You can form an MPC signer group by reaching out to others who are running MPC nodes and configuring the nodes as a Group. The nodes can then collectively generate one or more KeyGens that are able to sign messages sent to them by the C3Caller relayer.',
  },
  {
    question: 'How do I connect my new MPC signing Group to the C3Caller relayer?',
    answer:
      'Once you have formed an MPC signing Group, you can submit your details of your MPC Group to a Committee member (or by creating a Proposal) for a Governance vote to be added to the relayer signing pool.',
  },
  {
    question: 'How do I earn rewards for signing messages?',
    answer:
      'Once you have been added to the relayer signing pool, you can attach your veCTM to your node in the MPC signer. You will then earn rewards for maintaining a high quality service for the relayer. Your rewards depend on the Voting Power of your veCTM and your Quality Factor. Rewards are paid in CTM, which can be claimed at any time. There is a minimum Voting Power of your attached veCTM that is required to earn rewards',
  },
  {
    question: 'What is the Quality Factor of an MPC node?',
    answer:
      "The Quality Factor is a measure of the quality of the service provided by an MPC signer. It is a number between 0 and 10 and is assigned by voting. A node's Quality Factor can be increased or decreased by Governance voting.",
  },
  {
    question: 'Can I unlock my node attached veCTM at any time?',
    answer:
      'No. You can only unlock your veCTM from an MPC node with a Governance vote (every month). This should be a formaility, unless the DAO judges that your node has acted maliciously, in which case it can remain locked indefinitely',
  },
  {
    question: 'What is the Multi-Party Agent Wallet?',
    answer:
      'The Multi-Party Agent Wallet is a human-in-the-loop transaction wallet designed for both humans and AI agents. It can be used to sign transactions with a private key generated collectively by multiple nodes. The nodes can either be humans (for human-in-the-loop transactions) or AI agents. Context built up over time between AI Agents and humans is stored on the nodes and is accessible by any AI Agent. Suitable for use with Open Claw, to allow controlled access to assets. Also suitable for DAOs, so that complex proposals can be summarized by AI before voting. Multi-Party Agent Wallets can optionally join the C3Caller MPC signer pool to earn rewards.',
  },
  {
    question: 'Does the Multi-Party Agent Wallet support EVMs and other chains such as Solana, NEAR, TON, Stellar etc.?',
    answer:
      'It will very soon. The Multi-Party Agent Wallet supports EVMs now and other chains such as Solana, NEAR, TON, Stellar etc. are being added now (but not yet released).',
  },
  {
    question: 'Does the Multi-Party Agent wallet use encryption?',
    answer:
      'Yes. The nodes use TLS 1.2 for the message signing rounds and the communication between the browser at https://mpa.continuumdao.org and the nodes request JWTs from the server to bypass the server and use TLS 1.3 with the nodes, utilizing either self-signed certs, or CA approved certs.',
  },
  {
    question: 'Does the Multi-Party Agent Wallet depend on any external services to function?',
    answer:
      'No. The Multi-Party Agent Wallet is self-contained and does not depend on any external services to function. It is designed to be resilient and decentralized. Once installed using Docker, the configured nodes in a Group manage their own secure communication with each other. Even the Multi-Party Agent front end is not required if management signatures are made using ed25519 key pairs and the Restful API rather than MetaMask',
  },
  {
    question: 'How is the Multi-Party Agent Wallet different from a Multi-Sig Wallet?',
    answer:
      'A Multi-Sig Wallet is a wallet that is controlled by multiple private keys. The Multi-Party Agent Wallet is a wallet that is controlled by multiple nodes, not smart contracts. Once enough nodes have agreed to sign a transaction (threshold + 1 nodes), then they collectively create a single signature. The signing process, whilst still being highly secure, is off-chain and privacy preserving.',
  },
  {
    question: 'What uses can a Multi-Party Agent Wallet be used for?',
    answer:
      'A Multi-Party Agent Wallet can be used for a variety of purposes, such as: Human-in-the-loop transactions, DAO voting, DAO proposal summarization by AI, controlled access to assets for semi-autonomous trading by AI, cross-chain messaging support for C3Caller and more.',
  },
  {
    question: 'Why is it useful to use a Multi-Party Agent Wallet for DAO voting?',
    answer:
      'A Multi-Party Agent Wallet can be used to vote on DAO proposals. Frequently complex proposals are difficult for humans to understand and vote on, which can reduce the number of DAO participants who actaully vote. By using a Multi-Party Agent Wallet, the proposal can be summarized by AI before voting, and the voting can be done by the AI Agent after the agreement of the DAO vote token holder. Over time, the AI agent understands the priorities of the human voter, since each AI suggestion is documented, as is the human response to it. This context is stored in the nodes of the Group for use by any AI agent that is used. In this way, it is hoped that DAO participation rates will stay strong, which is very important for decentralization.',

  },
  {
    question: 'Why is it useful to use a Multi-Party Agent Wallet for controlled access to assets?',
    answer:
      'A Multi-Party Agent Wallet can be used to collectively trade assets in a single MPC wallet. For example, the AI might suggest a trade with a Purpose (a string) and one or more humans can Accept or Reject that trade made by the AI agent. When accepting or rejecting the sign request, the humans can include their Thoughts and this is taken into account by the AI when either proceeding (enough humans have Agreed), or Shelving the transaction (even though enough humans Agreed, their Thoughts influenced the AI agent to change its mind). This serves several functions, including protecting the assets from runaway AI trading by maintaining a human-in-the-loop, building Context for the AI agent to make better decisions in the future and allowing more than one human to make collective trading decisions, like an Investment Committee.',
  },
  {
    question: 'How do humans and AI agents interact with the Multi-Party Agent Wallet?',
    answer:
      'Humans and AI agents can interact with the Multi-Party Agent Wallet by using the front end or a Restful API to create a sign request, or sign agreements. The sign request can be sent to the other nodes in the Group via ed25519 management signatures and the API, whereas humans can perform their management signatures using either MetaMask (EIP-191), or ed25519 key pairs. The AI agent can be installed directly on one of the nodes and talk to it via a port for security.',
  },
  {
    question: 'What AI agents can be used with the Multi-Party Agent Wallet?',
    answer:
      'Any AI agent that can be installed on a node. For example, Open Claw can easily be installed on a node. The files https://github.com/ContinuumDAO/mpc-config/blob/main/docs/AGENT_ED25519_SETUP.md and https://github.com/ContinuumDAO/mpc-config/blob/main/docs/API_IMPLEMENTATION.md provide the instructions for installing Open Claw on a node and act as the Skill needed for it.',
  },
  {
    question: 'How do I install Multi-Party Agent Wallet on a node?',
    answer:
      'You can install Multi-Party Agent Wallet on a node by following the instructions in https://github.com/ContinuumDAO/mpc-config/blob/main/README.md and https://github.com/ContinuumDAO/mpc-config/blob/main/docs/AGENT_ED25519_SETUP.md and https://github.com/ContinuumDAO/mpc-config/blob/main/docs/API_IMPLEMENTATION.md and then continuing the setupvia the front end, if you do not want to use the Restful API.',
  },
  {
    question: 'Can the Multi-Party Agent Wallet join the C3Caller MPC signer pool to earn rewards?',
    answer:
      'Yes. The Multi-Party Agent Wallet can join the C3Caller MPC signer pool by creating two keyGens of KeyType "tx-check", one for EVMs (secp256k1) and one for Edwards Curve (ed25519) for Solana, NEAR, TON, Stellar etc. These two keyGens can then be used to sign messages sent to them by the C3Caller relayer.',
  },
  {
    question: 'Do I have to pay for the Multi-Party Agent Wallet?',
    answer:
      'Yes, with some initial free usage. The Multi-Party Agent Wallet is free to use for a limited number of sign requests for each generated keyGen (e.g Ethereum address). Afterwards, there is a small charge for each sign request made by a keyGen, as decided by the DAO. The user can top up their balance for their keyGen address and everytime that this address is used, the fee (a few cents) is deducted from the balance.',
  },
]
