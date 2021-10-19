import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../state/selector/todoListStatsState";

const ProgressBar = () => {
  const { percentCompleted } = useRecoilValue(todoListStatsState);
  const divRef = useRef();
  useEffect(() => {
    if (divRef !== undefined) {
      divRef.current.style.width = `calc(${percentCompleted * 100}% )`;
    }
  }, [percentCompleted]);
  return (
    <div className="progress-bar">
      <div ref={divRef}></div>
    </div>
  );
};

export default ProgressBar;
