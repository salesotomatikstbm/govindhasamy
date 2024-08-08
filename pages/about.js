import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"எங்கள் குறித்தது"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">நிறுவனத்தினைப் பற்றிச் சொல்லுங்கள்</span>
                  <h2>உழவின் முக்கிய துறைகள் மற்றும் செயல்பாடுகள்</h2>
                </div>
                <p>
                  எங்கள் நிறுவனம் விவசாயத் துறையில் சிறப்பு வாய்ந்தது. பின்வரும்
                  முக்கியத் துறைகளை நாங்கள் முன்னுரிமையுடன் பின்பற்றுகிறோம்:
                </p>
                <ul>
                <li>
                    <strong>பார் ஓட்டுதல்:</strong> பருத்தி, கரும்பு, சோளம், மரவள்ளிக்கிழங்கு
                  </li>
                                                 <li>
                    <strong>பார் ஒதுக்குதல்:</strong> பருத்தி, கரும்பு, மஞ்சள்
                  </li>
                  <li>
                    <strong>பாத்தி ஓட்டுதல்:</strong> எள், சோளம், கடலை
                  </li>
                  <li>
                    <strong>பரம்பு ஓட்டுதல்:</strong> வயல்
                  </li>
                </ul>

               <div className="row mt-30">
  <div className="col-md-6">
    <div className="about-feature-two">
      <div className="icon">
        <i className="flaticon-wheat-sack" />
      </div>
      <h5>
        <Link href="/service-details">
          விவசாயத்தின் முக்கியம்
        </Link>
      </h5>
    </div>
  </div>
  <div className="col-md-6">
    <div className="about-feature-two">
      <div className="icon">
        <i className="flaticon-fruits" />
      </div>
      <h5>
        <Link href="/service-details">
          விவசாயப் பொருட்கள்
        </Link>
      </h5>
    </div>
  </div>
  <div className="col-md-6">
    <div className="about-feature-two">
      <div className="icon">
        <i className="flaticon-eggs-1" />
      </div>
      <h5>
        <Link href="/service-details">
          பயன்பாட்டு துறைகள்
        </Link>
      </h5>
    </div>
  </div>
  <div className="col-md-6">
    <div className="about-feature-two">
      <div className="icon">
        <i className="flaticon-social-care" />
      </div>
      <h5>
        <Link href="/service-details">
          விவசாய சேவைகள்
        </Link>
      </h5>
    </div>
  </div>
</div>



              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page.jpg"
                  alt="About"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature1.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>அதிக விளைச்சல் தரும் முறை</h4>
                  <p>
                    எங்கள் விவசாய முறைகள் அதிக விளைச்சலுடன், சுருக்கமான நேரத்தில்
                    தரமான விளைவுகளை வழங்குகின்றன.
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    மேலும் வாசிக்க <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>நோக்கிய சேவைகள்</h4>
                  <p>
                    எங்கள் சேவைகள் விவசாயிகளுக்கான நம்பகமான மற்றும் திறமையான
                    தீர்வுகளை வழங்குகிறது.
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    மேலும் வாசிக்க <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>உழவுக்கு தேவையான வளங்கள்</h4>
                  <p>
                    அனைத்து உழவுத் தேவைகளுக்கும் தேவையான வளங்களை நாங்கள்
                    வழங்குகிறோம்.
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    மேலும் வாசிக்க <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}
      {/* Feedback Section Start */}
      <FeedbackTwoSlider />
      {/* Feedback Section End */}
      {/* Client Logo Slider Section Start */}
      <ClientLogoSlider />
      {/* Client Logo Slider Section End */}
      {/* Experience Team Section Start */}
      <ExperienceTeam />
      {/* Experience Team Section End */}
      {/* Photo Gallery Section Start */}
      <PhotoGallery />
      {/* Photo Gallery Section End */}
    </Layout>
  );
};

export default About;
