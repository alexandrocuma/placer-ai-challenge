import { useEffect, useState } from "react";
import { useTokenContext } from "../context";

type useStateCityAPIProps = {
  state: string;
};

export const useStateCityAPI = ({ state }: useStateCityAPIProps) => {
  const { token } = useTokenContext();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("https://www.universal-tutorial.com/api/states/United States", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((resp) => resp.json())
        .then((resp) => setStates(resp))
        .catch(() => console.log("Oh no we have a problem on STATES :O"));
    }
  }, [token]);

  useEffect(() => {
    if (token && state) {
      fetch(`https://www.universal-tutorial.com/api/cities/${state}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((resp) => resp.json())
        .then((resp) => setCities(resp))
        .catch(() => console.log("Oh no we have a CITIES :O"));
    } else {
      setCities([]);
    }
  }, [state, token]);

  return {
    cities,
    states
  };
};
