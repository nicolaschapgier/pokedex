import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/pokemons';
import { pokemons } from './pokemons-mock';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  pokemonArray: Pokemons[] = pokemons;

  constructor(public http: HttpClient) {}

  public addPokemon(pokemon: Pokemons) {
    console.log(pokemon)
    return this.pokemonArray.push(pokemon);
  }
}
