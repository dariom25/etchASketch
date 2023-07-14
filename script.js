let gridSize = 16

function createGrid(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++) {
        const squareDiv = document.createElement("div")
        squareDiv.classList.add("square-div")
        squareDiv.textContent = "Test"
        const gridContainer = document.querySelector(".container")
        gridContainer.appendChild(squareDiv)
    }
}

createGrid(gridSize);