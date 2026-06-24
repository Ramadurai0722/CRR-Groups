// Centralized SEO configuration for all pages
// Domain: https://www.crrgroups.in

const DOMAIN = 'https://www.crrgroups.in';
const SITE_NAME = 'CRR Groups';
const PHONE = ['+91-9655010282', '+91-8056639819', '+91-8610100499'];
const EMAIL = 'crrgroups26@gmail.com';
const ADDRESS = {
  street: 'No: 1/61 Kovilpatti, Kurumbur (PO), Aranthangi (TK)',
  locality: 'Pudukkottai',
  region: 'Tamil Nadu',
  postal: '614622',
  country: 'IN',
};

// All service areas across Pudukkottai district
const SERVICE_AREAS = [
  'Pudukkottai', 'Aranthangi', 'Arimalam', 'Alangudi', 'Erichy',
  'Keelaiyur', 'Oththakadai', 'Avudaiyarkovil', 'Kurumbur',
  'Thirumayam', 'Gandarvakottai', 'Illupur', 'Karambakudi',
  'Manamelkudi', 'Ponnamaravathi', 'Annavasal', 'Kunnandarkoil',
];

const AREAS_STRING = SERVICE_AREAS.join(', ');

// Per-page SEO metadata
const seoConfig = {
  '/': {
    title: `CRR Groups | Best Electricals & Plumbing Services in Pudukkottai | 25+ Years`,
    description: `CRR Groups — Pudukkottai's #1 electricals & plumbing service company with 25+ years experience. 10K+ projects completed across ${AREAS_STRING}. AC installation, CCTV, inverter, office setup & 24/7 emergency repairs. Call +91 9655010282.`,
    keywords: `electricals services Pudukkottai, plumbing services Pudukkottai, electrician near me, plumber near me, best electrician Pudukkottai, CCTV installation Pudukkottai, AC installation Pudukkottai, inverter installation Pudukkottai, office electrical setup, emergency electrician Pudukkottai, CRR Groups, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      description: `Professional electricals and plumbing services in Pudukkottai district with 25+ years of experience. Serving ${AREAS_STRING}.`,
      url: `${DOMAIN}`,
      telephone: PHONE,
      email: EMAIL,
      image: `${DOMAIN}/media/favicon-square.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postal,
        addressCountry: ADDRESS.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 10.1707,
        longitude: 79.3228,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: ['https://www.instagram.com/crr_groups'],
      areaServed: SERVICE_AREAS.map(area => ({
        '@type': 'City',
        name: `${area}, Tamil Nadu`,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1000',
        bestRating: '5',
      },
      priceRange: '₹₹',
    },
  },

  '/about': {
    title: `About CRR Groups | 25+ Years of Trusted Electricals & Plumbing Services | Pudukkottai`,
    description: `Learn about CRR Groups — a leading electricals & plumbing service company in Pudukkottai with 25+ years of experience, 10K+ completed projects, and 1K+ happy customers across ${AREAS_STRING}.`,
    keywords: `about CRR Groups, CRR Groups Pudukkottai, electricals company Pudukkottai, plumbing company Pudukkottai, trusted electrician Pudukkottai, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/about`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About CRR Groups',
      description: `CRR Groups is a trusted electricals and plumbing service company in Pudukkottai with 25+ years experience.`,
      url: `${DOMAIN}/about`,
      mainEntity: {
        '@type': 'Organization',
        name: SITE_NAME,
        foundingLocation: 'Pudukkottai, Tamil Nadu',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: '10+' },
        areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      },
    },
  },

  '/services': {
    title: `Our Services | Electricals, Plumbing, CCTV, AC, Inverter & Office Setup | CRR Groups Pudukkottai`,
    description: `Explore CRR Groups' 15+ professional services — electricals, plumbing, CCTV installation, AC installation & repair, inverter setup, and complete office infrastructure in Pudukkottai, ${AREAS_STRING}.`,
    keywords: `electricals services, plumbing services, CCTV installation, AC installation, inverter installation, office setup, electrical contractor Pudukkottai, plumber Pudukkottai, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Services by CRR Groups',
      description: 'Complete range of electricals, plumbing, CCTV, AC, inverter and office setup services.',
      url: `${DOMAIN}/services`,
    },
  },

  '/services/electrical': {
    title: `Electrical Services in Pudukkottai | House Wiring, Office Wiring & Emergency Repairs | CRR Groups`,
    description: `Professional electrical services in Pudukkottai — house wiring, office wiring, power distribution, fault finding, MCB/ELCB installation & 24/7 emergency electrical repairs. Serving ${AREAS_STRING}. Call +91 9655010282.`,
    keywords: `electrical services Pudukkottai, house wiring Pudukkottai, office wiring, electrician Pudukkottai, emergency electrician, MCB installation, electrical contractor, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services/electrical`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Electrical Services',
      provider: { '@type': 'LocalBusiness', name: SITE_NAME },
      description: 'Complete electrical services including house wiring, office wiring, fault finding, and emergency repairs.',
      areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      serviceType: 'Electrical Services',
    },
  },

  '/services/plumbing': {
    title: `Plumbing Services in Pudukkottai | Pipe Installation, Leak Repair & Water Tank | CRR Groups`,
    description: `Expert plumbing services in Pudukkottai — water pipe installation, leak detection & repair, bathroom fitting, water tank installation & emergency plumbing. Serving ${AREAS_STRING}. Call +91 9655010282.`,
    keywords: `plumbing services Pudukkottai, plumber Pudukkottai, pipe installation, leak repair, bathroom fitting, water tank installation, emergency plumber, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services/plumbing`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Plumbing Services',
      provider: { '@type': 'LocalBusiness', name: SITE_NAME },
      description: 'Comprehensive plumbing services including pipe installation, leak repair, and bathroom fitting.',
      areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      serviceType: 'Plumbing Services',
    },
  },

  '/services/cctv-camera': {
    title: `CCTV Camera Installation in Pudukkottai | HD Surveillance & Security Systems | CRR Groups`,
    description: `Professional CCTV camera installation in Pudukkottai — HD cameras, DVR/NVR setup, night vision, remote mobile viewing & annual maintenance. Serving ${AREAS_STRING}. Call +91 9655010282.`,
    keywords: `CCTV installation Pudukkottai, security camera Pudukkottai, CCTV camera near me, surveillance system, DVR installation, night vision camera, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services/cctv-camera`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'CCTV Camera Installation',
      provider: { '@type': 'LocalBusiness', name: SITE_NAME },
      description: 'Professional CCTV surveillance system installation with HD cameras, DVR setup, and remote viewing.',
      areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      serviceType: 'CCTV Installation',
    },
  },

  '/services/inverter-installation': {
    title: `Inverter & Battery Installation in Pudukkottai | Luminous, Exide, Microtek | CRR Groups`,
    description: `Inverter installation & battery replacement in Pudukkottai — Luminous, Exide, Microtek, Su-Kam, V-Guard. New setup, battery replacement & maintenance. Serving ${AREAS_STRING}. Call +91 9655010282.`,
    keywords: `inverter installation Pudukkottai, battery installation, Luminous inverter, Exide battery, Microtek inverter, inverter repair, UPS installation, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services/inverter-installation`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Inverter & Battery Installation',
      provider: { '@type': 'LocalBusiness', name: SITE_NAME },
      description: 'Inverter and battery installation, replacement and maintenance for all major brands.',
      areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      serviceType: 'Inverter Installation',
    },
  },

  '/services/ac-installation': {
    title: `AC Installation & Service in Pudukkottai | Split AC, Window AC Repair | CRR Groups`,
    description: `AC installation, servicing & repair in Pudukkottai — split AC, window AC, gas refilling, AMC plans. All brands: Daikin, Voltas, LG, Samsung. Serving ${AREAS_STRING}. Call +91 9655010282.`,
    keywords: `AC installation Pudukkottai, AC service Pudukkottai, split AC installation, AC repair, AC gas refilling, AC AMC, Daikin, Voltas, LG, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services/ac-installation`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AC Installation & Maintenance',
      provider: { '@type': 'LocalBusiness', name: SITE_NAME },
      description: 'Professional AC installation, servicing, repair and gas refilling for all brands.',
      areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      serviceType: 'AC Installation and Maintenance',
    },
  },

  '/services/office-setup': {
    title: `Office Electricals & Plumbing Setup in Pudukkottai | Complete Infrastructure | CRR Groups`,
    description: `Complete office electricals & plumbing infrastructure setup in Pudukkottai — cabling, workstation power, water management, network setup. Serving ${AREAS_STRING}. Call +91 9655010282.`,
    keywords: `office electrical setup Pudukkottai, office plumbing, office infrastructure, workstation power setup, commercial electrician, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/services/office-setup`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Office Setup Services',
      provider: { '@type': 'LocalBusiness', name: SITE_NAME },
      description: 'End-to-end office electricals and plumbing infrastructure setup.',
      areaServed: SERVICE_AREAS.map(area => ({ '@type': 'City', name: `${area}, Tamil Nadu` })),
      serviceType: 'Office Electrical and Plumbing Setup',
    },
  },

  '/contact': {
    title: `Contact CRR Groups | Get Free Quote | Electricals & Plumbing Services Pudukkottai`,
    description: `Contact CRR Groups for electricals & plumbing services in Pudukkottai. Get a free quote, book an appointment or call for 24/7 emergency service. Phone: +91 9655010282. Serving ${AREAS_STRING}.`,
    keywords: `contact CRR Groups, electrician phone number Pudukkottai, plumber contact, free quote electrician, emergency electrician number, ${AREAS_STRING}`,
    canonical: `${DOMAIN}/contact`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact CRR Groups',
      description: 'Get in touch with CRR Groups for electricals and plumbing services.',
      url: `${DOMAIN}/contact`,
    },
  },

  '/privacy-policy': {
    title: `Privacy Policy | CRR Groups — Electricals & Plumbing Services Pudukkottai`,
    description: `Read the privacy policy of CRR Groups. Learn how we collect, use, and protect your personal data when you use our electricals and plumbing services in Pudukkottai.`,
    keywords: `CRR Groups privacy policy, data protection, customer privacy`,
    canonical: `${DOMAIN}/privacy-policy`,
    ogType: 'website',
    schema: null,
  },

  '/terms': {
    title: `Terms & Conditions | CRR Groups — Electricals & Plumbing Services Pudukkottai`,
    description: `Read the terms and conditions for using CRR Groups' electricals and plumbing services in Pudukkottai. Service policies, cancellation, liability and more.`,
    keywords: `CRR Groups terms and conditions, service terms, CRR Groups policies`,
    canonical: `${DOMAIN}/terms`,
    ogType: 'website',
    schema: null,
  },
};

// Default fallback
const defaultSeo = {
  title: `CRR Groups | Electricals & Plumbing Services in Pudukkottai`,
  description: `CRR Groups provides professional electricals and plumbing services in Pudukkottai and surrounding areas. 25+ years experience, 10K+ projects, 24/7 emergency support.`,
  keywords: `electricals Pudukkottai, plumbing Pudukkottai, CRR Groups`,
  canonical: `${DOMAIN}`,
  ogType: 'website',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  image: `${DOMAIN}/media/About.webp`,
  schema: null,
};

export { seoConfig, defaultSeo, DOMAIN, SITE_NAME, SERVICE_AREAS };
