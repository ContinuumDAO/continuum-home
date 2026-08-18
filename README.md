# Salient

Salient is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Deploy (Railway)

This site is a static Next.js export (`out/`) served with `serve`.

### Automatic deploy on push

Railway should autodeploy when you push to `main`. If GitHub webhooks are degraded,
use one of the manual options below or set up GitHub Actions → Railway API deploy.

**Optional CI deploy (bypasses flaky GitHub → Railway webhooks):**

1. Railway → **continuum-home** → **Settings** → **Tokens** → create a **project token**
2. Press **`Ctrl+K`** on the project canvas → search **Copy Service ID** and **Copy Environment ID**
3. GitHub → **ContinuumDAO/continuum-home** → **Settings** → **Secrets and variables** → **Actions**
4. Add secrets:
   - `RAILWAY_TOKEN` — project token
   - `RAILWAY_SERVICE_ID` — service ID
   - `RAILWAY_ENVIRONMENT_ID` — environment ID (usually `production`)

After that, every push runs CI and calls Railway's GraphQL API to deploy `${{ github.sha }}`.

**Manual deploy (no secrets):**

1. Open the **project canvas** (graph view), not inside a settings panel
2. Press **`Ctrl+K`** (Linux/Windows) or **`Cmd+K`** (Mac)
3. Type **`deploy`** → choose **Deploy Latest Commit** if it appears
4. Or: **Settings** → **Source** → **Disconnect** → **Connect Repo** again (same repo/branch)
5. Or: **Deployments** tab → **⋯** on the failed deploy → **Redeploy** only rebuilds that *same* commit; for latest code use option 3 or push again once GitHub webhooks are healthy

Note: Railway **Webhooks** (project Settings → Webhooks) are *outbound notifications only* —
they tell your app when a deploy finished; they do not trigger deploys.

Build/start commands are defined in `railway.toml`. Railway uses the `Dockerfile` when present
(static export served with `serve` on `$PORT`).

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
