import "../signInPage/signin.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './VerifyOtpPage.css'
import mitaanLogo from '../images/Group 3371.svg'
import birdImg from '../images/Group 3469.svg'


const VerfiyOtpComponent = () => {
  return (
        
    <div className="verifyOtpContentContainer">
  
   <div className='formandImgContainer'>
    <div className='leftBgImgContainer'>      
    <img alt = "bird" className="logoCSS bgsvgImg leftBgImg"  src={birdImg}/>
    </div>
    <div className='formandLogoContainer'>
    <img alt = "logo" className="logoCSS" src={mitaanLogo}/>
    <form className="ContentContainer">
      <div className='OtpFormContainer'>
      <p className="signinText">Verify OTP</p>
      
      <p className="labelcss">UIDAI has sent a temporary OTP to your
mobile ending in ******9999 (valid for 10
mins).</p>
      <input type ="number" id="adhaarInput" placeholder="Enter OTP received on your mobile" className="OtpinputEl inputcss" />

      <button className="formText">Enter OTP</button>
      <button type="submit" className='buttonCss'>Next</button>
      <p className="signUpText resendText">Did not get the OTP? <a href='javascript:void(0);' className="signUpcss">Resend OTP</a></p>
<a className="signUpcss signUpText"> Update Mobile Number</a>
      </div>
      <p className="tctext">By signing in, you are agreeing with our<a className="signUpcss" href="javascript:void(0);"> Terms & Conditions</a></p>
      
    </form>

    </div>
    <div className='rightBgImgContainer'>
      <img alt = "bird" className="logoCSS bgsvgImg rightTopBgImg" src={birdImg}/>
      <img alt = "bird" className="logoCSS bgsvgImg rightBottomBgImg" src={birdImg}/>
    </div>
    
    </div>

   </div>);
  
};

export default VerfiyOtpComponent;
