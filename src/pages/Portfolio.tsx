import React from 'react';
import { LogoCarousel } from '../components/LogoCarousel';
import { scrollToSection } from '../utils/scroll';
import { useLocation } from 'react-router-dom';

export function Portfolio() {
  const location = useLocation();
  const projects = [
    {
      title: "Flow Case",
      category: "Društveni Mediji",
      image: "/images/portfolio/WhatsApp Image 2025-03-24 at 22.12.59_693f8939.jpg",
      description: "Svaki nastup donosi jedinstvenu priču, a mi jedva čekamo proslaviti umjetnost u njenom najljepšem obliku."
    },
    {
      title: "b OPTIKA",
      category: "Društveni Mediji",
      image: "/images/portfolio/WhatsApp Image 2025-03-24 at 22.11.19_2ffcad4c.jpg",
      description: "Široka ponuda visokokvalitetnih sunčanih i dioptrijskih naočala."
    },
    {
      title: "Green&Clean",
      category: "Web dizajn",
      image: "/images/portfolio/web_green_clean.png",
      description: "Profesionalne usluge čišćenja na otoku Korčuli. Dubinsko čišćenje tapeciranih površina i čišćenje ozonom."
    },
    {
      title: "The Goalkeeper Academy Zagreb",
      category: "Društveni Mediji",
      image: "/images/portfolio/WhatsApp Image 2025-03-24 at 22.05.04_2d2a7c14.jpg",
      description: "Škola vratara ZG-Keepers osnovana je s ciljem da vratarima pružimo priliku za razvoj i usavršavanje specifičnih vratarskih znanja i sposobnosti."
    },
    {
      title: "b OPTIKA",
      category: "Društveni Mediji",
      image: "/images/portfolio/WhatsApp Image 2025-03-24 at 21.33.07_caef43ed.jpg",
      description: "Široka ponuda visokokvalitetnih sunčanih i dioptrijskih naočala."
    },
    {
      title: "Baggizmo",
      category: "Društveni Mediji",
      image: "/images/portfolio/WhatsApp Image 2025-03-24 at 21.33.07_0af1d9f2.jpg",
      description: "Baggizmo Wiseward pametni novčanik spaja praktičnost s naprednom sigurnošću."
    }
  ];

  const clientLogos = [
    "/images/logo_.png",
    "/images/logo_1.png",
    "/images/logo1-Photoroom.png",
    "/images/logo2-Photoroom.png",
    "/images/logo3-Photoroom.png",
    "/images/logo4-Photoroom.png",
    "/images/logo5-Photoroom.png",
    "/images/logo6-Photoroom.png",
    "/images/logo7-Photoroom.png",
    "/images/logo8-Photoroom.png",
    "/images/logo9-Photoroom.png",
    "/images/acb7b703-c873-40b5-9575-3e2f5327d775_removalai_preview.png",
    "/images/fb9dfc5c-7e11-41c8-aa9a-53a7ed5ae716_removalai_preview.png",
    "/images/27bde604-52d5-4782-b44a-0ca7059f9a99_removalai_preview.png",
    "/images/521f3511-e5a9-4732-bbb0-fcbb166df5d5_removalai_preview.png",
    "/images/0be01fd7-fc6a-4266-b1da-f9957f942b39_removalai_preview.png",
    "/images/26a1a075-bb43-4cb8-a601-e0ebbb2101d0_removalai_preview.png",
    "/images/c5d8923b-98c0-48af-a348-73a7146c814b_removalai_preview.png",
    "/images/ffb1edcb-4d57-4b73-960c-dcacbabf1f7b_removalai_preview.png",
    "/images/4e4cadf2-e0b5-4534-a9aa-435834a1b47c_removalai_preview.png"
  ];

  const handleContactClick = () => {
    scrollToSection('kontakt', location.pathname);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">Naši projekti</h1>
          <p className="text-sm sm:text-base md:text-xl text-neutral text-center max-w-3xl mx-auto">
            Pogledajte izbor naših najuspješnijih projekata koji pokazuju našu stručnost
            u različitim područjima digitalnog marketinga.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="bg-white pt-16">
        <LogoCarousel />
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-neutral/20">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-xs sm:text-sm text-accent-blue mb-1 sm:mb-2">{project.category}</span>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-12 sm:py-20 bg-neutral/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary">Naši Klijenti</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="aspect-square bg-white rounded-lg p-4 flex items-center justify-center border border-neutral/10 hover:border-neutral/30 transition-colors"
              >
                <img 
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="w-full h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-neutral/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary">Spremni za suradnju?</h2>
          <p className="text-sm sm:text-base md:text-xl text-primary/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Dopustite nam da i vaš brend transformiramo u digitalnu uspješnicu.
          </p>
          <button 
            onClick={handleContactClick}
            className="w-full sm:w-auto bg-accent-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-accent-blue/90 transition text-sm sm:text-base"
          >
            Kontaktirajte nas
          </button>
        </div>
      </section>
    </div>
  );
}