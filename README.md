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

GitHub Actions builds on every push to `main`, then triggers Railway via a **deploy hook**
(see `.github/workflows/ci.yml`). This is more reliable than Railway's GitHub webhook alone.

**One-time setup** (required):

1. Railway → **continuum-home** → **Settings** → **Deploy** → **Deploy Hook** → copy the URL
2. GitHub → **ContinuumDAO/continuum-home** → **Settings** → **Secrets and variables** → **Actions**
3. Add secret: `RAILWAY_DEPLOY_HOOK_URL` = the deploy hook URL

After that, every `git push` to `main` builds in GitHub Actions and triggers Railway.

Railway also has autodeploy on `main` enabled; if that webhook misses a push, the deploy hook
from CI still deploys. Check **Watch paths** in Railway service settings — leave empty or include
`Dockerfile`, `src/**`, `.github/**`, and `package.json`.

Build/start commands are defined in `railway.toml`. Railway uses the `Dockerfile` when present
(static export served with `serve` on `$PORT`).

**Manual deploy:** Railway Command Palette → **Deploy Latest Commit**

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
