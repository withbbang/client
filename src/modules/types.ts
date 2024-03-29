export interface Category {
  ID: number;
  TITLE: string;
  PRIORITY: number;
  PATH: string;
  DESCRIPTION?: string;
  IS_DELETED: string;
  AUTH: number;
}

export interface Content {
  ID: number;
  CATEGORY_ID: number;
  CATEGORY?: string;
  TITLE: string;
  CONTENT?: string;
  HIT?: number;
  HEART?: number;
  CREATE_DT?: string;
  UPDATE_DT?: string;
  IS_DONE: string;
  IS_DELETED: string;
  PATH: string;
  AUTH: number;
}

export interface typeSVG {
  type?: string;
  width?: string;
  height?: string;
  fill?: string;
  consoleFill?: string;
  logFill?: string;
  bracketFill?: string;
  quoteFill?: string;
  stroke?: string;
}

export interface Authority {
  AUTH: number;
  PERMISSION?: string;
  DESCRIPTION: string;
}

export interface Heart {
  COUNT: number;
  IS_HEART: number;
}

export interface Comment {
  ID: number;
  REF_ID?: number;
  NICKNAME: string;
  COMMENTS: string;
  CREATE_DT: string;
  UPDATE_DT?: string;
  IS_SECRET: string;
}
