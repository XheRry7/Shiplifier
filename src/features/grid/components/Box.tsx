import { useEffect, useState } from 'react';
import type { BoxState } from '../types';
import { getAnimationDelay } from '../utils/animations';

interface BoxProps extends BoxState {
  onClick: () => void;
  isResetting: boolean;
  resetOrder: number;
}

export const Box = ({
  isBlack,
  onClick,
  isResetting,
  resetOrder,
}: BoxProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isResetting) {
      const delay = getAnimationDelay(resetOrder);
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, delay + 500);
      return () => clearTimeout(timer);
    }
  }, [isResetting, resetOrder]);

  return (
    <div
      onClick={onClick}
      className={`
        w-full h-full aspect-square
        min-w-[120px] min-h-[120px]
        md:min-w-[150px] md:min-h-[150px]
        border-2 border-gray-300 rounded-lg cursor-pointer
        transition-colors duration-500 hover:border-gray-400
        ${isBlack ? 'bg-black' : 'bg-white'}
        ${isAnimating ? 'animate-fade' : ''}
      `}
    />
  );
};