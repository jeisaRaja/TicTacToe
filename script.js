const body = document.querySelector('body');
const board = body.querySelector('.board');


const gameboard = (()=>{
    let array = ["","","","","","","","",""];
    for(let i=0 ; i<9 ; i++){
        let array_div = document.createElement('div');
        array_div.id =i;
        array_div.innerHTML = "";
        array_div.setAttribute('class', 'board_item');
        board.appendChild(array_div);

    }

    const setBox = (index,sign)=>{
        array[index] = sign;
    }
    const getBox = ()=>{
        alert('hello!')
    }

    return {setBox, getBox, array};

})();

const Player = (name,role)=>{
    function isWinning(){
        alert("Not yet!")
    }
    return {name,role,isWinning}
}
const array_divs = document.querySelectorAll('.board_item')
array_divs.forEach(div=>div.addEventListener('click',(e)=>{
    console.log(e.path)
}))
function plays(role){
    const index = 1;
    gameboard.setBox(index,role)
}
console.log(array_divs)



