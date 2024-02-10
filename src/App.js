import "@aws-amplify/ui-react/styles.css";
import './App.css';
import { Auth } from "./app/pages/Auth.tsx";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

const App = () => {

  return (
    <Authenticator.Provider>
      <Auth />
    </Authenticator.Provider>
  );
}

export default App;
