import { useFetch } from "./useFetch";
import { AverageSession } from "../models/AverageSession";

const url = "../data/mockedSession.json";

export function useAverageSession(id) {
  const { error, isLoading, data } = useFetch(url);

  if (error) return console.log("there is an error");
  if (isLoading) return console.log("It's loading");
  if (!error && !isLoading && data) {
    const userById = data.userAverageSession.find((obj) => obj.userId === parseInt(id));
    const averageSession = new AverageSession(userById);

    return averageSession;
  }
}
