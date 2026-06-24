import ServicePageTemplate from '../../components/ServicePageTemplate';
import { seoConfig } from '../../lib/seo.config';

const seo = seoConfig['/services/electrical'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function Electrical() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />
      <ServicePageTemplate
        title="Expert Electrical Services in Pudukkottai"
        subtitle="Professional electrical installations, complex wiring, advanced fault finding, and 24/7 emergency repairs by certified electricians."
        breadcrumb="Electrical Services"
        badgeLabel="Experienced Electricians"
        heroImage="/media/Services/Services_Electrical.webp"
        intro="CRR Groups is recognized as the leading provider of comprehensive electrical services across Pudukkottai. Whether you are building a new home, renovating a commercial office, or facing a sudden power outage, our team of highly trained electricians delivers swift, safe, and efficient solutions. We adhere strictly to national electrical safety standards and use only premium ISI-certified materials."
        features={[
          { icon: 'bi-house-fill', title: 'Complete House Wiring', desc: 'End-to-end residential electrical wiring for new constructions, extensions, and complete home renovations ensuring absolute safety and optimized load distribution.' },
          { icon: 'bi-building', title: 'Commercial Office Wiring', desc: 'Scalable and structured electrical setups for commercial spaces, including complex workstation power planning, server room wiring, and heavy load management.' },
          { icon: 'bi-tools', title: 'Preventative Maintenance', desc: 'Scheduled electrical health checks and maintenance for apartment complexes and factories to prevent costly breakdowns and electrical hazards.' },
          { icon: 'bi-diagram-3-fill', title: 'Power Distribution & Panels', desc: 'Expert installation of Main Distribution Boards (MDB), Sub Main Distribution Boards (SMDB), MCBs, RCCBs, and proper Phase balancing.' },
          { icon: 'bi-search', title: 'Advanced Fault Finding', desc: 'Utilizing modern diagnostic tools to accurately identify hidden electrical faults, short circuits, and grounding issues quickly without damaging property.' },
          { icon: 'bi-lightning-charge-fill', title: '24/7 Emergency Repairs', desc: 'Rapid response emergency electrical services in Pudukkottai. We are on standby around the clock to fix sudden power failures or sparking wires.' },
        ]}
        benefits={[
          'Certified, highly trained electricians with over a decade of hands-on experience.',
          'Strict use of ISI-marked, fire-retardant materials (Finolex, Havells, RR Kabel).',
          'Guaranteed earthing setup and safety compliance on every single project.',
          '100% transparent pricing with accurate, upfront project quotations.',
          'Reliable 24/7 emergency response team available across Pudukkottai district.',
          'Comprehensive post-work inspection ensuring zero safety vulnerabilities.',
        ]}
        seoContent={[
          { heading: "Why Hiring a Professional Electrician in Pudukkottai Matters", paragraphs: ["Electrical systems are the lifelines of any modern building, but they also pose significant safety risks if improperly handled. Hiring an uncertified technician or attempting DIY electrical repairs can lead to severe consequences, including fatal shocks, electrical fires, and expensive appliance damage. At CRR Groups, we prioritize your safety above all else.", "Our certified electrical contractors in Pudukkottai undergo rigorous technical training to handle everything from minor switch replacements to massive commercial grid setups. By choosing us, you ensure that your property's electrical framework is robust, deeply grounded, and fully capable of handling modern electrical loads without frequent tripping or overheating."] },
          { heading: "Our Approach to Electrical Installations", paragraphs: ["Every project begins with a detailed site assessment and load calculation. We don't just blindly pull wires; we map out the energy consumption of your specific appliances—be it heavy industrial machinery or multiple split ACs in a home—to select the exact wire gauge and MCB capacity required.", "Furthermore, we implement strict color-coding standards and structured conduit pathways. This not only ensures maximum safety but also makes future maintenance incredibly straightforward. From proper phase distribution to installing Residual Current Circuit Breakers (RCCB) to prevent fatal shocks, our attention to detail is unmatched in the local industry."] }
        ]}
        faqs={[
          { q: 'Do you handle both residential and commercial electrical work?', a: 'Yes, we provide specialized services for independent houses, luxury apartments, retail shops, large corporate offices, and industrial warehouses.' },
          { q: 'Are your electricians licensed and certified?', a: 'Absolutely. Every electrician working under CRR Groups holds relevant technical certifications and has passed rigorous safety assessments.' },
          { q: 'What wire brands do you use for house wiring?', a: 'We strictly refuse to use substandard materials. We rely only on premium, ISI-marked, fire-retardant (FRLS) cables from top brands like Finolex, Havells, V-Guard, and RR Kabel.' },
          { q: 'Do you offer 24-hour emergency electrical service?', a: 'Yes, electrical emergencies can happen at any time. Our emergency response team operates 24/7, 365 days a year across Pudukkottai.' },
          { q: 'How do you quote for an electrical project?', a: 'We provide a free site visit to assess your specific requirements. Based on the load calculation and architectural layout, we provide a detailed, transparent quotation covering both materials and labor, with zero hidden costs.' },
        ]}
      />
    </>
  );
}


