import TempIMG from "./assets/TempIMG.webp";
import "./About.css";

const About = () => {
  return (
    <>
    {/* Full-width background wrapper */}
      <div className="about-background">
        <div className="mb-5" id="about"></div>
        <div className="mb-4">
          <br />
        </div>
        <div className="container row-gap-3 mb-5 ">
          <div className="row p-5 about-container align-items-center">
            <div className="col-lg-8 mb-1 order-lg-2">
              <h2 className="p-2 justify-content-center text-center">
                Hi I'm Tony, a Senior Graphic Designer and Creative in
                Huntsville, AL.
              </h2>
              <h5 className="p-2 justify-content-center text-center">
                I create brand identities, user interfaces, landing pages,
                websites, social media stories, and everything in-between to
                make brands successful. I also have fun doing so!
              </h5>
              <p className="p-1 justify-content-center text-center">
                I grew up loving to create and customize. Everything to me
                needed to be personalized by me for me. Every video game
                character, item, or whatever needed to represent and express who
                I was as an individual. But what fascinated me the most was
                digital art and design. While my mom was attending college, she
                had a few classmates introduce me to graphic design. From there,
                I was intrigued in designing everything from ads, shirts and
                anything else that I thought was cool. Back then I was just
                learning but that spark ignited a fire in me that continues to
                burn today!
                <br />
                <br />
                I went on to earn a Associates in Graphic Design & Bachelors in
                Software Development at WGU. While I was learning quality design
                practices, I was also expanding my network and learning how to
                manage a freelance business by creating logos and brand
                identities. Furthermore, for Software Development, I learned how
                to utilize full stack development but I love Front End and Web
                solutions. I've landed many big projects and continue to do so
                both locally and globally.
                <br />
                <br />
                Im constantly complimented on my speed and quality when it comes
                to creating and branding ideas. I always strive to learn more
                and so I am constantly learning new tech stacks to bring forth
                any and every idea I can. I continue to do freelance work for a
                wide variety of clients and, most importantly, learn every day
                how to solve new challenges.
              </p>
            </div>
            <div className="col-lg-4 order-lg-1 about-image">
              <div data-aos="fade-up">
                <img
                  className="img-fluid w-100 shadow circular-mask"
                  src={TempIMG}
                  alt="Tony's Profile"
                />
                <h5 className="p-1 justify-content-center text-center"></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <br />
        </div>
        <h2 className="mb-5 justfiy-content-center text-center">
          Let's continue with some more <span className="strong">art</span>
        </h2>
      </div>
    </>
  );
};

export default About;
