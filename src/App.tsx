function App() {
  return (
    <>
      <h1>
        React with SVG
      </h1>
      <hr/>
      Circle:
      <svg
        width="100"
        height="100"
        viewBox="0 0 200 200"
      >
        <circle 
          cx="100"
          cy="100" 
          r="50" 
          fill="red" 
          className="circle"
          />
      </svg>  
    </>
  )
}

export default App
