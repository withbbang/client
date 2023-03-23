export interface RootInitialState {
  message: '';
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
}

export interface Category {
  ID: string;
  TITLE: string;
  PRIORITY: number;
}

export interface typeSVG {
  type: string;
  width: string;
  height: string;
  fill: string;
}
