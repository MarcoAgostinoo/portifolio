"use client";
import { useState } from "react";

export default function Estiloso() {


  const [number, setNumero] = useState(0);

  function incrementar() {
    setNumero(number + 1);
  }

  return (
    <main>
      <button onClick={incrementar}>incrementar</button>
      <div>{number}</div>
    </main>
  );
}
