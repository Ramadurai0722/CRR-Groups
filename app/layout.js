import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BootstrapClient from './components/BootstrapClient';

export const metadata = {
  metadataBase: new URL('https://www.crrgroups.in'),
  title: {
    default: 'CRR Groups | Best Electricals & Plumbing Services in Pudukkottai | 25+ Years',
    template: '%s',
  },
  description: "CRR Groups — Pudukkottai's #1 electricals & plumbing service company with 25+ years experience. 10K+ projects completed. AC, CCTV, inverter, office setup & 24/7 emergency repairs. Call +91 9655010282.",
  keywords: 'electricals services Pudukkottai, plumbing services Pudukkottai, electrician near me, plumber near me, CRR Groups',
  authors: [{ name: 'CRR Groups' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    siteName: 'CRR Groups',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/media/favicon-square.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/media/favicon-square.png'],
  },
  icons: {
    icon: '/media/favicon-square.png',
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Pudukkottai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:wght@200..800&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <BootstrapClient />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a href="tel:+919655010282" className="floating-call-btn" aria-label="Call CRR Groups">
          <i className="bi bi-telephone-fill" />
        </a>
      </body>
    </html>
  );
}
