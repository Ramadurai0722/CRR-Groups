import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | CRR Groups',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="hero-section-v2 d-flex align-items-center justify-content-center text-center" style={{ minHeight: '70vh', padding: '100px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="hero-v2-title" style={{ fontSize: '6rem', color: 'var(--primary)' }}>404</h1>
            <h2 className="mb-4" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Page Not Found</h2>
            <p className="hero-v2-description mx-auto mb-5">
              Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="hero-v2-buttons justify-content-center">
              <Link href="/" className="hero-v2-btn-primary">
                <i className="bi bi-house-door-fill" />
                Back to Home
              </Link>
              <Link href="/services" className="hero-v2-btn-outline">
                <i className="bi bi-grid-fill" />
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
