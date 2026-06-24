'use client';

import { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { seoConfig } from "../lib/seo.config";

const EMAILJS_SERVICE_ID = "service_la3mpeh";
const EMAILJS_TEMPLATE_ID = "template_6l7w7wt";
const EMAILJS_PUBLIC_KEY = "v2f5oYyL0EUAXMu-s";

const serviceOptions = [
  "Electrical Services",
  "Plumbing Services",
  "CCTV Installation",
  "Inverter Installation",
  "AC Installation & Maintenance",
  "Office Setup",
  "Emergency Repair",
  "Other",
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const val = value.replace(/\D/g, "").slice(0, 10);
      setForm((f) => ({ ...f, phone: val }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!recaptchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }
    setStatus("sending");
    const templateParams = {
      from_name: form.name,
      phone: `+91 ${form.phone}`,
      reply_to: form.email || "Not provided",
      service: form.service,
      message: form.message || "No message provided.",
    };
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
    setStatus("idle");
    setRecaptchaToken(null);
  };

  return (
    <>
      <section className="page-hero position-relative overflow-hidden">
        <div className="hero-v2-bg-shape shape-1" />
        <div className="hero-v2-bg-shape shape-2" />
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="badge-pill mx-auto mb-4" style={{ background: "rgba(247,148,29,0.15)", border: "1.5px solid rgba(247,148,29,0.3)", color: "var(--primary-light)", padding: "8px 24px" }}>
                <i className="bi bi-headset" />
                Support & Contact
              </div>
              <h1 className="display-heading mb-4 text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                Get In <span className="text-primary-crr">Touch</span>
              </h1>
              <p className="lead-text mb-4 px-lg-5 text-white-50" style={{ fontSize: "1.15rem", lineHeight: "1.6" }}>
                Reach out for a free inspection, quote, or emergency service. We are always here to help you!
              </p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-crr justify-content-center" style={{ background: "rgba(255,255,255,0.05)", padding: "10px 24px", borderRadius: "50px", display: "inline-flex" }}>
                  <li className="breadcrumb-item"><Link href="/" style={{ color: "var(--white)" }}>Home</Link></li>
                  <li className="breadcrumb-item active" style={{ color: "var(--primary)" }}>Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
               <div className="contact-form-card p-4 p-md-5" style={{ background: "var(--white)", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.05)", position: "relative" }}>
                 <div className="mb-5">
                   <h2 className="text-dark" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2.2rem", marginBottom: "12px" }}>Contact Us</h2>
                   <p style={{ color: "var(--dark-gray)", fontSize: "1.05rem" }}>Fill in the form below and our team will get back to you within 2 hours.</p>
                 </div>
                 
                 {status === "success" && (
                   <div className="text-center py-4">
                     <i className="bi bi-check-circle-fill" style={{ fontSize: "3rem", color: "var(--primary)", marginBottom: "16px", display: "inline-block" }} />
                     <h4 style={{ fontWeight: 700, color: "var(--dark)", marginBottom: "8px" }}>Message Sent!</h4>
                     <p style={{ color: "var(--dark-gray)", marginBottom: "20px" }}>Thank you for reaching out. We will contact you soon.</p>
                     <button className="btn w-100" style={{ background: "var(--primary)", color: "#fff", fontWeight: 600, padding: "12px", borderRadius: "8px" }} onClick={handleReset}>Send Another</button>
                   </div>
                 )}

                 {status === "error" && (
                   <div className="alert alert-danger" style={{ borderRadius: "8px", border: "none", background: "#fff5f5", color: "#c53030" }}>
                     <i className="bi bi-exclamation-circle-fill me-2" />
                     Failed to send message. Please try again.
                     <button className="btn btn-sm btn-outline-danger ms-3" onClick={() => setStatus("idle")}>Try Again</button>
                   </div>
                 )}

                 {(status === "idle" || status === "sending" || status === "error") && (
                   <form ref={formRef} onSubmit={handleSubmit} className="contact-blazon-form">
                      <style>{`
                        .contact-blazon-form .form-control, .contact-blazon-form .form-select {
                          background-color: #f5f6f8; border: none; border-radius: 6px; padding: 14px 16px; font-size: 0.95rem; color: var(--dark); box-shadow: none;
                        }
                        .contact-blazon-form .form-control::placeholder { color: #8c92a4; }
                        .contact-blazon-form .form-control:focus, .contact-blazon-form .form-select:focus { background-color: #f0f2f5; outline: 1px solid var(--primary-light); }
                      `}</style>
                      <div className="row g-3">
                         <div className="col-md-6"><input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name*" required disabled={status === "sending"} /></div>
                         <div className="col-md-6"><input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-control" placeholder="Phone*" required pattern="[0-9]{10}" title="Please enter exactly 10 digits" disabled={status === "sending"} /></div>
                         <div className="col-md-6"><input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Email*" required disabled={status === "sending"} /></div>
                         <div className="col-md-6">
                           <select name="service" value={form.service} onChange={(e) => { handleChange(e); e.target.style.color = "var(--dark)"; }} className="form-select" required disabled={status === "sending"} style={{ color: form.service ? "var(--dark)" : "#8c92a4" }}>
                             <option value="" disabled hidden>Services*</option>
                             {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                           </select>
                         </div>
                         <div className="col-12"><textarea name="message" value={form.message} onChange={handleChange} className="form-control" placeholder="Enquiry Details" rows="4" disabled={status === "sending"} /></div>
                         <div className="col-12 d-flex justify-content-center my-3">
                           <div className="recaptcha-wrapper" style={{ transform: "scale(0.9)", transformOrigin: "center" }}>
                             <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={(token) => setRecaptchaToken(token)} onExpired={() => setRecaptchaToken(null)} />
                           </div>
                         </div>
                         <div className="col-12">
                           <button type="submit" className="btn w-100 d-flex justify-content-center align-items-center" style={{ background: "var(--primary)", color: "#fff", fontWeight: 600, padding: "14px", borderRadius: "6px", border: "none", fontSize: "1.05rem", transition: "all 0.3s ease" }} disabled={status === "sending"}>
                             {status === "sending" ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" /> : <>Submit <i className="bi bi-arrow-up-right ms-2" style={{ fontSize: "1rem" }} /></>}
                           </button>
                         </div>
                      </div>
                   </form>
                 )}
               </div>
            </div>

            <div className="col-lg-5">
              <style>{`
                .contact-detail-row { display: flex; align-items: flex-start; gap: 20px; background: var(--white); padding: 24px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.03); transition: transform 0.3s ease; }
                @media (max-width: 767.98px) { .contact-detail-row { padding: 16px; gap: 16px; } }
                .contact-detail-row:hover { transform: translateY(-5px); }
                .contact-detail-icon { width: 50px; height: 50px; border-radius: 50%; background: var(--primary-ultra-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
                .contact-detail-text { color: var(--dark); line-height: 1.6; }
                .contact-detail-text h5 { font-weight: 800; font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 8px; }
                .contact-detail-text a { color: var(--dark-gray); text-decoration: none; transition: color 0.2s ease; }
                .contact-detail-text a:hover { color: var(--primary); }
              `}</style>
              <div style={{ position: "sticky", top: "100px" }}>
                <h2 className="section-title mb-4 text-dark" style={{ fontSize: "2.2rem", fontWeight: 800 }}>Get Directly In Touch</h2>
                <p style={{ color: "var(--dark-gray)", fontSize: "1.1rem", marginBottom: "30px" }}>We are available 24/7. Reach out to us for immediate support.</p>
                <div className="d-flex flex-column gap-3">
                  <div className="contact-detail-row"><div className="contact-detail-icon"><i className="bi bi-telephone-fill" /></div><div className="contact-detail-text"><h5>Phone Numbers</h5><a href="tel:+919655010282" className="d-block fw-semibold mb-1">+91 9655010282</a><a href="tel:+918056639819" className="d-block fw-semibold">+91 8056639819</a></div></div>
                  <div className="contact-detail-row"><div className="contact-detail-icon"><i className="bi bi-envelope-fill" /></div><div className="contact-detail-text"><h5>Email Address</h5><a href="mailto:crrgroups26@gmail.com" className="fw-semibold">crrgroups26@gmail.com</a></div></div>
                  <div className="contact-detail-row"><div className="contact-detail-icon"><i className="bi bi-geo-alt-fill" /></div><div className="contact-detail-text"><h5>Office Address</h5><span style={{ color: "var(--dark-gray)", fontWeight: 500 }}>No: 1/61 Kovilpatti, Kurumbur (PO),<br/>Aranthangi (TK), Pudukkottai (DT),<br/>Tamil Nadu - 614622</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-0">
        <div style={{ width: "100%", height: "400px", background: "#e5e5e5" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0340897364636!2d78.94150537451132!3d10.258834268528538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0073a66ef4b0b3%3A0xa650e6cdf7fb77e8!2sCRR%20Groups!5e0!3m2!1sen!2sin!4v1782023179760!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="CRR Groups Location Map" />
        </div>
      </section>
    </>
  );
}

