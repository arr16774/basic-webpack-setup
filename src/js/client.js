const estado = {
  turno: 1,
  tablero: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

}
const render = lstate =>{
  const title = document.createElement('h1');
title.className = 'title-tag';
title.innerHTML = 'TOTITO';
root.className='root-tag';

const player = document.createElement('h1');
player.className = 'player-tag';
player.innerHTML = 'Turno Jugador X';


const btnReinciar = document.createElement('button');
btnReinciar.className = 'btn';
btnReinciar.innerHTML = 'Reinciar'

const tablero = document.createElement('div');
tablero.className = 'tablero-contenedor';
console.log(estado.tablero);

const winner = document.createElement('h1');
winner.className = 'winner-tag';

for (let i = 0; i < 3; i++) {
  const filas = document.createElement('div');
  filas.className = 'fila-contenedor';
  tablero.appendChild(filas);
  for (let j = 0; j < 3; j++) {
    const columnas = document.createElement('div');
    columnas.className = 'columna-contenedor';
    columnas.innerHTML = '<img src = "https://www.shareicon.net/data/128x128/2016/10/01/837948_miscellaneous_512x512.png">'
    columnas.onclick = function () {
      estado.turno++;
      if (estado.turno % 2 == 0) {
        if (estado.tablero[i][j] == 0) {
          estado.tablero[i][j] = 1;
          columnas.innerHTML = '<img src = "https://vignette.wikia.nocookie.net/mysingingmonsters/images/2/24/Red-x.png/revision/latest?cb=20171113115328">'
          player.innerHTML = 'Turno jugador O';
        }

      } else {
        if (estado.tablero[i][j] == 0) {
          estado.tablero[i][j] = 2;
          columnas.innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/0/05/Red_circle.svg">'
          player.innerHTML = 'Turno jugador X';
        }
      }
      //primer estado win x
      if (estado.tablero[0][0] == 1 & estado.tablero[1][0] == 1 & estado.tablero[2][0] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //segundo estado win x
      if (estado.tablero[0][0] == 1 & estado.tablero[0][1] == 1 & estado.tablero[0][2] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //tercer estado win x
      if (estado.tablero[1][0] == 1 & estado.tablero[1][1] == 1 & estado.tablero[1][2] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //cuarto estado win x
      if (estado.tablero[2][0] == 1 & estado.tablero[2][1] == 1 & estado.tablero[2][2] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //quinto estado win x
      if (estado.tablero[0][1] == 1 & estado.tablero[1][1] == 1 & estado.tablero[2][1] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //sexto estado win x
      if (estado.tablero[0][2] == 1 & estado.tablero[1][2] == 1 & estado.tablero[2][2] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //septimo estado win x
      if (estado.tablero[0][0] == 1 & estado.tablero[1][1] == 1 & estado.tablero[2][2] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //octavo estado win x
      if (estado.tablero[0][2] == 1 & estado.tablero[1][1] == 1 & estado.tablero[2][0] == 1) {
        winner.innerHTML = 'Gano Jugador X';
      }
      //primer estado win o
      if (estado.tablero[0][0] == 2 & estado.tablero[1][0] == 2 & estado.tablero[2][0] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //segundo estado win o
      if (estado.tablero[0][0] == 2 & estado.tablero[0][1] == 2 & estado.tablero[0][2] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //tercer estado win o
      if (estado.tablero[1][0] == 2 & estado.tablero[1][1] == 2 & estado.tablero[1][2] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //cuarto estado win o
      if (estado.tablero[2][0] == 2 & estado.tablero[2][1] == 2 & estado.tablero[2][2] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //quinto estado win o
      if (estado.tablero[0][1] == 2 & estado.tablero[1][1] == 2 & estado.tablero[2][1] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //sexto estado win o
      if (estado.tablero[0][2] == 2 & estado.tablero[1][2] == 2 & estado.tablero[2][2] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //septimo estado win o
      if (estado.tablero[0][0] == 2 & estado.tablero[1][1] == 2 & estado.tablero[2][2] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }
      //octavo estado win o
      if (estado.tablero[0][2] == 2 & estado.tablero[1][1] == 2 & estado.tablero[2][0] == 2) {
        winner.innerHTML = 'Gano Jugador O';
      }

    }
    filas.appendChild(columnas);
    btnReinciar.onclick = function(){
      estado.tablero = [[0,0,0],[0,0,0],[0,0,0]];
      winner.innerHTML = ' ';
      root.innerHTML = null;
      render(estado);
      
      }
    }
  }
  root.appendChild(title);
  root.appendChild(tablero);
  root.appendChild(player);
  root.appendChild(winner);
  root.appendChild(btnReinciar);

}
render(estado);






