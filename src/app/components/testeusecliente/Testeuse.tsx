"use client";
import { useState, useEffect } from "react";

export default function Estiloso() {

    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('/pages/api');
        const json = await res.json();
        setData(json);
      };
  
      fetchData();
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Hello from API:</h1>
        <p>{data.hello}</p>
      </div>
    );
  }