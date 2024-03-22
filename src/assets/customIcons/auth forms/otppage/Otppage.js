import '../signInPage/signin.css'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './otppage.css'
import mitaanLogo from '../images/Group 3371.svg'
import birdImg from '../images/Group 3469.svg'



const Otppage = () =>{
    return(
        
      <div className="verifyOtpContentContainer">
  
   <div className='formandImgContainer'>
    <div className='leftBgSvgContainer'>      <img alt = "bird" className="logoCSS bgsvgImg leftBgImg"  src={birdImg}/>


    </div>
    <div className='formandLogoContainer'>
    <img alt = "logo" className="logoCSS" src={mitaanLogo}/>
    <form className="ContentContainer">
      <div className='otpFormContainer'>
      <p className="signinText">OTP verification</p>
      
      <p className="labelcss">Mitaan app has sent you an OTP to your <br/>
registered mobile (xxxxxx9999)</p>
<form className="otpForm" >  
    <input className="otpInputField" maxlength='1' type="text" id="digit-1" name="digit-1" data-next="digit-2" />  
    <input className="otpInputField" maxlength='1'   type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />  
    <input className="otpInputField" maxlength='1'   type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />  
    <input className="otpInputField" maxlength='1'   type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />  
   </form>

      <button className="formText">Resend OTP in 09 seconds</button>
      <button type="submit" className='buttonCss'>Verify OTP</button>
      <p className="signUpText resendText">Did not get the OTP? <a href='javascript:void(0);' className="signUpcss">Resend OTP</a></p>

      </div>
      <p className="tctext">By signing in, you are agreeing with our<a className="signUpcss" href="javascript:void(0);"> Terms & Conditions</a></p>
      
    </form>

    </div>
    <div className='rightBgSvgContainer'>
      <img alt = "bird" className="logoCSS bgsvgImg rightTopBgImg" src={birdImg}/>
      <img alt = "bird" className="logoCSS bgsvgImg rightBottomBgImg" src={birdImg}/>
    </div>
    
    </div>

   </div>
    )
}

export default Otppage