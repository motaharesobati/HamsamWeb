import React from "react";
import img1 from '../images/Frame 33.png';
import img2 from '../images/Frame 27.png';
import img3 from '../images/Vector (7).png';
import img4 from '../images/Frame 70 (1).png';
import img5 from '../images/لوگوی-فیلم-نت 1 (1).png';
import img6 from '../images/Frame 34.png';
import img7 from '../images/aparat 3 (1).png';
function SuggestionApp (){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="sugg-bar">
                    <div className="col-md-1"></div>
                    <div className="col-md-1"><img src={img1}/></div>
                    <div className="col-md-1"><img src={img2}/></div>
                    <div className="col-md-1"><img src={img3}/></div>
                    <div className="col-md-1"><img src={img4}/></div>
                    <div className="col-md-1"><img src={img5}/></div>
                    <div className="col-md-1"><img src={img6}/></div>
                    <div className="col-md-1"><img src={img7}/></div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SuggestionApp;