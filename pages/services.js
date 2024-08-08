import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import Layout from "../src/layout/Layout";

const Services = () => {
  return (
    <Layout>
      <PageBanner pageName={"சேவைகள்"} />
      <section className="who-we-are rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">நாங்கள் யார்</span>
                  <h2>சிறந்த வேளாண்மை சேவைகளை வழங்குபவர்கள்</h2>
                </div>
                <p>
                  நாங்கள் <mark>நல்ல</mark> மற்றும் தன்னிறைவான விவசாய முறைகளைப்
                  பயன்படுத்துகிறோம்.
                </p>
                <ul className="list-style-two pt-10 pb-45">
                  <li>உழவு</li>
                  <li>பரம்பு ஓட்டுதல்</li>
                  <li>பார் ஓட்டுதல்</li>
                  <li>பருத்தி, கரும்பு, சோளம், மரவள்ளிக்கிழங்கு</li>
                  <li>பார் ஒதுக்குதல்</li>
                  <li>பருத்தி, கரும்பு, மஞ்சள்</li>
                  <li>பாத்தி ஓட்டுதல்</li>
                  <li>எள், சோளம், கடலை</li>
                </ul>
                <Link href="/about">
                  <a className="theme-btn style-two">
                    மேலும் அறிக <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="who-we-are-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/who-we-are.png"
                  alt="நாங்கள் யார்"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="who-we-are-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/who-we-are-1.png"
            alt="உருவம்"
          />
          <img
            className="shape-two"
            src="assets/images/team/team-profile-bg.png"
            alt="உருவம்"
          />
        </div>
      </section>
      {/* Who We Are End */}
      {/* What We Provide Section Start */}
      <section className="what-we-provide-two rel z-1 pt-130 rpt-100 pb-115 rpb-55">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">நாங்கள் வழங்குவது</span>
            <h2>விவசாயச் சேவைகள்</h2>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-3 col-md-4">
              <div className="what-we-provide-left wow fadeInUp delay-0-2s">
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon1.png" alt="உருவம்" />
                  </div>
                  <h4>
                    <Link href="/service-details">
                      பருத்தி, கரும்பு, சோளம், மரவள்ளிக்கிழங்கு
                    </Link>
                  </h4>
                  <p>
                    பரம்பு ஓட்டுதல் மற்றும் பார் ஓட்டுதல் மூலம் பயிர்களை
                    விளைவிக்கிறோம்.
                  </p>
                </div>
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon2.png" alt="உருவம்" />
                  </div>
                  <h4>
                    <Link href="/service-details">பருத்தி, கரும்பு, மஞ்சள்</Link>
                  </h4>
                  <p>பார் ஒதுக்குதல் மூலம் பயிர்களை விளைவிக்கிறோம்.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-4">
              <div className="what-we-provide-images rmt-10 rmb-55 pr-0 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/services/what-we-provide-2.png"
                  alt="சேவை"
                />
                <img
                  className="bg"
                  src="assets/images/services/service-center-bg.png"
                  alt="பின்புலம்"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="what-we-provide-right wow fadeInUp delay-0-6s">
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon3.png" alt="உருவம்" />
                  </div>
                  <h4>
                    <Link href="/service-details">எள், சோளம், கடலை</Link>
                  </h4>
                  <p>பாத்தி ஓட்டுதல் மூலம் பயிர்களை விளைவிக்கிறோம்.</p>
                </div>
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon4.png" alt="உருவம்" />
                  </div>
                  <h4>
                    <Link href="/service-details">உழவு</Link>
                  </h4>
                  <p>
                    மண்ணை உழுவுதல் மற்றும் பயிர்களை நன்கு வளர்க்க உதவுகிறோம்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ww-provide-shapes">
          <img
            className="shape-two"
            src="assets/images/shapes/ww-provide2.png"
            alt="உருவம்"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/ww-provide3.png"
            alt="உருவம்"
          />
        </div>
      </section>
      {/* What We Provide Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section-two rel z-2 text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="உருவம்"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="உருவம்"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="உருவம்"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="உருவம்"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="உருவம்"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="உருவம்"
          />
        </div>
      </div>
      {/* Client Logo Section End */}
      {/* Team Profile Section Start */}
      <section className="team-profile rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-65 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/team/team-profile-2.jpg"
                  alt="சுயவிவரம்"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">
                    திறமைகள் மற்றும் அனுபவம்
                  </span>
                  <h2>
                    நாங்கள் விவசாயத்துக்கான நிபுணர்கள் மற்றும் அனுபவம்
                    கொண்டவர்கள்
                  </h2>
                </div>
                <p>
                  மண்ணின் மகிமையைப் பெருக்கிப் பாதுகாக்கும் நிலநடுக்க முறைகள்
                  மற்றும் தன்னிறைவான விவசாய முறைகளில் நிபுணத்துவம் பெற்றவர்கள்.
                </p>
                <div className="team-skill-item-wrap">
                  <div className="team-skill-item">
                    <ProgressBar value={75} color="#76a713" />
                    <h4>தகவல் தொழில்நுட்பம்</h4>
                  </div>
                  <div className="team-skill-item">
                    <ProgressBar value={90} color="#76a713" />
                    <h4>நவீன விவசாயம்</h4>
                  </div>
                  <div className="team-skill-item">
                    <ProgressBar value={69} color="#76a713" />
                    <h4>நோய்த்தொற்றியற்ற விளை பொருட்கள்</h4>
                  </div>
                </div>
                <Link href="/about">
                  <a className="theme-btn style-two mt-25">
                    மேலும் அறிக <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Profile Section End */}
      {/* Customer Reviews Section Start */}
      <section className="customer-reviews pt-130 rpt-100 pb-115 rpb-85 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-70">
            <span className="sub-title mb-20">வாடிக்கையாளர் மதிப்பீடுகள்</span>
            <h2>எங்கள் வாடிக்கையாளர்களின் கருத்துகள்</h2>
          </div>
          <CustomerReviews />
        </div>
      </section>
      {/* Customer Reviews Section End */}
    </Layout>
  );
};

export default Services;
