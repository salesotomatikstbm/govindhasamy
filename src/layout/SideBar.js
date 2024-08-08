import { Fragment } from "react";
import { sidebarToggle } from "../utils";

const SideBar = () => {
  return (
    <Fragment>
      <div className="form-back-drop" onClick={() => sidebarToggle()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sidebarToggle()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>நியமனம் பெறவும்</h4>
          </div>
          {/* Appointment Form */}
          <div className="appointment-form">
            <form onSubmit={(e) => e.preventDefault()} method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="பெயர்"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="மின்னஞ்சல் முகவரி"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="செய்தி" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  இப்போது சமர்ப்பிக்கவும்
                </button>
              </div>
            </form>
          </div>
          {/* Social Icons */}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
          {/* Contact Email */}
          <div className="contact-email">
            <p>மின்னஞ்சல்: <a href="mailto:garun0890@gmail.com">garun0890@gmail.com</a></p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SideBar;
