import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";
import ForgotPass from "./components/forgotPass.js";
import Otp from "./components/otp.js";
import LandingPage from "./components/landingPage.js";
import ResetPass from "./components/resetPass.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/forgetpass/otp" element={<Otp />} />
        <Route path="/resetpass" element={<ResetPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;