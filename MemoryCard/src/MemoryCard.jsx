import { useState, useEffect } from "react";
import propTypes from 'prop-types'

export function MemoryCard(props){
  const [photos, setPhotos] = useState("");
  const [ids,setIds]= useState();
  const [name,setName] = useState("");

  const Fetch = () => {
   
    useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.number}`)
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          setPhotos(data.sprites.front_default);
          setIds(data.id);
          setName(data.name);
          
        })
    },[]);

  }
  Fetch();

  return(
    <div className="pokeContainer">
      <img onClick={props.onClick} key={ids} src={photos}/>
      <p>{name}</p>
    </div>
  );
}
MemoryCard.propTypes={
  number: propTypes.number
}