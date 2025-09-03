import React from "react";
import img1 from '../images/Frame33.png';
import img2 from '../images/Frame27.png';
import img3 from '../images/Vector.png';
import img4 from '../images/Frame70.png';
import img5 from '../images/filmnet.png';
import img6 from '../images/Frame34.png';
import img7 from '../images/aparat3.png';
import '../CssComponent/sugApps.css';
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