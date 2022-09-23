import React from 'react'
import { Resume } from './Resume.js'

const Root = () => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Daniel Pickett - Frontend Software Engineer</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <Resume />
    </body>
  </html>
)
export default React.createElement(Root)
