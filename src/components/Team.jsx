import React from "react";
import '../CssComponent/Team.css';
import iconTeam from '../images/fluent_people-team-16-filled (1).png';
import imgOfTeam1 from '../images/Rectangle 86 (1).png';
import imgOfTeam2 from '../images/Rectangle 84 (1).png';
import imgOfTeam3 from '../images/Rectangle 82 (1).png';
import imgOfTeam4 from '../images/Rectangle 74 (1).png';
import imgOfTeam5 from '../images/Rectangle 88 (1).png';
import imgOfTeam6 from '../images/Rectangle 76 (2).png';
import imgOfTeam7 from '../images/Rectangle 78 (1).png';
import imgOfTeam8 from '../images/Rectangle 80.png';
import imgOfTeam9 from '../images/Rectangle 93 (1).png';
import imgOfTeam10 from '../images/Rectangle 95 (1).png';
import imgOfTeam11 from '../images/Rectangle 101 (1).png';
function Team(){
    return(
        <>
        <div className="iconTeam"><img src={iconTeam}/></div>
        <div className="titr mt-4">تیم سوپـــــــر اپلیکیشن هم سام</div>
        <div className="container">
            <div className="row d-flex  gap-4" style={{textAlign: 'center',direction:'rtl'}}>
                <div className="col-md-1"></div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam1}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam2}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam3}/>
                        <div className="blueBox"></div>
                </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam4}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
            </div>
            <div className="row d-flex  gap-4" style={{textAlign: 'center',direction:'rtl'}}>
                <div className="col-md-1"></div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam5}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam6}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam7}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam8}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
            </div>
            <div className="row d-flex  gap-4" style={{textAlign: 'center',direction:'ltr'}}>
                <div className="col-md-1"></div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam9}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam10}/>
                        <div className="blueBox"></div>
                    </div>
                </div>
                <div className="box col-md-2">
                    <div><img src={imgOfTeam11}/>
                    <div className="blueBox"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Team;