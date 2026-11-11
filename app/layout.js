import './globals.css';

const deploymentHost = process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (deploymentHost ? `https://${deploymentHost}` : 'http://localhost:3000');

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Naomi House of Shades | See the World in Style',
  description: 'Discover stylish sunglasses and eyeglasses at Naomi House of Shades. Chat with us on WhatsApp to make an enquiry or place an order.',
  openGraph: {
    title: 'Naomi House of Shades | See the World in Style',
    description: 'Explore sunglasses and eyeglasses. Chat with Naomi House of Shades on WhatsApp.',
    url: siteUrl,
    siteName: 'Naomi House of Shades',
    images: [{ url: '/naomi-house-of-shades.png', width: 1024, height: 1536, alt: 'Naomi House of Shades luxury sunglasses and eyewear flyer' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naomi House of Shades | See the World in Style',
    description: 'Explore stylish sunglasses and eyeglasses.',
    images: ['/naomi-house-of-shades.png']
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
