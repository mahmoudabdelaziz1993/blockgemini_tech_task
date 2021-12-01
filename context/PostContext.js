import React, { createContext, useEffect, useReducer } from "react";
import { posts } from "../utils/data";
import reducer from "./reducers/posts";

export const PostsContext = createContext();
const ISSERVER = typeof window === "undefined";
const initialState =
  typeof window !== "undefined" &&
  localStorage?.getItem("Global-blockGerminiTask")
    ? JSON.parse(localStorage.getItem("Global-blockGerminiTask"))
    : posts;

function PostsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("Global-blockGerminiTask", JSON.stringify(state));
  }, [state]);

  const addPost = async (payload) => dispatch({ type: "ADD_POST", payload });

  return (
    <PostsContext.Provider value={{ posts: [...state], addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider;
