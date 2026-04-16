import { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Star, X, Send, ShieldCheck, MessageSquare, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true); // Default true for demo, will check localStorage in useEffect

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setCookieAccepted(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setCookieAccepted(true);
  };

  const reviews = [
    { name: "David Thompson", rating: 5, text: "Excellent service. Hawkins diagnosed a fault with my oil boiler that two other engineers missed. Honest, professional, and very reasonably priced.", date: "2 weeks ago" },
    { name: "Sarah Jenkins", rating: 5, text: "Had a full bathroom refit done. The attention to detail in the tiling is superb. Highly recommend for any plumbing work.", date: "1 month ago" },
    { name: "Michael Reed", rating: 5, text: "Fast response when our radiator burst. He was here within the hour and fixed it properly. No guesswork, just quality work.", date: "3 months ago" },
    { name: "Emma Wilson", rating: 5, text: "Very professional and tidy. Explained everything clearly and showed me the parts that needed replacing. A rare honest tradesman.", date: "5 months ago" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white scroll-smooth">
      {/* Header */}
      <header className="bg-slate px-10 py-5 flex justify-between items-center border-b border-white/10 h-20 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="text-xl font-extrabold tracking-tighter uppercase">
            Hawkins <span className="text-accent">Heating & Plumbing</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 ml-4 border-l border-white/10 pl-4">
            <a href="https://facebook.com/hawkinsheating" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/hawkinsheating" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">Home</a>
          <a href="#services" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">Services</a>
          <a href="#reviews" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">Reviews</a>
          <a href="#contact" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">Contact</a>
          <a 
            href="tel:07745700044" 
            className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded font-bold text-sm transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            07745 700044
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero & Trust Section */}
        <div id="home" className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Hero Section */}
          <section className="hero-pattern p-10 lg:p-20 flex flex-col justify-center min-h-[500px]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 max-w-xl"
            >
              Quality Work.<br />
              Honest Advice.<br />
              No Guesswork.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-text-muted mb-8 max-w-lg leading-relaxed"
            >
              Specialising in oil boiler installs and full plumbing services across the region. We offer a reliable, professional service focused on fixing the issue correctly—not upselling.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded font-bold uppercase text-sm transition-colors">
                Get a Quote
              </a>
              <a href="#services" className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded font-bold uppercase text-sm transition-colors">
                View Services
              </a>
            </motion.div>
          </section>

          {/* Trust Panel */}
          <section className="bg-white text-slate p-10 lg:p-16 flex flex-col justify-center border-l border-slate/5">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-bold border-l-4 border-accent pl-4">
                Why Choose Hawkins?
              </h3>
              <div className="flex flex-col items-center gap-1">
                <img 
              src="/gassafe.jpeg"
                  alt="Gas Safe Registered" 
                  className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate/40">Gas Safe Reg: 654321</span>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <div>
                  <strong className="block text-lg mb-1">Honest Diagnosis</strong>
                  <p className="text-slate/70 leading-relaxed">
                    We won't replace what doesn't need replacing. We show you the real issue via photos and video.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <div>
                  <strong className="block text-lg mb-1">Done Properly</strong>
                  <p className="text-slate/70 leading-relaxed">
                    No rushed jobs or shortcuts. We take pride in a high-quality finish and expert problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <div>
                  <strong className="block text-lg mb-1">Reliable & Responsive</strong>
                  <p className="text-slate/70 leading-relaxed">
                    When you have no hot water, you need a tradesman who shows up when they say they will.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Testimonial Bar */}
        <div className="bg-light-grey text-charcoal px-10 py-4 italic text-sm flex items-center gap-4 min-h-[50px] border-y border-slate/5">
          <strong className="not-italic text-accent uppercase tracking-wider text-xs">Google Reviews:</strong>
          <div className="flex items-center gap-1 text-accent">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
          <p>"He saved us a lot of money... explained everything clearly and showed us the issue. Highly recommend."</p>
        </div>

        {/* Services Grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-charcoal border-t border-white/10">
          <div className="p-8 border-r border-white/5 flex flex-col justify-between group hover:bg-white/5 transition-colors">
            <div>
              <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Oil Boiler Installs</h4>
              <p className="text-text-muted text-sm leading-relaxed">Precision installation and commissioning of new oil systems.</p>
            </div>
            <div className="mt-6 h-20 bg-slate/50 flex items-center justify-center text-[10px] text-white/20 uppercase tracking-tighter border border-white/5">
              [Oil boiler repair close-up]
            </div>
          </div>

          <div className="p-8 border-r border-white/5 flex flex-col justify-between group hover:bg-white/5 transition-colors">
            <div>
              <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Plumbing Repairs</h4>
              <p className="text-text-muted text-sm leading-relaxed">From leak repairs to toilets and blockages. Fixed fast.</p>
            </div>
            <div className="mt-6 h-20 bg-slate/50 flex items-center justify-center text-[10px] text-white/20 uppercase tracking-tighter border border-white/5">
              [Pipework detail]
            </div>
          </div>

          <div className="p-8 border-r border-white/5 flex flex-col justify-between group hover:bg-white/5 transition-colors">
            <div>
              <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Bathrooms & Tiling</h4>
              <p className="text-text-muted text-sm leading-relaxed">Complete project management from plumbing to the final tile.</p>
            </div>
            <div className="mt-6 h-20 bg-slate/50 flex items-center justify-center text-[10px] text-white/20 uppercase tracking-tighter border border-white/5">
              [Bathroom installation]
            </div>
          </div>

          <div className="p-8 flex flex-col justify-between group hover:bg-white/5 transition-colors">
            <div>
              <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Radiators & Taps</h4>
              <p className="text-text-muted text-sm leading-relaxed">System upgrades and modern fixture installations.</p>
            </div>
            <div className="mt-6 h-20 bg-slate/50 flex items-center justify-center text-[10px] text-white/20 uppercase tracking-tighter border border-white/5">
              [Radiator installation]
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 px-10 bg-slate">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Customer Reviews</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-accent">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <span className="text-xl font-bold">5.0</span>
                  <span className="text-text-muted">Based on 48 Google reviews</span>
                </div>
              </div>
              <a 
                href="https://www.google.com/search?q=Hawkins+Heating+%26+Plumbing+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent font-bold uppercase text-sm border-b-2 border-accent/20 hover:border-accent transition-all pb-1"
              >
                Write a review
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-charcoal p-8 border border-white/5 rounded-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <span className="text-xs text-text-muted uppercase tracking-widest">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 text-accent">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-text-muted leading-relaxed italic">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-white text-slate py-20 px-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
              <div>
                <h2 className="text-4xl font-extrabold mb-6">Get a Quote</h2>
                <p className="text-slate/70 mb-8 leading-relaxed">
                  Fill out the form and we'll get back to you as soon as possible. For emergencies, please call us directly.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-bold text-slate/40">Call Us</span>
                      <a href="tel:07745700044" className="font-bold hover:text-accent transition-colors">07745 700044</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-bold text-slate/40">Email</span>
                      <a href="mailto:hawkinsheatingandplumbing@gmail.com" className="font-bold hover:text-accent transition-colors">hawkinsheatingandplumbing@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate/5">
                    <a href="https://facebook.com/hawkinsheating" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate/5 rounded flex items-center justify-center text-slate/40 hover:text-accent hover:bg-accent/5 transition-all">
                      <Facebook size={20} />
                    </a>
                    <a href="https://instagram.com/hawkinsheating" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate/5 rounded flex items-center justify-center text-slate/40 hover:text-accent hover:bg-accent/5 transition-all">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate/60">Name</label>
                    <input type="text" className="w-full border-b-2 border-slate/10 focus:border-accent outline-none py-2 transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate/60">Phone</label>
                    <input type="tel" className="w-full border-b-2 border-slate/10 focus:border-accent outline-none py-2 transition-colors" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate/60">Service Type</label>
                  <select className="w-full border-b-2 border-slate/10 focus:border-accent outline-none py-2 bg-transparent transition-colors">
                    <option>Oil Boiler Install</option>
                    <option>Plumbing Repair</option>
                    <option>Bathroom/Tiling</option>
                    <option>Radiators/Taps</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate/60">Message</label>
                  <textarea rows={4} className="w-full border-b-2 border-slate/10 focus:border-accent outline-none py-2 transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="bg-accent hover:bg-accent-hover text-white w-full py-4 rounded font-bold uppercase text-sm transition-colors flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Strip */}
      <footer className="bg-[#111] px-10 py-8 flex flex-col gap-8 text-xs text-text-muted">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <div>© 2026 Hawkins Heating and Plumbing • hawkinsheatingandplumbing@gmail.com</div>
            <div className="flex items-center gap-3 opacity-60">
              <a href="https://facebook.com/hawkinsheating" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://instagram.com/hawkinsheating" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 opacity-60">
              <span>Fully Insured</span>
              <span>•</span>
              <span>Oil Specialist</span>
              <span>•</span>
              <span>Serving Your Local Area</span>
            </div>
            <img 
              src="/gassafe.jpeg"
              alt="Gas Safe Registered" 
              className="w-10 h-10 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 border-t border-white/5">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => setShowCookies(true)} className="hover:text-white transition-colors">Cookie Policy</button>
          <a href="#home" className="hover:text-white transition-colors">Back to Top</a>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {!cookieAccepted && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4"
          >
            <div className="bg-charcoal border border-white/10 p-6 max-w-4xl mx-auto rounded shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-accent shrink-0" size={32} />
                <p className="text-sm">
                  We use essential cookies to ensure you get the best experience on our website. No tracking or marketing cookies are used.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <button onClick={() => setShowCookies(true)} className="text-xs uppercase font-bold tracking-widest hover:text-white transition-colors">Learn More</button>
                <button 
                  onClick={acceptCookies}
                  className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Policy Modals */}
      <AnimatePresence>
        {(showPrivacy || showCookies) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-slate max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded p-10 relative"
            >
              <button 
                onClick={() => { setShowPrivacy(false); setShowCookies(false); }}
                className="absolute top-6 right-6 text-slate/40 hover:text-slate transition-colors"
              >
                <X size={24} />
              </button>

              {showPrivacy ? (
                <div className="prose prose-slate">
                  <h2 className="text-3xl font-extrabold mb-6">Privacy Policy</h2>
                  <p className="mb-4">Last updated: April 2026</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">1. Introduction</h3>
                  <p>Hawkins Heating and Plumbing ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">2. Information We Collect</h3>
                  <p>We only collect information that you voluntarily provide to us via our contact form or when you contact us directly. This may include your name, email address, phone number, and details about the services you require.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Information</h3>
                  <p>We use your information solely to respond to your enquiries, provide quotes, and carry out requested plumbing and heating services. We do not sell or share your personal data with third parties for marketing purposes.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">4. Data Security</h3>
                  <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">5. Your Rights</h3>
                  <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at hawkinsheatingandplumbing@gmail.com.</p>
                </div>
              ) : (
                <div className="prose prose-slate">
                  <h2 className="text-3xl font-extrabold mb-6">Cookie Policy</h2>
                  <p className="mb-4">Last updated: April 2026</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">1. What are Cookies?</h3>
                  <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">2. How We Use Cookies</h3>
                  <p>Our website only uses **essential cookies**. These are necessary for the website to function properly, such as remembering your cookie consent preferences. We do not use any tracking, analytical, or advertising cookies.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">3. Managing Cookies</h3>
                  <p>Most web browsers allow you to control cookies through their settings. However, if you disable essential cookies, some parts of our website may not function correctly.</p>
                  <h3 className="text-xl font-bold mt-8 mb-4">4. Changes to This Policy</h3>
                  <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


