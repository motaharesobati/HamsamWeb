import React from "react";
import '../CssComponent/VODStreaming.css';
import VODlogo from '../images/icon-park-outline_video.png';
import VODimg from '../images/Testimonial Image.png';
import logohamsam from '../images/all2 3 (1).png';
import Team from './Team';
function VODStreaming(){
    return(
        <>
        <div className="container">
            <div className="VODlogo"><img src={VODlogo}/></div>
            <div className="VODtitr">VOD Streaming (رسانه تعاملی)</div>
        <div className="row" dir="rtl" style={{marginTop:"5rem"}}>
            <div className="col-md-1"></div>
            <div className="VODframe col-md-4">
                <div style={{marginTop:"55px",marginRight:"80px"}}><img src={logohamsam}/></div>
                <div className="title">حضور VOD بزودی در هم سام</div>
                <div className="text">تقاضا برای تماشای ویدئو در اینترنت روز به ‌روز درحال افزایش است و این موضوع فرصت‌های جدید و بی‌شماری را برای کسب‌وکارهای مختلف و تولیدکنندگان محتوا فراهم کرده است.</div>
                <div className="sous-titr1">حضور VOD  های مطرح در سام بازار</div>
                <div className="sous-titr2">نمایش فیلم و سریال با پیشنهاد های ویژه در اپ سام بازار</div>
            </div>
            <div className="col-12 col-md-5">
            <div className="vod-media">
              <img src={VODimg} className="vod-img" />
            </div>
            </div>
            </div>
        </div>
        <Team />
        </>
    )
}
export default VODStreaming;