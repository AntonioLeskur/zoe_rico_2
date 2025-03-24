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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Naša Priča</h1>
              <p className="text-base sm:text-xl text-neutral">
                Od 2020. godine, Zoe Rico postavlja nove standarde u digitalnom marketingu. 
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-primary">Naše Vrijednosti</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">Timski Rad</h3>
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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="flex justify-center">
            <img 
              src="/images/matea/matea_ceo.png"
              alt="Matea Zoe Rico"
              className="w-1/2 h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}