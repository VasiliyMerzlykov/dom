const gameBoard = document.getElementsByClassName('game-board')[0];
const gameFild = document.getElementsByClassName('field');
const image = document.createElement('img');
gameBoard.style = "display: flex; width: 420px; height: 420px; flex-wrap: wrap; justify-content: space-between;";

for(i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.style = 'width: 100px; height: 100px; background: green;';
    gameBoard.append(row);
    row.classList.add(`field`);
};

image.classList.add('img');
image.style = 'display: flex; width: 100px; height: 100px; background: gray;';
image.src = './img/goblin.png';

const get = document.getElementsByClassName('field');
function slide (){
    const show = Math.floor(Math.random() * 15 + 1);
    return gameFild[show].append(image);
};

setInterval(slide, 700);

