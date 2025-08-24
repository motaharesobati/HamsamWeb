import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnglishName from '../images/HAMSAM SUPER APP (1).png';
import Tvimg from '../images/Hero BG Mask (1).png';
import SuggestionApp from './sugApps';
import TextExplain from "./TextExplain";
function Header(){
    const list = ["خانه","دیوار","بازی و سرگرمی","حساب کاربری","پشتیبانی"]
    console.log('moooooti')
    return(
        <>
        <div className="mainBackground">
        <div className="container" dir="rtl">
            <div className="row align-items-center py-4" >
                    <div className="col-md-3 persionName">سوپر اپلیکیشن هم سام</div>
                    <div className="col-md-5">
                        <ul className="listOfHeader  d-flex gap-0 list-unstyled m-0 justify-content-center">
                            {list.map((item , index) => {
                                return(
                                    <li key={index} className="col">{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                <div className="col-md-2" ><img src={EnglishName}/></div>
                <div className="hero">
                    <img src={Tvimg} className="img-fluid hero-img" />
                    <SuggestionApp/>
                </div>
            </div>
        </div>
        <TextExplain />

        </div>
        </>
    )
}
export default Header;