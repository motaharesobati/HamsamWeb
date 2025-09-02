import React from "react";
import '../CssComponent/Team.css';
import iconteam from '../images/fluent_people-team-16-filled (1).png';
import imgofteam1 from '../images/Rectangle86.png';
import imgofteam2 from '../images/Rectangle84.png';
import imgofteam3 from '../images/Rectangle82.png';
import imgofteam4 from '../images/Rectangle74.png';
import imgofteam5 from '../images/Rectangle88.png';
import imgofteam6 from '../images/Rectangle76.png';
import imgofteam7 from '../images/Rectangle78.png';
import imgofteam8 from '../images/Rectangle80.png';
import imgofteam9 from '../images/Rectangle93.png';
import imgofteam10 from '../images/Rectangle95.png';
import imgofteam11 from '../images/Rectangle101.png';
import Footer from "./Footer";
function Team(){
    return(
        <>
        <div className="icon-team"><img src={iconteam}/></div>
        <div className="titr mt-4">تیم سوپـــــــر اپلیکیشن هم سام</div>
        <div className="container">
            <div className="row d-flex  gap-4" style={{textAlign: 'center',direction:'rtl'}}>
                <div className="col-md-1"></div>
                <div className="box col-md-2">
                    <div><img src={imgofteam1}/>
                        <div className="blue-box">Developer</div>
                        <div className="name-team">Ali Zand</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam2}/>
                        <div className="blue-box">Team Leader</div>
                        <div className="name-team">Ehsan Nasiri</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam3}/>
                        <div className="blue-box">CEO</div>
                        <div className="name-team">Sajad Bagheri</div>
                </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam4}/>
                        <div className="blue-box">CEO</div>
                        <div className="name-team">Bahram Borghei</div>
                    </div>
                </div>
            </div>
            <div className="row d-flex  gap-4" style={{textAlign: 'center',direction:'rtl'}}>
                <div className="col-md-1"></div>
                <div className="box col-md-2">
                    <div><img src={imgofteam5}/>
                        <div className="blue-box">Visual Designer</div>
                        <div className="name-team">Babak Ahmadi</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam6}/>
                        <div className="blue-box">Developer</div>
                        <div className="name-team">Atieh Zahirodini</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam7}/>
                        <div className="blue-box">Developer</div>
                        <div className="name-team">Mahsa Hematti</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam8}/>
                        <div className="blue-box">Developer</div>
                        <div className="name-team">Ali Zand</div>
                    </div>
                </div>
            </div>
            <div className="row d-flex  gap-4" style={{textAlign: 'center',direction:'rtl'}}>
                <div className="col-md-1"></div>
                <div className="box col-md-2">
                    <div><img src={imgofteam9}/>
                        <div className="blue-box">Support</div>
                        <div className="name-team">Kosar Mousavi</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam10}/>
                        <div className="blue-box">Developer</div>
                        <div className="name-team">Shahin Rasouli</div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgofteam11}/>
                    <div className="blue-box">Marketing</div>
                    <div className="name-team">Zahra Keyvan</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Team;