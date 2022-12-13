import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ApiContext = createContext();

/**
 * Toggle if the data is from Api or mocked data
 *
 * @return {string} "mock" or "api"
 */

const ApiProvider = ({ children }) => {
  const [ApiData, setApiData] = useState("mock");

  const toggleApi = () => {
    setApiData(ApiData === "api" ? "mock" : "api");
  };

  return <ApiContext.Provider value={{ ApiData, toggleApi }}>{children}</ApiContext.Provider>;
};

export default ApiProvider;

ApiProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
