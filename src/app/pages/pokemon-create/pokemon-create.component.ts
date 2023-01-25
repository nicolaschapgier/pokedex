import { Component, EventEmitter, Output } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemons } from 'src/app/models/pokemons';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css']
})


export class PokemonCreateComponent {


  public pokemonAdded:Pokemons=  {name:"",image:"",description :""}
  
  constructor (public PokedexService: PokedexService){}

  @Output() pokemonCreerParent: EventEmitter<any> = new EventEmitter();

    envoyer():void{
      console.log(this.pokemonAdded)
      this.PokedexService.addPokemon(this.pokemonAdded);
    }
  
}
