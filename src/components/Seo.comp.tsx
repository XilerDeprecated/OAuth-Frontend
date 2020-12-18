import { Helmet } from "react-helmet";
import React from "react";

interface SeoProps {
    color: string;
    description: string;
    title: string;
    image?: string;
    imageAlt?: string;
    twitterTag?: string;
    iconsRoot?: string;
}

export const Seo: React.FC<SeoProps> = (props) => {
    const iconRoot = props.iconsRoot || "/assets/icons/";

  return <Helmet>
      <meta name="theme-color" content={props.color} />
      <meta name="description" content={props.description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={props.twitterTag || "@XilerNetwork"} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image || `%PUBLIC_URL%${iconRoot}icon-256x256.png`} />
      <meta name="twitter:image:alt" content={props.imageAlt || "The Xiler icon"} />

      <meta name="og:title" content={props.title} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={props.image || `%PUBLIC_URL%${iconRoot}icon-256x256.png`} />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:width" content="256" />
      <meta name="og:image:height" content="256" />
      <meta name="og:image:alt" content={props.imageAlt || "The Xiler icon"} />
      <meta name="og:url" content={window.location.href} />
      <meta name="og:description" content={props.description} />

      <link rel="apple-touch-icon" sizes="48x48" href={`%PUBLIC_URL%${iconRoot}icon-48x48.png`}/>
      <link rel="apple-touch-icon" sizes="72x72" href={`%PUBLIC_URL%${iconRoot}icon-72x72.png`}/>
      <link rel="apple-touch-icon" sizes="96x96" href={`%PUBLIC_URL%${iconRoot}icon-96x96.png`}/>
      <link rel="apple-touch-icon" sizes="144x144" href={`%PUBLIC_URL%${iconRoot}icon-144x144.png`}/>
      <link rel="apple-touch-icon" sizes="180x180" href={`%PUBLIC_URL%${iconRoot}icon-180x180.png`}/>
      <link rel="apple-touch-icon" sizes="192x192" href={`%PUBLIC_URL%${iconRoot}icon-192x192.png`}/>
      <link rel="apple-touch-icon" sizes="256x256" href={`%PUBLIC_URL%${iconRoot}icon-256x256.png`}/>
      <link rel="apple-touch-icon" sizes="384x384" href={`%PUBLIC_URL%${iconRoot}icon-384x384.png`}/>
      <link rel="apple-touch-icon" sizes="512x512" href={`%PUBLIC_URL%${iconRoot}icon-512x512.png`}/>
  </Helmet>;
};
