import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">
                உழவு சேவைகளின் முழுமையான ஆதரவு
                </span>
                <h2>எங்களின் &amp;  சேவைகள்</h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>
                எங்களிடம் விவசாயம் சம்பந்தப்பட்ட அனைத்து சேவைகளும் செய்து தரப்படும். சிறந்த விளைவுகளைப் பெற நாங்கள் உங்களுக்கு முழுமையான ஆதரவை வழங்குகிறோம்.

                </p>
              </div>
            </div>
          </div>
          <div className="category-wrap">
            <div className="category-item wow fadeInUp delay-0-3s">
              <div className="icon">
                <img src="assets/images/category/icon1.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">உழவு</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <img src="assets/images/category/icon2.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">பரம்பு ஓட்டுதல்</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-5s">
              <div className="icon">
                <img src="assets/images/category/icon3.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">பார் ஓட்டுதல்</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <img src="assets/images/category/icon4.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">பாத்தி ஓட்டுதல்</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-7s">
              <div className="icon">
                <img src="assets/images/category/icon5.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">மாட்டுவண்டி சேவை</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* About Section Start */}
      <section className="about-section pt-85 rpt-55 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images wow fadeInLeft delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="assets/images/about/about1.jpg" alt="About" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/about/about2.jpg" alt="About" />
                    <img src="assets/images/about/about3.jpg" alt="About" />
                  </div>
                </div>
                <div className="offer">
                  <img src="assets/images/shapes/organic.png" alt="Offer" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rpt-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">நிறுவனம் பற்றிய தகவல்</span>
                  <h2>அனுபவம் மற்றும் அர்ப்பணிப்பு</h2>
                </div>
                <Tab.Container defaultActiveKey={"agriculture"}>
                  <Nav className="nav jusctify-content-between">
                    <li>
                      <Nav.Link
                        eventKey="agriculture"
                        className="nav-link"
                        data-toggle="tab"
                        href="#agriculture"
                      >
                        <i className="flaticon-spa" />
                        <h4>
                        விவசாய 
                          <br />
                          &amp; சேவைகள்
                        </h4>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        eventKey="vegetables"
                        className="nav-link"
                        data-toggle="tab"
                        href="#vegetables"
                      >
                        <i className="flaticon-spa" />
                        <h4>
                        பழம்  &amp; காய்
                          <br />
                          சேவைகள்
                        </h4>
                      </Nav.Link>
                    </li>
                  </Nav>
                  <Tab.Content className="tab-content pt-25">
                    <Tab.Pane className="tab-pane fade" eventKey="agriculture">
                      <p>
                      விவசாயத் துறையின் தேவைகளைப் புரிந்துகொண்டு, உழவர்களுக்கு மேலதிக உதவிகளை வழங்குவதற்காக 40 ஆண்டுகளாக நிபுணத்துவம் பெற்ற அனுபவம் உடையது. எங்கள் சேவைகள், சீரான தரம் மற்றும் வாடிக்கையாளர் திருப்தி என்பவற்றில் நாங்கள் பெருமைப்படுகிறோம்.    </p>
                      <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>கோவிந்தசாமி  சி</h4>
                          <span>உரிமையாளர் &amp; நிர்வாக இயக்குனர்</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="vegetables">
                      <p>
                        Charms of pleasure of the moment so blinded by desire,
                        that they cannot foresee the pain On the other hand we
                        denounce with righteous indignation and dislike men who
                        are beguiled and demoralized by the
                      </p>
                      <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>Russell J. Knoll</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="sub-title">25% தள்ளுபடி</span>
                  <h4> உழவு சேவைகள்</h4>
                  <p>
                  உங்கள் நிலத்திற்கு சிறந்த உழவு சேவைகள்</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                    தொடர்புக்கு <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="sub-title">15% தள்ளுபடி</span>
                  <h4>பார் ஓட்டுதல்</h4>
                  <p>உங்கள் நிலத்திற்கு சிறந்த பார் ஓட்டுதல் சேவைகள்</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                    தொடர்புக்கு  <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="sub-title">10% தள்ளுபடி</span>
                  <h4>பாத்தி ஓட்டுதல்</h4>
                  <p>உங்கள் நிலத்திற்கு சிறந்த பாத்தி ஓட்டுதல் சேவைகள்</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                    தொடர்புக்கு <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}
      {/* Product Section Start */}
      <section className="product-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">
            பழம் மற்றும் காய்கறி விற்பனை சேவைகள்
            </span>
            <h2>உயர்தர பழம் &amp;  காய்கறிகள்</h2>
          </div>
          <Slider {...productActive} className="product-active">
            <div className="product-item wow fadeInUp delay-0-2s">
              <span className="offer">10% தள்ளுபடி / கிலோ</span>
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">வெண்டைக்காய்</Link>
                </h5>
                {/* <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-3s">
              <div className="image">
                <img src="assets/images/products/product2.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">கத்தரிக்காய்</Link>
                </h5>
                {/* <span className="price">
                  <span>49.58</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              {/* <span className="offer bg-red">sale</span> */}
              <div className="image">
                <img src="assets/images/products/product3.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">முருங்கைக்காய்</Link>
                </h5>
                {/* <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-5s">
              <span className="offer">10% தள்ளுபடி / கிலோ</span>
              <div className="image">
                <img src="assets/images/products/product4.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">சுண்டக்காய்</Link>
                </h5>
                {/* <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/products/product5.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">கருவேப்பிலை</Link>
                </h5>
                {/* <span className="price">
                  <span>205</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-7s">
              <span className="offer">10% தள்ளுபடி / கிலோ</span>
              <div className="image">
                <img src="assets/images/products/product6.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">தக்காளி</Link>
                </h5>
                {/* <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span> */}
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              <span className="offer">10% தள்ளுபடி / கிலோ</span>
              <div className="image">
                <img src="assets/images/products/product7.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">வெங்காயம்</Link>
                </h5>
                {/* <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span> */}
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Product Section End */}
      {/* Video Area Start */}
      <div className="video-area">
        <div className="container">
          <div
            className="video-inner wow fadeInUp delay-0-2s"
            style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
          >
            <i className="flaticon-leaf-1" />
            <span className="video-text">வீடியோக்களைப் பார்வையிடவும்</span>
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area End */}
      {/* Special Offer Start */}
      <section className="special-offer bg-lighter pt-250 pb-80">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="sub-title mb-20">சிறப்பு தள்ளுபடி</span>
            <h2>இந்த மாதத்தின் சிறப்பு சலுகை</h2>
          </div>
          <p>
          இந்த மாதத்திற்கு நிச்சயமாக வழங்கப்படும் சிறப்பு சலுகைகளைப் பெற, இப்போது எங்களை தொடர்பு கொள்ளுங்கள்!
          </p>
          <MunfimCountdown />
          <div className="count-down-btns mt-10">
            <Link href="/shop-grid">
              <a className="theme-btn">
              தொலைபேசி<i className="fas fa-angle-double-right" />
              </a>
            </Link>
            <Link href="/">
              <a className="theme-btn style-two">
              மின்னஞ்சல் <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />
        <img
          className="special-offer-left"
          src="assets/images/offers/offer-left.png"
          alt="Offer"
        />
        <img
          className="special-offer-right"
          src="assets/images/offers/offer-right.png"
          alt="Offer"
        />
      </section>
      {/* Special Offer End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">எல்லா ஆதரவுகளுக்கும்</span>
                  <h3>எங்கள் தரமான சேவையைப் பெறுங்கள்</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                  தொலைபேசி<i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
      <section className="gallery-area pt-130 rpt-100">
        <PhotoGallery />
      </section>
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-50 rpt-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="assets/images/reviews/feedback-right.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="assets/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Section End */}
      {/* News Section Start */}
      <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
  <div className="container">
    <div className="section-title text-center mb-60">
      <span className="sub-title mb-20">உருவாக்கமானது</span>
      <h2>சமீபத்திய விவசாய செய்திகள் மற்றும் வலைப்பதிவுகள்</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-6">
        <div className="news-item wow fadeInUp delay-0-2s">
          <div className="image">
            <img src="assets/images/news/news1.jpg" alt="News" />
            <span className="date">
              <b>25</b> ஜூலை
            </span>
          </div>
          <div className="content">
            <span className="sub-title">விவசாயம்</span>
            <h4>
              <Link href="/blog-details">
                நிலத்தடி நீர்மட்டம் மற்றும் அதன் விவசாயத்தில் பாதிப்புகள்
              </Link>
            </h4>
            <Link href="/blog-details">
              <a className="read-more">
                மேலும் வாசிக்க <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="news-item wow fadeInUp delay-0-4s">
          <div className="image">
            <img src="assets/images/news/news2.jpg" alt="News" />
            <span className="date">
              <b>25</b> ஜூலை
            </span>
          </div>
          <div className="content">
            <span className="sub-title">விவசாயம்</span>
            <h4>
              <Link href="/blog-details">
                உழவுக்கு தேவையான தரமான மண்ணின் பராமரிப்பு வழிமுறைகள்
              </Link>
            </h4>
            <Link href="/blog-details">
              <a className="read-more">
                மேலும் வாசிக்க <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="news-item wow fadeInUp delay-0-6s">
          <div className="image">
            <img src="assets/images/news/news3.jpg" alt="News" />
            <span className="date">
              <b>25</b> ஜூலை
            </span>
          </div>
          <div className="content">
            <span className="sub-title">அங்கீகார மிளகாய்</span>
            <h4>
              <Link href="/blog-details">
                உழவுக்கு உடனடி தீர்வுகள் மற்றும் அதிர்ச்சி
              </Link>
            </h4>
            <Link href="/blog-details">
              <a className="read-more">
                மேலும் வாசிக்க <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="news-shapes">
    <img
      className="onion"
      src="assets/images/shapes/onion.png"
      alt="Onion"
    />
    <img
      className="two-leaf"
      src="assets/images/slider/two-lear.png"
      alt="Leaf"
    />
    <img
      className="half-leaf"
      src="assets/images/slider/half-leaf.png"
      alt="Leaf"
    />
    <img
      className="leaf-two"
      src="assets/images/shapes/leaf-three.png"
      alt="Leaf"
    />
    <img
      className="leaf-three"
      src="assets/images/shapes/leaf-four.png"
      alt="Leaf"
    />
  </div>
</section>

      {/* News Section End */}
      {/* Client Logo Section Start */}
      {/* <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div> */}
    </Layout>
  );
};
export default Index;
