import ServicePageTemplate from '../../components/ServicePageTemplate';
import { seoConfig } from '../../lib/seo.config';

const seo = seoConfig['/services/office-setup'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function OfficeSetup() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />
      <ServicePageTemplate
        title="Complete Commercial Office Setup in Pudukkottai"
        subtitle="End-to-end infrastructure solutions including electrical cabling, network readiness, workstation power, and commercial plumbing."
        breadcrumb="Office Setup"
        badgeLabel="Commercial Projects"
        heroImage="/media/Services/Services_Office_Setup.webp"
        intro="Starting a new business or relocating to a new office space in Pudukkottai? CRR Groups provides comprehensive, turnkey office infrastructure solutions. We eliminate the hassle of dealing with multiple contractors by offering integrated electrical, plumbing, and networking setups. From structured under-floor cabling to modern pantry plumbing, we ensure your commercial space is functional, safe, and ready for your workforce on schedule."
        features={[
          { icon: 'bi-pc-display', title: 'Workstation Power Setup', desc: 'Installation of dedicated UPS and raw power sockets for individual cubicles, ensuring stable electricity for all employee computers and devices.' },
          { icon: 'bi-hdd-network', title: 'Network Cabling (LAN)', desc: 'Structured CAT6/CAT6A networking cable laying from the server room to every individual workstation for high-speed, reliable internet connectivity.' },
          { icon: 'bi-lightbulb-fill', title: 'Commercial Lighting', desc: 'Design and installation of energy-efficient LED panel lights, profile lighting, and emergency exit lights tailored for office environments.' },
          { icon: 'bi-server', title: 'Server Room Electricals', desc: 'Specialized electrical setups for server racks, including heavy-duty MCBs, dual-power feeds, and dedicated grounding systems.' },
          { icon: 'bi-cup-hot', title: 'Pantry & Restroom Plumbing', desc: 'Complete commercial plumbing solutions for office pantries, water dispensers, and modern, hygienic employee restrooms.' },
          { icon: 'bi-camera-video', title: 'Security Integration', desc: 'Pre-wiring and installation of CCTV surveillance systems and biometric access control panels at main entrances.' },
        ]}
        benefits={[
          'Single point of contact for all electrical, plumbing, and network cabling needs.',
          'Strict adherence to commercial safety codes and fire regulations.',
          'Use of heavy-duty, commercial-grade cables, switches, and conduits.',
          'Neat, structured, and properly labeled wiring to make future IT maintenance easy.',
          'Timely project completion to ensure your business operations start without delay.',
          'Post-installation support and maintenance contracts available.',
        ]}
        seoContent={[
          { heading: "The Importance of Structured Cabling in Modern Offices", paragraphs: ["In a commercial office, electrical and network infrastructure is the invisible backbone that keeps your business running. Poorly planned wiring leads to cluttered desks, tripped breakers when too many computers are turned on, and unstable internet connections that kill productivity. CRR Groups specializes in 'Structured Cabling'.", "We meticulously plan the route of raw power, UPS power, and data cables. By using separate, color-coded conduits and keeping data cables away from high-voltage electrical lines (to prevent electromagnetic interference), we guarantee a clean, highly reliable network and power environment for your entire team."] },
          { heading: "Why Choose CRR Groups for Commercial Projects in Pudukkottai?", paragraphs: ["Coordinating between an electrician, a plumber, and an IT networking guy can be a project management nightmare. At CRR Groups, we provide a unified solution. Our integrated approach ensures that plumbing lines in the pantry don't interfere with electrical conduits, and server room power requirements are perfectly matched with the incoming electrical load.", "We understand that in business, time is money. Our commercial setup teams work efficiently to meet strict deadlines. We provide detailed CAD-style electrical layouts before starting, ensuring that the final execution matches your architectural vision perfectly while strictly adhering to safety standards."] }
        ]}
        faqs={[
          { q: 'Do you handle the IT networking configuration as well?', a: 'We handle all the physical Layer-1 infrastructure—laying the CAT6 cables, terminating them at the wall I/O ports, and patching them into the server rack patch panel. Your IT team simply needs to plug in the switches and configure the software.' },
          { q: 'Can you work during weekends or night shifts to avoid disrupting an active office?', a: 'Yes, for office renovations or expansions where the business is currently operating, our teams can schedule work during nights or weekends to ensure zero disruption to your daily operations.' },
          { q: 'Do you provide UPS sizing and installation?', a: 'Absolutely. We calculate the total power draw of your servers, computers, and critical lighting, and provide end-to-end installation of heavy-duty Online UPS systems and their dedicated battery racks.' },
          { q: 'What kind of plumbing services do you offer for offices?', a: 'We cover everything a commercial space needs: inlet/outlet plumbing for pantries, concealed flush tank installations for restrooms, automated sensor taps, and proper drainage systems.' },
          { q: 'Is there a warranty on commercial installations?', a: 'Yes, we provide a comprehensive service warranty on our workmanship, and all branded materials (wires, switches, pipes) carry their respective manufacturer warranties.' },
        ]}
      />
    </>
  );
}


