import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { scrollToSection, scrollToTop } from '../utils/scroll';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo && location.pathname === '/') {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/o-nama' || location.pathname === '/portfolio') {
      scrollToTop();
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    scrollToTop();
    setIsMenuOpen(false);
  };

  const handleMobileNavigation = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" onClick={handleLogoClick} className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">ZOE RICO</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('usluge', location.pathname)} 
              className="text-primary hover:text-accent-blue transition-colors"
            >
              Usluge
            </button>
            <button
              onClick={() => handleNavigation('/o-nama')}
              className="text-primary hover:text-accent-blue transition-colors"
            >
              O nama
            </button>
            <button
              onClick={() => handleNavigation('/portfolio')}
              className="text-primary hover:text-accent-blue transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('kontakt', location.pathname)} 
              className="text-primary hover:text-accent-blue transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          fixed inset-x-0 top-16 bg-white/90 backdrop-blur-sm border-b border-neutral md:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <div className="px-4 py-4 space-y-4">
          <button 
            onClick={() => handleMobileNavigation(() => scrollToSection('usluge', location.pathname))}
            className="block w-full text-left px-4 py-2 text-primary hover:text-accent-blue hover:bg-neutral/10 rounded-lg transition-colors"
          >
            Usluge
          </button>
          <button
            onClick={() => handleMobileNavigation(() => handleNavigation('/o-nama'))}
            className="block w-full text-left px-4 py-2 text-primary hover:text-accent-blue hover:bg-neutral/10 rounded-lg transition-colors"
          >
            O nama
          </button>
          <button
            onClick={() => handleMobileNavigation(() => handleNavigation('/portfolio'))}
            className="block w-full text-left px-4 py-2 text-primary hover:text-accent-blue hover:bg-neutral/10 rounded-lg transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleMobileNavigation(() => scrollToSection('kontakt', location.pathname))}
            className="block w-full text-left px-4 py-2 text-primary hover:text-accent-blue hover:bg-neutral/10 rounded-lg transition-colors"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
}