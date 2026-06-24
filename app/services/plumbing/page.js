import ServicePageTemplate from '../../components/ServicePageTemplate';
import { seoConfig } from '../../lib/seo.config';

const seo = seoConfig['/services/plumbing'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function Plumbing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />
      <ServicePageTemplate
        title="Expert Plumbing Services in Pudukkottai"
        subtitle="Reliable residential and commercial plumbing solutions — new pipe installations, leak repairs, bathroom fittings, and advanced drainage services."
        breadcrumb="Plumbing Services"
        badgeLabel="Professional Plumbers"
        heroImage="/media/Services/Services_Plumbing.webp"
        intro="Water leaks, clogged drains, or low water pressure can cause immense stress and property damage if ignored. CRR Groups provides highly skilled plumbing services across Pudukkottai to resolve any water-related issue efficiently. Whether it's installing modern sanitary ware for a bathroom renovation, laying fresh CPVC pipelines for a new building, or fixing a sudden midnight pipe burst, our expert plumbers are equipped to deliver lasting, leak-proof solutions."
        features={[
          { icon: 'bi-droplet-half', title: 'Leak Detection & Repair', desc: 'Accurate identification and fixing of hidden leaks in walls, ceilings, and under floors to prevent structural water damage and mold.' },
          { icon: 'bi-pip', title: 'New Pipe Installation', desc: 'Complete laying of fresh CPVC, UPVC, and PVC pipelines for new residential constructions and commercial buildings.' },
          { icon: 'bi-water', title: 'Bathroom Fittings & Fixtures', desc: 'Professional installation of modern sanitary ware, shower panels, commodes, washbasins, and automated sensor taps.' },
          { icon: 'bi-wrench-adjustable', title: 'Drainage & Blockage Clearing', desc: 'Effective clearing of severely clogged kitchen sinks, bathroom drains, and main sewer lines using advanced plumbing snakes and tools.' },
          { icon: 'bi-house-heart', title: 'Motor & Pump Installation', desc: 'Installation and repair of borewell submersible motors, overhead tank pumps, and automated water level controllers.' },
          { icon: 'bi-bucket', title: 'Water Tank Cleaning', desc: 'Thorough cleaning, descaling, and sanitization of overhead Sintex tanks and underground water sumps for safe hygiene.' },
        ]}
        benefits={[
          'Highly experienced plumbers skilled in modern PVC/CPVC solvent cementing techniques.',
          'Swift response for severe plumbing emergencies like pipe bursts or overflowing toilets.',
          'Use of high-quality branded pipes (Ashirvad, Supreme, Finolex) and heavy-duty sealants.',
          'Clean and tidy work process—we ensure minimal mess during indoor plumbing repairs.',
          'Transparent pricing provided before any wall breaking or major pipe replacement begins.',
          'Guaranteed leak-proof joints preventing future dampness issues in your walls.',
        ]}
        seoContent={[
          { heading: "Why Ignoring Minor Leaks is a Costly Mistake", paragraphs: ["A dripping tap or a slightly damp patch on the wall might seem like a minor annoyance, but in reality, it is often a symptom of a much larger, hidden plumbing issue. Over time, constant moisture seeps into the brickwork, weakening the structural integrity of your home, ruining expensive paint jobs, and fostering hazardous mold growth.", "Our professional plumbers in Pudukkottai specialize in detecting the root cause of leaks. Instead of applying temporary M-Seal fixes that inevitably fail, we identify the damaged pipe section and properly replace and seal it using industry-standard CPVC solvents and high-pressure testing."] },
          { heading: "Modern Bathroom & Kitchen Plumbing Solutions", paragraphs: ["Modern bathrooms require precision plumbing. Installing concealed flush tanks, wall-mounted commodes, diverter valves for showers, and hot water lines for geysers demands exact measurements and flawless joint sealing before the tiles are laid.", "CRR Groups has extensive experience in executing high-end bathroom and kitchen plumbing renovations. We ensure that water pressure is perfectly balanced across all taps, hot and cold water lines are correctly insulated to retain heat, and drainage pipes have the perfect slope to prevent future blockages and foul odors."] }
        ]}
        faqs={[
          { q: 'Do you provide emergency plumbing services?', a: 'Yes, sudden pipe bursts or severe drain blockages require immediate attention. Our emergency plumbers are available to mitigate water damage and fix the issue promptly.' },
          { q: 'What type of pipes do you use for hot and cold water?', a: 'For hot water lines (from geysers or solar heaters), we exclusively use CPVC (Chlorinated Polyvinyl Chloride) pipes as they can withstand high temperatures. For standard cold water lines, we use high-grade UPVC or PVC pipes.' },
          { q: 'Can you fix a running toilet?', a: 'Absolutely. A running toilet is usually caused by a faulty flush valve, flapper, or float mechanism inside the tank. We carry standard replacement parts and can fix it quickly, saving hundreds of liters of wasted water.' },
          { q: 'My shower water pressure is very low. Can you fix this?', a: 'Low water pressure can be caused by scale buildup inside the showerhead, a partially closed valve, or air locks in the pipeline. We will diagnose the specific cause and can install pressure-boosting pumps if necessary.' },
          { q: 'Do you install water level controllers for overhead tanks?', a: 'Yes, we install fully automated water level controllers that automatically switch your motor on when the overhead tank is empty and switch it off when full, preventing water overflow and dry-running of the motor.' },
        ]}
      />
    </>
  );
}


