import React from "react";
import loginImage from '../images/loginImage.jpg'
import png1 from '../images/1.png'
import png2 from '../images/2.png'
import png3 from '../images/3.png'
import png4 from '../images/4.png'
import png5 from '../images/5.png'
import png6 from '../images/6.png'
import png7 from '../images/7.png'
import png8 from '../images/8.png'
import png9 from '../images/9.png'
import png10 from '../images/10.png'
import png11 from '../images/11.png'
import png12 from '../images/12.png'
import png13 from '../images/13.png'
import './leftBar.scss'

function LeftBar() {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={loginImage}></img>
                        <span>Ananya</span>
                    </div>
                    <div className="item">
                        <img src={png1}></img>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={png2}></img>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={png3}></img>
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={png4}></img>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={png5}></img>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                    <img src={png6} />
                    <span>Events</span>
                    </div>
                    <div className="item">
                    <img src={png7} />
                    <span>Gaming</span>
                    </div>
                    <div className="item">
                    <img src={png8} />
                    <span>Gallery</span>
                    </div>
                    <div className="item">
                    <img src={png9} />
                    <span>Videos</span>
                    </div>
                    <div className="item">
                    <img src={png10} />
                    <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={png13 } />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={ png11} />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={png12 } />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftBar;