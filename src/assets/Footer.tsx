import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-md-0">
            <h5>Contact Me</h5>
            <ul className="list-unstyled fs-3">
              <li className="mb-2">Email: tonytcreates@gmail.com</li>
              <h5>Follow Me</h5>
              <li>
                <a
                  href="https://www.instagram.com/whatsgoodtonyt/?locale=%E5%88%B6%E4%BD%9C%E4%B8%80%E4%B8%AA%E7%BE%8E%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%88%90%E7%BB%A9%E5%8D%95%E8%81%94%E7%B3%BB%7B%E5%A8%81%E4%BF%A1%2BTG%2F%E9%A3%9E%E6%9C%BA%3A%40buth2788%7DYztDr%3F%3F%3F%3F%3F%3F%D1%A7%3F%3F%C6%BE3X1Vz"
                  target="_blank"
                  className="text-black bi-instagram"
                >
                  {" "}
                  @whatsgoodtonyt
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-md-0">
            <ul className="list-unstyled"></ul>
          </div>
        </div>
      </div>
      <div className="mt-4 fs-4">
        <p>
          &copy; {new Date().getFullYear()} Tony Moore | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
