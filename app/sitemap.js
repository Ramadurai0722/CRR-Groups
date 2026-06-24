export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://www.crrgroups.in';
  
  // Define all static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/services/electrical',
    '/services/plumbing',
    '/services/cctv-camera',
    '/services/inverter-installation',
    '/services/ac-installation',
    '/services/office-setup',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return sitemapEntries;
}
