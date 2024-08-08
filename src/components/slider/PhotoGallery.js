import Link from "next/link";
import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
      <Fragment>
        {!this.props.noHeader && (
          <div className="container">
            <div className="gallery-header mb-35">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="section-title mb-25">
                    <span className="sub-title mb-15">புகைப்படக் கல்லரி</span>
                    <h2>விவசாய புகைப்படக் கல்லரி</h2>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-right">
                  <div className="slider-arrows mb-25">
                    <button
                      onClick={this.previous}
                      className="gallery-prev slick-arrow"
                    >
                      <i className="fas fa-arrow-left" />
                    </button>
                    <button
                      onClick={this.next}
                      className="gallery-next slick-arrow"
                    >
                      <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container-fluid">
          <Slider
            {...settings}
            ref={(c) => (this.slider = c)}
            className="gallery-active"
          >
            <div className="gallery-item wow fadeInUp delay-0-2s">
              <img src="assets/images/gellery/gallery1.jpg" alt="Gallery" />
              <div className="gallery-over">
                <div className="content">
                  <h4>சேர்ந்த பயிர்கள்</h4>
                  <p>சிறந்த நிலப் பயிர்கள்</p>
                </div>
                <Link href="/portfolio-details">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="gallery-item big-item wow fadeInUp delay-0-4s">
              <img src="assets/images/gellery/gallery2.jpg" alt="Gallery" />
              <div className="gallery-over">
                <div className="content">
                  <h4>பழங்கள் மற்றும் காய்கறிகள்</h4>
                  <p>பராமரிப்பு மற்றும் மேம்பாடு</p>
                </div>
                <Link href="/portfolio-details">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="gallery-item wow fadeInUp delay-0-6s">
              <img src="assets/images/gellery/gallery3.jpg" alt="Gallery" />
              <div className="gallery-over">
                <div className="content">
                  <h4>விவசாய உபகரணங்கள்</h4>
                  <p>உதவிக்கான உபகரணங்கள்</p>
                </div>
                <Link href="/portfolio-details">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="gallery-item wow fadeInUp delay-0-8s">
              <img src="assets/images/gellery/gallery4.jpg" alt="Gallery" />
              <div className="gallery-over">
                <div className="content">
                  <h4>உறுப்பு சேவைகள்</h4>
                  <p>நிலம் பராமரிப்பு</p>
                </div>
                <Link href="/portfolio-details">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </Fragment>
    );
  }
}
