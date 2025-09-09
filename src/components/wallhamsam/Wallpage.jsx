import React from "react";
import imgtv from '../../images/HeroBGMaskwall.png';
import '../../CssComponent/wallhamsam/Wallpage.css';
import Sidebar from "./Sidebar";
import Footer from '../Footer';
function Wallpage(){
    return(
        <>
        <div className="background">
            <div className="img-tv"><img src={imgtv}/></div>
            <Sidebar />
            <div className="row col-md-12">
            <Footer />
            </div>
        </div>
        </>
    )
}
export default Wallpage;