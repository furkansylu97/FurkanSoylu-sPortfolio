import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Loader from "./pages/HomePage/Loader";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App;
