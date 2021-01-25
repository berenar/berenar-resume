export default function Headers(): JSX.Element {
  return (
    <head>
      <title>Bernat</title>

      {/* Open Graph meta tags for link preview */}
      <meta property="og:site_name" content="San Roque 2014 Pollos" />
      <meta
        property="og:description"
        content="Quick personal web app using ReactJS and NextJS"
      />
      <meta
        property="og:image"
        itemProp="image"
        content="memoji2-blueback-256x256.png"
      />
      <meta
        name="image"
        property="og:image"
        content="memoji2-blueback-256x256.png"
      />
      <meta
        name="description"
        property="og:description"
        content="Quick personal web app using ReactJS and NextJS"
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
  );
}
