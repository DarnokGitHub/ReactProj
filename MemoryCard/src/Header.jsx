

export function Header({score,scoreMax}){

  return(
    <div className="bar">
      <div className="left-section">
        <h1>Poke MemoryCard</h1>
        <p>Get points by clicking the image but don't click on any twice</p>
      </div>
      <div className="right-section">
        <p>Score: {score}</p>
        <p>Max Score: {scoreMax}</p>
      </div>
    </div>
  );
}