'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const services = [
  { label: 'Electrical Services', icon: 'bi-lightning-charge-fill', path: '/services/electrical' },
  { label: 'Plumbing Services', icon: 'bi-droplet-fill', path: '/services/plumbing' },
  { label: 'CCTV Installation', icon: 'bi-camera-video-fill', path: '/services/cctv-camera' },
  { label: 'Inverter Installation', icon: 'bi-battery-charging', path: '/services/inverter-installation' },
  { label: 'AC Installation', icon: 'bi-wind', path: '/services/ac-installation' },
  { label: 'Office Setup', icon: 'bi-building', path: '/services/office-setup' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar navbar-crr navbar-expand-lg${scrolled ? ' scrolled' : ''}${isHome ? ' navbar-home' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/media/CRR-Groups-Rect.svg" alt="CRR Groups" width="100" height="48" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <i className="bi bi-x-lg" style={{ fontSize: '1.5rem', color: 'var(--dark-gray)' }} />
          ) : (
            <span className="navbar-toggler-icon" />
          )}
        </button>

        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
          <ul className="navbar-nav mx-auto align-items-lg-center gap-1">
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/' ? ' active' : ''}`} href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/about' ? ' active' : ''}`} href="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle${pathname.startsWith('/services') ? ' active' : ''}`}
                href="/services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                {services.map((s) => (
                  <li key={s.path}>
                    <Link className="dropdown-item" href={s.path}>
                      <i className={`bi ${s.icon}`} />
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href="/services">
                    <i className="bi bi-grid-fill" />
                    All Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/contact' ? ' active' : ''}`} href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <a href="tel:+919655010282" className="btn-call-nav">
              <i className="bi bi-telephone-fill" />
              +91 9655010282
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
