import type { NextPage } from "next";
import { useEffect, useLayoutEffect, useState } from "react";

const Home: NextPage = (): JSX.Element => {
  const [layoutEffect, setLayoutEffect] = useState(0);
  const [effect, setEffect] = useState(1);

  // あんまり違いがわからない

  useEffect(() => {
    console.log("useEffect起動");

    let i = 0;
    while (i < 200000000) i++;
    return setEffect(2);
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect起動");

    let i = 0;
    while (i < 200000000) i++;
    return setLayoutEffect(20);
  }, []);

  console.log("layoutEffect: ", layoutEffect);
  console.log("effect: ", effect);

  let i = 0;

  while (i < 200000000) i++;

  return (
    <div style={{ textAlign: "center", fontSize: 80 }}>
      <p>layoutEffect: {layoutEffect}</p>
      <p>effect: {effect}</p>
    </div>
  );
};

export default Home;
