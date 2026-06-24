import ServicePageTemplate from '../../components/ServicePageTemplate';
import { seoConfig } from '../../lib/seo.config';

const seo = seoConfig['/services/ac-installation'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function AC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />
      <ServicePageTemplate
        title="Professional AC Installation & Maintenance in Pudukkottai"
        subtitle="Expert split and window AC installation, precision gas refilling, preventive servicing, and secure relocation services."
        breadcrumb="AC Services"
        badgeLabel="Cooling Experts"
        heroImage="/media/Services/Services_AC.webp"
        intro="Beat the intense summer heat with CRR Groups’ premier air conditioning services. We provide end-to-end AC solutions for residential and commercial spaces in Pudukkottai. Our skilled HVAC technicians ensure your cooling systems operate at peak efficiency, minimizing electricity consumption while maximizing indoor comfort. From brand new installations to emergency compressor repairs, we handle it all with utmost professionalism."
        features={[
          { icon: 'bi-wind', title: 'Split AC Installation', desc: 'Flawless mounting of indoor and outdoor units, proper copper piping insulation, and efficient drainage setup for optimal cooling performance.' },
          { icon: 'bi-box', title: 'Window AC Fitting', desc: 'Secure and vibration-free installation of window air conditioners with exact frame measurements and weather-sealing.' },
          { icon: 'bi-moisture', title: 'Gas Refilling & Leak Repair', desc: 'Detection of micro-leaks in copper coils, thorough brazing, and precision R32/R410A/R22 refrigerant gas charging.' },
          { icon: 'bi-tools', title: 'Comprehensive AC Servicing', desc: 'Deep chemical cleaning of evaporator coils, filter washing, blower maintenance, and overall system health checks.' },
          { icon: 'bi-truck', title: 'AC Dismantling & Relocation', desc: 'Safe uninstallation of AC units with proper pump-down procedures to save refrigerant, followed by secure transportation and reinstallation.' },
          { icon: 'bi-thermometer-snow', title: 'PCB & Compressor Repair', desc: 'Advanced troubleshooting and repair of complex inverter AC circuit boards (PCB) and compressor replacements.' },
        ]}
        benefits={[
          'Highly trained HVAC technicians specialized in modern Inverter AC technology.',
          'Use of heavy-duty, pure copper piping and premium insulation materials.',
          'Accurate digital pressure gauges used for exact refrigerant gas charging.',
          'Deep chemical wash ensuring elimination of mold, dust, and foul odors.',
          'Prompt service response during peak summer seasons in Pudukkottai.',
          'Transparent pricing for spare parts and gas refilling without hidden fees.',
        ]}
        seoContent={[
          { heading: "Why Regular AC Servicing is Crucial in Pudukkottai's Climate", paragraphs: ["Pudukkottai experiences intense heat and humidity for most of the year. Under these demanding conditions, your air conditioner works overtime to keep your space comfortable. Without regular maintenance, dust and debris rapidly accumulate on the evaporator and condenser coils. This restricts airflow, forces the compressor to work harder, and drastically increases your monthly electricity bills.", "By booking a comprehensive AC service with CRR Groups, you ensure that your system runs smoothly. Our deep chemical cleaning process removes deeply embedded dirt and mold, restoring factory-level cooling efficiency, extending the lifespan of your expensive compressor, and vastly improving the indoor air quality of your home or office."] },
          { heading: "The Importance of Proper AC Installation", paragraphs: ["Did you know that an improperly installed AC can lose up to 30% of its cooling efficiency? Issues like incorrect copper pipe bending, poor insulation, or unlevel indoor units lead to gas leaks, water dripping inside the room, and premature mechanical failures.", "Our installation process is meticulous. We use vacuum pumps to clear air and moisture from the refrigerant lines before releasing the gas—a critical step often skipped by local mechanics. We ensure perfectly angled drainage and vibration-free mounting, guaranteeing that your new AC delivers optimal cooling from day one."] }
        ]}
        faqs={[
          { q: 'Which AC brands do you install and service?', a: 'Our technicians are highly experienced with all major brands including Voltas, Daikin, Blue Star, LG, Samsung, Hitachi, Lloyd, and Panasonic, covering both Inverter and Non-Inverter models.' },
          { q: 'How often should I get my AC serviced?', a: 'For optimal performance and clean air, we highly recommend getting your AC serviced at least twice a year—ideally right before the summer season begins and once during the mid-monsoon period.' },
          { q: 'Why is my AC leaking water inside the room?', a: 'Indoor water leakage is typically caused by a clogged drainage pipe due to dust accumulation, or a severely dirty evaporator coil. Our standard servicing immediately resolves this issue.' },
          { q: 'What kind of gas do you use for refilling?', a: 'We strictly use pure, genuine refrigerant gases (such as R32, R410A, or R22 depending on your AC model) and weigh it digitally to ensure exact factory specifications.' },
          { q: 'Do you provide copper pipes and installation brackets?', a: 'Yes, we supply premium quality, thick-gauge copper piping and heavy-duty, rust-proof outdoor unit brackets as part of our installation packages if required.' },
        ]}
      />
    </>
  );
}


