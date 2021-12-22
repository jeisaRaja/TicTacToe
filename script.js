const body = document.querySelector('body');
const board = body.querySelector('.board');
const announcement= body.querySelector('.announcement')

const gameboard = (()=>{
    let array = [" "," "," "," "," "," "," "," "," "];
    function update(){
        for(let n=0 ; n<9 ; n++){
            let array_div = document.createElement('div');
            array_div.id =n;
            array_div.textContent = array[n];
            array_div.setAttribute('class', 'board_item');
            board.appendChild(array_div);
        }
        boardListener()
    }
    function clear(){
        const array_div = document.querySelectorAll('.board_item')
        array_div.forEach(x=>x.remove())
    }
    update()
    const setBox = (index,sign)=>{
        const checkDiv = document.getElementById(index);
        if(checkDiv.textContent==" "){
            array[index] = sign;
            clear()
            update()
            i++;
            win()
        }
    }
    const getBox = ()=>{
        return array
    }
    function win() {
        const winningAxes = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let y=0; y<9; y++){
            let winningAxis = winningAxes[y];
            const axisOne = array[winningAxis[0]];
            const axisTwo = array[winningAxis[1]];
            const axisThree = array[winningAxis[2]];
            if(axisOne==axisTwo && axisTwo==axisThree){
                if(axisTwo=='O'){
                    removeListener()
                    announce('Player 2 win!');
                }
                else if(axisTwo=='X'){
                    removeListener()
                    announce('Player 1 win!');
                }
            }
            
        }
            
    };

    function removeListener(){
        const array_div = document.querySelectorAll('.board_item')
        array_div.forEach(div=>{
            div.removeEventListener('click', sendToBoard, true)
        })
    }
    

    return {setBox, getBox, array, win};
})();

const Player = (name,role)=>{

    return {name,role,isWinning}
}
let i = 0;
function boardListener(){
    const array_div = document.querySelectorAll('.board_item')
    array_div.forEach(div=>div.addEventListener('click', sendToBoard,true));

}

function plays(role){
    const index = 1;
    gameboard.setBox(index,role)
}

function sendToBoard(e){
    const index = parseInt(e.path[0].id)  
    if(i%2==0){
        gameboard.setBox(index, 'X')
    }
    else if(i%2!==0){
        gameboard.setBox(index, 'O');
    }
    console.log(i)
}

function announce(msg){
    const h1 = document.createElement('h1');
    h1.textContent = msg;
    h1.classList.add('msg')
    announcement.appendChild(h1);
}

const player1_role = 'X'
const player2_role = 'O'

const player1 = Player('Jeisa', player1_role)
const player2 = Player('Aldo', player2_role)
