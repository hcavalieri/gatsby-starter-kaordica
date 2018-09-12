// Generic types
export type NoParamsAny = () => any;
export type SingleParamAny = (param: any) => any;
export type ClickFunctionBtn = (e: React.MouseEvent<HTMLButtonElement>) => any;
export type HandleInput = (stateName: string) => (event: React.ChangeEvent<HTMLInputElement>) => any;
export type InputChange = (event: React.ChangeEvent<HTMLInputElement>) => any;

// Data-specific types

export interface ITitleSubtitle {
  title: string;
  subtitle: string;
}

export interface IImageField {
  imageUrl: string;
  alt?: string;
  localFile?: {
    childImageSharp: {
      fixed?: any;
      fluid?: any;
    };
  };
}

export interface ITitledLink {
  title: string;
  url: string;
}

export interface IKeyValue {
  key: string;
  value: string;
}