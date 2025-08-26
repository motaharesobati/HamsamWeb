import React from "react";
import '../CssComponent/Entertainment.css';
import icon from '../images/icon-park-outline_game-ps.png';
import gameItem1 from '../images/GARDONEH 1.png';
import gameItem2 from '../images/2048 1.png';
import gameItem3 from '../images/HESAB-KETAB 1.png';
import gameItem4 from '../images/SO 1.png';
import gameItem5 from '../images/FLAPPY 1.png';
import gameItem6 from '../images/MAR 1.png';
import nextbutton from '../images/Group 19.png';
import prevbutton from '../images/Group 18.png';

function Entertainment(){
    
    return(
        <>
        <div className="icon"><img src={icon}/></div>
        <div className="Entertainment">بازی و سرگرمی در هم سام</div>
        <div className="containre">
            <div className="row justify-content-center mt-5" dir="rtl">
                <div className="Games">
                    <div><img src={gameItem1}/></div>
                </div>
                <div className="Games">
                    <div><img src={gameItem2}/></div>
                </div>
                <div className="Games">
                    <div><img src={gameItem3}/></div>
                </div>

            </div>
            <div className="row justify-content-center mt-5" dir="rtl">
                <div className="Games">
                    <div><img src={gameItem4}/></div>
                </div>
                <div className="Games">
                    <div><img src={gameItem5}/></div>
                </div>
                <div className="Games">
                    <div><img src={gameItem6}/></div>
                </div>
            </div>
            <div className="prevnextbutton">
            <button className="mt-5" style={{border:'0px'}}><img src={nextbutton}/></button>
            <button className="mt-5" style={{border:'0px'}}><img src={prevbutton}/></button>
            </div>
        </div>
        </>
    )
}
export default Entertainment;