import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import './navBar.scss'
import registerPage from '../images/registerPage.jpg'

function NavBar() {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>besocial</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src={registerPage} />
                    <span>Ananya</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;