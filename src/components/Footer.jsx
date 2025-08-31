import React from "react";
import "../CssComponent/Footer.css";
import imgFooter from "../images/all2 5 (2).png";
import imgSamsungSmart from '../images/SAMSUNG SMART TV (3).png';
import imgCopyright from '../images/© Copyright Team Inc. (3).png';
function Footer() {
  return (
    <>
      <div className="row" dir="rtl">
        <div className="box-footer col-md-5">
          <form action="/enter" method="post" encType="multipart/form-data" style={{marginRight: "145px"}}>
            <label className="TitrOfFooter" htmlFor="email" dir="rtl">
              ایمیل خود را وارد کنید
            </label>
            <input
              type="email"
              name="email"
              className="email"
              dir="ltr"
              placeholder="Email"
            />
          </form>
        </div>
        <div className="box-footer col-md-3"></div>


        <div className="footer col-md-4">
            <div className="imgFooter"><img src={imgFooter}/></div>
            <div className="text">HAMSAM SUPER APP</div>
            <div className="imgSamsungSmart"><img src={imgSamsungSmart}/></div>
            <div className="imgSamsungSmart"><img src={imgCopyright}/></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
