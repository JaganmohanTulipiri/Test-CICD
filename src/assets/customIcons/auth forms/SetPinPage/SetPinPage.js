import "../signInPage/signin.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SetPinPage.css";
import mitaanLogo from "../images/Group 3371.svg";
import birdImg from "../images/Group 3469.svg";

const SetPinComponent = () => {
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
          <img alt="logo" className="logoCSS mainLogo" src={mitaanLogo} />
          <form className="ContentContainer">
           <div className="OtpFormContainer">
              <p className="signinText">Set security PIN?</p>

               <p className="PinText">
                6 digit PIN provides extra security to your account with
                two-factor authentication.
              </p>
              <label className="PinLabel" for="PinInput">
                Enter 6 digit security PIN*
              </label>
              <input
                type="password"
                id="PinInput"
                placeholder="Enter new PIN"
                className="OtpinputEl inputcss"
              />

              <button type="submit" className="buttonCss SetPinButton">
                Submit
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

export default SetPinComponent;