export interface Category {
  ID: number;
  TITLE: string;
  PRIORITY: number;
  PATH: string;
  DESCRIPTION?: string;
  AUTH: number;
}

export interface Content {
  ID: string;
  TITLE: string;
  CONTENT?: string;
  HIT: number;
  HEART: number;
  CREATE_DT: string;
  PATH: string;
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
}

export interface Authority {
  AUTH: number;
  PERMISSION?: string;
  DESCRIPTION: string;
}
