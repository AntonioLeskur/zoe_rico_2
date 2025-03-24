import React from 'react';
import { MessageSquare, Instagram, Facebook, Linkedin, Monitor, TrendingUp, Video, PenTool, Star } from 'lucide-react';
import { LogoCarousel } from '../components/LogoCarousel';
import { ContactForm } from '../components/ContactForm';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-neutral/20">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-sm sm:text-base text-primary/70">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, company, quote }) {
  return (
    <div className="bg-primary p-6 sm:p-8 rounded-2xl">
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-accent-gold fill-current" />
        ))}
      </div>
      <p className="text-sm sm:text-base text-neutral mb-4 sm:mb-6">{quote}</p>
      <div className="flex items-center space-x-3">
        <img src={image} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base text-white">{name}</h4>
          <p className="text-neutral text-xs sm:text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-primary">
                Digitalna
                <br />
                Transformacija
              </h1>
              <p className="text-base sm:text-xl text-primary/70">
                Pretvaramo vaše digitalne snove u stvarnost kroz inovativna marketinška rješenja.
              </p>
            </div>
            <div className="mt-8 sm:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        <LogoCarousel className="mt-12" />
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Što Kažu Naši Klijenti</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80"
              name="Ana Kovačić"
              company="Lifestyle Brand"
              quote="Zoe Rico je transformirao našu prisutnost na društvenim mrežama. Rezultati su nadmašili sva očekivanja!"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              name="Marko Horvat"
              company="Tech Startup"
              quote="Njihov pristup digitalnom marketingu je inovativan i učinkovit. Udvostručili smo naš online promet."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              name="Petra Novak"
              company="Beauty Studio"
              quote="Profesionalan tim koji stvarno razumije digitalni marketing. Najbolja odluka za naš brend!"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-12 sm:py-20 bg-neutral/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-primary">Naše Usluge</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard 
              icon={<MessageSquare className="h-5 w-5" />}
              title="Društveni Mediji"
              description="Strategija i upravljanje društvenim mrežama za povećanje angažmana"
            />
            <ServiceCard 
              icon={<Instagram className="h-5 w-5" />}
              title="Influencer Marketing"
              description="Suradnja s utjecajnim osobama za autentičnu promociju"
            />
            <ServiceCard 
              icon={<Video className="h-5 w-5" />}
              title="Kreiranje Sadržaja"
              description="Profesionalni foto i video sadržaj koji privlači pažnju"
            />
            <ServiceCard 
              icon={<PenTool className="h-5 w-5" />}
              title="Web Dizajn"
              description="Moderni i responzivni web dizajn prilagođen vašem brendu"
            />
            <ServiceCard 
              icon={<TrendingUp className="h-5 w-5" />}
              title="Plaćeno Oglašavanje"
              description="Ciljano oglašavanje za maksimalni povrat investicije"
            />
            <ServiceCard 
              icon={<Monitor className="h-5 w-5" />}
              title="Digitalna Strategija"
              description="Sveobuhvatna digitalna strategija za rast vašeg poslovanja"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary">Kontaktirajte Nas</h2>
              <p className="text-sm sm:text-base text-primary/70 mb-6 sm:mb-8">
                Spremni smo pomoći vam u ostvarenju vaših digitalnih ciljeva.
              </p>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-primary/80">Email: info@zoerico.hr</p>
                <p className="text-sm sm:text-base text-primary/80">Tel: +385 1 234 5678</p>
                <div className="flex space-x-4 mt-4 sm:mt-6">
                  <a href="https://www.facebook.com/share/1Eiiae1dwp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-primary hover:text-accent-blue transition-colors" />
                  </a>
                  <a href="https://www.instagram.com/zoeri.co/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary hover:text-accent-blue transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/matea-jukic-a2425181/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary hover:text-accent-blue transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}