const gameBoard = (() => {
    const gameboard = []


    const cellFactory = (setCoordinates, setPlayerPick = '') => {
        const value = ''
        const coordinateFactory = (setX, setY) => { setX, setY }

        const coordinates = coordinateFactory(setCoordinates[0], setCoordinates[1])
        const changValue = playerPick => value = playerPick
        return { coordinates, value }
    }


    const fillGameBoard = (() => {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {

                let cell = cellFactory([x, y])
                gameboard.push(cell)
            }
        }
    })()

    console.log(gameboard);

})()

// const Player = () => {

// }

// const player1 = new Player()
// const player2 = new Player()