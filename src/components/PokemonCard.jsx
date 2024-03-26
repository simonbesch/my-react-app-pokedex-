const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    },
    {
      name: "palkia",
      
    },
  ];


function PokemonCard() {

  const imgOrNot = (pokemon) => {
      if (pokemon.imgSrc !== undefined){
        return(
          <img src={pokemon.imgSrc} alt={"pas d'image affiché pour " + pokemon.name} />
        )
      }else{
        return(
          <p>???</p>
        )
      }
  }

    return (
        <figure>
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name}>
                <p>{pokemon.name}</p>
                {imgOrNot(pokemon)}
                {/* {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={"pas d'image affiché pour " + pokemon.name} /> : <p>???</p>} */}
            </div>
          ))}
        </figure>
      );




    
}

export default PokemonCard;