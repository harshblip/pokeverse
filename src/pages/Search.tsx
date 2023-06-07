import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper';
import { useAppDispatch } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';

function Search() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);
  
  return (
    <div>Search</div>
  )
}

export default Wrapper(Search);