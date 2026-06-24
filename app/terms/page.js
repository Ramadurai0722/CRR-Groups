import Link from 'next/link';
import { seoConfig } from '../lib/seo.config';

const seo = seoConfig['/terms'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function Terms() {
  const terms = [
    { title: '1. Acceptance of Terms', content: 'By engaging CRR Groups for any electrical, plumbing, or related services — whether via phone, website, or in person — you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.' },
    { title: '2. Services Provided', content: 'CRR Groups provides professional electrical services, plumbing services, CCTV installation, inverter installation, AC installation and maintenance, and office setup. The scope of each service is as agreed upon in the quotation provided before commencement of work.' },
    { title: '3. Quotations and Pricing', content: 'All quotations are provided after a site inspection and are valid for 7 days from the date of issue. Final pricing may vary if the scope of work changes during execution. We will communicate any price changes to you before proceeding. Payment is due upon completion of work unless otherwise agreed in writing.' },
    { title: '4. Customer Responsibilities', content: 'The customer is responsible for: providing safe and adequate access to the work area, disclosing any known hazards or existing infrastructure issues, ensuring someone authorized is present during the site visit and work execution. CRR Groups is not liable for damage caused by pre-existing conditions not disclosed at the time of inspection.' },
    { title: '5. Cancellation and Rescheduling', content: 'You may cancel or reschedule an appointment with at least 24 hours notice. Cancellations with less notice may incur a visit charge. In the event CRR Groups needs to reschedule, we will notify you at the earliest opportunity and will not charge any cancellation fees.' },
    { title: '6. Liability Limitation', content: "CRR Groups' liability in connection with any service is limited to the value of the service fee paid. We are not liable for indirect, incidental, or consequential damages. Our technicians carry appropriate insurance for their work activities." },
    { title: '7. Emergency Services', content: 'Emergency call-out services are available 24/7 and may attract an additional emergency surcharge over standard rates. Emergency rates will be communicated to you before deployment of our technician.' },
    { title: '8. Governing Law', content: 'These terms are governed by the laws of India and the state of Tamil Nadu. Any disputes shall be resolved in the courts of Pudukkottai jurisdiction.' },
    { title: '9. Contact', content: 'For any questions regarding these Terms and Conditions, contact us at: crrgroups26@gmail.com or call +91 9655010282.' },
  ];

  return (
    <>
      <section className="page-hero position-relative overflow-hidden">
        <div className="hero-v2-bg-shape shape-1" />
        <div className="hero-v2-bg-shape shape-2" />
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="badge-pill mx-auto mb-4" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)", padding: "8px 24px" }}>
                <i className="bi bi-file-earmark-text-fill" />Legal
              </div>
              <h1 className="display-heading mb-4 text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>Terms & <span className="text-primary-crr">Conditions</span></h1>
              <p className="lead-text mb-4 px-lg-5 text-white-50" style={{ fontSize: "1.15rem", lineHeight: "1.6" }}>Please read these terms carefully before using our services.</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-crr justify-content-center" style={{ background: "rgba(255,255,255,0.05)", padding: "10px 24px", borderRadius: "50px", display: "inline-flex" }}>
                  <li className="breadcrumb-item"><Link href="/" style={{ color: "var(--white)" }}>Home</Link></li>
                  <li className="breadcrumb-item active" style={{ color: "var(--primary)" }}>Terms & Conditions</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8f9fc" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white p-4 p-md-5" style={{ borderRadius: "32px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="flex-column flex-sm-row" style={{ background: 'var(--primary-ultra-light)', border: '1.5px solid rgba(247,148,29,0.2)', borderRadius: '16px', padding: '24px', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 5px 15px rgba(247,148,29,0.15)" }}>
                    <i className="bi bi-file-text-fill" style={{ fontSize: '1.8rem', color: 'var(--primary)' }} />
                  </div>
                  <p className="text-center text-sm-start" style={{ margin: 0, fontSize: '1.05rem', color: 'var(--dark-gray)', lineHeight: 1.6 }}>
                    <strong style={{ color: "var(--dark)", fontSize: "1.1rem" }}>Last Updated: June 2026.</strong><br />
                    By using CRR Groups services, you agree to the following terms and conditions.
                  </p>
                </div>
                {terms.map((s, idx) => (
                  <div key={s.title} style={{ marginBottom: 35 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: 'var(--dark-gray)', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>{s.content}</p>
                    {idx !== terms.length - 1 && <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", marginTop: 35 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

