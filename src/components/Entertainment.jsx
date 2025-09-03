import React from "react";
import '../CssComponent/Entertainment.css';
import icon from '../images/icon-park-outline_game-ps.png';
import gameitem1 from '../images/GARDONEH1.png';
import gameitem2 from '../images/2048.png';
import gameitem3 from '../images/HESAB-KETAB.png';
import gameitem4 from '../images/SO.png';
import gameitem5 from '../images/FLAPPY.png';
import gameitem6 from '../images/MAR.png';
import nextbutton from '../images/Group19.png';
import prevbutton from '../images/Group18.png';
import VODStreaming from "./VODStreaming";

function Entertainment(){
    
    return(
        <>
        <div className="icon"><img src={icon}/></div>
        <div className="entertainment">بازی و سرگرمی در هم سام</div>
        <div className="containre">
            <div className="row justify-content-center mt-5" dir="rtl">
                <div className="games">
                    <div><img src={gameitem1}/></div>
                </div>
                <div className="games">
                    <div><img src={gameitem2}/></div>
                </div>
                <div className="games">
                    <div><img src={gameitem3}/></div>
                </div>

            </div>
            <div className="row justify-content-center mt-5" dir="rtl">
                <div className="games">
                    <div><img src={gameitem4}/></div>
                </div>
                <div className="games">
                    <div><img src={gameitem5}/></div>
                </div>
                <div className="games">
                    <div><img src={gameitem6}/></div>
                </div>
            </div>
            <div className="prevnextbutton">
            <button className="mt-5" style={{border:'0px'}}><img src={nextbutton}/></button>
            <button className="mt-5" style={{border:'0px'}}><img src={prevbutton}/></button>
            </div>
        </div>
        <VODStreaming />
        </>
    )
}
export default Entertainment;