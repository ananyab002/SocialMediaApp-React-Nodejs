import React from "react";
import registerPage from '../images/registerPage.jpg';
import './rightBar.scss'

function RightBar() {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="items">
                    <span>Your Suggestions</span>
                    <div className="user">
                        <div className="userInfo">
                        <img src={registerPage} />
                            <span>Ananya</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src={registerPage} />
                            <span>Ananya</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    
                </div>
                <div className="items">
                    <span>Latest Activities </span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={registerPage} />
                            <p>
                                <span>Ananya</span>    changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={registerPage} />
                            <p>
                                <span>Ananya</span>    changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={registerPage} />
                            <p>
                                <span>Ananya</span>    changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={registerPage} />
                            <p>
                                <span>Ananya</span>    changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="items">
                        <span>Online friends</span>
                        <div className="user">
                        <div className="userInfo">
                            <img src={registerPage} />
                            <div className="online"/>
                                <span>Ananya</span>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default RightBar;