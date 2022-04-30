const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === 'SET_NEWS') {
    return {
      ...state,
      news: action.payload,
      loading: false,
    };
  }
  if (action.type === 'FILTERED_NEWS') {
    return {
      ...state,
      news: state.news.filter((story) => action.payload !== story.objectID),
      loading: false,
    };
  }

  if (action.type === 'DARK_THEME') {
    return {
      ...state,
      theme: 'dark-theme',
    };
  }

  if (action.type === 'LIGHT_THEME') {
    return {
      ...state,
      theme: 'light-theme',
    };
  }

  if (action.type === 'SET_SEARCH') {
    return {
      ...state,
      search: action.payload,
    };
  }

  throw new Error('no matching action type');
};

export default reducer;
