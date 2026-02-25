import TempIMG from "./assets/TempIMG.webp";
import IMGPROFILE from "./assets/IMGPROFILE.jpg";
import "./About.css";
import Cards from "./Cards";
const About = () => {
  return (
    <>
      <div className="about-background">
        <div className="mb-5" id="about"></div>
        <div className="mb-4">
          <br />
        </div>
        <div className="container row-gap-3 mb-5 ">
          <div className="row p-5 about-container align-items-center">
            <div className="col-lg-8 mb-1 order-lg-2">
              <h2 className="p-2 justify-content-center text-center">
                Hello! I'm Tony T. A Senior Graphic Designer, UX Designer and Creative in
                Huntsville, AL.
              </h2>
              <h5 className="p-2 justify-content-center text-center">
                I create Brand Identities, User Interfaces, Landing Pages,
                Websites, Apparel, Marketing Strategies, and everything in-between to
                make brands successful. I love creating and learning every single day! Lets go!
                
              </h5>
              <p className="p-1 justify-content-center text-center">
                I grew up loving to create and customize. Everything to me
                needed to be personalized by me for me. Every video game
                character, item, or whatever needed to represent and express who
                I was as an individual. But what fascinated me the most was
                digital art and design. My motto is "what about the end-user"
                While my mom was attending college, she had a few classmates
                introduce me to graphic design. From there,
                I was intrigued in designing everything from ads, shirts and
                anything else that I thought was cool. Back then I was just
                the beginning that sparked the flames that ignighted my passion for the arts!
              </p>
            </div>
            <div className="col-lg-4 order-lg-1 about-image">
              <div data-aos="fade-up">
                <img
                  className="img-fluid w-100 shadow circular-mask"
                  src={IMGPROFILE}
                  alt="Tony's Profile Picture"
                />
              </div>
            </div>
          </div>
        </div>
        <Cards></Cards>
        <h2 className="mb-5 justfiy-content-center text-center continue">
          Let's continue with some more <span className="strong">art</span>
        </h2>
      </div>
    </>
  );
};

export default About;
