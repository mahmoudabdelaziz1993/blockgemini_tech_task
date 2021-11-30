import produce from "immer";

export default (state, { payload, type }) => {
  switch (type) {
    case "ADD_POST":
      return produce(state, (draft) => {
        draft?.posts?.push(...payload);
      });
    case "UPDATE_POST":
      return produce(state, (draft) => {
        const post = draft.posts.find((book) => post.id === payload.id);
        post.title = payload.title;
        post.ImageUrl = payload.ImageUrl;
      });
    case "REMOVE_POST":
      return produce(state, (draft) => {
        const postIndex = draft.posts.list.findIndex(
          (post) => post.id === payload
        );
        draft.posts.splice(postIndex, 1);
      });
    default:
      return state;
  }
};
