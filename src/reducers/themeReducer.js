const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newDarkModeState = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkModeState));
      return {
        ...state,
        darkMode: newDarkModeState,
      };
    default:
      return state;
  }
};

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export default themeReducer;
