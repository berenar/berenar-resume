/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
export default function Headers(): JSX.Element {
  return (
    <head>
      <title>Bernat</title>
      <meta property="og:site_name" content="Bernat's personal website" />
      <meta
        property="og:description"
        content="Quick personal web app using ReactJS and NextJS"
      />
      <meta
        property="og:image"
        itemProp="image"
        content="screenshot26Jan2021.png"
      />
      <meta
        name="image"
        property="og:image"
        content="screenshot26Jan2021.png"
      />
      <meta name="image" property="og:image" content="screenshot26Jan2021.png"></meta>
      <meta
        name="description"
        property="og:description"
        content="Bernat's minimal personal web app using ReactJS and NextJS"
      />
      <meta name="author" content="Bernat Pericàs Serra" />
      <meta property="og:updated_time" content="1440432930" />
      <meta property="og:url" content="bernatpericas.com" />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="Bernat's resume" />
      <meta property="og:title" content="Bernat's personal web app" />
      <meta name="twitter:card" content="summary" />

      {/* Favicons */}
      <link rel="shortcut icon" type="image/png" href="icon-192x192.png" />
      <link rel="shortcut icon" sizes="192x192" href="icon-192x192.png" />
      <link rel="apple-touch-icon" href="icon-192x192.png" />
    </head>
  )
}
