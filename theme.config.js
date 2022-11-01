import React from "react";
import Script from 'next/script'

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
    <Script>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Centaurify: Read The Docs" />
      <meta name="og:description" content="Centaurify: Read The Docs" />
      <meta name="og:title" content="Centaurify: Read The Docs" />
      <meta name="og:image" content="" />
      <meta name="apple-mobile-web-app-title" content="./public/cenaturify.ico" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </Script>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
  unstable_faviconGlyph: '👋',
}
