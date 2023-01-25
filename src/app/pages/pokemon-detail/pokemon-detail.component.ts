import { Component, Input } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input() pokemonButtonDescription: string = "";



}
