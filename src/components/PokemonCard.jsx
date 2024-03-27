import PropTypes from 'prop-types';


function PokemonCard({nom, img}) {
  return(
    <>
      <p>Pokemon: {nom}</p>
      {img !== undefined ? <img src={img} alt={"pas d'image affiché pour " + nom} /> : <p>???</p>}
    </>
  )
}

PokemonCard.propTypes = {
  nom: PropTypes.string,
  img: PropTypes.string,




  // const imgOrNot = (pokemon) => {
  //     if (pokemon.imgSrc !== undefined){
  //       return(
  //         <img src={pokemon.imgSrc} alt={"pas d'image affiché pour " + pokemon.name} />
  //       )
  //     }else{
  //       return(
  //         <p>???</p>
  //       )
  //     }
  // }
    // return (
    //     <figure>
    //       {pokemonList.map((pokemon) => (
    //         <div key={pokemon.name}>
    //             <p>{pokemon.name}</p>
    //             {imgOrNot(pokemon)}
    //             {/* {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={"pas d'image affiché pour " + pokemon.name} /> : <p>???</p>} */}
    //         </div>
    //       ))}
    //     </figure>
    //   );

}

export default PokemonCard;