import React, { useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';

const AppContext = React.createContext();
const url = 'http://hn.algolia.com/api/v1/search?query=';
const AppProvider = function ({ children }) {
  const initialState = {
    news: [],
    loading: false,
    theme: 'light-theme',
    search: 'Javascript',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNews = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await fetch(`${url}${state.search}`);
      const data = await response.json();
      const newsData = data.hits;

      dispatch({ type: 'SET_NEWS', payload: newsData });
    } catch (error) {
      console.log('error occured');
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search]);

  const handleRemove = (id) => {
    dispatch({ type: 'FILTERED_NEWS', payload: id });
  };
  useEffect(() => {
    document.documentElement.classList = state.theme;
  }, [state.theme]);

  const handleThemeChange = () => {
    if (state.theme === 'light-theme') {
      dispatch({ type: 'DARK_THEME' });
    } else {
      dispatch({ type: 'LIGHT_THEME' });
    }
  };

  const handleSearch = (searchValue) => {
    dispatch({ type: 'SET_SEARCH', payload: searchValue });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,

        handleSearch,
        handleThemeChange,
        handleRemove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
