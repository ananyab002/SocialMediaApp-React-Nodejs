import "./comments.scss";
import registerPage from "../images/registerPage.jpg"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
    const {currentUser}= useContext(AuthContext)
    const comments = [
    {
      id: 1,
      name: "Ananya",
      userId:1,
      profilePic: registerPage,
      desc:"Its good to socialize. Communication is important in everyone's life.Very good pictures, nice location, hope you enjoyed, we would also like to join you next time, looking forward to meet you.Take care",
    },
    {
       id: 2,
       name: "Ananya",
       userId:2,
       profilePic: registerPage,
       desc:"Its good to socialize. Communication is important in everyone's life"
    },
        
    ]

    return (
        <div className="comments">
            <div className="writeComment">
            <img src={currentUser.profilePic} />
                <input type="text" placeholder="Write your comments" />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePic} />
                    <div className="userInfo">
                        <span>{comment.name}</span>
                        <p>{comment.desc }</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments