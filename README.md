## Project Setup

### Setting ENV Variables

Create `.env` at the root of the directory and add the next keys

```powershell
  REACT_APP_TOKEN=<Universal Tutorial Auth token>
  REACT_APP_EMAIL=<Email used on Universal Tutorial token generator>
```

### Getting Universal Tutorial Auth Token

Enter the url `https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city` and in the `Request access for APIs` introduce your Name and email. The email has to be the same as in the `env.` variable `REACT_APP_EMAIL`.

Copy the token and add set it as the `REACT_APP_TOKEN` on the `.env` file
