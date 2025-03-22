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
      <section className="bg-white pt-24">
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

      {/* Team Section */}
      <section className="py-12 sm:py-20 bg-neutral/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-primary">Naš Tim</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-neutral/20">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="CEO"
                className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4 sm:mb-6"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">Marko Kovač</h3>
              <p className="text-sm sm:text-base text-accent-blue mb-3 sm:mb-4">CEO & Osnivač</p>
              <p className="text-sm sm:text-base text-primary/70">
                15+ godina iskustva u digitalnom marketingu i razvoju poslovanja.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-neutral/20">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Creative Director"
                className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4 sm:mb-6"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">Ana Jurić</h3>
              <p className="text-sm sm:text-base text-accent-blue mb-3 sm:mb-4">Kreativna Direktorica</p>
              <p className="text-sm sm:text-base text-primary/70">
                Stručnjakinja za brendiranje i vizualni identitet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-neutral/20">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                alt="Technical Lead"
                className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4 sm:mb-6"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">Ivan Horvat</h3>
              <p className="text-sm sm:text-base text-accent-blue mb-3 sm:mb-4">Tehnički Voditelj</p>
              <p className="text-sm sm:text-base text-primary/70">
                Ekspert za web razvoj i digitalna rješenja.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}