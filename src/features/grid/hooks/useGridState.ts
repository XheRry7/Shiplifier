import { useState, useCallback } from 'react';
import type { GridState } from '../types';

const INITIAL_GRID_SIZE = 9;

const createInitialState = (): GridState => ({
  boxes: Array.from({ length: INITIAL_GRID_SIZE }, (_, id) => ({
    id,
    isBlack: false,
    clickOrder: null,
  })),
  clickHistory: [],
});

export const useGridState = () => {
  const [gridState, setGridState] = useState<GridState>(createInitialState());

  const handleBoxClick = useCallback((boxId: number) => {
    setGridState((prevState) => {
      const box = prevState.boxes[boxId];
      if (box.isBlack) return prevState; 

      const newClickHistory = [...prevState.clickHistory, boxId];
      const newBoxes = prevState.boxes.map((b) =>
        b.id === boxId
          ? { ...b, isBlack: true, clickOrder: newClickHistory.length - 1 }
          : b
      );

      return {
        boxes: newBoxes,
        clickHistory: newClickHistory,
      };
    });
  }, []);

  const reset = useCallback(() => {
    setGridState((prevState) => ({
      ...prevState,
      boxes: prevState.boxes.map((box) => ({
        ...box,
        isBlack: false,
        clickOrder: null,
      })),
      clickHistory: [],
    }));
  }, []);

  return {
    boxes: gridState.boxes,
    clickHistory: gridState.clickHistory,
    handleBoxClick,
    reset,
  };
};