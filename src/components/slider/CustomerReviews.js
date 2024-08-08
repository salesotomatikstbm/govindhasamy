import { Fragment, useState } from "react";
import Slider from "react-slick";

const CustomerReviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const props = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };

  return (
    <Fragment>
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title mb-50">
          <span className="sub-title mb-20">வாடிக்கையாளர் விமர்சனங்கள்</span>
          <h2>விவசாயம் தொடர்பான மதிப்பிடுகள் (விமர்சனங்கள்)</h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          style={{ backgroundSize: `${slideIndex}% 100%` }}
        >
          <span className="slider__label sr-only">50% முடிந்தது</span>
        </div>

        <Slider {...props} className="feedback-active mt-20">
          <div className="feedback-item">
            <p>
              "விவசாயம் தொடர்பான சேவைகள் மிக நன்று. நாங்கள் உழவிற்கான உபகரணங்கள் மற்றும் சேவைகளில் நிச்சயமாக நம்பிக்கையுடன் செயல்படுகிறோம். இவர்கள் அளித்த சேவைகள் நிச்சயமாக சிறந்தவை."
            </p>
            <div className="feedback-author">
              {/* <img src="assets/images/reviews/fb-author1.png" alt="Author" />
              <div className="title">
                <h4>ரமेश் குமார்</h4>
                <span>விவசாயி</span>
              </div> */}
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              "விவசாய உபகரணங்கள் மற்றும் சேவைகள் மிகவும் நன்றாக இருக்கின்றன. இவர்கள் வழங்கும் சேவைகளால் நாங்கள் மிகவும் சீராகவே செயல்படுகிறோம்."
            </p>
            <div className="feedback-author">
              {/* <img src="assets/images/reviews/fb-author1.png" alt="Author" />
              <div className="title">
                <h4>சங்கரன் சுதாகர்</h4>
                <span>விவசாயம் மற்றும் சேவை அனுபவம்</span>
              </div> */}
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              "இந்த விவசாய சேவைகள் மிகவும் உபயோகமாகவும், தரமானவையாகவும் உள்ளன. நாங்கள் எந்தச் சிக்கலுக்கும் சிக்கலாகவே அடியெடுத்து நின்றோம்."
            </p>
            <div className="feedback-author">
              {/* <img src="assets/images/reviews/fb-author1.png" alt="Author" />
              <div className="title">
                <h4>சங்கரன் ராஜா</h4>
                <span>விவசாய அணுக்கர்</span>
              </div> */}
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default CustomerReviews;
