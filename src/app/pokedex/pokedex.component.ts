import { Component } from '@angular/core';
import { Pokedex } from '../pokedex';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokedex: Pokedex = {} as Pokedex;

  constructor(private service: PokedexService) { }


  ngOnInit(): void {
    this.loadPokemon()
  }

  loadPokemon() {
    this.service.getPokemon().subscribe({
      next: data => {
        this.pokedex = data;
        this.pokedex.img = data.sprites.other.home.front_default;
      }
    });
  }

  pokemonProximo() {
    this.service.idPokemon += 1;
    this.service.getPokemon().subscribe(
      {
        next: data => {
          this.pokedex = data;
          this.pokedex.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  pokemonAnterior() {
    if(this.service.idPokemon > 1)
    this.service.idPokemon -= 1;
    this.service.getPokemon().subscribe(
      {
        next: data => {
          this.pokedex = data;
          this.pokedex.img = data.sprites.other.home.front_default;
        }
      }
    );
  }


}
