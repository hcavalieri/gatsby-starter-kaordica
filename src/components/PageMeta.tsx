import * as React from 'react';
import { Helmet } from 'react-helmet';
import { IImageField } from '../utils/types';

export interface IPageMeta {
  title: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  image?: IImageField;
}

export const PageMeta: React.SFC<IPageMeta> = props => {
  const description = props.seoDescription ?
    `${props.seoDescription.substr(0, 145)}...`
    : `Saiba mais`;
  return (
    <Helmet>
      <title>{props.seoTitle || `${props.title} - [SITE NAME]`}</title>
      <meta name="description" content={description} />
      {props.image && props.image.imageUrl ?
        <meta name="og:image" content={props.image.imageUrl} />
        : null
      }
    </Helmet>
  )
}

PageMeta.displayName = 'PageMeta'

export default PageMeta;