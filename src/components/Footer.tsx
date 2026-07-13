import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-dark-bg dark:bg-dark-bg light:bg-light-bg py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand Name */}
        <div>
          <span className="font-display font-black text-xl tracking-tighter text-white dark:text-white light:text-slate-900">
            S.<span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">SHEIKH</span>
          </span>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
            E-commerce CMS Specialist & Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-xs text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          <p>&copy; {currentYear} Shayan Sheikh. All rights reserved.</p>
          <p className="text-[9px] text-gray-600 mt-1 uppercase font-mono tracking-wider">
            Premium Handcrafted Web Solutions
          </p>
        </div>

      </div>
    </footer>
  );
}
