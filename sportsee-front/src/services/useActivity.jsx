import { useFetch } from "./useFetch";
import { Activity } from "../models/Activity";

const url = "../data/mockedActivity.json";

export function useActivity(id) {
  const { error, isLoading, data } = useFetch(url);

  if (error) return console.log("there is an error");
  if (isLoading) return console.log("It's loading");
  if (!error && !isLoading && data) {
    const userById = data.userActivities.find((obj) => obj.userId === parseInt(id));
    const activity = new Activity(userById);

    return activity;
  }
}
