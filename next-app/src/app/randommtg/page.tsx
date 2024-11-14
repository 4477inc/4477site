"use client";

import { useEffect, useState } from "react";

function DataView() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("../api/cards")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h2>Random MTG Card</h2>
      <p>{data}</p>
    </>
  );
}

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <DataView />
    </>
  );
}
