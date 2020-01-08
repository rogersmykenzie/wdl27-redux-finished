//initialState
const initialState = {
  username: ""
};
//constants
const UPDATE_USERNAME = "UPDATE_USERNAME";
//action creators
export function updateUsername(newUsername) {
  return {
    type: UPDATE_USERNAME,
    payload: newUsername
  };
}
//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
}
