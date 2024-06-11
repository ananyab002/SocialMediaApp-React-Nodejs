
import { useContext } from "react"
import registerPage from "../images/registerPage.jpg"
import { AuthContext } from "../../context/authContext"
import "./story.scss"

const Story = () => {
    const stories = [
        {
      id: 1,
      name: "Ananya",
      profilePic: registerPage,
        },
        {
      id: 2,
      name: "Ananya",
      profilePic: registerPage,
        },
        {
      id: 3,
      name: "Ananya",
      profilePic: registerPage,
    }
    ]
    const { currentUser } = useContext(AuthContext)
    
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} />
          <span>{currentUser.name}</span>
          <button>+</button>
          </div>
                {stories.map(story => (
                    <div className="story" key={story.id}>
                    <img src={story.profilePic} />
                    <span>{story.name}</span>
                    </div>
                ))}
        </div>
    )
}

export default Story