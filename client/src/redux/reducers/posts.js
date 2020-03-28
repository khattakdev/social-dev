import { LOAD_POSTS } from "../actions/post";

const initialState = [
  {
    comments: [],
    likes: [],
    _id: "5e75fdc35193e5299421dba4",
    user: "5e75f7f39b2f080e68af9274",
    description: "A new Dummy Post by Arsalan",
    created_at: "2020-03-21T11:42:59.139Z",
    updated_at: "2020-03-21T11:42:59.139Z",
    __v: 0
  },
  {
    comments: [],
    likes: [],
    _id: "5e7603da5193e5299421dba6",
    user: "5e75f7f39b2f080e68af9274",
    description: "Another Dummy Post by Arsalan",
    created_at: "2020-03-21T12:08:58.419Z",
    updated_at: "2020-03-21T12:08:58.419Z",
    __v: 0
  }
];

const reducer = (state = initialState, action) => {
  if (action.type === LOAD_POSTS) {
    return [...action.posts];
  } else {
    return initialState;
  }
};

export default reducer;
