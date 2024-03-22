import "../signInPage/signin.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccountCreationPage.css";
import mitaanLogo from "../images/Group 3371.svg";
import birdImg from "../images/Group 3469.svg";

const AccountCreationComponent = () => {
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
          <form className="DetailsFormContainer">
            <p className="FormTitle">Create your account here..</p>
            <div className="DetailsInputsContainer">
              <div className="leftContainerInputs">
                <label className="Formlabelcss" for="nameInput">
                  Your Name
                </label>
                <input
                  type="text"
                  id="nameInput"
                  placeholder="Full Name (As per Aadhaar)"
                  className="inputcss"
                />
                <label className="Formlabelcss" for="phoneNumberInput">
                  Mobile Number
                </label>
                <input
                  type="number"
                  maxlength="10"
                  id="phoneNumberInput"
                  placeholder="Enter mobile number (As per Aadhaar)"
                  className="inputcss"
                />
                <label className="Formlabelcss" for="adhaarNumInput">
                  Aadhaar Number
                </label>
                <input
                  maxlength="12"
                  type="number"
                  id="adhaarNumInput"
                  placeholder="Enter your Aadhaar"
                  className="inputcss"
                />
              </div>

              <div className="rightContainerInputs">
                <label className="Formlabelcss" for="DOBInput">
                  Date of birth
                </label>
                <input
                  type="text"
                  id="DOBInput"
                  placeholder="DD | MM | YYYY"
                  className="inputcss"
                />
                <label className="Formlabelcss" for="PINInput">
                  Set 6 digit security PIN *
                </label>
                <input
                  type="number"
                  id="PINInput"
                  placeholder="Enter your PIN"
                  className="inputcss"
                />
                <label className="Formlabelcss" for="EmailInput">
                  Email ID
                </label>
                <input
                  type="email"
                  id="EmailInput"
                  placeholder="Enter your valid email ID"
                  className="inputcss"
                />
              </div>
            </div>

            <div className="radioContainer">
              <input
                className="radioButtonCss"
                type="radio"
                name="gender"
                value="male"
              />
              Male
              <input
                className="radioButtonCss"
                type="radio"
                name="gender"
                value="female"
              />{" "}
              Female
              <input
                className="radioButtonCss"
                type="radio"
                name="gender"
                value="other"
              />{" "}
              Other
            </div>
            <button type="submit" className="buttonCss ProceedButton">
              Proceed
            </button>
            <p className="signUpText">
              Already have an account?{" "}
              <a href="javascript:void(0);" className="signUpcss">
                Sign In
              </a>
            </p>
            <p className="BottomText">
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

export default AccountCreationComponent;
