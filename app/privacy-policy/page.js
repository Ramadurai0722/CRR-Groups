import Link from 'next/link';
import { seoConfig } from '../lib/seo.config';

const seo = seoConfig['/privacy-policy'];

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.title, description: seo.description, url: seo.canonical, type: seo.ogType },
  twitter: { title: seo.title, description: seo.description },
};

export default function PrivacyPolicy() {
  const policies = [
    { title: '1. Information We Collect', content: 'When you contact us via our website, we collect your name, phone number, email address, and the nature of the service you require. This information is provided voluntarily by you when filling out our contact form or when calling us directly.' },
    { title: '2. How We Use Your Information', content: 'We use the information collected solely to: respond to your service inquiries, schedule site visits and appointments, provide quotations and invoices, send service updates and communications relevant to your request. We do not use your information for unsolicited marketing.' },
    { title: '3. Information Sharing', content: 'CRR Groups does not sell, trade, or transfer your personal information to outside parties. Your information may be shared with our technicians to facilitate service delivery. We may disclose information when required by law or to protect the rights and safety of our company and customers.' },
    { title: '4. Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is stored securely and accessed only by authorized personnel.' },
    { title: '5. Cookies', content: 'Our website may use basic cookies to improve user experience. These cookies do not collect personal information and can be disabled through your browser settings without affecting your ability to use our site.' },
    { title: '6. Third-Party Links', content: 'Our website may contain links to external sites such as Google Maps or our Instagram page. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.' },
    { title: '7. Your Rights', content: 'You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, please contact us at crrgroups26@gmail.com or call +91 9655010282.' },
    { title: '8. Changes to This Policy', content: 'We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.' },
    { title: '9. Contact Us', content: 'For any questions regarding this Privacy Policy, please contact: CRR Groups, No: 1/61 Kovilpatti, Kurumbur (PO), Aranthangi (TK), Pudukkottai (DT), Tamil Nadu - 614622. Email: crrgroups26@gmail.com | Phone: +91 9655010282' },
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
                <i className="bi bi-shield-lock-fill" />Legal
              </div>
              <h1 className="display-heading mb-4 text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>Privacy <span className="text-primary-crr">Policy</span></h1>
              <p className="lead-text mb-4 px-lg-5 text-white-50" style={{ fontSize: "1.15rem", lineHeight: "1.6" }}>How CRR Groups collects, uses, and protects your information.</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-crr justify-content-center" style={{ background: "rgba(255,255,255,0.05)", padding: "10px 24px", borderRadius: "50px", display: "inline-flex" }}>
                  <li className="breadcrumb-item"><Link href="/" style={{ color: "var(--white)" }}>Home</Link></li>
                  <li className="breadcrumb-item active" style={{ color: "var(--primary)" }}>Privacy Policy</li>
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
                    <i className="bi bi-shield-check" style={{ fontSize: '1.8rem', color: 'var(--primary)' }} />
                  </div>
                  <p className="text-center text-sm-start" style={{ margin: 0, fontSize: '1.05rem', color: 'var(--dark-gray)', lineHeight: 1.6 }}>
                    <strong style={{ color: "var(--dark)", fontSize: "1.1rem" }}>Last Updated: June 2026.</strong><br />
                    This Privacy Policy explains how CRR Groups handles your personal information.
                  </p>
                </div>
                {policies.map((s, idx) => (
                  <div key={s.title} style={{ marginBottom: 35 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: 'var(--dark-gray)', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>{s.content}</p>
                    {idx !== policies.length - 1 && <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", marginTop: 35 }} />}
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

