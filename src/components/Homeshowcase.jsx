import React from "react";
import '../CssComponent/Homeshowcase.css';
import imgvod from '../images/GOOD-NEWS.png';
import imgeuro2024 from '../images/20242.png';
import imggame from '../images/Frame69.png';
import imgwall from '../images/Frame691.png';
import Entertainment from './Entertainment';
function Showcase(){
    return(
        <>
        <div className="container">
            <div className="row showcase-row-1 mt-5">
                <div className="col-md-5"><img src={imgvod}/>
                    <div style={{lineHeight:'60px'}}>حضور وی او دی ها بزودی در هم سام</div>
                </div>
                <div className="col-md-5"><img src={imgeuro2024}/>
                    <div style={{lineHeight:'60px'}}>تماشای بازی های یورو 2024</div>
                </div>
            </div>
            <div className="row showcase-row-2 mt-2"> 
                <div className="col-md-5"><img src={imggame}/>
                    <div style={{lineHeight:'60px'}}>بخش بازی و سرگرمی در سوپر اپلیکیشن هم سام</div>
                </div>
                <div className="col-md-5"><img src={imgwall}/>
                    <div style={{lineHeight:'60px'}}>تالار گفتگو و دیوار هم سام</div>
                </div>
            </div>
        </div>
        <Entertainment/>
        </>
    )
}
export default Showcase;