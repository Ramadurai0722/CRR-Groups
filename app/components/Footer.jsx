import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <img src="/media/CRR-Groups-Rect.svg" alt="CRR Groups" width="150" height="72" />
              <p className="footer-desc">
                CRR Groups is a trusted provider of professional electricals and plumbing services
                in Pudukkottai and surrounding areas. Expert technicians, quality workmanship,
                and 24/7 emergency support.
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/crr_groups" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="tel:+919655010282" aria-label="Phone">
                  <i className="bi bi-telephone-fill" />
                </a>
                <a href="mailto:crrgroups26@gmail.com" aria-label="Email">
                  <i className="bi bi-envelope-fill" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-2 col-md-6 col-6">
            <h2>Quick Links</h2>
            <ul className="footer-links">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms & Conditions', path: '/terms' },
              ].map((l) => (
                <li key={l.path}>
                  <Link href={l.path}>
                    <i className="bi bi-chevron-right" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-2 col-md-6 col-6">
            <h2>Our Services</h2>
            <ul className="footer-links">
              {[
                { label: 'Electrical', path: '/services/electrical' },
                { label: 'Plumbing', path: '/services/plumbing' },
                { label: 'CCTV Camera', path: '/services/cctv-camera' },
                { label: 'Inverter Setup', path: '/services/inverter-installation' },
                { label: 'AC Installation', path: '/services/ac-installation' },
                { label: 'Office Setup', path: '/services/office-setup' },
              ].map((l) => (
                <li key={l.path}>
                  <Link href={l.path}>
                    <i className="bi bi-chevron-right" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-lg-4 col-md-6">
            <h2>Contact Information</h2>
            <div className="footer-contact-item">
              <i className="bi bi-telephone-fill" />
              <div>
                <a href="tel:+919655010282">+91 9655010282</a><br />
                <a href="tel:+918056639819">+91 8056639819</a><br />
                <a href="tel:+918610100499">+91 8610100499</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope-fill" />
              <a href="mailto:crrgroups26@gmail.com">crrgroups26@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt-fill" />
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: '1.7' }}>
                No: 1/61 Kovilpatti, Kurumbur (PO),<br />
                Aranthangi (TK), Pudukkottai (DT),<br />
                Tamil Nadu - 614622
              </span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-instagram" />
              <a href="https://www.instagram.com/crr_groups" target="_blank" rel="noopener noreferrer">
                @crr_groups
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} &nbsp; CRR Groups. All rights reserved.
            &nbsp;|&nbsp;
            <Link href="/privacy-policy">Privacy Policy</Link>
            &nbsp;|&nbsp;
            <Link href="/terms">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
