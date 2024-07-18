const initialState = {
  language: localStorage.getItem("language") || "english",
  text: {},
};

const SET_LANGUAGE = "SET_LANGUAGE";
const SET_TEXT = "SET_TEXT";


const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        language: action.payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};


export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export default languageReducer;
