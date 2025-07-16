import Home from "../Home";
import Proyecto from "../pages/Proyecto";
import Info from "../pages/Info";
import Hojav from "../pages/Hojav";
import Contact from "../pages/Contact";
import Layout from "../componentes/Layout";

export const Enrutador = (tema, setTema) => [
  {
    path: "/",
    element: <Home tema={tema} setTema={setTema} />,
  },
  {
    path: "/proyecto",
    element: (
      <Layout tema={tema} setTema={setTema}>
        <Proyecto />
      </Layout>
    ),
  },
  {
    path: "/info",
    element: (
      <Layout tema={tema} setTema={setTema}>
        <Info />
      </Layout>
    ),
    
  },
  {
    path: "/contacto",
    element: (
      <Layout tema={tema} setTema={setTema}>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/Hojav",
    element:(
      <Layout tema={tema} setTema={setTema}>
        <Hojav/>
      </Layout>
    ),
  }

];
