import ServicePageTemplate from '../../components/ServicePageTemplate';
import { seoConfig } from '../../lib/seo.config';

const seo = seoConfig['/services/cctv-camera'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function CCTV() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />
      <ServicePageTemplate
        title="Advanced CCTV Camera Installation in Pudukkottai"
        subtitle="High-definition surveillance systems, strategic camera placement, DVR/NVR configuration, and mobile remote access setup for total security."
        breadcrumb="CCTV Services"
        badgeLabel="Security & Surveillance"
        heroImage="/media/Services/Services_CCTV.webp"
        intro="In today's world, security is paramount. CRR Groups provides state-of-the-art CCTV surveillance solutions designed to protect your home, retail store, or commercial facility in Pudukkottai. We don't just install cameras; we design comprehensive security perimeters. From assessing blind spots to configuring secure network access so you can view your cameras live on your smartphone from anywhere in the world, we deliver absolute peace of mind."
        features={[
          { icon: 'bi-camera-video-fill', title: 'HD & IP Camera Installation', desc: 'Strategic placement of high-resolution analog HD and modern IP cameras to ensure maximum coverage and crystal-clear facial recognition.' },
          { icon: 'bi-hdd-network', title: 'DVR & NVR Setup', desc: 'Professional installation and configuration of Digital Video Recorders and Network Video Recorders for continuous, high-capacity video storage.' },
          { icon: 'bi-phone', title: 'Remote Mobile Access', desc: 'Secure networking setup allowing you to monitor your property live through secure smartphone applications from anywhere globally.' },
          { icon: 'bi-router', title: 'Structured Cabling', desc: 'Neat, concealed, and weather-proof cabling (using premium 3+1 coaxial or CAT6 cables) to ensure signal integrity and aesthetic appeal.' },
          { icon: 'bi-tools', title: 'System Maintenance', desc: 'Regular lens cleaning, focus adjustment, hard drive health checks, and firmware updates to ensure your security system never fails.' },
          { icon: 'bi-moon-stars', title: 'Night Vision & Motion Detection', desc: 'Installation of advanced cameras featuring infrared (IR) night vision, full-color night optics, and intelligent motion-triggered alerts.' },
        ]}
        benefits={[
          'Expert security consultants to identify property blind spots before installation.',
          'Partnerships with top surveillance brands like Hikvision, CP Plus, and Dahua.',
          'High-quality, weather-resistant (IP67 rated) outdoor cameras for durability.',
          'Secure password configurations to prevent unauthorized network access to your feeds.',
          'Concealed wiring practices to maintain the visual appeal of your interiors.',
          'Comprehensive user training provided on how to search, playback, and export footage.',
        ]}
        seoContent={[
          { heading: "Why Your Property in Pudukkottai Needs a Professional CCTV System", paragraphs: ["A visible and professionally installed CCTV system acts as a massive deterrent to theft, vandalism, and trespassing. For homeowners, it provides the peace of mind knowing that your family and assets are continuously monitored. For business owners in Pudukkottai, surveillance is crucial for monitoring employee productivity, resolving customer disputes, and protecting valuable inventory.", "However, an improperly planned CCTV setup with poor camera angles or low-quality cables can render the system useless when you actually need it. CRR Groups focuses on strategic camera placement. We calculate field-of-view, account for glaring sunlight, and ensure optimal height placement to capture identifiable details rather than just blurry outlines."] },
          { heading: "Analog vs. IP Cameras: What We Recommend", paragraphs: ["While traditional HD Analog cameras provide a cost-effective solution for small homes, we highly recommend IP (Internet Protocol) camera systems for larger commercial spaces and modern residences. IP cameras offer vastly superior resolution, digital zoom capabilities without pixelation, and advanced AI features like line-crossing detection and automated alerts.", "Regardless of the technology you choose, our installation guarantees robust connectivity. We use heavy-duty power supplies, pure copper cabling, and implement surge protection to ensure your surveillance system remains active even during voltage fluctuations."] }
        ]}
        faqs={[
          { q: 'Can I view the CCTV cameras on my mobile phone?', a: 'Yes! We configure the DVR/NVR to your local internet router and set up the respective mobile application on your smartphone, allowing you to view live footage and playback recordings from anywhere in the world.' },
          { q: 'How many days of video recording will be stored?', a: 'Storage capacity depends entirely on the size of the Hard Disk Drive (HDD) installed and the number of cameras. Typically, a 1TB hard drive with a 4-camera setup will record continuously for about 12 to 15 days before old footage is overwritten.' },
          { q: 'Which CCTV brands do you install?', a: 'We install globally recognized, highly reliable brands such as Hikvision, CP Plus, Dahua, and Panasonic. We can recommend the best brand based on your specific budget and resolution requirements.' },
          { q: 'Do the cameras work in complete darkness?', a: 'Yes, all the outdoor and indoor cameras we install come equipped with powerful Infrared (IR) LEDs that provide clear black-and-white footage in absolute darkness. We also offer Color-Vu cameras that provide full-color video even at night.' },
          { q: 'What happens if the power goes out?', a: 'The CCTV system requires electricity. To ensure uninterrupted recording during power cuts, we strongly recommend and can integrate a dedicated UPS (Uninterruptible Power Supply) or connect the system directly to your home inverter.' },
        ]}
      />
    </>
  );
}


