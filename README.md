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

Railway should autodeploy on push to `main`. If **Wait for CI** is enabled in Railway
service settings, deployments only proceed after the GitHub Actions workflow succeeds
(see `.github/workflows/ci.yml`).

If pushes still do not deploy:

1. In Railway → service **Settings** → confirm **Autodeploy** is enabled and the branch is `main`.
2. Check **Watch paths** — leave empty or include `src/**`, `.github/**`, `package.json`.
3. Under **Deploy** → copy the **Deploy Hook** URL and add it as a GitHub repo secret named `RAILWAY_DEPLOY_HOOK_URL` (the CI workflow POSTs to it after a successful build).
4. Or use Command Palette → **Deploy Latest Commit** for a one-off deploy.

Build/start commands are defined in `railway.toml` (`npm run build`, `npm start`).
Railway uses the `Dockerfile` when present (static export served with `serve` on `$PORT`).

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
