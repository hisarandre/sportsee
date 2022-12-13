import { useContext } from "react";
import PropTypes from "prop-types";
import { useFetch } from "./useFetch";
import { User } from "../models/User";
import { ApiContext } from "./ApiProvider";

/**
 * Fetch the current user info
 * from api or mocked data
 *
 * @param { String } id
 * @return { Object }
 * @param { Number } user.id
 * @param { Object } user.keyData
 * @param { Number } user.keyData.calorieCount
 * @param { Number } user.keyData.proteinCount
 * @param { Number } user.keyData.carbohydrateCount
 * @param { Number } user.keyData.lipidCount
 * @param { Number } user.todayScore
 * @param { Object } user.userInfo
 * @param { string } user.userInfo.firstName
 * @param { string } user.userInfo.lastName
 */
export function useUser(id) {
  const { ApiData } = useContext(ApiContext);
  const url = ApiData === "api" ? `http://localhost:3000/user/${id}` : "../data/mockedUser.json";
  const data = useFetch(url);

  if (data) {
    const userById = ApiData === "api" ? data.data : data.userMainData.find((obj) => obj.id === parseInt(id));
    const user = new User(userById);

    return user;
  }
}

useUser.propTypes = {
  id: PropTypes.string,
};
