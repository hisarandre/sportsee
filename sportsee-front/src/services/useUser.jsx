import { useFetch } from "./useFetch";
import { User } from "../models/User";

const url = "../data/mockedUser.json";

export function useUser(id) {
  const { error, isLoading, data } = useFetch(url);

  if (error) return console.log("there is an error");
  if (isLoading) return console.log("It's loading");
  if (!error && !isLoading && data) {
    const userById = data.userMainData.find((obj) => obj.id === parseInt(id));
    const user = new User(userById);

    return user;
  }
}
