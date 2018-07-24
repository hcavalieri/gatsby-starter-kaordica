export type NoParamsAny = () => any;
export type SingleParamAny = (param: any) => any;

export interface NameSlug {
  name: string;
  slug: string;
}

export interface ISimpleSEO {
  title?: string;
  description?: string;
  image?: string;
}
