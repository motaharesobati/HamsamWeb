import picofsidebar1 from '../../images/Rectangle526.png';
import picofsidebar2 from '../../images/Rectangle26.png';
import picofsidebar3 from '../../images/Rectangle5265.png';
import picofsidebar4 from '../../images/Rectangle5266.png';
import picofsidebar5 from '../../images/Rectangle26.png';
import picofsidebar6 from '../../images/Rectangle526.png';
import picofsidebar7 from '../../images/Rectangle26.png';
import picofsidebar8 from '../../images/Rectangle5265.png';
import picofsidebar9 from '../../images/Rectangle5266.png';
import picofsidebar10 from '../../images/Rectangle26.png';
import iconofsidebar from '../../images/fontisto_youtube-play.png';
import Commentbar from "./Commentbar";
import '../../CssComponent/wallhamsam/Sidebar.css';
function Sidebar(){
    return(
        <>
         <div className="container">
            <div className="row" dir="rtl">
                <div className="col-md-3">
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar1}/>
                            <div className="iconofsidebar1">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar2}/>
                            <div className="iconofsidebar2">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar3}/>
                            <div className="iconofsidebar3">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar4}/>
                            <div className="iconofsidebar4">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar5}/>
                            <div className="iconofsidebar5">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar6}/>
                            <div className="iconofsidebar6">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar7}/>
                            <div className="iconofsidebar7">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar8}/>
                            <div className="iconofsidebar8">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar9}/>
                            <div className="iconofsidebar9">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                    <div className="side-bar col-md-12">
                        <div style={{position:'relative'}}><img src={picofsidebar10}/>
                            <div className="iconofsidebar10">
                            <img src={iconofsidebar}/></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                   <Commentbar />
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;