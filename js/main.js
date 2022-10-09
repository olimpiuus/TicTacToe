const gameBoard = (() => {
    const gameboard = []

    const cellFactory = (setCoordinates, setPlayerPick = '') => {
        let value = null

        const coordinateFactory = (setX, setY) => {
            let x = setX
            let y = setY
            return { x, y }
        }

        const coordinates = coordinateFactory(setCoordinates[0], setCoordinates[1])
        return { coordinates, value }
    }

    // const newCell = cellFactory([1, 1])

    const fillGameBoard = (() => {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {

                let cell = cellFactory([x, y])
                cell.changeValue = (player) => {
                    player.side === 'x' ? cell.value = 'x' : cell.value = 'y'
                }
                gameboard.push(cell)
            }
        }
    })()

})()

const Player = () => {

}

// const player1 = new Player()
// const player2 = new Player()