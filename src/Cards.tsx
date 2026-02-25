import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container my-3">
      <div className="row" data-aos="fade-up">
        {/* Card 1 */}
        <div className="col-md-4 mb-2">
          <a
            href="https://stackhustla.github.io/TonyTCreates.github.io/"
            target="_blank" rel="noopener noreferrer"
          >
            <div className="card shadow-sm h-100">
              <div className="card-body alt-body">
                <h5 className="card-title bi-globe text-white">
                  {" "}
                  Front-End Site
                </h5>
                <p className="card-text">
                  Here is a link to my Front-End Development Site (Portfolio). Built using
                  vanilla HTML, CSS and JavaScript.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 mb-2">
          <a
            href="https://www.youtube.com/@whatsgoodtonyt"
            target="_blank" rel="noopener noreferrer"
          >
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title bi-youtube text-white">
                  {" "}
                  WhatsGoodTonyT - Youtube
                </h5>
                <p className="card-text">
                  I love creating music and sounds! Working on a plugin for Ableton right now!
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 mb-2">
          <a href="https://dribbble.com/tonytcreates" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm h-100">
              <div className="card-body alt-body">
                <h5 className="card-title text-white bi-dribbble">
                  {" "}
                  Dribbble{" "}
                </h5>
                <p className="card-text">
                  If you're looking for some of my UX/UI mocks and other Graphics then look no
                  further. You'll find everything you need here!
                </p>
              </div>
            </div>
          </a>
        </div>{" "}
        {/* Card 4 */}
        <div className="col-md-4 mb-2">
          <a href="https://www.beatstars.com/tonytintheplace" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title bi-music-note-beamed text-white">
                  {" "}
                  Beatstars - Music
                </h5>
                <p className="card-text">
                  This is my music page for beats and sound kits. Keep Creating!
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
