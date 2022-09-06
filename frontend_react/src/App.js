import React from "react";

import { About, Footer, Skills, Header, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
