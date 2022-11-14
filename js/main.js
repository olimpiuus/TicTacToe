const DomElement = (() => {

    const board = document.querySelector('.game_board');
    // const boardChildrenArr = Array.from(board.children);

    return {
        board
    }

})()


const gameBoard = (() => {

    const gameboard = []

    const cellFactory = (setCoordinates) => {
        
        let value = 'x'
        const elem = document.createElement('div')
        elem.classList.add('board_column')

        const coordinates = { 
            x:setCoordinates[0],
            y:setCoordinates[1]
        }
        
        const changeValue = (newValue) => {
            value = newValue
            elem.dataset.value = value
            getvalue()
            
        }
        const getvalue = ()=>console.log(value)

        const changeValueX = ()=>changeValue('x')


        const addListenerPlayer1 = ()=> {
            elem.addEventListener('click', changeValueX)
        }

        const addListenerPlayer2 = ()=>{
            elem.removeEventListener('click')
            elem.addEventListener('click', ()=>{
                changeValue('o')
            })
        }

        return {  elem, coordinates, changeValue, addListenerPlayer1, addListenerPlayer2, getvalue}
    }


    const fillGameBoard = (() => {
        const board = document.querySelector('.game_board');
        const cellsArray = []
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {

                const cell = cellFactory([x, y])
                // cell.changeValue = (player) => {
                //     player.side === 'x' ? cell.value = 'x' : cell.value = 'y'
                // }
                cell.addListenerPlayer1()
                DomElement.board.append(cell.elem)
                cellsArray.push(cell)
                // cell.addListenerPlayer2()

            }
        }
        // board.addEventListener('click', ()=>{
        //     cellsArray.forEach((el)=>{
        //         el.getvalue()
        //     })
        // })

        
    })()

    return gameboard

})()

const playerFactory = (mark, name = '') => {

    return { mark, name }
}



const player1 = playerFactory('x')
const player2 = playerFactory('o')

const clickPlayer = (event, player) => {
    console.log(event);
}

// DomElement.boardChildrenArr.forEach(addEventListener('click', clickPlayer(event, player1))