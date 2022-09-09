import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:url" content="https://www.blog.andrerodrigo.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="%PUBLIC_URL%/preview.jpg" />
      <meta
        property="og:image:alt"
        content="André Rodrigo - Criação de websites, apps e conteúdo digital"
      />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="assets/images/profile.png" />
      <meta name="keywords" content={keywords?.join()} />
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta name="title" content={title} />
      <meta name="robots" content="index,follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="5 days" />
      <meta name="author" content="André Rodrigo" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTags;
