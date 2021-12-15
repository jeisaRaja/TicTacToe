const body = document.querySelector('body');
const board = body.querySelector('.board');


const gameboard = (()=>{
    let array = ["","","","","","","","",""];
    for(let x of array){
        console.log(x)
        let array_div = document.createElement('div');
        array_div.innerHTML = "Hey";
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






