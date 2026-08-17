import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) return url
  return 'https://continuumdao.org'
}

const SITE_URL = getSiteUrl()
const DOCS_URL = 'https://docs.continuumdao.org'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s - ContinuumDAO',
    default: 'ContinuumDAO',
  },
  description:
    'A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.',
  keywords: [
    'ContinuumDAO',
    'DAO',
    'MPC',
    'multi-party computation',
    'Multi-Party Agent Wallet',
    'C3Governor',
    'CTM',
    'veCTM',
    'C3Caller',
    'cross-chain',
    'governance',
    'blockchain',
  ],
  authors: [{ name: 'ContinuumDAO', url: SITE_URL }],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: SITE_URL,
    siteName: 'ContinuumDAO',
    title: 'ContinuumDAO',
    description:
      'A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContinuumDAO',
    description:
      'A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/json': `${SITE_URL}/well-known/llm-index.json`,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ContinuumDAO',
  url: SITE_URL,
  description:
    'A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.',
  sameAs: [
    'https://twitter.com/ContinuumDAO',
    'https://t.me/ContinuumDAO',
    'https://medium.com/@continuumdao',
    'https://forum.continuumdao.org/',
    'https://github.com/ContinuumDAO',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ContinuumDAO',
  url: SITE_URL,
  description:
    'A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.',
  publisher: {
    '@type': 'Organization',
    name: 'ContinuumDAO',
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/faqs?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-black antialiased',
        montserrat.variable,
      )}
    >
      <body className="flex min-h-screen flex-col bg-black text-white">
        <link
          rel="alternate"
          type="application/json"
          href={`${SITE_URL}/well-known/llm-index.json`}
          title="LLM Discovery Index"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${DOCS_URL}/llms.txt`}
          title="ContinuumDAO Documentation (llms.txt)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  )
}
