const DomElement = (() => {

    const board = document.querySelector('.game_board');
    // const boardChildrenArr = Array.from(board.children);

    return {
        board,
        // boardChildrenArr
    }

})()


const gameBoard = (() => {

    const gameboard = []

    const cellFactory = (setCoordinates, setPlayerPick = '') => {
        let value = null

        const coordinateFactory = (setX, setY) => {
            let x = setX
            let y = setY
            return { x, y }
        }
        const changeValue = (pick) => {
            console.log('c');
            value = pick
            return value
        }

        const addToDOM = () => {
            const elem = document.createElement('div')
            elem.classList.add('board_column')
            elem.dataset.value = value

            const addListener = () => {
                elem.addEventListener('click', changeValue(setPlayerPick))
            }

            return elem
        }

        const coordinates = coordinateFactory(setCoordinates[0], setCoordinates[1])

        return { coordinates, value, addToDOM }
    }


    const fillGameBoard = (() => {
        const board = document.querySelector('.game_board');
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {

                let cell = cellFactory([x, y])
                cell.changeValue = (player) => {
                    player.side === 'x' ? cell.value = 'x' : cell.value = 'y'
                }
                DomElement.board.append(cell.addToDOM())


            }
        }
    })()

    console.log(gameboard);
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