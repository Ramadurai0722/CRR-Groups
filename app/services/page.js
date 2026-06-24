import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "../lib/seo.config";

const seo = seoConfig['/services'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

const allServices = [
  { icon: "bi-lightning-charge-fill", img: "/media/Services/Services_Electrical.webp", title: "Electrical Services", description: "Complete residential and commercial electrical work — wiring, power distribution, fault finding, and emergency repairs by expert electricians.", path: "/services/electrical", features: ["House & Office Wiring", "Power Distribution", "Fault Finding", "Emergency Repairs"] },
  { icon: "bi-droplet-fill", img: "/media/Services/Services_Plumbing.webp", title: "Plumbing Services", description: "Expert plumbing solutions for homes and offices — pipe installation, leak repair, bathroom plumbing, drainage, and maintenance.", path: "/services/plumbing", features: ["Pipe Installation", "Leak Repair", "Bathroom Plumbing", "Drainage Solutions"] },
  { icon: "bi-camera-video-fill", img: "/media/Services/Services_CCTV.webp", title: "CCTV Camera Installation", description: "Professional CCTV surveillance systems for homes, offices, shops, and commercial spaces with full setup and remote access configuration.", path: "/services/cctv-camera", features: ["Home CCTV", "Office Surveillance", "Commercial Setup", "Remote Monitoring"] },
  { icon: "bi-battery-charging", img: "/media/Services/Services_Inverter.webp", title: "Inverter Installation", description: "Home and office inverter setup, battery replacement, maintenance, and backup power solutions for uninterrupted power supply.", path: "/services/inverter-installation", features: ["Home Inverter Setup", "Battery Installation", "Maintenance", "Backup Solutions"] },
  { icon: "bi-wind", img: "/media/Services/Services_AC.webp", title: "AC Installation & Maintenance", description: "Split AC and window AC installation, gas refilling, regular servicing, relocation, and complete maintenance by trained AC technicians.", path: "/services/ac-installation", features: ["Split AC Install", "Window AC Install", "Gas Refilling", "AC Relocation"] },
  { icon: "bi-building", img: "/media/Services/Services_Office_Setup.webp", title: "Office Setup Services", description: "End-to-end office electricals and plumbing infrastructure setup — cabling, workstation power, water management, and network-ready installations.", path: "/services/office-setup", features: ["Electrical Setup", "Plumbing Setup", "Cabling & Wiring", "Power Distribution"] },
];

const benefits = [
  { icon: "bi-patch-check-fill", label: "Experienced Team" },
  { icon: "bi-clock-fill", label: "24/7 Availability" },
  { icon: "bi-currency-rupee", label: "Transparent Pricing" },
  { icon: "bi-shield-fill-check", label: "Quality Assured" },
  { icon: "bi-geo-alt-fill", label: "Local Experts" },
  { icon: "bi-phone-fill", label: "Quick Response" },
];

export default function Services() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />

      <section className="page-hero position-relative overflow-hidden">
        <div className="hero-v2-bg-shape shape-1" />
        <div className="hero-v2-bg-shape shape-2" />
        <div className="hero-v2-bg-shape shape-3" />
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="badge-pill mx-auto mb-3" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-dark)" }}><i className="bi bi-grid-fill" />Our Services</div>
              <h1 className="display-heading mb-4">Comprehensive <span className="text-primary-crr">Services</span></h1>
              <p className="lead-text mb-4 px-lg-5">Professional electrical, plumbing, and facility services across Pudukkottai. Built on trust, quality, and expert craftsmanship.</p>
              <nav aria-label="breadcrumb"><ol className="breadcrumb breadcrumb-crr justify-content-center"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Services</li></ol></nav>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BAR */}
      <section style={{ background: "var(--primary)", padding: "24px 0" }}>
        <div className="container">
          <div className="row g-3 justify-content-center">
            {benefits.map((b) => (
              <div key={b.label} className="col-lg-2 col-md-4 col-6 text-center">
                <div style={{ color: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <i className={`bi ${b.icon}`} style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.6)" }} />
                  <span style={{ fontSize: "0.9rem", fontFamily: "var(--font-heading)", fontWeight: 600 }}>{b.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section-py" style={{ background: "#f9fafb" }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto"><i className="bi bi-list-check" />What We Offer</div>
            <h2 className="section-title">Complete Range of Services</h2>
            <div className="divider-line" />
            <p className="section-subtitle mt-3">From small home repairs to large commercial projects — we have the skills and experience to handle it all.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {allServices.map((s, index) => (
              <div key={s.title} className="col-lg-4 col-md-6">
                <Link href={s.path} className="service-card" style={{ height: "100%", padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", paddingTop: "35px" }}>
                    <div style={{ width: "220px", height: "220px", borderRadius: "var(--radius-xl)", overflow: "hidden", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                      <Image src={s.img} alt={s.title} style={{ objectFit: "cover" }} fill sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="service-card-number" style={{ top: "5px", right: "15px", fontSize: "3.5rem", color: "#b05800" }}>{String(index + 1).padStart(2, "0")}</div>
                    </div>
                    <div className="service-icon-wrap" style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", margin: 0, boxShadow: "0 10px 20px rgba(247,148,29,0.2)", zIndex: 3 }}><i className={`bi ${s.icon}`} /></div>
                  </div>
                  <div style={{ padding: "45px 25px 30px", display: "flex", flexDirection: "column", flexGrow: 1, textAlign: "center" }}>
                    <h3 className="service-card-title" style={{ fontSize: "1.2rem" }}>{s.title}</h3>
                    <p className="service-card-desc" style={{ marginBottom: "20px", fontSize: "0.85rem" }}>{s.description}</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-auto">
                      {s.features.slice(0, 3).map((f) => (
                        <span key={f} style={{ background: "var(--primary-ultra-light)", color: "var(--primary-dark)", fontSize: "0.7rem", fontWeight: 600, padding: "4px 10px", borderRadius: 50, fontFamily: "var(--font-heading)", border: "1px solid rgba(247,148,29,0.15)", transition: "all 0.3s ease" }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto"><i className="bi bi-gear-fill" />How It Works</div>
            <h2 className="section-title">Our Service Process</h2>
            <div className="divider-line" />
            <p className="section-subtitle mt-3">We ensure a smooth, transparent, and hassle-free experience from start to finish.</p>
          </div>
          <div className="process-timeline">
            {[
              { step: "1", title: "Contact Us", desc: "Call or fill in the form" },
              { step: "2", title: "Site Visit", desc: "We inspect your location" },
              { step: "3", title: "Free Quote", desc: "Transparent cost estimate" },
              { step: "4", title: "Expert Work", desc: "Skilled team gets to work" },
              { step: "5", title: "Quality Check", desc: "Final inspection done" },
            ].map((s) => (
              <div key={s.step} className="process-step">
                <div className="process-step-number">{s.step}</div>
                <div className="process-step-content"><h3>{s.title}</h3><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <div className="badge-pill mx-auto mb-4" style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", color: "var(--white)" }}><i className="bi bi-lightning-charge-fill" />Get Started</div>
          <h2 className="display-heading text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Need a Service? Contact Us Today!</h2>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>Our team is ready to help with a free site visit and no-obligation quotation.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="tel:+919655010282" className="btn-cta-white"><i className="bi bi-telephone-fill" />Call Now</a>
            <Link href="/contact" className="btn-cta-outline"><i className="bi bi-chat-dots-fill" />Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

