import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
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
            <h4 className="text-lg font-semibold mb-4">Usluge</h4>
            <ul className="space-y-2 text-neutral">
              <li>Društveni Mediji</li>
              <li>Influencer Marketing</li>
              <li>Kreiranje Sadržaja</li>
              <li>Web Dizajn</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-neutral">
              <li>info@zoerico.hr</li>
              <li>+385 1 234 5678</li>
              <li>Zagreb, Hrvatska</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Pratite Nas</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-neutral hover:text-accent-blue transition-colors" />
              <Instagram className="h-6 w-6 text-neutral hover:text-accent-blue transition-colors" />
              <Twitter className="h-6 w-6 text-neutral hover:text-accent-blue transition-colors" />
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