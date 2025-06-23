import styles from "./Pokemon.module.css";
import { useState } from "react";
import { useEffect } from "react";

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/249")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
        console.log(data.types[0].type.name);
      });
  }, []);

  if (pokemon === null) {
    return (
      <section className={styles.pokemon}>
        <h2>Fetching Pokemon</h2>
      </section>
    );
  } else {
    return (
      <section className={styles.pokemon}>
        <div className={styles.pokemonHeader}>
          <h2 className={styles.name}>{pokemon.name}</h2>
          <p className={styles.type1}>{pokemon.types[0].type.name}</p>
          <p className={styles.type2}>{pokemon.types[1].type.name}</p>
        </div>
        <img className={styles.img} src={pokemon.sprites.front_default} />
        <div className={styles.PokemonAbilies}>
          <p className={styles.ability1}>
            Ability 1: {pokemon.abilities[0].ability.name}
          </p>
          <p className={styles.ability2}>
            Ability 2: {pokemon.abilities[1].ability.name}
          </p>
        </div>
      </section>
    );
  }
}
