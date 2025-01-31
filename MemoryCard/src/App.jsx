
import { MemoryCard } from "./MemoryCard.jsx"
import { Header } from "./Header.jsx"
import './App.css'
import { useState, useEffect } from "react";
function App() {
  const initialTiles = Array.from({ length: 40 }, (_, i) => i + 30);
  const [tileOrder, setTileOrder] = useState(initialTiles);

  const [usedIds, setUsedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);


  const shuffleTiles = () => {
    setTileOrder((prevOrder) => {
      const shuffled = [...prevOrder];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  const updateScore = (id) =>{
    if(usedIds.includes(id)){
      setUsedIds([]);
      score > maxScore ? setMaxScore(score) : setMaxScore(maxScore);
      setScore(0);

    }else{
      setUsedIds(s=>([...usedIds,id]));
      setScore(s => s + 1);

    }
  }

  const handleClick=(id) =>{
    updateScore(id);
    shuffleTiles();
  }
  

  return (
    <>
    <Header score={score} scoreMax={maxScore}></Header>
    <div className="poks">
      {tileOrder.map((num)=>(
        <MemoryCard onClick={() => handleClick(num) } key={num} number={num}></MemoryCard>
      ))}
    </div>
    </>
  )
}

export default App
