import React from 'react';
import { Users, Target, Lightbulb, Trophy } from 'lucide-react';
import { LogoCarousel } from '../components/LogoCarousel';

export function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Naša priča</h1>
              <p className="text-base sm:text-xl text-neutral">
                Od 2017. godine, Zoe Rico postavlja nove standarde u digitalnom marketingu. 
                Naša strast je pomoći brendovima da ostvare svoj puni potencijal u digitalnom svijetu.
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="bg-white pt-16">
        <LogoCarousel />
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-primary">Naše vrijednosti</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">Timski rad</h3>
              <p className="text-sm sm:text-base text-primary/70">Zajedno stvaramo izvanredne rezultate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">Preciznost</h3>
              <p className="text-sm sm:text-base text-primary/70">Svaki detalj je važan za uspjeh</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">Inovacija</h3>
              <p className="text-sm sm:text-base text-primary/70">Uvijek korak ispred trendova</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">Izvrsnost</h3>
              <p className="text-sm sm:text-base text-primary/70">Postavljamo najviše standarde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
              Upoznajte naš tim
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full border-4 border-accent-blue/20 shadow-xl">
                  <img 
                    src="/images/matea/matea_solo_img.jpg"
                    alt="Matea Jukić"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white px-4 py-1 rounded-full text-sm">
                  CEO
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-primary">Matea Jukić</h3>
                <p className="text-accent-blue font-medium mt-1">MBA Marketing</p>
              </div>
              <div className="mt-4 text-base text-primary/80 leading-relaxed text-center max-w-sm">
                Većina ljudi danas je na mobitelima i računalima, a digitalni trag ključan je za svaki brend. Zato volim stvarati sadržaj koji privlači pažnju, gradi prepoznatljivost i stvara lojalnu mrežu klijenata.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full border-4 border-accent-blue/20 shadow-xl">
                  <img 
                    src="/images/antonio/antonio_zoe_web.jpg"
                    alt="Antonio Jukić"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white px-4 py-1 rounded-full text-sm">
                  CTO
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-primary">Antonio Jukić</h3>
                <p className="text-accent-blue font-medium mt-1">Software Developer</p>
              </div>
              <div className="mt-4 text-base text-primary/80 leading-relaxed text-center max-w-sm">
                Specijaliziran za razvoj web aplikacija i web trgovina. Stvaram digitalna rješenja koja kombiniraju funkcionalnost s izvrsnim korisničkim iskustvom.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}