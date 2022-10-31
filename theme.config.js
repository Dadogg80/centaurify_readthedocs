import React from "react";

export default {
  github: 'https://github.com/Centaurifly/ethereum_repository/',
  docsRepositoryBase: 'https://github.com/Dadogg80/centaurify_readthedocs/',
  titleSuffix: ' - Centaurify - Read The Docs',
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">Centaurify</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Read The Docs
      </span>
      </React.Fragment>
  ),
  script: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Centaurify: Read The Docs" />
      <meta name="og:description" content="Centaurify: Read The Docs" />
      <meta name="og:title" content="Centaurify: Read The Docs" />
      <meta name="og:image" content="" />
      <meta name="apple-mobile-web-app-title" content="./public/cenaturify.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </ React.Fragment>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
  unstable_faviconGlyph: '👋',
}
