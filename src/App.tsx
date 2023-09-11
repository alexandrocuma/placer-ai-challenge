import "./styles.scss";
import { Signup } from "./pages";
import { TokenContext } from "./context";
import { useUniversalTutorial } from "./hooks";

export default function App() {
  const { token } = useUniversalTutorial();

  return (
    <TokenContext.Provider
      value={{
        token: token
      }}
    >
      <Signup />
    </TokenContext.Provider>
  );
}
