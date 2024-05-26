import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { BurguerMenu } from "./components/BurguerMenu/BurguerMenu";
import { MainContentCards } from "./components/MainContentCards/MainContentCards";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [openBurguer, setOpenBurguer] = useState(false);

  return (
    <>
      <Navbar handlerBurger={() => setOpenBurguer(!openBurguer)} />
      {openBurguer && (
        <BurguerMenu handlerBurger={() => setOpenBurguer(false)} />
      )}
      <MainContentCards />

      <Footer />
    </>
  );
}

export default App;
