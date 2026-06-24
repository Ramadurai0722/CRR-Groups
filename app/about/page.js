import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "../lib/seo.config";

const seo = seoConfig['/about'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

const values = [
  { icon: "bi-shield-check", title: "Integrity", desc: "We are honest and transparent in every interaction — from quotation to completion." },
  { icon: "bi-star-fill", title: "Excellence", desc: "We strive for the highest quality in every project, big or small." },
  { icon: "bi-clock-fill", title: "Reliability", desc: "We show up on time and deliver on our promises, every single time." },
  { icon: "bi-people-fill", title: "Customer First", desc: "Your satisfaction is our top priority. We go the extra mile for every customer." },
  { icon: "bi-recycle", title: "Sustainability", desc: "We use energy-efficient solutions and environmentally responsible practices." },
  { icon: "bi-lightbulb-fill", title: "Innovation", desc: "We stay updated with the latest technologies to offer modern solutions." },
];

const team = [
  { name: "Rengasamy Ramesh", role: "CEO", icon: "bi-briefcase-fill" },
  { name: "Kumar", role: "Senior Electrician and Plumber", icon: "bi-tools" },
  { name: "Ramadurai Rengasamy", role: "IT Profession and handler", icon: "bi-laptop" },
  { name: "Paramesh Rengasamy", role: "Social Media Handler", icon: "bi-share-fill" },
];

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />

      {/* PAGE HERO */}
      <section className="page-hero position-relative overflow-hidden">
        <div className="hero-v2-bg-shape shape-1" />
        <div className="hero-v2-bg-shape shape-2" />
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="badge-pill mx-auto mb-4" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)" }}><i className="bi bi-info-circle-fill" />About Us</div>
              <h1 className="display-heading mb-4 text-white">Our <span className="text-primary-crr">Story</span></h1>
              <p className="lead-text mb-4 px-lg-5 text-white-50">Learn about our mission, vision, and the expert team behind every successful project.</p>
              <nav aria-label="breadcrumb"><ol className="breadcrumb breadcrumb-crr justify-content-center"><li className="breadcrumb-item"><Link href="/" style={{ color: "var(--white)" }}>Home</Link></li><li className="breadcrumb-item active" style={{ color: "var(--primary)" }}>About Us</li></ol></nav>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-v2-image-wrapper">
                <div className="hero-v2-arrow-shape" />
                <Image src="/media/About.webp" alt="CRR Groups professional team" className="hero-v2-img" style={{ borderRadius: "12px" }} width={518} height={624} priority={true} fetchPriority="high" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="hero-v2-social-proof">
                  <div className="hero-v2-avatar-group">
                    <span className="hero-v2-avatar" style={{ background: "#f7941d" }}>CRR</span>
                    <span className="hero-v2-avatar" style={{ background: "#f7aa53ff" }}><i className="bi bi-gear-fill" /></span>
                    <span className="hero-v2-avatar" style={{ background: "#dd7a08ff" }}><i className="bi bi-lightbulb-fill" /></span>
                  </div>
                  <div className="hero-v2-proof-text">
                    <span className="hero-v2-proof-number">15+</span>
                    <span className="hero-v2-proof-label">Specialized Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="badge-pill mb-3"><i className="bi bi-book-fill" />Our Story</div>
              <h2 className="section-title mb-4">Built on Trust, Driven by Excellence</h2>
              <p style={{ color: "var(--text-color)", lineHeight: "1.8", marginBottom: "20px", fontSize: "1.05rem" }}>CRR Groups was established in Pudukkottai with a clear vision — to provide professional, affordable, and trustworthy electricals and plumbing services to every household and business in the region.</p>
              <p style={{ color: "var(--text-color)", lineHeight: "1.8", marginBottom: "20px", fontSize: "1.05rem" }}>What started as a small team of skilled electricians has grown into a comprehensive service company offering 15+ specialized services including CCTV installation, inverter setup, AC fitting, office infrastructure, and appliance repairs.</p>
              <div className="d-flex align-items-start gap-3 mt-4 mb-2">
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--primary-ultra-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="bi bi-check2" style={{ fontSize: "1.2rem", color: "var(--primary)", fontWeight: 800 }} /></div>
                <p style={{ color: "var(--text-color)", lineHeight: "1.6", margin: 0, paddingTop: "8px", fontWeight: 500 }}>With 10K+ successfully completed projects and 1K+ happy customers.</p>
              </div>
              <div className="d-flex align-items-start gap-3 mb-4">
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--primary-ultra-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="bi bi-check2" style={{ fontSize: "1.2rem", color: "var(--primary)", fontWeight: 800 }} /></div>
                <p style={{ color: "var(--text-color)", lineHeight: "1.6", margin: 0, paddingTop: "8px", fontWeight: 500 }}>We are the go-to service partner across Pudukkottai, Aranthangi, Kurumbur, and nearby districts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-py" style={{ background: "#f9fafb" }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6">
              <div className="service-card" style={{ height: "100%", padding: "40px", display: "flex", flexDirection: "column", background: "var(--white)", width: "100%" }}>
                <div className="service-card-number" aria-hidden="true">01</div>
                <div className="service-icon-wrap" style={{ position: "relative", marginBottom: "20px", left: 0, bottom: 0, transform: "none" }}><i className="bi bi-bullseye" /></div>
                <h3 className="service-card-title mb-3" style={{ fontSize: "1.8rem" }}>Our Mission</h3>
                <p className="service-card-desc" style={{ fontSize: "1.05rem", marginBottom: 0 }}>To deliver reliable, high-quality, and affordable electricals and plumbing services to every home, office, and commercial space — ensuring safety, comfort, and satisfaction through skilled workmanship and transparent practices.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-card" style={{ height: "100%", padding: "40px", display: "flex", flexDirection: "column", background: "var(--white)", width: "100%" }}>
                <div className="service-card-number" aria-hidden="true">02</div>
                <div className="service-icon-wrap" style={{ position: "relative", marginBottom: "20px", left: 0, bottom: 0, transform: "none", background: "var(--dark)", boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}><i className="bi bi-eye-fill" /></div>
                <h3 className="service-card-title mb-3" style={{ fontSize: "1.8rem" }}>Our Vision</h3>
                <p className="service-card-desc" style={{ fontSize: "1.05rem", marginBottom: 0 }}>To become the most trusted and preferred electricals and plumbing service company in Tamil Nadu — known for excellence, innovation, and unwavering commitment to customer satisfaction, while expanding our reach across the region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="why-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)" }}><i className="bi bi-gem" />Core Values</div>
            <h2 className="section-title text-white">What We Stand For</h2>
            <div className="divider-line" />
            <p className="section-subtitle mt-3">These six core principles guide our daily work and shape how we interact with our customers.</p>
          </div>
          <div className="row g-4 g-lg-5">
            {values.map((v) => (
              <div key={v.title} className="col-lg-4 col-md-6">
                <div className="why-card" style={{ height: "100%" }}><div className="why-card-content"><div className="why-icon-wrap"><i className={`bi ${v.icon}`} /></div><h3>{v.title}</h3><p>{v.desc}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section section-py bg-white position-relative" style={{ overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(247,148,29,0.05) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(247,148,29,0.03) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />
        <div className="container position-relative z-1">
          <div className="section-header text-center mb-5">
            <div className="badge-pill mx-auto mb-3" style={{ background: "var(--primary-ultra-light)", border: "1px solid rgba(247,148,29,0.2)", color: "var(--primary-dark)", padding: "8px 24px" }}><i className="bi bi-people-fill" />Leadership & Experts</div>
            <h2 className="section-title text-dark" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800 }}>Expert Team Behind Every Project</h2>
            <div className="divider-line mx-auto" />
            <p className="section-subtitle mt-4 mx-auto" style={{ maxWidth: "650px", fontSize: "1.1rem", lineHeight: "1.7", color: "var(--dark-gray)" }}>Meet the dedicated professionals driving CRR Groups&apos; commitment to unmatched quality, innovation, and service excellence.</p>
          </div>
          <div className="row g-4 justify-content-center mt-2">
            {team.map((m) => (
              <div key={m.name} className="col-lg-3 col-md-6">
                <div style={{ background: "var(--white)", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "28px", padding: "40px 24px", textAlign: "center", position: "relative", transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", overflow: "hidden", cursor: "pointer", zIndex: 1 }}>
                  <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "transparent", border: "2px dashed rgba(247,148,29,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", transition: "transform 0.6s ease-in-out" }}>
                    <div style={{ width: "74px", height: "74px", borderRadius: "50%", background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(247,148,29,0.3)", transition: "transform 0.4s ease" }}>
                      <i className={`bi ${m.icon}`} style={{ fontSize: "1.8rem", color: "var(--white)" }} />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.2rem", color: "var(--dark)", marginBottom: "12px", letterSpacing: "0.5px" }}>{m.name}</h3>
                  <div style={{ width: "30px", height: "3px", background: "var(--primary)", margin: "0 auto 16px", borderRadius: "10px", opacity: 0.8 }} />
                  <p style={{ color: "var(--dark-gray)", fontSize: "0.9rem", fontWeight: 500, margin: 0, lineHeight: "1.5" }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
