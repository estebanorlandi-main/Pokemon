function PokemonList() {
  return (
    <div>
      {pokemons.map(({ id, name, type }) => (
        <div key={id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </div>
      ))}
    </div>
  );
}
