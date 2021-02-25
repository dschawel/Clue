const gameboard = document.querySelector('.gameboard')

let rows = document.getElementsByClassName('grid-row')
let cells = document.getElementsByClassName('cells')

const makeRows = (rows, cols) => {
    gameboard.style.setProperty('--grid-rows', rows)
    gameboard.style.setProperty('--grid-cols', cols)
    console.log('This is # of rows', rows, 'This is # of cols', cols)
    for (let i = 0; i < ((rows * cols) - 400); i++) {
        let cell = document.createElement('div')
        gameboard.appendChild(cell).className = "grid-item"
    }
}

makeRows(25, 24)