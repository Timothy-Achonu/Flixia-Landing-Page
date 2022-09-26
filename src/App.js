import "./App.css";
import React from "react";
import { Header } from "./Components/Header";
import { ContactUs } from "./Components/ContactUs";
import { MidSection } from "./Components/MidSection";
import { Footer } from "./Components/Footer";
import ChangeText from "./Components/ChangeText";

function App() {
  return (
    <ChangeText>
      <div className="App">
        <Header />
        <MidSection />
        <ContactUs />
        <Footer />
      </div>
    </ChangeText>
  );
}

export default App;
