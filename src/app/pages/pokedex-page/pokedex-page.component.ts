import { Component, Input, Output } from '@angular/core';
import { pokemons } from 'src/app/shared/pokemons-mock';
import { Pokemons } from 'src/app/models/pokemons';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  pokemonParentData:Pokemons[]= pokemons;
  pokemonDescription:string = ""

  pokemonEmitReceiveFromChild(event: any):void{
    this.pokemonDescription = event
    console.log(this.pokemonDescription)
  }
}
