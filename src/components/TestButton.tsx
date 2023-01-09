import { css } from "@emotion/react";
import { useCallback } from "react";

export const TestButton = ({ count }: { count: number }) => {
  const TestHandler = useCallback(() => {
    console.log("test", count);
  }, [count]);

  console.log("TestButtonコンポーネントがレンダリングした");

  return (
    <button css={buttonTest} onClick={TestHandler}>
      testHan
    </button>
  );
};

const buttonTest = css`
  background: pink;
`;
