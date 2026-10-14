function CharDBZ ({ personagem }) {

    return (
        <div className="hero">

            <img
                src={personagem.image}
                className="base"
                width="170"
                height="179"
                alt={personagem.name}
                />
        </div>
    );
}

export default CharDBZ