import { useEffect, useState } from "react";

export const useUniversalTutorial = () => {
  const [token, setToken] = useState();

  const getAccessToken = () => {
    fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
      headers: {
        "api-token": process.env.REACT_APP_TOKEN,
        "user-email": process.env.REACT_APP_EMAIL
      }
    })
      .then((resp) => resp.json())
      .then((resp) => setToken(resp.auth_token))
      .catch((err) => console.log("Oh no we have a problem on TOKEN :O", err));
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return {
    token
  };
};
