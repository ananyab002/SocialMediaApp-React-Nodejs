import "./posts.scss"
import registerPage from "../images/registerPage.jpg"
import Post from "../post/Post"

const Posts = () => {
    const posts = [
              {
      id: 1,
      name: "Ananya",
      userId:1,
      profilePic: registerPage,
      desc:"Its good to socialize. Communication is important in everyone's life",
      img:registerPage
        },
        {
      id: 2,
       name: "Ananya",
       userId:1,
       profilePic: registerPage,
       desc:"Its good to socialize. Communication is important in everyone's life"
        },
        
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Posts