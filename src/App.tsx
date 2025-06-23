import { useState } from "react"

function App() {

  const [circleRadius, setCircleRadius] = useState<string>("50");

  return (
    <>
      <h1>
        React with SVG
      </h1>
      <hr/>
      <div className="content">
        Circle Radius: {circleRadius}
        <br/>
        <input
          type="range"
          min="10"
          max="50"
          value={circleRadius}
          onChange={(e) => setCircleRadius(e.target.value)}
        />
        <br/>
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
        >
          <circle 
            cx="100"
            cy="100" 
            r={circleRadius} 
            fill="red" 
            className="circle"
            />
        </svg>  
      </div>
    </>
  )
}

export default App
