import React from "react";
import IconTv from '../images/fa6-solid_tv.png';
import IconTwo from '../images/Group 106.png';
import iconOfBox1 from '../images/gg_userlane.png';
import iconOfBox2 from '../images/fluent-emoji-high-contrast_game-die.png';
import iconOfBox3 from '../images/logos_android-vertical.png';
import logohamsam from '../images/all2 2 (1).png';
import '../CssComponent/TextExplain.css';
import Homeshowcase from './Homeshowcase';
function TextExplain(){;
return(
    <>
    <div className="container">
        <div className="row" dir="rtl"style={{marginTop:"160px"}}>
            <div className="col-md-12 d-flex align-items-center" > 
            <div className="col-md-3"></div>
            <div className="col-md-1"style={{textAlign: "left"}}><img src={IconTv}/></div>
            <div className="titr col-md-1">بیش از</div>
            <div className="col-md-1"><img src={IconTwo}/></div>
            <div className="continuetitr col-md-4"> میلیون دستگاه تلویزیون سامسونگ فعال</div>
            </div>
        </div>
    </div>
    <div className="row" dir="rtl">
        <div className="col-md-3"></div>
        <p className="col-md-7 maintext mt-5">در حال حاضر شرکت <span className="samsung">سامسونگ</span> این امکان را به صورت محدود فراهم کرده که صاحبان کسب و <br>
        </br>کارهای اینترنتی بتوانند از ظرفیت تلویزیون های هوشمند سامسونگ در جهت بهتر دیده شدن و<br>
        </br> گسترش مخاطبان هدفشان اقدام کنند.</p>
    </div>

    <div className="row" dir="rtl">
        <div className="col-md-2"></div>
        <div className="d-flex gap-5 justify-content-center">
            <div className="boxs">
                <img src={iconOfBox1}/>
                <div className="TitrOfBox">ظاهر جذاب با کاربری آسان</div>
                <div className="textOfBox col-md-9">دسترسی آسلان و سریع به اپلیکیشن های پرکاربرد</div>
            </div>
            <div className="boxs">
                <img src={iconOfBox2}/>
                <div className="TitrOfBox">بازی های جذاب</div>
                <div className="textOfBox col-md-10">حضور اپلیکیشن های ایرانی در کنار اپلیکیشن های برتر خارجی و بازی های جذاب</div>
            </div>
            <div className="boxs">
                <img src={iconOfBox3}/>
                <div className="TitrOfBox">سیستم عامل اندروید</div>
                <div className="textOfBox col-md-10">تلویزیون‌های هوشمند سام، با دارا بودن سیستم عامل اندروید علاوه بر اتصال به اینترنت و امکان جستجو در صفحات وب، می‌توانند نرم افزارهای مختلف اندروید را دانلود، نصب و اجرا کنند</div>
            </div>

        </div>
       
    </div>
    <div className="logohamsam"><img src={logohamsam}/></div>
    <div className="sous-titre">تجربه استفاده از سوپر اپلیکیشن هم سام</div>
    <Homeshowcase />
    </>
)
}
export default TextExplain;