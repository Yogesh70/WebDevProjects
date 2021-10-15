import React from "react";
import Movies from "./Components/Movies";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Movies />
      <About />
    </React.Fragment>
  );
}

export default App;
