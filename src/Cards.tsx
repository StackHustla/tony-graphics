import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container my-3">
      <div className="row" data-aos="fade-up">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title bi-globe text-white"> Front-End Site</h5>
              <p className="card-text">
                Here is a link to my Front-End Development site. Built using
                vanilla HTML, CSS and JavaScript
              </p>
              <a
                href="https://stackhustla.github.io/TonyTCreates.github.io/"
                target="blank"
                className="btn btn-dark"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body alt-body">
              <h5 className="card-title text-white bi-dribbble"> Dribbble </h5>
              <p className="card-text text-white">
                Looking for some User Experience/User Interface pieces? Look no
                further and click the button below!
              </p>
              <a
                href="https://dribbble.com/tonytcreates"
                target="blank"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-white bi-music-note-beamed"> Beatstars</h5>
              <p className="card-text">
                This is a brief description of the third card. Add custom
                content or media here.
              </p>
              <a href="https://www.beatstars.com/tonytintheplace" target="blank" className="btn btn-dark">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
