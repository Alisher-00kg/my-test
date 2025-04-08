import { useContext } from "react";
import { MainContent } from "./pages/MainContent";
import { LoginContext } from "./context/AuthContext";
import { Login } from "./auth/Login";

function App() {
  const { isLoggedIn } = useContext(LoginContext);

  return <>{isLoggedIn ? <MainContent /> : <Login />}</>;
}

export default App;
