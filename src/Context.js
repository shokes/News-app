import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();
const url = 'http://hn.algolia.com/api/v1/search?query=';
const AppProvider = function ({ children }) {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('Javascript');
  const [theme, setTheme] = useState('light-theme');

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const NewsData = data.hits;
      console.log(NewsData);
      setNews(NewsData);
      setLoading(false);
    } catch (error) {
      console.log('error occured');
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleRemove = (id) => {
    const filteredNews = news.filter((story) => id !== story.objectID);
    setNews(filteredNews);
  };
  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  return (
    <AppContext.Provider
      value={{
        news,
        search,
        setSearch,
        loading,
        handleThemeChange,
        handleRemove,
        theme,
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
