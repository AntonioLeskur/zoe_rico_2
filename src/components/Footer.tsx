import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scroll';

export function Footer() {
  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId, window.location.pathname);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      scrollToTop();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ZOE RICO</h3>
            <p className="text-neutral">
              Vaš partner u digitalnoj transformaciji
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigacija</h4>
            <ul className="space-y-2 text-neutral">
              <li>
                <a href="/" onClick={handleHomeClick} className="hover:text-accent-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <button onClick={() => handleNavigation('usluge')} className="hover:text-accent-blue transition-colors">
                  Usluge
                </button>
              </li>
              <li>
                <Link to="/o-nama" className="hover:text-accent-blue transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavigation('kontakt')} className="hover:text-accent-blue transition-colors">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-neutral">
              <li>matea@zoerico.com</li>
              <li>+385 97 764 7168</li>
              <li>Zagreb, Hrvatska</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Pratite Nas</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Eiiae1dwp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-neutral hover:text-accent-blue transition-colors" />
              </a>
              <a href="https://www.instagram.com/zoeri.co/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-neutral hover:text-accent-blue transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/matea-jukic-a2425181/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-neutral hover:text-accent-blue transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral/20 mt-12 pt-8 text-center text-neutral">
          <p>© 2024 ZOE RICO. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}