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

      {/* Matea Section */}
      <section className="bg-white pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
            <div className="w-48 flex flex-col items-center">
              <img 
                src="/images/matea/matea_solo_img.jpg"
                alt="Matea Jukić"
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-primary">Matea Jukić</h3>
                <p className="text-primary/70">MBA Marketing</p>
              </div>
            </div>
            <div className="flex-1 text-lg text-primary/80 leading-relaxed mt-4 md:mt-12">
              Većina ljudi danas je na mobitelima i računalima, a digitalni trag ključan je za svaki brend. Zato volim stvarati sadržaj koji privlači pažnju, gradi prepoznatljivost i stvara lojalnu mrežu klijenata
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}