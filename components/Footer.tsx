import { SvgGithub } from "./icons/github";
import SvgInstagram from "./icons/instagram";
import SvgLinkedin from "./icons/linkedin";

export default function Footer() {
  return (
    <>
      <div className="w-3/4 mt-10 mb-5 mx-auto border-t pt-5 items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center lg-space-y-0">
          <div className="flex flex-row space-x-2 mb-3 lg:mb-0 items-center">
            <a
              href="https://github.com/ginigo-arg/Aerolab-challenge"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SvgGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-inigo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SvgLinkedin />
            </a>
            <a
              href="https://www.instagram.com/gabriel_iniigoo/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SvgInstagram />
            </a>
          </div>
          <div className="flex flex-row space-x-1 items-center font-semibold text-gray-700">
            <p>Created with</p>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/images/icons/nextjs.svg" width="24" height="24" />
            </a>
            <p>&&</p>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/images/icons/tailwindcss.svg" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
