import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  direction = 'up', // 'up', 'down', 'left', 'right', 'fade'
  duration = 800, // duration in ms
  delay = 0, // delay in ms
  distance = 50, // slide-in distance in px
  className = ''
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Reveal once and stop observing for performance
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the element is visible
        rootMargin: '0px 0px -60px 0px' // Trigger slightly before it hits the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Compute 3D hardware-accelerated transforms based on direction
  const getTransform = () => {
    if (isIntersecting) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'fade':
      default:
        return 'none';
    }
  };

  const style = {
    opacity: isIntersecting ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'transform, opacity' // Direct GPU acceleration
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
