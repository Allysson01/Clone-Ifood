import React from "react";
import "./App.css";
import Menu from "./Components/Menu/index";
import BuscaEntrega from "./Components/BuscaEntrega/index";
import Categorias from "./Components/Categorias/index";
import MelhoresRestaurantes from "./Components/MelhoresRestaurantes/index";

function App() {
  const [focarMenu, setFocarMenu] = React.useState(false);

  React.useEffect(() => {
    const rolarPagina = () => {
      if (window.scrollY > 10) {
        setFocarMenu(true);
      } else {
        setFocarMenu(false);
      }
    };

    window.addEventListener("scroll", rolarPagina);

    return () => {
      window.removeEventListener("scroll", rolarPagina);
    };
  }, []);
  return (
    <>
      <Menu focarMenu={focarMenu} />
      <BuscaEntrega />
      <Categorias />
      <main>
        <div style={{ maxWidth: "1278px", margin: "0 auto" }}>
          <MelhoresRestaurantes></MelhoresRestaurantes>
        </div>
      </main>
    </>
  );
}

export default App;
