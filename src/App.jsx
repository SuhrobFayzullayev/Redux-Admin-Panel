// React and hooks
import { useSelector } from "react-redux";
// React router dom
import { Route, Routes } from "react-router-dom";

// Components
import Dashboard from "./Pages/DashBoard";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";

// function component
function App() {
  // Check isLogin
  const login = useSelector((state) => state.login.login);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {login && <Route path="/dashboard/*" element={<Dashboard />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
