import { useContext } from "react";
import PropTypes from "prop-types";
import { useFetch } from "./useFetch";
import { AverageSession } from "../models/AverageSession";
import { ApiContext } from "./ApiProvider";

/**
 * Fetch the current user average session
 * from api or mocked data
 *
 * @param { String } id
 * @return { Object }
 * @param { Number } AverageSession.id
 * @param { Array } AverageSession.sessions
 * @param { Number } AverageSession.sessions[].day
 * @param { Number } AverageSession.sessions[].sessionLength
 */

export function useAverageSession(id) {
  const { ApiData } = useContext(ApiContext);
  const url = ApiData === "api" ? `http://localhost:3000/user/${id}/average-sessions` : "../data/mockedSession.json";
  const data = useFetch(url);

  if (data) {
    const userById = ApiData === "api" ? data.data : data.userAverageSession.find((obj) => obj.userId === parseInt(id));
    const averageSession = new AverageSession(userById);

    return averageSession;
  }
}

useAverageSession.propTypes = {
  id: PropTypes.string,
};
