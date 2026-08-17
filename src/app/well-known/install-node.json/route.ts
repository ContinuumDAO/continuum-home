import { installNodeDiscovery } from '@/lib/install-node-discovery'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://continuumdao.org'

export async function GET() {
  const body = {
    '@context': ['https://schema.org', 'https://llmld.org/v1'],
    '@type': 'llmld:InstallGuide',
    publisher: SITE_URL,
    ...installNodeDiscovery,
  }

  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
