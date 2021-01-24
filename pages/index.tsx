import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <head>
        <title>Hi! My name is Bernat</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="icon-192x192.png"
        />
        <link
          rel="shortcut icon"
          sizes="192x192"
          href="icon-192x192.png"
        />
        <link rel="apple-touch-icon" href="icon-192x192.png" />
      </head>

      <main>
        <img
          src="/memoji-portrait.png"
          alt="Vercel Logo"
          className="portrait"
        />

        <h1 className="title">Hi! My name is Bernat</h1>

        <p className="description">
          Even though some people call me{" "}
          <code>
            <a href="https://github.com/berenar">berenar</a>
          </code>
        </p>

        <div className="grid">
          <a href="" className="card">
            <h3>About me &rarr;</h3>
            <p>Curious and organized</p>
          </a>

          <a href="" className="card">
            <h3>Education &rarr;</h3>
            <p>Life is a lesson</p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>Work &rarr;</h3>
            <p>3 experiences and couting</p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>Skills &rarr;</h3>
            <p>Like a Swiss knife</p>
          </a>
        </div>
      </main>

      <footer>
          Bernat Pericàs Serra, 2021
      </footer>
    </div>
  );
}
