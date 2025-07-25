export const getAnimation = (
  direction,
  {
    delay = 0,
    duration = 2,
    stiffness = 260,
    ease = "easeInOut",
    opacityFrom = 0,
    opacityTo = 1,
  } = {},
) => {
  let initial = { opacity: opacityFrom };

  if (direction === "left") initial.x = -200;
  if (direction === "right") initial.x = 200;
  if (direction === "top") initial.y = -50;
  if (direction === "bottom") initial.y = 50;

  return {
    initial,
    whileInView: {
      opacity: opacityTo,
      x: initial.x !== undefined ? 0 : undefined,
      y: initial.y !== undefined ? 0 : undefined,
    },
    transition: {
      delay,
      duration,
      ease,
      stiffness,
    },
    viewport: { once: true },
  };
};
