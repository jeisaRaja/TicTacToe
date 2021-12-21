const body = document.querySelector('body');
const board = body.querySelector('.board');
let j = 0

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
                    console.log('player 2 win!');
                }
                else if(axisTwo=='X'){
                    console.log('player 1 win!');
                }
            }
            
        }
            
    };
    

    return {setBox, getBox, array, win};
})();

const Player = (name,role)=>{
    function isWinning(){
        return false
    }
    // const play = ()=>{
    //     boardListener();
    // }
    return {name,role,isWinning}
}
let i = 0;
function boardListener(){
    const array_div = document.querySelectorAll('.board_item')
    array_div.forEach(div=>div.addEventListener('click', sendToBoard));
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
}

function plays(role){
    const index = 1;
    gameboard.setBox(index,role)
}


const player1_role = 'X'
const player2_role = 'O'

const player1 = Player('Jeisa', player1_role)
const player2 = Player('Aldo', player2_role)



while(j<5){
    if(j%2==0 && gameboard.win() == false){
        // gameboard.setBox(3, 'O')
        j++
    }
    else if(j%2!==0 && gameboard.win() == false){
        // gameboard.setBox(2,'X')
        j++
    }
    else{
        break
    }    
}

