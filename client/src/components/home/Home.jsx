import React from "react";
import "./home.scss"
import Story from "../stories/Story";
import Posts from "../posts/Posts";

function Home() {
    return (
        <div className="home">
            <Story />
            <Posts/>
        </div>
        
    )
}
export default Home;