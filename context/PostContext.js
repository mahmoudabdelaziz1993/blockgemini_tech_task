import React, { createContext, useEffect, useReducer } from "react";
import { posts } from "../utils/data";
import reducer from "./reducers/posts";

export const PostsContext = createContext();

const initialState = localStorage.getItem("Global-blockGerminiTask")
  ? JSON.parse(localStorage.getItem("Global-blockGerminiTask"))
  : posts;

function PostsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("Global-blockGerminiTask", JSON.stringify(state));
  }, [state]);

  return (
    <PostsContext.Provider value={{ ...state }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider;
