import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';

const routes: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'create', component: PokemonCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
