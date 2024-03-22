import "./signin.css";
import "../../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mitaanLogo from "../images/Group 3371.svg";
import birdImg from "../images/Group 3469.svg";

const SignInComponent = () => {
  return (
    <div className="totalContentContainer">
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
          <form className="formContainer">
            <div className="inputsContainer">
              <p className="signinText">Sign In to your account here..</p>

              <label className="labelcss" for="adhaarInput">
                Enter aadhaar/
              </label>
              <input
                type="number"
                id="adhaarInput"
                placeholder="Aadhaar/ Mobile Number*"
                className="inputcss"
              />

              <label className="labelcss" for="adhaarInput">
                Enter 6 digit security PIN*
              </label>
              <input
                type="password"
                id="adhaarInput"
                maxlength="6"
                placeholder="Enter your PIN"
                className="inputcss"
              />
              <button className="formText">Forgot security PIN?</button>
              <button type="submit" className="buttonCss">
                Sign In
              </button>
              <p className="signUpText">
                Do not have an account?{" "}
                <a href="javascript:void(0);" className="signUpcss">
                  Sign Up
                </a>
              </p>
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

export default SignInComponent;
