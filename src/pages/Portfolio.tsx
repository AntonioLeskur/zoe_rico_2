import React from 'react';
import { LogoCarousel } from '../components/LogoCarousel';
import { scrollToSection } from '../utils/scroll';
import { useLocation } from 'react-router-dom';

export function Portfolio() {
  const location = useLocation();
  const projects = [
    {
      title: "Beauty Studio Bella",
      category: "Društveni Mediji",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80",
      description: "Kompletno vođenje društvenih mreža i kreiranje sadržaja za poznati kozmetički salon."
    },
    {
      title: "Tech Startup Hub",
      category: "Web Dizajn",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      description: "Dizajn i razvoj moderne web platforme za tehnološki startup."
    },
    {
      title: "Fitness Revolution",
      category: "Influencer Marketing",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      description: "Uspješna influencer kampanja za lanac fitness centara."
    },
    {
      title: "Organic Food Market",
      category: "Content Creation",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80",
      description: "Kreiranje foto i video sadržaja za organic food trgovinu."
    },
    {
      title: "Fashion Brand Launch",
      category: "Digitalna Strategija",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
      description: "Lansiranje nove modne marke kroz integrirani digitalni pristup."
    },
    {
      title: "Restaurant Chain",
      category: "Plaćeno Oglašavanje",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      description: "Uspješna Facebook i Instagram kampanja za lanac restorana."
    }
  ];

  const handleContactClick = () => {
    scrollToSection('kontakt', location.pathname);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">Naši Projekti</h1>
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