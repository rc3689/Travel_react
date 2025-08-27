// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import { Button } from "./components/ui/button";
// import Hero from "./components/Hero";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

function App() {
  // const user = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 30,
  //   address: "Biratnagar Nepal",
  // };

  // const user2 = {
  //   firstName: "new user",
  //   lastName: "Doe",
  //   age: 25,
  //   address: "Kathmandu Nepal",
  // };

  // const [count, setCount] = useState(0);

  return (
    // <>
    //   <Navbar data={user2} color={"red"} />

    //   <Hero />
    // </>

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} /> */}

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
