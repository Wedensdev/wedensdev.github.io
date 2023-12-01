import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Preloader from "./Pages/Preloader/Preloader";
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import CustomCursor from "./Pages/CustomCursor/CustomCursor";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Preloader />}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
      <ScrollTop />
      <CustomCursor />
    </>
  );
}

export default App;
