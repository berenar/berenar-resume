import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

export default function Headers() {
  const iconSize = "2em";
  return (
    <footer>
      <div className="contactIcons">
        <a href="https://www.linkedin.com/in/bernatps/" target="_blank">
          <FaLinkedinIn size={iconSize} />
        </a>
        <a href="https://github.com/berenar" target="_blank">
          <FaGithub size={iconSize} />
        </a>
        <a href="mailto:bernatpericasserra97@gmail.com?subject=Hi%20Bernat!">
          <IoMailOpen size={iconSize} />
        </a>
      </div>
      <p>© Copyright 2021 Bernat Pericàs Serra</p>
    </footer>
  );
}
