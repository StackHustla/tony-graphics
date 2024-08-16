/* IMAGES */
import "aos/dist/aos.css";
import AOS from "aos";

import Backdoor from "./assets/Backdoor.png";
import BloomBloom from "./assets/BloomBloom.png";
import FromYourLove from "./assets/FromYourLove.png";
import Denial from "./assets/Denial.webp";
import ABSPanel from "./assets/ABSPanel.png";
import AppBrand from "./assets/AppBrand.jpg";
import IMG4 from "./assets/IMG4.jpg";
import IMG5 from "./assets/IMG5.jpg";
import IMG6 from "./assets/IMG6.jpg";
import IMG7 from "./assets/IMG7.jpg";
import IMG8 from "./assets/IMG8.jpg";
import IMG9 from "./assets/IMG9.jpg";
import IMG10 from "./assets/IMG10.jpg";
import IMG11 from "./assets/IMG11.jpg";
import IMG12 from "./assets/IMG12.jpg";
import IMG13 from "./assets/IMG13.webp";
import IMG14 from "./assets/IMG14.webp";
import IMG15 from "./assets/IMG15.webp";
import Choso from "./assets/Choso_.gif";
import IpMan from "./assets/IpMan_.webp";
import Champloo from "./assets/Champloo_.webp";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./About";

type GalleryItem = {
  id: number;
  imgSrc: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
  }, []);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const data: GalleryItem[] = [
    {
      id: 1,
      imgSrc: BloomBloom,
    },
    {
      id: 2,
      imgSrc: FromYourLove,
    },
    {
      id: 3,
      imgSrc: Backdoor,
    },
    {
      id: 4,
      imgSrc: IMG4,
    },
    {
      id: 5,
      imgSrc: IMG5,
    },
    {
      id: 6,
      imgSrc: IMG6,
    },
  ];

  return (
    <>
      <div className="container d-flex justify-content-center text-center">
        <h4 className="">
          Can you believe this website was made by me? Check out my Front-end
          Website{" "}
          <span>
            <strong>
              <a
                className=""
                target="blank"
                rel="noopener noreferrer"
                href="https://stackhustla.github.io/TonyTCreates.github.io/"
                style={{ fontFamily: "inherit" }}
              >
                here!
              </a>{" "}
            </strong>
          </span>
        </h4>
      </div>
      <div className="container justfiy-content-center text-center text-danger">
        <p>
          Still under construction over here. Some things might not look right
          for a bit.
        </p>
      </div>
      {/* Header img */}
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 " data-aos="fade-up">
            <div
              className="gallery-item"
              onClick={() => handleImageClick(Choso)}
            >
              <img className="img-fluid w-100 shadow " src={Choso} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 " data-aos="fade-up">
            <div
              className="gallery-item"
              onClick={() => handleImageClick(IpMan)}
            >
              <img className="img-fluid w-100 shadow " src={IpMan} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 " data-aos="fade-up">
            <div
              className="gallery-item"
              onClick={() => handleImageClick(Champloo)}
            >
              <img className="img-fluid w-100 shadow " src={Champloo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4"></div>
        <div className="col-12 mb-4 " data-aos="fade-up">
          <div
            className="gallery-item"
            onClick={() => handleImageClick(Denial)}
          >
            <img className="img-fluid w-100 shadow " src={Denial} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-md-4 mb-4" data-aos="fade-up">
              <div
                className="gallery-item"
                onClick={() => handleImageClick(item.imgSrc)}
              >
                <img
                  className="img-fluid shadow"
                  src={item.imgSrc}
                  alt={"Gallery item ${item.id}"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <About />
      <div className="container">
        <div className="col-12 mb-3" data-aos="fade-up">
          <div className="gallery-item" onClick={() => handleImageClick(IMG9)}>
            <img className="img-fluid w-100 shadow" src={IMG9} alt="" />
          </div>
        </div>

        <div className="col-12 mb-3">
          <div
            className="gallery-item"
            data-aos="fade-up"
            onClick={() => handleImageClick(ABSPanel)}
          >
            <img className="img-fluid w-100 shadow" src={ABSPanel} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3" data-aos="fade-up">
            <div
              className="gallery-item "
              onClick={() => handleImageClick(IMG7)}
            >
              <img className="img-fluid w-100 shadow" src={IMG7} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3" data-aos="fade-up">
            <div
              className="gallery-item"
              onClick={() => handleImageClick(IMG8)}
            >
              <img className="img-fluid w-100 shadow" src={IMG8} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-12 mb-3">
          <div
            className="gallery-item"
            data-aos="fade-up"
            onClick={() => handleImageClick(IMG15)}
          >
            <img className="img-fluid w-100 shadow" src={IMG15} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3" data-aos="fade-up">
            <div
              className="gallery-item "
              onClick={() => handleImageClick(IMG13)}
            >
              <img className="img-fluid w-100 shadow" src={IMG13} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3" data-aos="fade-up">
            <div
              className="gallery-item"
              onClick={() => handleImageClick(IMG14)}
            >
              <img className="img-fluid w-100 shadow" src={IMG14} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4 mb-3" data-aos="fade-up">
            <div
              className="gallery-item "
              onClick={() => handleImageClick(IMG11)}
            >
              <img className="img-fluid w-100 shadow" src={IMG11} alt="" />
            </div>
          </div>
          <div className="col-4 mb-3" data-aos="fade-up">
            <div
              className="gallery-item "
              onClick={() => handleImageClick(IMG10)}
            >
              <img className="img-fluid w-100 shadow" src={IMG10} alt="" />
            </div>
          </div>
          <div className="col-4 mb-3" data-aos="fade-up">
            <div
              className="gallery-item"
              onClick={() => handleImageClick(IMG12)}
            >
              <img className="img-fluid w-100 shadow" src={IMG12} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* applab */}
      <div className="container">
        <div className="col-12 mb-3" data-aos="fade-up">
          <div
            className="gallery-item"
            onClick={() => handleImageClick(AppBrand)}
          >
            <img className="img-fluid w-100 shadow" src={AppBrand} alt="" />
          </div>
        </div>
      </div>
      <div className="container d-flex m-2 justify-content-center text-center">
        <h5>
          I've been creating graphics for over 10 years. Thousands of projects.
          Kind of hard to choose a few. Will update weekly!
        </h5>
      </div>
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          onClick={handleClose}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  className="img-fluid w-100"
                  src={selectedImage}
                  alt="Enlarged"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
