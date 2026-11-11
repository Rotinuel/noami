# Naomi House of Shades

A small Next.js landing page for Naomi House of Shades. The page uses the supplied flyer as its Open Graph and Twitter preview image and links customers to WhatsApp.

## Run locally

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings (`bun run build` is supported; Vercel may detect Bun from the lockfile if one is present).
4. Deploy.
5. Copy the deployed URL and share that URL, not the `wa.me` URL. The deployed page's Open Graph metadata points to `/naomi-house-of-shades.png`.

If you use a custom domain, set `NEXT_PUBLIC_SITE_URL` in Vercel to the full domain (for example, `https://your-domain.com`) and redeploy.

## WhatsApp destination

The button opens `https://wa.me/2348061157832` with a pre-filled enquiry message.
# noami
