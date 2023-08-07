import "./App.css";
import SignIn from "./components/Signin";
import Line from "./components/Line";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.jsx";

function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
