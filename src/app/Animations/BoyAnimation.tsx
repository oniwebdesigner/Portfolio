// boyAnimation.tsx
import { gsap } from 'gsap';

export const animateBoy = (boyRef: React.RefObject<HTMLImageElement>) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  tl.to(boyRef.current, { y: -10, duration: 1, ease: "power1.inOut" })
    .to(boyRef.current, { y: 10, duration: 1, ease: "power1.inOut" });

  return tl;
};
