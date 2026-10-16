import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";

//section
import Start from "./sections/Start";
import Questions from "./sections/Questions";
import Catalogo from "./sections/Catalogo";
import SobreMi from "./sections/SobreMi";
function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Start />

        <Questions />

        <Catalogo />

        <SobreMi />
      </main>
    </div>
  );
}

export default App;
