import { Component, Input, Output } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() pokemonChildData: Pokemons[] = [];
  @Output() pokemonEmitFromChild: EventEmitter<any> = new EventEmitter<any>();



  
  sendPokemonToParent(event: any): void {
    this.pokemonEmitFromChild.emit(event)
  }
}
