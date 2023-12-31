import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";
import ForgotPass from "./components/forgotPass.js";
import Otp from "./components/otp.js";
import LandingPage from "./components/landingPage.js";
import ResetPass from "./components/resetPass.js";
import NotFound from "./components/notFound.js";
import AddMahasiswa from "./components/addMahasiswa.js";
import EditMahasiswa from "./components/editMahasiswa.js";
import VerifyOtpRegister from "./components/verifyOtpRegister.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/forgotpass/otp" element={<Otp />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/addmahasiswa" element={<AddMahasiswa />} />
        <Route path="/editmahasiswa/:id" element={<EditMahasiswa />} />
        <Route path="/verifyotpregister" element={<VerifyOtpRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
