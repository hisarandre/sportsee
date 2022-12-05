import { useFetch } from "./useFetch";
import { Performance } from "../models/Performance";

const url = "../data/mockedPerformance.json";

export function usePerformance(id) {
  const { error, isLoading, data } = useFetch(url);

  if (error) return console.log("there is an error");
  if (isLoading) return console.log("It's loading");
  if (!error && !isLoading && data) {
    const userById = data.userPerformance.find((obj) => obj.id === parseInt(id));
    const performance = new Performance(userById);

    return performance;
  }
}
