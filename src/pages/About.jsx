import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import resume from "../assets/NavdeepBal_Webdeveloper_resume.pdf";

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details .
      </p>
      <div className="flex gap-6">
        <Link
          to="https://github.com/NaviBal11"
          target="_blank"
          className="icon-link transform hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={36} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/navdeep-kaur-webdeveloper/"
          target="_blank"
          className="icon-link transform hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin size={36} />
        </Link>
        <Link
          to={resume}
          target="_blank"
          download
          className="inline-flex text-white items-center px-5 py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75"
        >
          <svg
            fill="white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
          </svg>
          &nbsp; Resume
        </Link>
      </div>
    </>
  );
}

export default About;
