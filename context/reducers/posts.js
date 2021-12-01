import produce from "immer";

const reducer = (state, { payload, type }) => {
  switch (type) {
    case "ADD_POST":
      return produce(state, (draft) => {
        console.log(draft);
        draft.push({ ...payload });
      });
    default:
      return state;
  }
};
export default reducer;
