import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnglishName from '../images/HAMSAM SUPER APP (1).png';
function Header(){
    return(
        <div className="row" style={{direction: "rtl"}}>
        <div className="col-md-2">سوپر اپلیکیشن هم سام</div>
        <div className="col-md-2"><img src={EnglishName}/></div>
        </div>
    )
}
export default Header;