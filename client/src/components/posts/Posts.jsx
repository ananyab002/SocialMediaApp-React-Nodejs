import "./posts.scss";
import registerPage from "../images/registerPage.jpg";
import Post from "../post/Post";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const { isLoading, err, posts } = useQuery(["posts"], () => {
    makeRequest.get("/posts").then((res) => {
      return res.data;
    });
  });
  return (
    <div className="posts">
      {err
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : posts.map((post) => <Post post={post} />)}
    </div>
  );
};

export default Posts;
