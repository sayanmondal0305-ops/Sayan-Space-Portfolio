export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const SCROLL_SPRING = { stiffness: 50, damping: 24 } as const;

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: EASE_OUT,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: EASE_OUT,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export const fadeInUp = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

export const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
