import React from "react";
import '../CssComponent/VODStreaming.css';
import vodlogo from '../images/icon-park-outline_video.png';
import vodimg from '../images/TestimonialImage.png';
import logohamsam from '../images/all23.png';
import Team from './Team';
function VODStreaming(){
    return(
        <>
        <div className="container">
            <div className="vod-logo"><img src={vodlogo}/></div>
            <div className="vod-titr">VOD Streaming (رسانه تعاملی)</div>
        <div className="row" dir="rtl" style={{marginTop:"5rem"}}>
            <div className="col-md-1"></div>
            <div className="vod-frame col-md-4">
                <div style={{marginTop:"55px",marginRight:"80px"}}><img src={logohamsam}/></div>
                <div className="title">حضور VOD بزودی در هم سام</div>
                <div className="text">تقاضا برای تماشای ویدئو در اینترنت روز به ‌روز درحال افزایش است و این موضوع فرصت‌های جدید و بی‌شماری را برای کسب‌وکارهای مختلف و تولیدکنندگان محتوا فراهم کرده است.</div>
                <div className="sous-titr-1">حضور VOD  های مطرح در سام بازار</div>
                <div className="sous-titr-2">نمایش فیلم و سریال با پیشنهاد های ویژه در اپ سام بازار</div>
            </div>
            <div className="col-12 col-md-5">
            <div className="vod-media">
              <img src={vodimg} className="vod-img" />
            </div>
            </div>
            </div>
        </div>
        <Team />
        </>
    )
}
export default VODStreaming;