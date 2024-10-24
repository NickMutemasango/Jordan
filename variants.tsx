export const fadeIn = (
    direction: "up" | "down" | "left" | "right",
    delay: number
  ) => {
    return {
      hidden: {
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        scale: 0.9, // added scaling effect
        transition: {
          type: "spring", // changed to spring for more natural movement
          stiffness: 50,
          duration: 1.2,
          delay: delay,
          ease: [0.4, 0.6, 0.3, 0.7],
        },
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1, // back to normal size
        transition: {
          type: "spring",
          stiffness: 40,
          duration: 1.1,
          delay: delay,
          ease: [0.4, 0.2, 0.3, 0.7],
        },
      },
    };
  };
  