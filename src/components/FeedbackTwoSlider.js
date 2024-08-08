import Slider from "react-slick";
import { feedbackTwoActive } from "../sliderProps";

const FeedbackTwoSlider = () => {
  return (
    <Slider {...feedbackTwoActive} className="feedback-two-active mt-20">
      <div className="feedback-item style-two wow fadeInUp delay-0-2s">
        <div className="content-image">
          <p>
            "இணையதள வடிவமைப்பு மிகச் சிறந்தது! இது எளிதில் புரிந்துகொள்ளும் மற்றும் செயல்திறனை மேம்படுத்துகிறது."
          </p>
          <div className="image">
            <img
              src="assets/images/reviews/feedback-author1.jpg"
              alt="Author"
            />
            <img
              className="bg"
              src="assets/images/reviews/feedback-author-bg.png"
              alt="Background"
            />
          </div>
        </div>
        <div className="feedback-author">
          <div className="icon">
            <i className="flaticon-quote" />
          </div>
          <div className="title">
            <h4>மைக்கேல் டி. ஃபோர்மேன்</h4>
            <span>சிஇஒ &amp; நிறுவனர்</span>
          </div>
          <div className="ratting">
            <h6>மிகச்சிறந்த தரம்</h6>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
      <div className="feedback-item style-two wow fadeInUp delay-0-4s">
        <div className="content-image">
          <p>
            "இந்த இணையதளத்தின் செயல்திறன் மற்றும் பதிலளிப்பு மிகச் சிறந்தது. அனைத்து சாதனங்களிலும் இதைப் பயன்படுத்துவது எளிது."
          </p>
          <div className="image">
            <img
              src="assets/images/reviews/feedback-author2.jpg"
              alt="Author"
            />
            <img
              className="bg"
              src="assets/images/reviews/feedback-author-bg.png"
              alt="Background"
            />
          </div>
        </div>
        <div className="feedback-author">
          <div className="icon">
            <i className="flaticon-quote" />
          </div>
          <div className="title">
            <h4>கென்நத் எஸ். ஸ்லோசம்</h4>
            <span>வணிக மேலாளர்</span>
          </div>
          <div className="ratting">
            <h6>மிகச்சிறந்த தரம்</h6>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
      <div className="feedback-item style-two wow fadeInUp delay-0-6s">
        <div className="content-image">
          <p>
            "இந்த இணையதளத்தின் வடிவமைப்பு மற்றும் செயல்திறன் மிகவும் சிறந்தது. பயனர் அனுபவம் மிகவும் நன்றாக உள்ளது."
          </p>
          <div className="image">
            <img
              src="assets/images/reviews/feedback-author1.jpg"
              alt="Author"
            />
            <img
              className="bg"
              src="assets/images/reviews/feedback-author-bg.png"
              alt="Background"
            />
          </div>
        </div>
        <div className="feedback-author">
          <div className="icon">
            <i className="flaticon-quote" />
          </div>
          <div className="title">
            <h4>கென்நத் எஸ். ஸ்மித்</h4>
            <span>சிஇஒ &amp; நிறுவனர்</span>
          </div>
          <div className="ratting">
            <h6>மிகச்சிறந்த தரம்</h6>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
      <div className="feedback-item style-two wow fadeInUp delay-0-8s">
        <div className="content-image">
          <p>
            "இந்த இணையதளத்தின் வடிவமைப்பு மற்றும் செயல்திறன் மிகச் சிறந்தது. பயனர் அனுபவம் மேலும் சிறக்கிறது."
          </p>
          <div className="image">
            <img
              src="assets/images/reviews/feedback-author2.jpg"
              alt="Author"
            />
            <img
              className="bg"
              src="assets/images/reviews/feedback-author-bg.png"
              alt="Background"
            />
          </div>
        </div>
        <div className="feedback-author">
          <div className="icon">
            <i className="flaticon-quote" />
          </div>
          <div className="title">
            <h4>கென்நத் எஸ். ஸ்லோசம்</h4>
            <span>வணிக மேலாளர்</span>
          </div>
          <div className="ratting">
            <h6>மிகச்சிறந்த தரம்</h6>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default FeedbackTwoSlider;
