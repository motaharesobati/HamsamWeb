import React from "react";
import '../CssComponent/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import englishName from '../images/HAMSAMSUPERAPP.png';
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <>
        <div className="main-background">
        <div className="container" dir="rtl">
            <div className="row align-items-center py-4" >
                    <div className="col-md-3 col-12 persion-name">سوپر اپلیکیشن هم سام</div>
                    <div className="col-md-5 col-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button"></button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active" to="/">خانه <span class="sr-only"></span></NavLink>
                            <NavLink className="nav-item nav-link" to="/wall">دیوار</NavLink>
                            <NavLink className="nav-item nav-link" to="/">بازی و سرگرمی</NavLink>
                            <NavLink className="nav-item nav-link" to="/">حساب کاربری</NavLink>
                            <NavLink className="nav-item nav-link" to="/">تماس با ما</NavLink>

                        </div>
                        </div>
                    </nav>
                    </div>
                <div className="col-md-2 col-12" ><img src={englishName}/></div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Header;