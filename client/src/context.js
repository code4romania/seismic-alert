import React, { createContext, useReducer, useContext } from 'react';

import reducer from './reducer';
import config from './config';
import { dynamicActivate, getCurrentLanguage } from './utils/i18n';

const { BUILDINGS_URL } = config;

const AppContext = createContext();

const initialState = {
  hereMap: null,
  searchInput: '',
  searchResults: [],
  searchLoading: false,
  searchSelectedBuilding: null,
  showSearchResults: false,
  searchError: null,
  currentLanguage: getCurrentLanguage(),
  riskCategory: '',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const languageChange = async (locale) => {
    dispatch({ type: 'LANGUAGE_CHANGE', payload: locale });
    dynamicActivate(locale, true);
  };

  const onSearchInputChange = (searchInput) => {
    if (!searchInput) {
      dispatch({ type: 'CLEAR_SEARCH', payload: searchInput });
    } else {
      dispatch({ type: 'SEARCH_INPUT', payload: searchInput });
    }
  };

  const onSearchLoading = (isLoading) => {
    dispatch({ type: 'SEARCH_LOADING', payload: isLoading });
  };

  const searchBuildings = async (searchInput, riskCategory) => {
    try {
      const res = await fetch(
        `${BUILDINGS_URL}/search/?query=${searchInput}&riskCategory=${riskCategory}`,
      );
      const searchResults = await res.json();
      onSearchLoading(false);
      if (searchResults.length > 0) {
        dispatch({ type: 'DISPLAY_SEARCH_RESULTS', payload: searchResults });
      } else {
        dispatch({ type: 'NO_SEARCH_RESULTS', payload: searchInput });
      }
    } catch (err) {
      dispatch({ type: 'SEARCH_ERROR' });
    }
  };

  const onSearchSelectBuilding = (building) => {
    dispatch({ type: 'SEARCH_SELECTED_BUILDING', payload: building });
  };

  const onCloseSearchResults = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };

  const onHereMapLoaded = (map) => {
    dispatch({ type: 'MAP_LOADED', payload: map });
  };

  const onCategoryChange = (riskCategory) => {
    dispatch({ type: 'RISK_CATEGORY_CHANGED', payload: riskCategory });
  };

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...state,
        searchBuildings,
        onSearchLoading,
        onSearchSelectBuilding,
        onCloseSearchResults,
        onHereMapLoaded,
        onSearchInputChange,
        languageChange,
        onCategoryChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
