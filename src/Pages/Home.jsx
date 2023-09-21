import React, { useState, useEffect } from "react";
import Loader from "../Component/Preload";
import Nav from "../Component/Nav";
import SlideImage from "../Component/SlideImage";
import Cards from "../Component/Cards";
import Footslider from "../Component/Footslider";
import Award from "../Component/Awards";
import Footer from "../Component/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 1450;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <SlideImage />
          <Cards />
          <Footslider />
          <Award />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
