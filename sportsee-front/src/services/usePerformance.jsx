import { useContext } from "react";
import PropTypes from "prop-types";
import { useFetch } from "./useFetch";
import { Performance } from "../models/Performance";
import { ApiContext } from "./ApiProvider";

/**
 * Fetch the current user performance
 * from api or mocked data
 *
 * @param { String } id
 * @return { Object }
 * @param { Number } Performance.id
 * @param { Array } Performance.data
 * @param { Number } Performance.data[].value
 * @param { Number } Performance.data[].kind
 * @param { Object } Performance.kind
 */

export function usePerformance(id) {
  const { ApiData } = useContext(ApiContext);
  const url = ApiData === "api" ? `http://localhost:3000/user/${id}/performance` : "../data/mockedPerformance.json";
  const data = useFetch(url);

  if (data) {
    const userById = ApiData === "api" ? data.data : data.userPerformances.find((obj) => obj.userId === parseInt(id));
    const performance = new Performance(userById);

    return performance;
  }
}

usePerformance.propTypes = {
  id: PropTypes.string,
};
