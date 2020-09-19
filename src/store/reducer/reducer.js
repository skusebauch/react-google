export const initialState = {
  query: null,
};

export const actionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export default reducer;
