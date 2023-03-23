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
