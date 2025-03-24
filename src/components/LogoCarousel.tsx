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
    },
    {
      id: 12,
      image: "/images/acb7b703-c873-40b5-9575-3e2f5327d775_removalai_preview.png",
      alt: "Client Logo 11"
    },
    {
      id: 13,
      image: "/images/fb9dfc5c-7e11-41c8-aa9a-53a7ed5ae716_removalai_preview.png",
      alt: "Client Logo 12"
    },
    {
      id: 14,
      image: "/images/27bde604-52d5-4782-b44a-0ca7059f9a99_removalai_preview.png",
      alt: "Client Logo 13"
    },
    {
      id: 15,
      image: "/images/521f3511-e5a9-4732-bbb0-fcbb166df5d5_removalai_preview.png",
      alt: "Client Logo 14"
    },
    {
      id: 17,
      image: "/images/0be01fd7-fc6a-4266-b1da-f9957f942b39_removalai_preview.png",
      alt: "Client Logo 16"
    },
    {
      id: 18,
      image: "/images/26a1a075-bb43-4cb8-a601-e0ebbb2101d0_removalai_preview.png",
      alt: "Client Logo 17"
    },
    {
      id: 19,
      image: "/images/c5d8923b-98c0-48af-a348-73a7146c814b_removalai_preview.png",
      alt: "Client Logo 18"
    },
    {
      id: 20,
      image: "/images/ffb1edcb-4d57-4b73-960c-dcacbabf1f7b_removalai_preview.png",
      alt: "Client Logo 19"
    },
    {
      id: 21,
      image: "/images/4e4cadf2-e0b5-4534-a9aa-435834a1b47c_removalai_preview.png",
      alt: "Client Logo 20"
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
        const itemWidth = 160; // Reduced from 192 to bring logos closer on mobile
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
          className="flex items-center gap-4 sm:gap-8"
          style={{
            transform: `translateX(${translateX}px)`,
            width: 'fit-content',
            willChange: 'transform'
          }}
        >
          {items.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-32 sm:w-40 h-20 sm:h-24 flex items-center justify-center p-2 sm:p-4"
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