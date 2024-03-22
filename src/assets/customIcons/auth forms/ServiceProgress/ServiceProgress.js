import React from "react";
import Popup from "reactjs-popup";
import "../Dashboard/dashboardPage.css";
import "./ServiceProgress.css";
import mitaanLogo from "../img/Mitaan.svg";
import applicationLogo from "../img/applicationlogo.svg";
import searchIcon from "../img/search.svg";
import deliveryManImg from "../img/deliveryMan.png";
import calenderIcon from "../img/date-range calender icon.svg";
import TimerIcon from "../img/clockicon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import greenTick from "../img/greenTick.svg";
import BlueFill from "../img/blueDot.svg";
import TimerPic from "../img/timer.svg";

function ServiceProgress() {
  return (
    <>
      <main className="bg-container">
        <nav className="nav-container container-fluid d-flex flex-row justify-content-around align-items-end  pb-3">
          <div className="col-md-2 h-75 d-felx flex-column justify-content-end text-center  px-2  ms-3">
            <img alt="logo" src={mitaanLogo} className="logo h-100 w-100 " />
          </div>
          <div className="col-md-5 d-flex flex-column  px-3 ">
            <h5 className="user-name mb-4">Hi,Raj Kumar!</h5>

            <div
              className="btn-group button-container"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="  btn btn-outline-light text-white   py-1 px-0"
              >
                <strong>
                  <small>SERVICES</small>
                </strong>
              </button>
              <button
                type="button"
                className=" btn btn-outline-light text-white small px-0"
              >
                <strong>
                  <small>APPLIED</small>
                </strong>
              </button>
              <Popup
                trigger={
                  <button
                    type="button"
                    className=" btn btn-outline-light text-white small px-0"
                  >
                    <strong>
                      <small>NOTIFICATIONS</small>
                    </strong>
                  </button>
                }
                position="bottom center"
              >
                <div className="notificationCont">
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                  <p>dummy data</p>
                  <hr></hr>
                </div>
              </Popup>
              <button
                type="button"
                className=" btn btn-outline-light text-white small px-0"
              >
                <strong>
                  <small>PROFILE</small>
                </strong>
              </button>
            </div>
          </div>

          <div className="col-md-3 bg-white d-flex align-items-center  rounded-3  ">
            <img alt="search logo" src={searchIcon} className="px-1 py-2" />
            <input
              className="border-0 bg-transparent text-secondary small "
              placeholder="Search for a service"
            />
          </div>
          <div className="col-md-2 h-75 logo-container d-flex flex-column justify-content-end  ">
            <img alt="logo" src={applicationLogo} className="logo  " />
          </div>
        </nav>
        <footer>
          <div className=" ServiceProgressContainer">
            <h1 className="TitleText mt-2">Applied Services</h1>
            <div className="InnerContainer">
              <p className="ServiceTitle">Income Certificate</p>
              <div className="DeliveryDetailsContainer">
                <div className="TotalDetailsContainer">
                  <div className="DetailsNameImgContainer">
                    <div className="NameDetailsContainer">
                      <img
                        alt="logo"
                        src={deliveryManImg}
                        className="DelManImg"
                      />
                      <div className="ExeDetailsContainer">
                        <h1 className="DelName">Mohan Kumar</h1>

                        <p className="DelName">Arrival By</p>
                        <div className="TimeDateContainer">
                          <img
                            alt="dateIcon"
                            src={calenderIcon}
                            className="DateIcon"
                          />
                          <p className="DateValue">02 April | </p>

                          <img
                            alt="TimerIcon"
                            src={TimerIcon}
                            className="DateIcon"
                          />
                          <p className="DateValue">08 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="DeliveryStatusContainer">
                      <img alt="tick" src={greenTick} className="tickCss" />
                      <h1 className="deliveryUpdate">Out For Delivery</h1>
                    </div>
                  </div>
                  <div className="textAndDotContainer">
                    <img alt="logo" src={BlueFill} className="BlueFillCss" />
                    <h1 className="ReqText">REQUESTED</h1>
                  </div>
                </div>
              </div>
              <div className="progressContainer">
                <div className="imgLineCont">
                  <img alt="tick" src={greenTick} className="greenTick" />
                  <hr className="progressLine"></hr>
                </div>
                <div className="imgLineCont">
                  <img alt="tick" src={greenTick} className="greenTick" />
                  <hr className="progressLine"></hr>
                </div>
                <div className="imgLineCont">
                  <img alt="tick" src={TimerPic} className="timerCss" />
                  <hr className="progressLine"></hr>
                </div>
                <div className="imgLineCont">
                  <img alt="tick" src={TimerPic} className="timerCss" />
                  <hr className="progressLine"></hr>
                </div>
              </div>
              <div className="serviceStatusContainer">
                <div className="reqSubmittedCont">
                  <div className="dateStatus">
                    <h1 className="dateSize">
                      Request <br></br> Submitted
                    </h1>
                    <h1 className="dateSize dateAlign">24th May 2022</h1>
                  </div>
                  <div>
                    <p className="StatText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elt, sed
                    </p>
                  </div>
                </div>
                <div className="reqSubmittedCont">
                  <div className="dateStatus">
                    <h1 className="dateSize">
                      Documents <br></br> Collected
                    </h1>
                  </div>
                  <div>
                    <p className="StatText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elt, sed
                    </p>
                  </div>
                </div>
                <div className="reqSubmittedCont">
                  <div className="dateStatus">
                    <h1 className="dateSize">
                      Documents <br></br> Verified
                    </h1>
                  </div>
                  <div>
                    <p className="StatText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elt, sed
                    </p>
                  </div>
                </div>
                <div className="reqSubmittedCont">
                  <div className="dateStatus">
                    <h1 className="dateSize">
                      Out for <br></br> Delivery
                    </h1>
                  </div>
                  <div>
                    <p className="StatText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elt, sed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="payStatContainer">
              <h1 className="Paytext">Payment Status</h1>
              <div className="payContainer">
                <h1 className="RupeeCss">₹500</h1>
                <p className="PayStatus">Paid</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default ServiceProgress;
