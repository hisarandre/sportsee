import { useContext } from "react";
import { useFetch } from "./useFetch";
import { Activity } from "../models/Activity";
import { ApiContext } from "./ApiProvider";

/**
 * Fetch the current user activity
 * from api or mocked data
 *
 * @param { String } id
 * @return { Object }
 * @param { Number } activity.id
 * @param { Array } activity.sessions
 * @param { Date } activity.sessions[].day
 * @param { Number } activity.sessions[].kilogram
 * @param { Number } activity.sessions[].calories
 */

function useActivity(id) {
  const { ApiData, urlApi } = useContext(ApiContext);
  const url = ApiData === "api" ? `${urlApi}/user/${id}/activity` : "../data/mockedActivity.json";
  const data = useFetch(url);

  if (data) {
    const userById = ApiData === "api" ? data.data : data.userActivities.find((obj) => obj.userId === parseInt(id));
    const activity = new Activity(userById);

    return activity;
  }
}

export default useActivity;
