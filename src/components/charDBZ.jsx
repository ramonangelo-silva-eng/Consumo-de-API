import useFetchCharDBZ from '../hooks/userFetchCharDBZ';

export default function CharDBZ (){
const {loading, error, DBZ} = useFetchCharDBZ ()

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