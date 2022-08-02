import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated , isLoading } = useAuth0();

     // TODO: ambos muestran booleanos : UNO PARA VER SI ESTA LOGEADO  EL OTRO PARA ESPERAR A QUE SE CARGE EL FORM RESPECTIVAMENTE

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <h1>Practice AUTH0</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
