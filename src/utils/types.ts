// Generic types
export type NoParamsAny = () => any;
export type SingleParamAny = (param: any) => any;
export type ClickFunctionBtn = (e: React.MouseEvent<HTMLButtonElement>) => any;
export type HandleInput = (stateName: string) => (event: React.ChangeEvent<HTMLInputElement>) => any;
export type InputChange = (event: React.ChangeEvent<HTMLInputElement>) => any;

// Data-specific types
export interface NameSlug {
  name: string;
  slug: string;
}

export interface ITitleSubtitle {
  title: string;
  subtitle: string;
}

export interface ISimpleSEO {
  title?: string;
  description?: string;
  image?: string;
}

export interface IImageField {
  imageUrl: string;
  alt?: string;
  localFile?: {
    childImageSharp: any;
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