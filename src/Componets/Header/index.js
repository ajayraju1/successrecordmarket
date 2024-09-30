import "./index.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark header-container">
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModal3Label">
              Enter Details
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <iframe
              title="Free Samples Google form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSe6QDBbnFbu6mNGkYazj6Jdw7YVqqOZZdTINMHxctaVrcatfw/viewform?embedded=true"
              width="100%"
              height="849"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" className="btn btn-warning text-light">
              Submit
            </button> */}
          </div>
        </div>
      </div>
    </div>

    <div
      className="modal fade"
      id="exampleModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModal3Label">
              Enter Your Details
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-info text-light">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="logo-title-mail-container">
      <div className="navbar-brand m-0 text-center">
        <h5 className="title">SUCCESS RECORD MARKET</h5>
        <p className="title-mail">simonpikesj@gmail.com</p>
      </div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav m-auto">
        <Link
          data-target="#navbarNavAltMarkup"
          data-toggle="collapse"
          className="nav-link"
          to="/"
        >
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link
          data-target="#navbarNavAltMarkup"
          data-toggle="collapse"
          className="nav-link"
          to="/research"
        >
          Research
        </Link>
        <Link
          data-target="#navbarNavAltMarkup"
          data-toggle="collapse"
          className="nav-link"
          to="/products"
        >
          Products
        </Link>
        <Link
          data-target="#navbarNavAltMarkup"
          data-toggle="collapse"
          className="nav-link"
          to="/aboutus"
        >
          About Us
        </Link>
        <Link
          data-target="#navbarNavAltMarkup"
          data-toggle="collapse"
          className="nav-link"
          to="contactus"
        >
          Contact Us
        </Link>
      </div>

      <div className="free-samples-container">
        <button
          // className="free-samples-btn"
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          FREE SAMPLES
        </button>
      </div>
      <button
        // className="free-samples-btn"
        type="button"
        className="btn btn-success ml-2 mt-md-0 mt-2 "
        data-toggle="modal"
        data-target="#exampleModal1"
      >
        BUY NOW
      </button>
    </div>
  </nav>
);

export default Header;
