import "../signInPage/signin.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPin.css";
import mitaanLogo from "../images/Group 3371.svg";
import birdImg from "../images/Group 3469.svg";

const ForgotPinComponent = () => {
  return (
    <div className="verifyOtpContentContainer">
      <div className="formandImgContainer">
        <div className="leftBgImgContainer">
          {" "}
          <img
            alt="bird"
            className="logoCSS bgsvgImg leftBgImg"
            src={birdImg}
          />
        </div>
        <div className="formandLogoContainer">
          <img alt="logo" className="logoCSS" src={mitaanLogo} />
          <form className="ContentContainer">
            <div className="DOBFormContainer">
              <p className="signinText">Forgot security PIN?</p>

              <label className="labelcss" for="adhaarInput">
                Enter aadhaar
              </label>
              <input
                type="number"
                id="adhaarInput"
                placeholder="Aadhaar/ Mobile Number*"
                className="inputcss"
              />

              <label className="labelcss" for="adhaarInput">
                Verify your Date of Birth*
              </label>
              <form className="DOBform">
                <input
                  className="DateInputFields"
                  placeholder="Date"
                  type="number"
                  min="1"
                  max="31"
                />
                <input
                  className="DateInputFields"
                  placeholder="Month"
                  type="number"
                  min="1"
                  max="12"
                />
                <input
                  className="DateInputFields"
                  placeholder="Year"
                  type="number"
                  min="1900"
                  max="9999"
                />
              </form>

              <p className="DOBformText">
                Please enter your date of birth as per your account
              </p>

              <button type="submit" className="buttonCss">
                Next
              </button>
            </div>
            <p className="tctext">
              By signing in, you are agreeing with our
              <a className="signUpcss" href="javascript:void(0);">
                {" "}
                Terms & Conditions
              </a>
            </p>
          </form>
        </div>
        <div className="rightBgImgContainer">
          <img
            alt="bird"
            className="logoCSS bgsvgImg rightTopBgImg"
            src={birdImg}
          />
          <img
            alt="bird"
            className="logoCSS bgsvgImg rightBottomBgImg"
            src={birdImg}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPinComponent;
