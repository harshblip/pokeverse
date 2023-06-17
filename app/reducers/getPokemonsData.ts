// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import { genericPokemonType, generatedPokemonType } from "../../utils/Types";
import { defaultImages, images } from "../../utils/getPokemonImages";
import {pokemonTypes} from '../../utils/getPokemonTypes';
import axios from "axios";

export const getPokemonData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = [];
      console.log({defaultImages, images});
      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number;
            types: { type: generatedPokemonType }[];
          };
        } = await axios.get(pokemon.url);
        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: pokemonTypes[name],
          })
        );
        let image: string = images[data.id];
        if (!image) {
          image = defaultImages[data.id];
        }
        if (image) {
          pokemonsData.push({
            name: pokemon.name,
            id: data.id,
            image,
            types,
          });
        }
      }
      // console.log({ pokemonsData })
      return pokemonsData;
    } catch (err) {
      console.error(err);
    }
  }
);
