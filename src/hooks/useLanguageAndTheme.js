import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setText, setLanguage } from "../reducers/languageReducer";
import { toggleDarkMode } from "../reducers/themeReducer";

const useLanguageAndTheme = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const text = useSelector((state) => state.language.text);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/data/${language}.json`);
        dispatch(setText(response.data));
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [language, dispatch]);

  const handleLanguageChange = () => {
    dispatch(setLanguage(language === "english" ? "turkish" : "english"));
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return {
    darkMode,
    language,
    text,
    loading,
    handleLanguageChange,
    handleToggleDarkMode,
  };
};

export default useLanguageAndTheme;
