import { Injectable } from '@angular/core';


@Injectable()
export class VideojuegosService {
  private videojuegos: Videojuego[] = [
    {
      nombre: "Fornite",
      descripcion: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011",
      img: "assets/img/juegos/fortnite.jpg",
      lanzamiento: "21 de julio de 2017",
      consola: "PlayStation 4, Pc, Xbox ... "
    },
    {
      nombre: "Fifa 22",
      descripcion: "FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch",
      img: "assets/img/juegos/fifa22.jpg",
      lanzamiento: "17 de septiembre de 2021",
      consola: "PlayStation 4, Pc, Xbox ... "
    },
    {
      nombre: "Dead by Dayligth",
      descripcion: "Dead by Daylight es un videojuego de terror desarrollado por Behaviour Interactive y publicado por Starbreeze Studios.1​ Fue lanzado en junio del 2016 para Microsoft Windows,2​ en junio del 2017 para las consolas PlayStation 4 y Xbox One,3​ en septiembre de 2019 para Nintendo Switch y en abril de 2020 salió su versión para móvil",
      img: "assets/img/juegos/dead.jpeg",
      lanzamiento: "14 de junio de 2016",
      consola: "PlayStation 4, Nintendo switch, Xbox ... "
    },
    {
      nombre: "CyberPunk 2077",
      descripcion: "Cyberpunk 2077 es un videojuego desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4, y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia. Siendo una adaptación del juego de rol de mesa Cyberpunk 2020, se establece cincuenta y siete años más tarde en la ciudad distópica de Night City, California.",
      img: "assets/img/juegos/cyber.jpg",
      lanzamiento: "10 de diciembre de 2020",
      consola: "PlayStation 4,Xbox ..."
    },
    {
      nombre: "The Last of Us Part II",
      descripcion: "The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.1​ Ambientado cinco años después de The Last of Us (2013), el juego se centra en dos personajes jugables en un Estados Unidos post-apocalíptico cuyas vidas se entrelazan: Ellie, que busca venganza después de sufrir una tragedia, y Abby, una soldado que se ve envuelta en un conflicto entre su milicia y un culto religioso. El juego se juega desde la perspectiva de la tercera persona y le permite al jugador luchar contra enemigos humanos y criaturas caníbales parecidas a zombis con armas de fuego, armas improvisadas y sigilo.",
      img: "assets/img/juegos/last.jpg",
      lanzamiento: "19 de junio de 2020",
      consola: "PayStation 4"
    },
    {
      nombre: "Uncharted 4",
      descripcion: "Uncharted 4: El desenlace del ladrón (en inglés Uncharted 4: A Thief's End) es un videojuego de acción-aventura en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog exclusivamente para PlayStation 4.1​ Es la secuela de Uncharted 3: La traición de Drake, y la cuarta entrega de la serie Uncharted. El videojuego fue confirmado con su primer teaser tráiler en noviembre del 2013 y luego fue mostrado en el PlayStation E3 de 2014.",
      img: "assets/img/juegos/unchar.jpeg",
      lanzamiento: "10 de mayo de 2016",
      consola: "PlayStation 4"
    },
    {
      nombre: "Hallo Infinite",
      descripcion: "Es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S. El juego es desarrollado por 343 Industries y distribuido por Xbox Game Studios",
      img: "assets/img/juegos/hallo.jpg",
      lanzamiento: "8 de diciembre de 2021",
      consola: "Xbox"
    },
    {
      nombre: "Valorant",
      descripcion: "Valorant es un videojuego de disparos en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el nombre en clave Project A en octubre de 2019. Fue lanzado para Microsoft Windows el 2 de junio de 2020 después de su beta cerrada lanzada el 7 de abril de 2020.",
      img: "assets/img/juegos/valorant.jpg",
      lanzamiento: "10 de marzo de 2015",
      consola: "Pc"
    },
    {
      nombre: "NBA 2K 21",
      descripcion: "NBA 2K21 es un videojuego de simulación de baloncesto de 2020 desarrollado por Visual Concepts y publicado por 2K Sports, basado en la Asociación Nacional de Baloncesto. Es la 22a entrega de la franquicia NBA 2K y la sucesora de NBA 2K20, y la predecesora de NBA 2K22.",
      img: "assets/img/juegos/nba.jpg",
      lanzamiento:" 10 noviembre   2020",
      consola: "PlayStation 4, Pc, Xbox ... "
    },
    {
      nombre: "Rust",
      descripcion: "Rust es un juego de supervivencia creado por Facepunch Studios1​. La inspiración del videojuego viene de múltiples juegos del género de supervivencia. Su lanzamiento oficial se produjo el 8 de febrero de 2018,2​ aunque estuvo en acceso anticipado desde 2013.",
      img: "assets/img/juegos/rust.jpg",
      lanzamiento: "8 de febrero de 2018",
      consola: "Pc"
    }

  ];

  constructor() {
    console.log("servicio listo para usarse");
  }

  getVideoJuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];
    termino = termino.toLowerCase();
    this.videojuegos.forEach(videojuego => {
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        videojuegosArr.push(videojuego);
      }
    });
    return videojuegosArr;
  }



}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}
