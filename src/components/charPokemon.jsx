function CharPokemon ({ pokemon }) {

    return (

        <div id="social">
            <h2>Meu Parceiro</h2>
            <p>{pokemon.name}</p>

            <img 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            />
            <p>{pokemon.types[0].type.name}</p>
        </div>

    );
}
export default CharPokemon