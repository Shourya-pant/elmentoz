import { ArrowUpRight, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bio-black pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's fix the <br />
              <span className="text-bio-lime">food system.</span>
            </h2>
            <a 
              href="mailto:info@elmentoz.com" 
              className="inline-flex items-center gap-2 text-xl hover:text-bio-lime transition-colors"
            >
              info@elmentoz.com <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-mono text-bio-text-muted mb-6 uppercase tracking-wider text-sm">Locations</h4>
              <ul className="space-y-6">
                <li>
                  <strong className="block text-white mb-1">India (HQ)</strong>
                  <p className="text-bio-text-muted text-sm">107, DLF Cyber City Rd, Bhubaneswar, Odisha 751024</p>
                </li>
                <li>
                  <strong className="block text-white mb-1">United Kingdom</strong>
                  <p className="text-bio-text-muted text-sm">Gloucester House, Milton Keynes, MK9 2AH</p>
                </li>
                <li>
                  <strong className="block text-white mb-1">Norway</strong>
                  <p className="text-bio-text-muted text-sm">Drammensveien 89 B, Oslo, 0271</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-bio-text-muted mb-6 uppercase tracking-wider text-sm">Menu</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Our Services', href: '#solution' },
                  { label: 'Technologies', href: '#technologies' },
                  { label: 'Products', href: '#products' },
                  { label: 'Sustainability', href: '#impact' },
                  { label: 'Careers', href: '#careers' }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white hover:text-bio-lime transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="text-bio-text-muted text-sm mb-4 md:mb-0">
            © 2024 Elmentoz Research. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-bio-text-muted hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-bio-text-muted hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-bio-text-muted hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
