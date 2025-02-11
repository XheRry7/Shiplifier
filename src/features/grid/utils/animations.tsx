export const ANIMATION_DURATION = 500; 

export const getAnimationDelay = (index: number): number => {
  return index * ANIMATION_DURATION;
};