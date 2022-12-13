import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Fetch data from an url
 * and return the resolved promise or a console log (error/loading)
 *
 * @param { String } url
 * @return { Object }
 */

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  if (error) return console.log("there is an error");
  if (isLoading) return console.log("It's loading");
  if (!error && !isLoading && data) {
    return data;
  }
}

useFetch.propTypes = {
  url: PropTypes.string,
};
