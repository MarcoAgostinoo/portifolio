import Image from "next/image";
import Apresentacao from "./components/apresentacao/Apresentacao";
import Iam from "./components/iam/Iam";
import Works from "./components/portifolio/Works";
import NavBar from "./components/navBar/NavBar";

export default function Portifolio () {
  return (
    <main>
      <NavBar texto="estiloso" destino="/pages/estiloso" />
      <Apresentacao />
      <Iam />
      <Works />
    </main>
  );
}
