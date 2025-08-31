import React from "react";
import '../CssComponent/Homeshowcase.css';
import imgVod from '../images/GOOD-NEWS 1 (1).png';
import imgEuro2024 from '../images/20242 1 (1).png';
import imgGame from '../images/Frame 69 2 (1).png';
import imgWall from '../images/Frame 69 1 (1).png';
import Entertainment from './Entertainment';
function Showcase(){
    return(
        <>
        <div className="container">
            <div className="row showcaserow1 mt-5">
                <div className="col-md-5"><img src={imgVod}/>
                    <div style={{lineHeight:'60px'}}>حضور وی او دی ها بزودی در هم سام</div>
                </div>
                <div className="col-md-5"><img src={imgEuro2024}/>
                    <div style={{lineHeight:'60px'}}>تماشای بازی های یورو 2024</div>
                </div>
            </div>
            <div className="row showcaserow2 mt-2"> 
                <div className="col-md-5"><img src={imgGame}/>
                    <div style={{lineHeight:'60px'}}>بخش بازی و سرگرمی در سوپر اپلیکیشن هم سام</div>
                </div>
                <div className="col-md-5"><img src={imgWall}/>
                    <div style={{lineHeight:'60px'}}>تالار گفتگو و دیوار هم سام</div>
                </div>
            </div>
        </div>
        <Entertainment/>
        </>
    )
}
export default Showcase;