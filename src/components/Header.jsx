import React from "react";
import '../CssComponent/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import englishName from '../images/HAMSAMSUPERAPP.png';
import tvimg from '../images/HeroBGMask.png';
import SuggestionApp from './sugApps';
import TextExplain from "./TextExplain";
function Header(){
    return(
        <>
        <div className="main-background">
        <div className="container" dir="rtl">
            <div className="row align-items-center py-4" >
                    <div className="col-md-3 persion-name">سوپر اپلیکیشن هم سام</div>
                    <div className="col-md-5">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <button className="navbar-toggler" type="button"></button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">خانه <span class="sr-only"></span></a>
                            <a className="nav-item nav-link" href="#">دیوار</a>
                            <a className="nav-item nav-link" href="#">بازی و سرگرمی</a>
                            <a className="nav-item nav-link" href="#">حساب کاربری</a>
                            <a className="nav-item nav-link" href="#">تماس با ما</a>

                        </div>
                        </div>
                    </nav>
                    </div>
                <div className="col-md-2" ><img src={englishName}/></div>
                <div className="hero">
                    <img src={tvimg} className="img-fluid hero-img" />
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