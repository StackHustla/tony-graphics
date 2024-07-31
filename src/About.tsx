import IMG4 from "./assets/IMG4.jpg";
import InuDemo from "./assets/InuDemo-01.webp";

const About = () => {
  return (
    <>
    <div className="mb-5" id="about"></div>
    <div className="mb-4"><br /></div>
      <div className="container row-gap-3 mb-5">
        <div className="row">

        <div className="col-8 mb-3">
          <h5 className="p-5 column justify-content-center text-center">
            I've been creating graphics for over 10 years. Thousands of
            projects. Kind of hard to choose a few. Will update weekly!
          </h5>
        </div>
        <div className="col-4 mb-3">
          <div className="" data-aos="fade-up">
            <img src={InuDemo} alt="" />
          </div>
        </div>
        </div>
      </div>
      <div className="mb-2"><br /></div>
      <h2 className="mb-5 justfiy-content-center text-center">Let's continue with some more <span className="strong">art</span></h2>
    </>
  );
};

export default About;
