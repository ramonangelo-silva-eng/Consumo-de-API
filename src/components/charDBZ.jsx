import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CharDBZ (){
const [DBZ, setDBZ] = useState({})
const [error, setError] = useState(false)     
const [loading, setLoading] = useState(true)

useEffect(() => {
    const getData = async () => {
      try {
        const responseDBZ = await axios.get(
          'https://dragonball-api.com/api/characters/11'
        );

        setDBZ(responseDBZ.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log('Error: ', error);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Carregando personagem...</div>;
  }

  if (error) {
    return <div>Erro ao carregar personagem.</div>;
  }

  return (
    <div className="hero">
      <img
        src={DBZ.image}
        className="base"
        width="170"
        height="179"
        alt={DBZ.name}
      />
    </div>
  );
}