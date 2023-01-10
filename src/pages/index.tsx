import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { TestButton } from "~/components/TestButton";
import { UseMemo } from "~/components/UseMemo";

const Home: NextPage = (): JSX.Element => {
  const [count, setCount] = useState(0);

  // こコンポーネントでもやってみよう
  // こいつは一度し生成されないので初期値のを参照している
  const TestHandler = useCallback(() => {
    console.log("test", count);
  }, [count]);

  console.log("soto", count);

  const clickHandler = () => {
    setCount(count + 1);
    console.log(count);
  };

  console.log("レンダリング");

  return (
    <>
      <p>count: {count}</p>
      <button css={button} onClick={clickHandler}>
        test
      </button>

      <button css={buttonTest} onClick={TestHandler}>
        testHan
      </button>

      <TestButton count={count} />
      <UseMemo />
    </>
  );
};
export default Home;

const button = css`
  background: red;
`;

const buttonTest = css`
  background: green;
`;
