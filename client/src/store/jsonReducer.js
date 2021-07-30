const defaultState = {
  id: 0,
  postId: 0,
  name: "",
  email: "",
  body: "",
};

const loadComment = "loadComment";

export const jsonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case loadComment:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const saveComment = (payload) => ({
  type: loadComment,
  payload,
});
