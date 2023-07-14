let gridSize = 16

function createGrid(sizeOfGrid) {
    for (let i = 1; i < sizeOfGrid; i++) {
        const squareDiv = document.createElement("div")
        squareDiv.classList.add("square-div")
        const gridContainer = document.querySelector(".container")
        gridContainer.appendChild(squareDiv)
    }
} 