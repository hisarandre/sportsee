import React, { useContext } from "react";
import { ApiContext } from "../services/ApiProvider";

/**
 * Toggle button to switch data from mock to api
 * @returns {React.ReactElement} A button
 */

function ApiButton() {
  const { ApiData, toggleApi } = useContext(ApiContext);

  return (
    <div className="button-container">
      <input type="checkbox" id="switch" defaultChecked={ApiData === "api" ? true : false} onClick={() => toggleApi()} />
      <label htmlFor="switch">Toggle</label>
      Data mode : {ApiData === "api" ? "api" : "mocked"}
    </div>
  );
}

export default ApiButton;
