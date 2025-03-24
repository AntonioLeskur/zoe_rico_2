import React, { useEffect, useState, useRef } from 'react';

interface Logo {
  id: number;
  image: string;
  alt: string;
}

interface LogoCarouselProps {
  className?: string;
}

export function LogoCarousel({ className = '' }: LogoCarouselProps) {
  const logos: Logo[] = [
    {
      id: 1,
      image: "/images/logo_.png",
      alt: "Logo"
    },
    {
      id: 2,
      image: "/images/logo_1.png",
      alt: "Logo 1"
    },
    {
      id: 3,
      image: "/images/logo1-Photoroom.png",
      alt: "Logo 2"
    },
    {
      id: 4,
      image: "/images/logo2-Photoroom.png",
      alt: "Logo 3"
    },
    {
      id: 5,
      image: "/images/logo3-Photoroom.png",
      alt: "Logo 4"
    },
    {
      id: 6,
      image: "/images/logo4-Photoroom.png",
      alt: "Logo 5"
    },
    {
      id: 7,
      image: "/images/logo5-Photoroom.png",
      alt: "Logo 6"
    },
    {
      id: 8,
      image: "/images/logo6-Photoroom.png",
      alt: "Logo 7"
    },
    {
      id: 9,
      image: "/images/logo7-Photoroom.png",
      alt: "Logo 8"
    },
    {
      id: 10,
      image: "/images/logo8-Photoroom.png",
      alt: "Logo 9"
    },
    {
      id: 11,
      image: "/images/logo9-Photoroom.png",
      alt: "Logo 10"
    }
  ];

  // Create a duplicated array of logos for seamless scrolling
  const [items, setItems] = useState([...logos, ...logos]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const speedRef = useRef<number>(30); // Reduced speed for smoother scrolling

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      setTranslateX(prevTranslateX => {
        const newTranslateX = prevTranslateX - (deltaTime * speedRef.current) / 1000;
        const itemWidth = 192; // 160px width + 32px gap
        const totalWidth = itemWidth * logos.length;

        // When we've scrolled through half of the items
        if (Math.abs(newTranslateX) >= totalWidth) {
          return 0; // Reset to beginning without visual jump
        }

        return newTranslateX;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [logos.length]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="w-full">
        <div 
          ref={containerRef}
          className="flex items-center gap-8"
          style={{
            transform: `translateX(${translateX}px)`,
            width: 'fit-content',
            willChange: 'transform'
          }}
        >
          {items.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4"
            >
              <img 
                src={logo.image} 
                alt={logo.alt}
                className="w-full h-full object-contain"
                style={{
                  filter: 'grayscale(100%)',
                  opacity: 0.7,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}