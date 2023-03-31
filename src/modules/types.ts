export interface Category {
  ID: string;
  TITLE: string;
  PRIORITY: number;
  PATH: string;
  DESCRIPTION?: string;
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
  type: string;
  width?: string;
  height?: string;
  fill?: string;
  consoleFill?: string;
  logFill?: string;
  bracketFill?: string;
  quoteFill?: string;
}
