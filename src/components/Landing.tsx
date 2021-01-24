import { useState } from "react";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

export default function Landing() {
  const [headHover, setheadHover] = useState(false);
  const [githubHover, setgithubHover] = useState(false);
  function setAndUnset(stateName: string) {
    eval("set" + stateName + "(true)");
    setTimeout(
      function () {
        eval("set" + stateName + "(false)");
      }.bind(this),
      1000
    );
  }

  const keywordsLeft = ["Full", "Stack", "Junior", "Developer"];
  const keywordsRight = ["Open", "Minded", "Avid", "Learner"];

  return (
    <div className="container">
      <h4 className="ribbon">Under development</h4>
      <main>
        <div className="cover">
          {/* <Keywords align="right" words={keywordsLeft}></Keywords> */}

          <div className="protagonist">
            <Zoom duration={5000}>
              <Pulse when={headHover}>
                <img
                  onMouseEnter={() => setAndUnset("headHover")}
                  onClick={() => setAndUnset("headHover")}
                  src="/memoji-portrait.png"
                  alt="Vercel Logo"
                  className="portrait"
                />
              </Pulse>
            </Zoom>
          </div>
          {/* <Keywords align="left" words={keywordsRight}></Keywords> */}
        </div>

        <h1 className="title">Hi! My name is Bernat</h1>
        <p className="description">
          But they call me
          <Pulse when={githubHover}>
            <div
              className="codeWrapper"
              onMouseEnter={() => setAndUnset("githubHover")}
              onClick={() => setAndUnset("githubHover")}
            >
              {githubName("berenar")}
            </div>
          </Pulse>
        </p>

        <div className="grid">
          <a href="" className="card">
            <h3>About me &rarr;</h3>
            <p>&#127757; Curious and organized</p>
          </a>

          <a href="" className="card">
            <h3>Education &rarr;</h3>
            <p>&#128218; Life is a lesson</p>
          </a>
          <a href="" className="card">
            <h3>Work &rarr;</h3>
            <p>&#128119; 3 experiences and couting</p>
          </a>

          <a href="" className="card">
            <h3>Skills &rarr;</h3>
            <p>&#128298; Sharp as a knife</p>
          </a>
        </div>
      </main>
    </div>
  );
}

function githubName(username: string) {
  return (
    <code>
      <a href={`https://github.com/${username}`}>
        {"<"}
        <p>{username}</p>
        {"/>"}
      </a>
    </code>
  );
}
