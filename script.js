const body = document.querySelector('body');
const board = body.querySelector('.board');
let j = 0

const gameboard = (()=>{
    let array = ["","","","","","","","",""];
    function update(){
        for(let i=0 ; i<9 ; i++){
            let array_div = document.createElement('div');
            array_div.id =i;
            array_div.innerHTML = array[i];
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
        array[index] = sign;
        clear()
        update()
    }
    const getBox = ()=>{
        return array
    }
    const win = ()=>{
        if(player1.isWinning() == true || player2.isWinning() == true){
            return true
        }
        return false
    }
    return {setBox, getBox, array, win};

})();

const Player = (name,role)=>{
    function isWinning(){
        return false
    }
    return {name,role,isWinning}
}

function boardListener(){
    const array_div = document.querySelectorAll('.board_item')
    array_div.forEach(div=>div.addEventListener('click',(e)=>{
    console.log(e.path[0].id)
    const index = parseInt(e.path[0].id)
    console.log(typeof index)
    gameboard.setBox(index, 'X')
    
}))
console.log(array_div)
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

