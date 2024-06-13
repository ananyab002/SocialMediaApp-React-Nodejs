import React from "react";
import loginImage from "../images/loginImage.jpg"
import registerPage from "../images/registerPage.jpg"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./profile.scss";
import Posts from "../posts/Posts.jsx"

function Profile() {
    return (
        <div className="profile">
            <div className="images">
                <img className="coverPic" src={loginImage} />
                <img className="profilePic" src={registerPage}/>
            </div>
            <div className="profileContainer">
                <div className="userinfo">
                <div className="leftProfile">
                    <a href="http://facebook.com">
                        <FacebookTwoToneIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com">
                        <InstagramIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com">
                        <TwitterIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com">
                        <LinkedInIcon fontSize="large"/>
                    </a>
                    <a href="http://facebook.com">
                        <PinterestIcon fontSize="large"/>
                    </a>
                </div>
                <div className="centerProfile">
                    <span>Ananya</span>
                    <div className="info">
                        <div className="item">
                            <PlaceIcon />
                            <span>Norway</span>
                        </div>
                        <div className="item">
                            <LanguageIcon />
                            <span>Kannada</span>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="rightProfile">
                    <EmailOutlinedIcon />
                    <MoreVertOutlinedIcon/>
                </div>
                </div>
                <Posts/>
            </div>
                
            
        </div>
    )
}
export default Profile;