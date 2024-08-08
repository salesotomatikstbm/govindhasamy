import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 3:
      return <Footer3 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};
const DefaultFooter = () => (
  <footer className="main-footer bg-green text-white">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              கொள்வனவுக்குரிய சிறிய விவரங்களை உள்ளடக்கிய உரையாடல்; விளக்கமாகச் செய்யும் பொழுது
              எங்கள் காட்சி.
            </p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title">தற்காலிக இணைப்புகள்</h4>
            <ul>
              <li>
                <Link href="/about">
                  <a>எங்களைப் பற்றியது</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">ஆவணங்கள்</Link>
              </li>
              <li>
                <Link href="/services">
                  <a>சேவைகள்</a>
                </Link>
              </li>
              <li>
                <Link href="/services">அந்த அமைப்புகள்</Link>
              </li>
              <li>
                <Link href="/portfolio-grid">
                  <a>எங்கள் திட்டங்கள்</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-grid">
                  <a>சிறந்த தயாரிப்புகள்</a>
                </Link>
              </li>
              <li>
                <Link href="/farmers">
                  <a>விவசாயிகள்</a>
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  <a>தொழில்நுட்பம்</a>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  <a>சமீபத்திய செய்திகள்</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">தொடர்பு கொள்ளுங்கள்</Link>
              </li>
              <li>
                <Link href="/service-details">
                  <a>காய்கறிகள்</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">அமைப்புகள் &amp; தனியுரிமை</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">தொடர்பு கொள்ளுங்கள்</h4>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                தொட்டியம் அண்ணாநகர்,சின்னசேலம் வட்டம்,கள்ளக்குறிச்சி மாவட்டம்,
                606 201.
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="tel:+91 9865981850">+91 9865981850</a>
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:garun0890@gmail.com">garun0890@gmail.com</a>
              </li>
            </ul>
            <div className="map-container mt-4">
              <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8061664402244!2d78.66675861536822!3d11.646072592292736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac4e5e0e4b851%3A0x6a2c4a7c7b872e8!2s862%20(%C3%82%C2%B8%C3%82%C2%A0%C3%82%C2%B1%C3%82%C2%B9%C3%82%C2%AD%C3%82%C2%A0%C3%82%C2%B1%C3%82%C2%BF%C3%82%C2%B9%C3%82%C2%B8%C3%82%C2%AD%C3%82%C2%A1%C3%82%C2%B1%C3%82%C2%BF%C3%82%C2%AD%C3%82%C2%B9%20%C3%82%C2%AD%C3%82%C2%B9%C3%82%C2%BF%C3%82%C2%AD%C3%82%C2%B9%20(%C3%82%C2%BF%C3%82%C2%BF%C3%82%C2%A4%C3%82%C2%B9%C3%82%C2%B8%C3%82%C2%A8%C3%82%C2%A9%C3%82%C2%BF%C3%82%C2%A1%C3%82%C2%B1%C3%82%C2%BF%C3%82%C2%A1%C3%82%C2%A0%C3%82%C2%BF%C3%82%C2%BD%C3%82%C2%A9%20(%C3%82%C2%BF%C3%82%C2%BF%C3%82%C2%A0%C3%82%C2%BF%C3%82%C2%BF%C3%82%C2%A4%C3%82%C2%B9%C3%82%C2%AA%C3%82%C2%BF%C3%82%C2%BF%C3%82%C2%AD%C3%82%C2%AE%C3%82%C2%B9%C3%82%C2%BF%C3%82%C2%A8%C3%82%C2%AB%C3%82%C2%AD%C3%82%C2%B9%C3%82%C2%AE)%29!5e0!3m2!1sen!2sin!4v1696214080865!5m2!1sen!2sin" 
                   width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>பதிவுரிமை © 2022 Govindhasamy.</p>
        <ul className="footer-menu">
          <li>
            <Link href="/contact">அமைப்புகள் &amp; தனியுரிமை</Link>
          </li>
          <li>
            <Link href="/faqs">
              <a>சர்வதேசங்கள்</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">கட்டணங்கள்</Link>
          </li>
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);



const Footer3 = () => (
  <footer className="main-footer footer-black text-white">
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-xl-5">
          <div className="row justify-content-between">
            <div className="col-sm-7">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two-white.png"
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  பின்வரும் விலகல்கள்; பயனர்கள் அல்லது பொதுமக்கள் பிரச்சினைகளை
                  வரவேற்கின்றன. தேவைப்படும் கோரிக்கைகள்.
                </p>
                <div className="social-style-two pt-10">
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-youtube" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">தற்காலிக இணைப்புகள்</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>எங்களைப் பற்றியது</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>சேவைகள்</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-grid">
                      <a>எங்கள் திட்டங்கள்</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/farmers">
                      <a>விவசாயிகள்</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      <a>சமீபத்திய செய்திகள்</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>காய்கறிகள்</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget news-widget">
                <h4 className="footer-title">சமீபத்திய செய்திகள்</h4>
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget1.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          உலகளாவிய முறைபாடுகள் பயனர் அனுபவம்
                        </Link>
                      </h6>
                      <span className="name">Westfield மூலம்</span>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget2.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          தொழில்நுட்ப உலகின் புதிய மேம்பாடுகள்
                        </Link>
                      </h6>
                      <span className="name">Westfield மூலம்</span>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget3.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          நவீன மொபைல் செயலி பயனர் அனுபவம்
                        </Link>
                      </h6>
                      <span className="name">Westfield மூலம்</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget contact-widget">
                <h4 className="footer-title">தொடர்பு தகவல்</h4>
                <ul>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    862 அண்ணனகரு (தெரு),
தொட்டியம் (போ),
சின்னசாலேமு (தோ),
கல்லக்குறிச்சி (மா) 606201

                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="tel:+916383791772">+91 63837 91772</a>
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:garun0890@gmail.com">garun0890@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              பதிவுரிமை © 2024 Govindhasamy.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="footer-menu">
              <li>
                <Link href="/contact">அமைப்புகள் &amp; தனியுரிமை</Link>
              </li>
              <li>
                <Link href="/faqs">
                  <a>சர்வதேசங்கள்</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">கட்டணங்கள்</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

