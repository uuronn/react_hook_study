import type { NextPage } from "next";
import { useEffect, useLayoutEffect, useState } from "react";

const Home: NextPage = (): JSX.Element => {
  const [layoutEffect, setLayoutEffect] = useState(0);
  const [effect, setEffect] = useState(1);

  //   あんまり違いがわからない

  useLayoutEffect(() => {
    let i = 0;
    while (i < 200000000) i++;
    return setLayoutEffect(20);
  }, []);

  useEffect(() => {
    let i = 0;
    while (i < 200000000) i++;
    return setEffect(2);
  }, []);

  console.log("layoutEffect: ", layoutEffect);
  console.log("effect: ", effect);

  return (
    <div style={{ textAlign: "center", fontSize: 80 }}>
      <p>layoutEffect: {layoutEffect}</p>
      <p>effect: {effect}</p>
    </div>
  );
};

export default Home;
