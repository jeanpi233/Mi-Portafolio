import Navbar from "./Navbar";

export default function Layout({ children, tema, setTema }) {
  return (
    <>
      <Navbar tema={tema} setTema={setTema} />
      {children}
    </>
  );
}
