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
    page: 0,
    numOfPages: 50,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNews = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await fetch(`${url}${state.search}&page=${state.page}`);
      const data = await response.json();
      //console.log(data);
      const newsData = data.hits;

      dispatch({ type: 'SET_NEWS', payload: newsData });
    } catch (error) {
      console.log('error occured');
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search, state.page]);

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

  const handlePage = (value) => {
    dispatch({ type: 'SET_PAGE', payload: value });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePage,
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
