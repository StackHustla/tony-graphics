import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container my-3 ">
      <div className="row" data-aos="fade-up">
        {/* Card 1 */}
        <div className="col-md-4 mb-2">
          <a
            href="https://stackhustla.github.io/TonyTCreates.github.io/"
            target="blank"
          >
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title bi-globe text-white">
                  {" "}
                  Front-End Site
                </h5>
                <p className="card-text">
                  Here is a link to my Front-End Development site (portfolio). Built using
                  vanilla HTML, CSS and JavaScript.
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 mb-2">
          <a href="https://dribbble.com/tonytcreates" target="blank">
            <div className="card shadow-sm h-100">
              <div className="card-body alt-body">
                <h5 className="card-title text-white bi-dribbble">
                  {" "}
                  Dribbble{" "}
                </h5>
                <p className="card-text">
                  If you're looking for some of my UX/UI mocks then look no
                  further. You'll find everything you need here!
                </p>
              </div>
            </div>
          </a>
        </div>{" "}
        {/* Card 3 */}
        <div className="col-md-4 mb-2">
          <a href="https://www.beatstars.com/tonytintheplace" target="blank">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title bi-music-note-beamed text-white">
                  {" "}
                  Beatstars - Music
                </h5>
                <p className="card-text">
                  Sooo I make music. I have fun doing it. Shameless plug here!
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
