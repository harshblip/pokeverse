import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async () => {
    try {
        const {data}  = await axios.get(pokemonsRoute);
        console.log({data});
        return data.results;
    } catch(err){
        console.log(err);
    }
})