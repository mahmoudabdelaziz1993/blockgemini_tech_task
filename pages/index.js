import React, { useContext, useMemo } from "react";
import PostCard from "../components/PostCard";
import { PostsContext } from "../context/PostContext";
import styles from "../styles/components.module.css";

function index() {
  const { posts } = useContext(PostsContext);
  const Postslist = useMemo(
    () =>
      posts?.map((post, index) => (
        <PostCard key={index} ImageUrl={post?.ImageUrl} title={post?.title} />
      )),
    [posts]
  );
  return (
    <div className="flex flex-col w-full">
      {" "}
      <div className="flex flex-col items-center justify-center py-2">
        <h3 className="font-extrabold capitalize text-8xl ">
          <span className={styles.text_strocked}>focus</span>
        </h3>
        <p className="text-lg font-bold text-center text-gray-100">
          <span className={styles.text_strocked}>
            {" "}
            Live life to the fullest, and focus on the positive.
          </span>{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-3 sm:grid-cols-2">
        {Postslist}
      </div>
    </div>
  );
}

export default index;
