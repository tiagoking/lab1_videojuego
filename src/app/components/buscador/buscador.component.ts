import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  videojuegos: any[] = [];
  termino: string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private _videojuegoService: VideojuegosService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.videojuegos=this._videojuegoService.buscarVideojuegos(this.termino);
      console.log(this.videojuegos);
    })
  }

  verVideojuego(idx: number) {
    this.router.navigate(['/videojuego/', idx]);
  }


}
