import Link from 'next/link';
import Image from 'next/image';

export default function ServicePageTemplate({
  title, subtitle, breadcrumb, heroImage, badgeLabel, intro, features, benefits, faqs, seoContent
}) {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero position-relative overflow-hidden">
        <div className="hero-v2-bg-shape shape-1" />
        <div className="hero-v2-bg-shape shape-2" />
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <div className="badge-pill mx-auto mb-4" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)", padding: "8px 24px" }}>
                <i className="bi bi-tools" />
                {badgeLabel}
              </div>
              <h1 className="display-heading mb-4 text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                {title}
              </h1>
              <p className="lead-text mb-4 px-lg-5 text-white-50" style={{ fontSize: "1.15rem", lineHeight: "1.6" }}>
                {subtitle}
              </p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-crr justify-content-center" style={{ background: "rgba(255,255,255,0.05)", padding: "10px 24px", borderRadius: "50px", display: "inline-flex" }}>
                  <li className="breadcrumb-item"><Link href="/" style={{ color: "var(--white)" }}>Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/services" style={{ color: "var(--white)" }}>Services</Link></li>
                  <li className="breadcrumb-item active" style={{ color: "var(--primary)" }}>{breadcrumb}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-v2-image-wrapper position-relative">
                <div className="hero-v2-arrow-shape" />
                <Image
                  src={heroImage}
                  alt={`${title} in Pudukkottai`}
                  className="hero-v2-img w-100 object-fit-cover shadow-lg"
                  style={{ borderRadius: "20px" }}
                  width={800}
                  height={600}
                  priority={true}
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="hero-v2-social-proof shadow-lg" style={{ borderRadius: "16px", background: "var(--white)" }}>
                  <div className="hero-v2-avatar-group">
                    <span className="hero-v2-avatar" style={{ background: "var(--primary-dark)" }}><i className="bi bi-shield-check text-white" /></span>
                    <span className="hero-v2-avatar" style={{ background: "var(--primary-dark)" }}><i className="bi bi-award-fill text-white" /></span>
                    <span className="hero-v2-avatar" style={{ background: "var(--primary-dark)" }}><i className="bi bi-star-fill text-white" /></span>
                  </div>
                  <div className="hero-v2-proof-text">
                    <span className="hero-v2-proof-number text-dark" style={{ fontWeight: 800 }}>100% Quality</span>
                    <span className="hero-v2-proof-label text-muted">Assured Service</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="badge-pill mb-3" style={{ background: "var(--primary-ultra-light)", color: "var(--primary-dark)" }}>
                <i className="bi bi-info-circle-fill" />
                Service Overview
              </div>
              <h2 className="section-title mb-4" style={{ fontSize: "2.2rem" }}>{title}</h2>
              <p style={{ color: "var(--dark-gray)", lineHeight: "1.8", marginBottom: "30px", fontSize: "1.1rem" }}>
                {intro}
              </p>
              <div className="mt-4 mb-5 bg-light p-4 rounded-4 shadow-sm border">
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px" }}>Key Service Highlights</h3>
                {benefits.slice(0, 4).map((b, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 mb-3">
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--primary-ultra-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                       <i className="bi bi-check2" style={{ fontSize: "1.1rem", color: "var(--primary)", fontWeight: 800 }} />
                    </div>
                    <p style={{ color: "var(--dark)", lineHeight: "1.5", margin: 0, paddingTop: "3px", fontWeight: 600 }}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-3">
                <a href="tel:+919655010282" className="btn-primary-crr shadow-sm">
                  <i className="bi bi-telephone-fill" />
                  Call For Booking
                </a>
                <Link href="/contact" className="btn-outline-dark-crr">
                  <i className="bi bi-calendar-check" />
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO LONG-FORM CONTENT */}
      {seoContent && seoContent.length > 0 && (
        <section className="section-py" style={{ background: "#fdfdfd", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {seoContent.map((section, idx) => (
                  <div key={idx} className="mb-5">
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "var(--dark)", marginBottom: "20px" }}>
                      {section.heading}
                    </h3>
                    <div className="divider-line-left mb-4" />
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ fontSize: "1.05rem", color: "var(--dark-gray)", lineHeight: "1.8", marginBottom: "16px" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="why-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto mb-3" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)" }}>
              <i className="bi bi-grid-fill" />
              Comprehensive Solutions
            </div>
            <h2 className="section-title text-white">Our Detailed {breadcrumb} Services</h2>
            <div className="divider-line" />
            <p className="text-white-50 mt-4 mx-auto" style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
              We provide end-to-end solutions tailored to your specific requirements, using high-quality materials and modern techniques.
            </p>
          </div>
          <div className="row g-4 g-lg-5 justify-content-center mt-3">
            {features.map((f) => (
              <div key={f.title} className="col-lg-4 col-md-6">
                <div className="why-card shadow-lg" style={{ height: "100%", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="why-card-content">
                    <div className="why-icon-wrap" style={{ background: "rgba(247,148,29,0.2)", color: "var(--primary-light)", width: "60px", height: "60px", fontSize: "1.5rem" }}>
                      <i className={`bi ${f.icon}`} />
                    </div>
                    <h3 className="text-white mt-4 mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{f.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS & CTA */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="badge-pill mb-3" style={{ background: "var(--primary-ultra-light)", color: "var(--primary-dark)" }}>
                <i className="bi bi-star-fill" />
                Why Choose CRR Groups
              </div>
              <h2 className="section-title mb-4" style={{ fontSize: "2.2rem" }}>The CRR Advantage</h2>
              <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                Partnering with us means choosing reliability, transparency, and top-tier craftsmanship.
              </p>
              <div className="mt-4">
                {benefits.map((b, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 mb-3 p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #eee" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                       <i className="bi bi-check2" style={{ fontSize: "0.9rem", color: "var(--white)", fontWeight: 800 }} />
                    </div>
                    <p style={{ color: "var(--dark)", lineHeight: "1.5", margin: 0, fontWeight: 600 }}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 p-md-5" style={{ 
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", 
                borderRadius: "24px", 
                color: "var(--white)",
                boxShadow: "0 20px 40px rgba(247,148,29,0.3)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%" }} />
                
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.8rem, 5vw, 2.2rem)", marginBottom: "20px", color: "white", position: "relative", zIndex: 1 }}>
                  Need Immediate Help?
                </h3>
                <p style={{ opacity: 0.9, marginBottom: "30px", fontSize: "1.05rem", lineHeight: "1.6", position: "relative", zIndex: 1 }}>
                  Our expert technicians are standing by. Reach out now for emergency support or to schedule a free site inspection.
                </p>
                <div className="d-flex flex-column gap-3 gap-md-4 position-relative z-1">
                  <a href="tel:+919655010282" style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--white)", textDecoration: "none", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: "clamp(1.05rem, 4vw, 1.3rem)" }}>
                    <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "var(--white)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", flexShrink: 0 }} className="contact-icon-hover">
                      <i className="bi bi-telephone-fill" style={{ fontSize: "1.3rem" }} />
                    </div>
                    <span style={{ wordBreak: "break-word" }}>+91 96550 10282</span>
                  </a>
                  <a href="tel:+918056639819" style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--white)", textDecoration: "none", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: "clamp(1.05rem, 4vw, 1.3rem)" }}>
                    <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "var(--white)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", flexShrink: 0 }} className="contact-icon-hover">
                      <i className="bi bi-telephone-fill" style={{ fontSize: "1.3rem" }} />
                    </div>
                    <span style={{ wordBreak: "break-word" }}>+91 80566 39819</span>
                  </a>
                  <a href="mailto:crrgroups26@gmail.com" style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--white)", textDecoration: "none", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: "clamp(1.05rem, 4vw, 1.3rem)" }}>
                    <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "var(--white)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", flexShrink: 0 }} className="contact-icon-hover">
                      <i className="bi bi-envelope-fill" style={{ fontSize: "1.3rem" }} />
                    </div>
                    <span style={{ wordBreak: "break-all" }}>crrgroups26@gmail.com</span>
                  </a>
                  <a href="https://www.instagram.com/crr_groups" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--white)", textDecoration: "none", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: "clamp(1.05rem, 4vw, 1.3rem)" }}>
                    <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "var(--white)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", flexShrink: 0 }} className="contact-icon-hover">
                      <i className="bi bi-instagram" style={{ fontSize: "1.3rem" }} />
                    </div>
                    <span style={{ wordBreak: "break-word" }}>@crr_groups</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-py" style={{ background: "#f8f9fc" }}>
        <div className="container">
          <div className="section-header text-center mb-5">
            <div className="badge-pill mx-auto mb-3" style={{ background: "var(--primary-ultra-light)", color: "var(--primary-dark)" }}>
              <i className="bi bi-question-circle-fill" />
              Service FAQs
            </div>
            <h2 className="section-title">Common Questions</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion faq-accordion" id={`faq-${title.replace(/\s/g, '')}`} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {faqs.map((f, i) => (
                  <div className="accordion-item shadow-sm" key={i} style={{ border: "none", borderRadius: "16px", overflow: "hidden" }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${i === 0 ? '' : ' collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#svc-faq${i}`}
                        aria-expanded={i === 0}
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", padding: "20px 24px", color: "var(--dark)" }}
                      >
                        {f.q}
                      </button>
                    </h2>
                    <div id={`svc-faq${i}`} className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`} data-bs-parent={`#faq-${title.replace(/\s/g, '')}`}>
                      <div className="accordion-body" style={{ color: "var(--dark-gray)", lineHeight: "1.8", padding: "0 24px 24px" }}>
                        {f.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: "var(--dark)", position: "relative", overflow: "hidden" }}>
       
        <div className="container text-center position-relative z-1">
          <h2 className="display-heading text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ready to Get Started with <span style={{ color: "var(--primary)" }}>{breadcrumb}</span>?
          </h2>
          <p className="mb-5 mx-auto" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", maxWidth: "600px" }}>
            Contact CRR Groups today for professional, reliable, and high-quality technical services in Pudukkottai district.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="tel:+919655010282" className="btn btn-primary" style={{ background: "var(--primary)", border: "none", padding: "14px 32px", fontSize: "1.1rem", fontWeight: 700, borderRadius: "50px", color: "var(--dark)" }}>
              <i className="bi bi-telephone-fill me-2" />
              Call For Booking
            </a>
            <Link href="/contact" className="btn btn-outline-light" style={{ padding: "14px 32px", fontSize: "1.1rem", fontWeight: 700, borderRadius: "50px", borderWidth: "2px" }}>
              <i className="bi bi-chat-dots-fill me-2" />
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
