import React from 'react';
import { MessageSquare, Instagram, Facebook, Linkedin, Monitor, TrendingUp, Video, PenTool, Star, Users, Clock, MessageCircle, BarChart3, Sparkles, Heart } from 'lucide-react';
import { LogoCarousel } from '../components/LogoCarousel';
import { ContactForm } from '../components/ContactForm';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-neutral/20">
      <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 text-primary rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">{title}</h3>
      <p className="text-sm sm:text-base text-primary/70">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, company, quote, companyUrl = null }) {
  const content = (
    <div className="h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-accent-gold fill-current" />
        ))}
      </div>
      <p className="text-sm sm:text-base text-neutral flex-grow">{quote}</p>
      <div className="flex items-center space-x-3 mt-4">
        <img src={image} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base text-white">{name}</h4>
          <p className="text-neutral text-xs sm:text-sm">{company}</p>
        </div>
      </div>
    </div>
  );

  if (companyUrl) {
    return (
      <a 
        href={companyUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block bg-primary p-6 sm:p-8 rounded-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-primary/95 hover:ring-2 hover:ring-accent-blue/20 h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-primary p-6 sm:p-8 rounded-2xl h-full">
      {content}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Što kažu naši klijenti</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              image="/images/clients/marta_flow_case.jpg"
              name="Marta Špoljarić"
              company="FLOW CASE"
              companyUrl="https://www.instagram.com/flowcase.hr/"
              quote="Sa Zoe Rico je suradnja uvijek jednostavna i brza! Dogovor je lak, komunikacija odlična, a usluga vrhunska. Njihov tim je iznimno profesionalan i posvećen detaljima, što se jasno vidi u kvaliteti njihovog rada. Preporučujem svima koji traže pouzdanog partnera za digitalni marketing!"
            />
            <TestimonialCard
              image="/images/clients/naklada_cvrcak_pic.png"
              name="Naklada Cvrčak"
              company="NAKLADA CVRČAK"
              companyUrl="https://www.facebook.com/nakladacvrcak"
              quote="S tvrtkom Zoe Rico poslujemo dugi niz godina i uvijek smo iznimno zadovoljni suradnjom! Profesionalnost, kvaliteta i pouzdanost na najvišoj razini. Njihov pristup je inovativan, a rezultati koje postižu nadmašuju očekivanja. Preporučujemo ih svima koji žele unaprijediti svoje poslovanje!"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
              name="Maja Šeparović"
              company="GREEN&CLEAN"
              companyUrl="https://www.green-clean.team/"
              quote="Odlična usluga i fantastičan tim! Stranica je izrađena brzo, točno prema mojim uputama, a krajnji rezultat je čak i bolji od očekivanog. Komunikacija s timom bila je iznimno ugodna i profesionalna – uvijek dostupni za pitanja i sugestije. Preporučujem svima koji žele kvalitetan i pouzdan web! 👏🔥"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-12 sm:py-20 bg-neutral/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-primary">Naše usluge</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard 
              icon={<MessageSquare className="h-5 w-5" />}
              title="Društveni mediji"
              description="Strategija i upravljanje društvenim mrežama za povećanje angažmana"
            />
            <ServiceCard 
              icon={<Instagram className="h-5 w-5" />}
              title="Influencer marketing"
              description="Suradnja s utjecajnim osobama za autentičnu promociju"
            />
            <ServiceCard 
              icon={<Video className="h-5 w-5" />}
              title="Kreiranje sadržaja"
              description="Profesionalni foto i video sadržaj koji privlači pažnju"
            />
            <ServiceCard 
              icon={<PenTool className="h-5 w-5" />}
              title="Web dizajn"
              description="Moderni i responzivni web dizajn prilagođen vašem brendu"
            />
            <ServiceCard 
              icon={<TrendingUp className="h-5 w-5" />}
              title="Plaćeno oglašavanje"
              description="Ciljano oglašavanje za maksimalni povrat investicije"
            />
            <ServiceCard 
              icon={<Monitor className="h-5 w-5" />}
              title="Digitalna strategija"
              description="Sveobuhvatna digitalna strategija za rast vašeg poslovanja"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Agency Section */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
            Zašto odabrati agenciju?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 rounded-full flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">Stručnost i iskustvo</h3>
              <p className="text-sm sm:text-base text-neutral">Optimiziramo kampanje s dokazanim rezultatima</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">Ušteda vremena</h3>
              <p className="text-sm sm:text-base text-neutral">Fokusirajte se na rast vašeg poslovanja</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">Konzistentna komunikacija</h3>
              <p className="text-sm sm:text-base text-neutral">Gradimo prepoznatljiv identitet brenda</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">Napredna analitika</h3>
              <p className="text-sm sm:text-base text-neutral">Pratimo i optimiziramo svaki aspekt</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">Kreativna rješenja</h3>
              <p className="text-sm sm:text-base text-neutral">Jedinstveni pristup vašem brendu</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/80 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">Veća angažiranost</h3>
              <p className="text-sm sm:text-base text-neutral">Stvaramo sadržaj koji povezuje i inspirira</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary">Kontaktirajte nas</h2>
              <p className="text-sm sm:text-base text-primary/70 mb-6 sm:mb-8">
                Spremni smo pomoći vam u ostvarenju vaših digitalnih ciljeva.
              </p>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-primary/80">Email: matea@zoerico.com</p>
                <p className="text-sm sm:text-base text-primary/80">Tel: +385 97 764 7168</p>
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