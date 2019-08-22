import React, { useState } from "react";
import "./App.css";

// 

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [firstDown, setFirstDown] = useState(1);
  const [yards, setYards] = useState(1);

  quarter === 5 && setQuarter(1);
  down === 5 && setDown(1);
  yards > 100 && setYards(1)
   return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="buttonQuarter" onClick={(() => setDown(down + 1))}>Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{firstDown}</div>
        <button className="buttonQuarter" onClick={(() => setFirstDown(firstDown + 1))}>First Down</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yards}</div>
        <button className="buttonQuarter" onClick={(() => setYards(yards + Math.ceil(10 * Math.random())))}>Yards</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className="buttonQuarter" onClick={(() => setQuarter(quarter + 1))}>Lets Play</button>
      </div>
    </div>
  );
};

export default BottomRow;
