import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="bg-white text-black  p-2 text-center footer-background"
      id="contact"
    >
      <div className="footer-container" data-aos="fade-up">
        <a
          href="mailto:tonytcreates@gmail.com"
          className="footer-text text-white"
        >
          <strong>Email Me:</strong> tonytcreates@gmail.com
        </a>

        <div className="row-md-3 mb-md-0">
          <ul className="list-unstyled fs-2">
            <li>
              <a
                href="https://www.instagram.com/whatsgoodtonyt/?locale=%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%BE%8E%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%88%90%E7%BB%A9%E5%8D%95%E8%81%94%E7%B3%BB%7B%E5%A8%81%E4%BF%A1%2BTG%2F%E9%A3%9E%E6%9C%BA%3A%40buth2788%7DYztDr%3F%3F%3F%3F%3F%3F%D1%A7%3F%3F%C6%BE3X1Vz"
                target="_blank"
                className="text-black bi-instagram m-3 social-icon"
              >
                {" "}
              </a>
              <a
                href="https://github.com/StackHustla"
                target="_blank"
                className="text-black bi-github m-3 social-icon"
              >
                {" "}
              </a>
              <a
                href="https://www.youtube.com/@whatsgoodtonyt"
                target="_blank"
                className="text-black bi-youtube m-3 social-icon"
              >
                {" "}
              </a>
              <a
                href="https://www.beatstars.com/tonytintheplace"
                target="_blank"
                className="text-black bi-music-note-beamed m-3 social-icon"
              >
                {" "}
              </a>
              <a
                href="https://dribbble.com/tonytcreates"
                target="_blank"
                className="text-black bi-dribbble m-3 social-icon"
              >
                {" "}
              </a>
            </li>
          </ul>
          <div className="fs-5">
            <p>
              &copy; {new Date().getFullYear()} Tony Moore | All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
