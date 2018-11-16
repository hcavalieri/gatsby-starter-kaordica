import * as React from 'react';
import { Helmet } from 'react-helmet';
import { IImageField } from '../utils/types';

export interface IPageMeta {
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  image?: IImageField;
  schemaVocab?: string;
  socialTitle?: string;
  lang?: string;
  locale?: string;
  twitterUsername?: string;
  canonicalUrl?: string;
  // There're also player and app cards
  twitterCard?: 'summary' | 'summary_large_image';
  // Full list: https://developers.facebook.com/docs/reference/opengraph#object-type
  ogType?:
    | 'article'
    | 'website'
    | 'book'
    | 'place'
    | 'product'
    | 'profile'
    | 'business.business';
  fbAppId?: string;
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
}

export const PageMeta: React.SFC<IPageMeta> = props => {
  const description = props.seoDescription
    ? `${props.seoDescription.substr(0, 145)}...`
    : `Saiba mais`;
  const title = props.seoTitle || `${props.title}`;
  return (
    <Helmet>
      {/* Basic Info */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {props.lang ? <html lang={props.lang} /> : null}

      {/* Social Sharing */}
      {props.image && props.image.imageUrl ? (
        <>
          <meta name="og:image" content={props.image.imageUrl} />
        </>
      ) : null}
      <meta name="og:title" content={props.socialTitle || title} />
      <meta name="og:description" content={props.socialTitle || title} />
      {props.locale ? <meta name="og:locale" content={props.locale} /> : null}
      {props.canonicalUrl ? (
        <meta name="og:url" content={props.canonicalUrl} />
      ) : null}
      {props.twitterUsername ? (
        <meta name="twitter:site" content={props.twitterUsername} />
      ) : null}
      {props.twitterCard ? (
        <meta name="twitter:card" content={props.twitterCard} />
      ) : null}
      {props.fbAppId ? <meta name="fb:app_id" content={props.fbAppId} /> : null}

      {props.children}

      {/* Schema.org */}
      <body
        vocab="https://schema.org/"
        typeof={props.schemaVocab || 'WebSite'}
      />
    </Helmet>
  );
};

PageMeta.displayName = 'PageMeta';

export default PageMeta;
