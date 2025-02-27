import { useState } from "react";
import "./App.css";
import Navbar from "./componts/Navbar";
import Form from "./componts/Form";
import About from "./componts/About";
import Alert from "./componts/Alert";
import { Routes, Route } from "react-router-dom";  // ✅ Remove extra <Router>
import Disable from "./componts/Disable";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} t="Hyy" d="reusable" e="Links" />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route  path="/componts/about" element={<About />} />
          <Route  path="/componts/disable" element={<Disable />} />
          <Route  path="/" element={<Form showAlert={showAlert} heading="Enter the text" />} />  
          {/* ✅ Now, Form is rendered only on "/" */}
        </Routes>
      </div>
    </>
  );
}

export default App;
