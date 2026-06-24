import ServicePageTemplate from '../../components/ServicePageTemplate';
import { seoConfig } from '../../lib/seo.config';

const seo = seoConfig['/services/inverter-installation'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function Inverter() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />
      <ServicePageTemplate
        title="Inverter & Battery Setup in Pudukkottai"
        subtitle="Reliable home and office inverter installations, battery replacements, and comprehensive backup power solutions."
        breadcrumb="Inverter Services"
        badgeLabel="Power Backup"
        heroImage="/media/Services/Services_Inverter.webp"
        intro="Power outages shouldn't disrupt your life or your business. CRR Groups offers professional inverter and battery installation services in Pudukkottai to ensure you have a seamless, uninterrupted power supply. We help you choose the right capacity based on your exact load requirements, ensuring your essential appliances—fans, lights, TVs, and computers—keep running smoothly during grid failures. We specialize in both Pure Sine Wave and Square Wave inverter technologies."
        features={[
          { icon: 'bi-battery-charging', title: 'New Inverter Installation', desc: 'Complete setup of new inverter units including load separation wiring, ensuring only required appliances run on backup to maximize battery life.' },
          { icon: 'bi-battery-half', title: 'Battery Replacement', desc: 'Safe removal of old, dead batteries and installation of new, high-capacity tubular batteries with correct terminal greasing.' },
          { icon: 'bi-droplet', title: 'Battery Water Topping', desc: 'Regular maintenance service including checking specific gravity and safely topping up distilled water in lead-acid tubular batteries.' },
          { icon: 'bi-plug', title: 'Wiring & Load Separation', desc: 'Expert rewiring of your home’s distribution board to separate the inverter load from heavy appliances like ACs and Geysers.' },
          { icon: 'bi-tools', title: 'Inverter Repair & Service', desc: 'Diagnostic and repair services for inverter PCB issues, blown fuses, overload errors, and charging mechanism failures.' },
          { icon: 'bi-arrow-repeat', title: 'UPS Setup for Computers', desc: 'Installation of dedicated Online and Offline UPS systems for office computers and servers to prevent data loss.' },
        ]}
        benefits={[
          'Accurate load calculation to recommend the exact VA rating required for your home.',
          'Expert guidance on choosing between flat plate and tall tubular batteries.',
          'Proper ventilation and safety checks during installation to prevent acid fumes buildup.',
          'Use of heavy-duty copper cables for battery terminals to prevent melting.',
          'Clear instructions provided to the customer on basic inverter maintenance.',
          'Quick troubleshooting for constant beeping or overload warnings.',
        ]}
        seoContent={[
          { heading: "Choosing the Right Inverter for Your Home in Pudukkottai", paragraphs: ["With frequent power fluctuations and planned outages, a reliable inverter is not a luxury—it's a necessity in Pudukkottai. However, buying an oversized inverter wastes money, while an undersized one will constantly trip under overload. The secret lies in precise load calculation. Our technicians assess the total wattage of the appliances you wish to run during a power cut and recommend the exact VA (Volt-Ampere) rating required.", "We highly recommend Pure Sine Wave inverters for modern homes. Unlike cheaper Square Wave models that produce a humming noise in fans and can damage sensitive electronics like modern TVs and laptops, Pure Sine Wave technology delivers grid-quality power that is completely safe for all appliances."] },
          { heading: "The Importance of Professional Inverter Wiring", paragraphs: ["Simply buying an inverter isn't enough; the way it is integrated into your home's electrical system is critical. Improper wiring can lead to the inverter trying to power heavy appliances like geysers, refrigerators, or air conditioners during an outage, instantly crashing the system or blowing a fuse.", "CRR Groups specializes in 'Load Separation' wiring at your main Distribution Board (DB). We carefully segregate the lighting and fan circuits from the heavy power sockets. This ensures that when the power goes out, the transition is seamless, safe, and your battery backup lasts significantly longer."] }
        ]}
        faqs={[
          { q: 'Which inverter brands do you install?', a: 'We install and service all leading, highly trusted brands in India, including Microtek, Luminous, Exide, Amaron, and V-Guard.' },
          { q: 'What is the difference between a flat plate and a tubular battery?', a: 'Tubular batteries are taller, more robust, and specifically designed for long, frequent power cuts. They have a significantly longer lifespan (often 4-5 years) compared to flat plate batteries, making them the best choice for home inverters.' },
          { q: 'Why is my inverter constantly beeping?', a: 'Continuous beeping usually indicates an "Overload" (too many appliances turned on), a "Low Battery" warning, or a blown fuse. Our technicians can quickly diagnose and resolve the specific issue.' },
          { q: 'Do I need to check the water level in my battery?', a: 'Yes, if you have a lead-acid tubular battery, the distilled water level drops over time due to charging. It must be checked and topped up every 2 to 3 months to prevent the battery from dying permanently. We offer regular maintenance services for this.' },
          { q: 'Can an inverter run my refrigerator or AC?', a: 'Standard home inverters (like 900VA) cannot run ACs or refrigerators due to the massive starting current required. Running heavy appliances requires a specialized high-capacity (e.g., 3kVA to 5kVA) commercial inverter setup.' },
        ]}
      />
    </>
  );
}


