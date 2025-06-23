import { useState } from "react";

function App() {
  // Circle
  const [circleRadius, setCircleRadius] = useState(50);
  const [circlePositionX, setCirclePositionX] = useState(100);
  const [circlePositionY, setCirclePositionY] = useState(100);

  // Rectangles (Bars)
  const [bar1Height, setBar1Height] = useState(110);
  const [bar2Height, setBar2Height] = useState(130);
  const [bar3Height, setBar3Height] = useState(90);
  const [bar4Height, setBar4Height] = useState(70);

  // For bars to grow upward from bottom (SVG origin is top-left)
  const maxHeight = 200;

  return (
    <>
      <h1>React with SVG</h1>
      <hr />
      <div className="content">
        <h4>Circle</h4>
        Radius: {circleRadius}
        <br />
        <input
          type="range"
          min="10"
          max="50"
          value={circleRadius}
          onChange={(e) => setCircleRadius(Number(e.target.value))}
        />
        <br />

        X Position: {circlePositionX}
        <br />
        <input
          type="range"
          min="50"
          max="150"
          value={circlePositionX}
          onChange={(e) => setCirclePositionX(Number(e.target.value))}
        />
        <br />

        Y Position: {circlePositionY}
        <br />
        <input
          type="range"
          min="50"
          max="150"
          value={circlePositionY}
          onChange={(e) => setCirclePositionY(Number(e.target.value))}
        />
        <br />

        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle
            cx={circlePositionX}
            cy={circlePositionY}
            r={circleRadius}
            fill="red"
          />
        </svg>

        <hr />
        <h4>Rectangle Bars (Grow Upward)</h4>

        Bar 1 Height: {bar1Height}
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={bar1Height}
          onChange={(e) => setBar1Height(Number(e.target.value))}
        />
        <br />

        Bar 2 Height: {bar2Height}
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={bar2Height}
          onChange={(e) => setBar2Height(Number(e.target.value))}
        />
        <br />

        Bar 3 Height: {bar3Height}
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={bar3Height}
          onChange={(e) => setBar3Height(Number(e.target.value))}
        />
        <br />

        Bar 4 Height: {bar4Height}
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={bar4Height}
          onChange={(e) => setBar4Height(Number(e.target.value))}
        />
        <br />

        <svg width="200" height="200" viewBox="0 0 200 200">
          <rect
            x="0"
            y={maxHeight - bar1Height}
            width="40"
            height={bar1Height}
            fill="blue"
          />
          <rect
            x="50"
            y={maxHeight - bar2Height}
            width="40"
            height={bar2Height}
            fill="blue"
          />
          <rect
            x="100"
            y={maxHeight - bar3Height}
            width="40"
            height={bar3Height}
            fill="blue"
          />
          <rect
            x="150"
            y={maxHeight - bar4Height}
            width="40"
            height={bar4Height}
            fill="blue"
          />
        </svg>

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
      <h1>End</h1>
    </>
  );
}

export default App;
