import React from "react";
import "../CssComponent/Footer.css";
import imgfooter from "../images/all25.png";
import logofooter from '../images/LogoFooter.png'; 
import imgsamsungsmart from '../images/SAMSUNGSMARTTV.png';
import imgcopyright from '../images/CopyrightTeamInc.png';
function Footer() {
  return (
    <>
      <div className="row" dir="rtl">
        <div className="box-footer col-md-5">
          <form action="/enter" method="post" encType="multipart/form-data" style={{marginRight: "145px"}}>
            <label className="titr-of-footer" htmlFor="email" dir="rtl">
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
            <div className="img-footer"><img src={imgfooter}/></div>
            <div className="text-of-footer"><img src={logofooter}/></div>
            <div className="img-samsung-smart"><img src={imgsamsungsmart}/></div>
            <div className="img-samsung-smart"><img src={imgcopyright}/></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
