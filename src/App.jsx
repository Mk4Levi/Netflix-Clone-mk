import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, PreLoader } from "./components";
import "./scss/App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {isLoading ? (
          <PreLoader load={isLoading} />
        ) : (
          <div className="netflix-app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
