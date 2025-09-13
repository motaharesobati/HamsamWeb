import React from "react";
import iconTv from '../images/fa6-solid_tv.png';
import iconTwo from '../images/Group106.png';
import iconofbox1 from '../images/gg_userlane.png';
import iconofbox2 from '../images/fluent-emoji-high-contrast_game-die.png';
import iconofbox3 from '../images/logos_android-vertical.png';
import logohamsam from '../images/all22.png';
import '../CssComponent/TextExplain.css';
import Homeshowcase from './Homeshowcase';
function TextExplain(){;
return(
    <>
    <div className="container">
        <div className="row" dir="rtl"style={{marginTop:"160px"}}>
            <div className="col-md-12 d-flex align-items-center" > 
            <div className="col-md-3"></div>
            <div className="col-md-1" style={{textAlign:"left"}}><img src={iconTv}/></div>
            <div className="titr col-md-1">بیش از</div>
            <div className="col-md-1"><img src={iconTwo}/></div>
            <div className="continue-titr col-md-4"> میلیون دستگاه تلویزیون سامسونگ فعال</div>
            </div>
        </div>
    </div>
    <div className="row" style={{marginRight:"0px"}} dir="rtl">
        <div className="col-md-3"></div>
        <p className="col-md-7 main-text mt-5">در حال حاضر شرکت <span className="samsung">سامسونگ</span> این امکان را به صورت محدود فراهم کرده که صاحبان کسب و <br>
        </br>کارهای اینترنتی بتوانند از ظرفیت تلویزیون های هوشمند سامسونگ در جهت بهتر دیده شدن و<br>
        </br> گسترش مخاطبان هدفشان اقدام کنند.</p>
    </div>

    <div className="row" dir="rtl">
        <div className="col-md-2"></div>
        <div className="d-flex gap-5 justify-content-center">
            <div className="boxs">
                <img src={iconofbox1}/>
                <div className="titr-of-box">ظاهر جذاب با کاربری آسان</div>
                <div className="text-of-box col-md-9">دسترسی آسلان و سریع به اپلیکیشن های پرکاربرد</div>
            </div>
            <div className="boxs">
                <img src={iconofbox2}/>
                <div className="titr-of-box">بازی های جذاب</div>
                <div className="text-of-box col-md-10">حضور اپلیکیشن های ایرانی در کنار اپلیکیشن های برتر خارجی و بازی های جذاب</div>
            </div>
            <div className="boxs">
                <img src={iconofbox3}/>
                <div className="titr-of-box">سیستم عامل اندروید</div>
                <div className="text-of-box col-md-10">تلویزیون‌های هوشمند سام، با دارا بودن سیستم عامل اندروید علاوه بر اتصال به اینترنت و امکان جستجو در صفحات وب، می‌توانند نرم افزارهای مختلف اندروید را دانلود، نصب و اجرا کنند</div>
            </div>

        </div>
       
    </div>
    <div className="logo-hamsam"><img src={logohamsam}/></div>
    <div className="sous-titre">تجربه استفاده از سوپر اپلیکیشن هم سام</div>
    <Homeshowcase />
    </>
)
}
export default TextExplain;