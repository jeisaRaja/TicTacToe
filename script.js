const body = document.querySelector('body');
const board = body.querySelector('.board')
let array = ["","","","","","","","",""];

for(let x=0 ; x<9 ; x++){
    let array_div = document.createElement('div');
    array_div.innerHTML = "Hey";
    array_div.setAttribute('class', 'board_item')
    board.appendChild(array_div);
}