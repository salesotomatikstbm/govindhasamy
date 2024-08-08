import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";

const BlogGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"புகைப்படங்கள்"} />
      <section className="news-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center blog-grid">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">உழவு</span>
                  <h4>
                    <Link href="/blog-details">
                      உழவுத் தொழிலின் முக்கியத்துவம்
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
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
                    <b>28</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பரம்பு ஓட்டுதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பரம்பு ஓட்டுதலில் புதிய நவீனமுறை
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
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
                    <b>30</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பார் ஓட்டுதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பார் ஓட்டுதல் தொழில்நுட்பத்தின் அடிப்படை
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news4.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பார்ஓதுக்குதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பார்ஓதுக்குதல் முறையில் புதிய கண்டுபிடிப்புகள்
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news5.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பாத்தி ஓட்டுதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பாத்தி ஓட்டுதலில் முன்னணி அறிவியல் கண்டுபிடிப்புகள்
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news6.jpg" alt="News" />
                  <span className="date">
                    <b>09</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">உழவு</span>
                  <h4>
                    <Link href="/blog-details">
                      உழவின் வளர்ச்சிக்கு புதிய வழிமுறைகள்
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news7.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பரம்பு ஓட்டுதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பரம்பு ஓட்டுதலின் பயன்கள் மற்றும் நன்மைகள்
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news8.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பார் ஓட்டுதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பார் ஓட்டுதல் தொழில்நுட்பம்: ஒரு ஆய்வு
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news9.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">பார்ஓதுக்குதல்</span>
                  <h4>
                    <Link href="/blog-details">
                      பார்ஓதுக்குதல் முறையின் சிறப்பம்சங்கள்
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      மேலும் படிக்க <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination justify-content-center flex-wrap">
            <Pagination
              paginationCls={".blog-grid .col-xl-4"}
              defaultSort={6}
            />
          </ul>
        </div>
        <div className="circle-drop" />
      </section>
    </Layout>
  );
};

export default BlogGrid;
