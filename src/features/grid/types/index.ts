export interface BoxState {
    id: number;
    isBlack: boolean;
    clickOrder: number | null;
  }
  
  export interface GridState {
    boxes: BoxState[];
    clickHistory: number[];
  }