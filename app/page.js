import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "./lib/seo.config";

const seo = seoConfig['/'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

const services = [
  { icon: "bi-lightning-charge-fill", title: "Electrical Services", description: "Complete home and office wiring, electrical repairs, power distribution, and fault finding by certified electricians.", path: "/services/electrical" },
  { icon: "bi-droplet-fill", title: "Plumbing Services", description: "Water pipe installation, leak repair, bathroom and kitchen plumbing, drainage solutions, and maintenance.", path: "/services/plumbing" },
  { icon: "bi-camera-video-fill", title: "CCTV Installation", description: "Professional CCTV camera setup for homes, offices, and commercial spaces with remote monitoring support.", path: "/services/cctv-camera" },
  { icon: "bi-battery-charging", title: "Inverter Installation", description: "Home and office inverter setup, battery installation, maintenance, and reliable backup power solutions.", path: "/services/inverter-installation" },
  { icon: "bi-wind", title: "AC Installation", description: "Split AC and window AC installation, servicing, maintenance, and relocation by trained AC technicians.", path: "/services/ac-installation" },
  { icon: "bi-building", title: "Office Setup", description: "Complete office electricals and plumbing infrastructure, cabling, and workstation power setup.", path: "/services/office-setup" },
];

const whyCards = [
  { icon: "bi-lightning-charge", title: "Fast Response", desc: "Quick turnaround on all service requests, emergency support within hours." },
  { icon: "bi-briefcase-fill", title: "Experienced Team", desc: "Our team brings years of hands-on experience to every project we undertake." },
  { icon: "bi-currency-rupee", title: "Affordable Pricing", desc: "Transparent, competitive pricing with no hidden charges ever." },
  { icon: "bi-gem", title: "Quality Materials", desc: "We use only ISI-marked and brand-quality materials for every job." },
  { icon: "bi-eye-fill", title: "Transparent Service", desc: "Detailed quote before work begins, honest and ethical practices." },
  { icon: "bi-emoji-smile-fill", title: "Customer Satisfaction", desc: "1K+ happy customers across Pudukkottai and surrounding areas." },
];

const processSteps = [
  { num: "01", title: "Call Us", desc: "Reach us by phone or WhatsApp" },
  { num: "02", title: "Inspection", desc: "Our expert visits your location" },
  { num: "03", title: "Quotation", desc: "Transparent cost estimate provided" },
  { num: "04", title: "Execution", desc: "Skilled team begins the work" },
  { num: "05", title: "Quality Check", desc: "Thorough quality inspection done" },
  { num: "06", title: "Completion", desc: "Job completed to your satisfaction" },
];

const testimonials = [
  { name: "Rajesh Kumar", location: "Pudukkottai", initials: "RK", text: "Excellent service! The electrician came on time, diagnosed the issue quickly, and fixed it perfectly. Highly recommend CRR Groups for any electrical work.", rating: 5 },
  { name: "Priya Devi", location: "Aranthangi", initials: "PD", text: "Very professional team. They installed CCTV cameras in my office and the setup was clean and precise. Great service at a fair price.", rating: 5 },
  { name: "Murugesan", location: "Kurumbur", initials: "MR", text: "Called them for an emergency plumbing repair. They responded within 2 hours and fixed the pipe leak. Reliable and trustworthy!", rating: 5 },
  { name: "Selvi Annamalai", location: "Pudukkottai", initials: "SA", text: "Got my inverter installed and they explained everything clearly. Battery backup is excellent. Very happy with the service!", rating: 5 },
  { name: "Kannan R", location: "Kovilpatti", initials: "KR", text: "They did the complete office electrical wiring for our new office. Neat work, on time, within budget. Will definitely use again.", rating: 5 },
  { name: "Karthik Subramanian", location: "Arimalam", initials: "KS", text: "Got my home plumbing completely redone. The team was fantastic, very clean work and high-quality materials used.", rating: 5 },
  { name: "Meena Krishnan", location: "Alangudi", initials: "MK", text: "They helped us set up our new shop's electricals, including heavy-duty wiring. Flawless execution and delivered exactly as promised.", rating: 5 },
  { name: "Arun Prakash", location: "Thirumayam", initials: "AP", text: "Fast and reliable! Our AC installation was done within a few hours. The technicians were very polite and knowledgeable.", rating: 5 },
  { name: "Suresh Natarajan", location: "Pudukkottai", initials: "SN", text: "Called CRR Groups for an urgent electrical fault in the evening. Their response was quick and highly professional. Lifesavers!", rating: 5 },
];

const faqs = [
  { q: "Do you provide emergency electricals and plumbing services?", a: "Yes! CRR Groups offers 24/7 emergency services for both electricals and plumbing issues. Call us anytime and our team will respond promptly." },
  { q: "Which areas do you serve?", a: "We primarily serve Pudukkottai, Aranthangi, Kurumbur, Kovilpatti, and all nearby areas in the Pudukkottai district of Tamil Nadu." },
  { q: "Do you install CCTV cameras for homes and offices?", a: "Yes, we install CCTV surveillance systems for residential homes, commercial offices, shops, and warehouses with complete setup and configuration." },
  { q: "Do you provide office electricals and plumbing setup?", a: "Yes, we specialize in complete office electrical infrastructure, plumbing setup, cabling, workstation power points, and water management systems." },
  { q: "How do I get a service quote?", a: "Simply call us or fill out the contact form. Our technician will visit your location for inspection and provide a transparent, no-obligation quotation." },
  { q: "Do you provide AC installation and maintenance?", a: "Yes, we install split ACs, window ACs, and provide regular maintenance, servicing, gas refilling, and relocation services." },
  { q: "What inverter brands do you work with?", a: "We work with all major inverter brands including Luminous, Exide, Microtek, Su-Kam, and more. We install, service, and replace batteries for all brands." },
];

const areas = ["Pudukkottai", "Aranthangi", "Kurumbur", "Kovilpatti", "Gandarvakottai", "Alangudi", "Nearby Areas"];

export default function Home() {
  const chunkedDesktop = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunkedDesktop.push(testimonials.slice(i, i + 3));
  }

  const chunkedTablet = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunkedTablet.push(testimonials.slice(i, i + 2));
  }

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }} />

      {/* HERO SECTION */}
      <section className="hero-section-v2">
        <div className="container">
          <div className="row align-items-center hero-v2-content">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="hero-v2-title">
                Professional{" "}
                <span className="hero-v2-highlight">Electricals & Plumbing</span>{" "}
                Services in Pudukkottai
              </h1>
              <p className="hero-v2-description">
                From electrical installations and plumbing works to CCTV
                cameras, AC fitting, inverter setup, and office infrastructure —
                CRR Groups provides reliable solutions for homes, offices, and
                commercial properties.
              </p>
              <div className="hero-v2-buttons">
                <Link href="/contact" className="hero-v2-btn-primary">
                  <i className="bi bi-chat-dots-fill" />
                  Get Free Quote
                </Link>
                <a href="tel:+919655010282" className="hero-v2-btn-outline">
                  <i className="bi bi-telephone-fill" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-v2-image-wrapper">
                <div className="hero-v2-arrow-shape" />
                <Image src="/media/Home/Hero.webp" alt="CRR Groups professional electricians and plumbers" className="hero-v2-img" width={600} height={600} priority={true} fetchPriority="high" />
                <div className="hero-v2-social-proof">
                  <div className="hero-v2-avatar-group">
                    <span className="hero-v2-avatar" style={{ background: "#f7941d" }}>RM</span>
                    <span className="hero-v2-avatar" style={{ background: "#f0ac2cff" }}>MS</span>
                    <span className="hero-v2-avatar" style={{ background: "#e07d0a" }}>KP</span>
                  </div>
                  <div className="hero-v2-proof-text">
                    <span className="hero-v2-proof-number">1K+</span>
                    <span className="hero-v2-proof-label">Happy Customers Served</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar-section">
        <div className="container">
          <div className="trust-bar-wrapper">
            <div className="row g-4 g-lg-0">
              {[
                { num: "10K+", label: "Projects Completed", icon: "bi-briefcase-fill" },
                { num: "100%", label: "Customer Satisfaction", icon: "bi-emoji-smile-fill" },
                { num: "24/7", label: "Emergency Support", icon: "bi-headset" },
                { num: "25+", label: "Years Experience", icon: "bi-award-fill" },
              ].map((s, idx) => (
                <div key={s.label} className="col-6 col-lg-3">
                  <div className={`trust-stat-card ${idx !== 3 ? "has-divider" : ""}`}>
                    <div className="trust-icon-wrapper"><i className={`bi ${s.icon}`} /></div>
                    <div className="trust-content">
                      <div className="trust-stat-number">{s.num}</div>
                      <div className="trust-stat-label">{s.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-section section-py">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about-img-wrapper">
                <Image src="/media/About.webp" alt="CRR Groups team of professionals" width={518} height={624} />
                <div className="about-badge-float">
                  <div className="num">25+</div>
                  <div className="lbl">Years of Trust</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="badge-pill"><i className="bi bi-info-circle-fill" />About CRR Groups</div>
              <h2 className="section-title mb-3">Your Trusted Electricals & Plumbing Partner in Pudukkottai</h2>
              <p className="text-muted-crr mb-3" style={{ lineHeight: "1.8" }}>CRR Groups was founded with a simple mission: to deliver reliable, high-quality electricals and plumbing solutions to homes, offices, and commercial establishments across Pudukkottai and the surrounding region.</p>
              <p className="text-muted-crr mb-4" style={{ lineHeight: "1.8" }}>Our team of certified electricians and expert plumbers bring years of hands-on experience to every project — from routine repairs to complex office infrastructure setups.</p>
              <ul className="about-feature-list">
                {["Certified electrical specialists with ISI-compliant installations", "Expert plumbing engineers for residential and commercial projects", "Complete office infrastructure — electrical, plumbing, cabling, CCTV", "24/7 emergency support across Pudukkottai district"].map((f) => (
                  <li key={f}><i className="bi bi-check-circle-fill" /><span>{f}</span></li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary-crr d-inline-flex mt-3"><i className="bi bi-arrow-right-circle-fill" />Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto"><i className="bi bi-grid-fill" />Our Services</div>
            <h2 className="section-title">Complete Electricals & Plumbing Solutions</h2>
            <div className="divider-line" />
            <p className="section-subtitle mt-3">From installation to maintenance and emergency repairs — we cover every aspect of your electricals and plumbing needs.</p>
          </div>
          <div className="row g-4 g-lg-5">
            {services.map((s, index) => (
              <div key={s.title} className="col-lg-4 col-md-6">
                <Link href={s.path} className="service-card">
                  <div className="service-card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                  <div className="service-icon-wrap"><i className={`bi ${s.icon}`} /></div>
                  <div className="service-content">
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <div className="service-read-more">Explore Service <i className="bi bi-arrow-right" /></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 pt-3">
            <Link href="/services" className="btn-primary-crr" style={{ padding: "14px 36px", fontSize: "1rem" }}><i className="bi bi-grid-fill" />View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)" }}><i className="bi bi-star-fill" />Why Choose Us</div>
            <h2 className="section-title" style={{ color: "var(--white)" }}>The CRR Groups Difference</h2>
            <div className="divider-line" />
          </div>
          <div className="row g-4 g-lg-5">
            {whyCards.map((w) => (
              <div key={w.title} className="col-lg-4 col-md-6">
                <div className="why-card"><div className="why-card-content"><div className="why-icon-wrap"><i className={`bi ${w.icon}`} /></div><h3>{w.title}</h3><p>{w.desc}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto"><i className="bi bi-arrow-repeat" />Our Process</div>
            <h2 className="section-title">How We Work</h2>
            <div className="divider-line" />
            <p className="section-subtitle mt-3">Simple, transparent, and reliable — from your first call to job completion.</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((s) => (
              <div key={s.num} className="process-step">
                <div className="process-step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto"><i className="bi bi-chat-quote-fill" />Testimonials</div>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="divider-line" />
          </div>

          {/* DESKTOP CAROUSEL */}
          <div id="testimonialCarouselDesktop" className="carousel slide d-none d-lg-block" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators" style={{ bottom: "-30px" }}>
              {chunkedDesktop.map((_, i) => (
                <button key={i} type="button" data-bs-target="#testimonialCarouselDesktop" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} aria-label={`Slide ${i + 1}`} style={{ backgroundColor: "var(--primary)", width: "10px", height: "10px", borderRadius: "50%", margin: "0 5px", border: "10px solid transparent", backgroundClip: "padding-box", boxSizing: "content-box" }} />
              ))}
            </div>
            <div className="carousel-inner px-5" style={{ paddingBottom: "30px" }}>
              {chunkedDesktop.map((group, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div className="row justify-content-center g-4">
                    {group.map((t) => (
                      <div key={t.name} className="col-lg-4 col-12">
                        <div className="testimonial-card mx-auto" style={{ height: "100%" }}>
                          <div className="testimonial-quote" aria-hidden="true">&ldquo;</div>
                          <div className="testimonial-rating">{Array.from({ length: t.rating }).map((_, j) => (<i key={j} className="bi bi-star-fill" />))}</div>
                          <p className="testimonial-text">{t.text}</p>
                          <div className="testimonial-author">
                            <div className="testimonial-avatar">{t.initials}</div>
                            <div>
                              <div className="testimonial-author-name">{t.name}</div>
                              <div className="testimonial-author-location"><i className="bi bi-geo-alt-fill text-primary-crr me-1" style={{ fontSize: "0.7rem" }} />{t.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarouselDesktop" data-bs-slide="prev" style={{ width: "5%", opacity: 1, left: 0 }}><i className="bi bi-chevron-left" style={{ fontSize: "2.5rem", color: "var(--primary)" }} /><span className="visually-hidden">Previous</span></button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarouselDesktop" data-bs-slide="next" style={{ width: "5%", opacity: 1, right: 0 }}><i className="bi bi-chevron-right" style={{ fontSize: "2.5rem", color: "var(--primary)" }} /><span className="visually-hidden">Next</span></button>
          </div>

          {/* TABLET CAROUSEL */}
          <div id="testimonialCarouselTablet" className="carousel slide d-none d-md-block d-lg-none" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators" style={{ bottom: "-30px" }}>
              {chunkedTablet.map((_, i) => (
                <button key={i} type="button" data-bs-target="#testimonialCarouselTablet" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} aria-label={`Slide ${i + 1}`} style={{ backgroundColor: "var(--primary)", width: "10px", height: "10px", borderRadius: "50%", margin: "0 5px", border: "10px solid transparent", backgroundClip: "padding-box", boxSizing: "content-box" }} />
              ))}
            </div>
            <div className="carousel-inner px-5" style={{ paddingBottom: "30px" }}>
              {chunkedTablet.map((group, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div className="row justify-content-center g-4">
                    {group.map((t) => (
                      <div key={t.name} className="col-md-6 col-12">
                        <div className="testimonial-card mx-auto" style={{ height: "100%" }}>
                          <div className="testimonial-quote" aria-hidden="true">&ldquo;</div>
                          <div className="testimonial-rating">{Array.from({ length: t.rating }).map((_, j) => (<i key={j} className="bi bi-star-fill" />))}</div>
                          <p className="testimonial-text">{t.text}</p>
                          <div className="testimonial-author">
                            <div className="testimonial-avatar">{t.initials}</div>
                            <div>
                              <div className="testimonial-author-name">{t.name}</div>
                              <div className="testimonial-author-location"><i className="bi bi-geo-alt-fill text-primary-crr me-1" style={{ fontSize: "0.7rem" }} />{t.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarouselTablet" data-bs-slide="prev" style={{ width: "5%", opacity: 1, left: 0 }}><i className="bi bi-chevron-left" style={{ fontSize: "2.5rem", color: "var(--primary)" }} /><span className="visually-hidden">Previous</span></button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarouselTablet" data-bs-slide="next" style={{ width: "5%", opacity: 1, right: 0 }}><i className="bi bi-chevron-right" style={{ fontSize: "2.5rem", color: "var(--primary)" }} /><span className="visually-hidden">Next</span></button>
          </div>

          {/* MOBILE CAROUSEL */}
          <div id="testimonialCarouselMobile" className="carousel slide d-block d-md-none" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators" style={{ bottom: "-30px" }}>
              {testimonials.map((_, i) => (
                <button key={i} type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} aria-label={`Slide ${i + 1}`} style={{ backgroundColor: "var(--primary)", width: "10px", height: "10px", borderRadius: "50%", margin: "0 5px", border: "10px solid transparent", backgroundClip: "padding-box", boxSizing: "content-box" }} />
              ))}
            </div>
            <div className="carousel-inner px-3" style={{ paddingBottom: "30px" }}>
              {testimonials.map((t, i) => (
                <div key={t.name} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="testimonial-card mx-auto" style={{ height: "100%" }}>
                        <div className="testimonial-quote" aria-hidden="true">&ldquo;</div>
                        <div className="testimonial-rating">{Array.from({ length: t.rating }).map((_, j) => (<i key={j} className="bi bi-star-fill" />))}</div>
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-author">
                          <div className="testimonial-avatar">{t.initials}</div>
                          <div>
                            <div className="testimonial-author-name">{t.name}</div>
                            <div className="testimonial-author-location"><i className="bi bi-geo-alt-fill text-primary-crr me-1" style={{ fontSize: "0.7rem" }} />{t.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide="prev" style={{ width: "8%", opacity: 1, left: "-10px" }}><i className="bi bi-chevron-left" style={{ fontSize: "2rem", color: "var(--primary)" }} /><span className="visually-hidden">Previous</span></button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide="next" style={{ width: "8%", opacity: 1, right: "-10px" }}><i className="bi bi-chevron-right" style={{ fontSize: "2rem", color: "var(--primary)" }} /><span className="visually-hidden">Next</span></button>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="service-area-section section-py bg-light">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title text-dark fw-bold">Areas We Serve</h2>
            <div className="divider-line mx-auto" />
            <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>Proudly serving Pudukkottai and surrounding areas with fast, reliable electricals and plumbing services.</p>
          </div>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4 col-xl-4">
              <div className="h-100 bg-white rounded-4 p-4 p-md-5" style={{ boxShadow: "0 5px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 className="mb-4 fw-bold text-dark d-flex align-items-center" style={{ fontSize: "1.4rem" }}><i className="bi bi-geo-alt-fill text-primary me-2" />Our Coverage</h3>
                <ul className="list-unstyled mb-0 row g-3">
                  {areas.map((a) => (
                    <li key={a} className="col-sm-6 col-lg-12 d-flex align-items-center">
                      <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "40px", height: "40px" }}><i className="bi bi-check2 text-primary" style={{ fontSize: "1.2rem", strokeWidth: "1" }} /></div>
                      <span className="text-dark fw-semibold" style={{ fontSize: "1.05rem" }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <div className="h-100 rounded-4 overflow-hidden" style={{ minHeight: "450px", boxShadow: "0 5px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0340897364636!2d78.94150537451132!3d10.258834268528538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0073a66ef4b0b3%3A0xa650e6cdf7fb77e8!2sCRR%20Groups!5e0!3m2!1sen!2sin!4v1782023179760!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="CRR Groups Service Area Map" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-py">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill mx-auto"><i className="bi bi-question-circle-fill" />FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider-line" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion faq-accordion" id="faqAccordion">
                {faqs.map((f, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button${i === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`} aria-expanded={i === 0}>{f.q}</button>
                    </h2>
                    <div id={`faq${i}`} className={`accordion-collapse collapse${i === 0 ? " show" : ""}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body">{f.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <div className="badge-pill mx-auto mb-4" style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", color: "var(--white)" }}><i className="bi bi-lightning-charge-fill" />Get In Touch</div>
          <h2 className="display-heading text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Need Electrical or Plumbing Help?</h2>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}>Contact CRR Groups Today — Fast, Reliable, and Affordable Service!</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="tel:+919655010282" className="btn-cta-white"><i className="bi bi-telephone-fill" />Call Now</a>
            <Link href="/contact" className="btn-cta-outline"><i className="bi bi-chat-dots-fill" />Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
