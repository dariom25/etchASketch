let standardGrid = 32

function createGrid(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-container");
        const gridContainer = document.querySelector(".container");
        gridContainer.appendChild(rowDiv)
        for (let i = 0; i < sizeOfGrid; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square-div");
            const rowContainers = document.querySelectorAll(".row-container");
            rowContainers.forEach((rowContainer) => {
                rowContainer.appendChild(squareDiv);
            });
        };
    }       
}

function changeColorOfSquares() {
    const squareDivs = document.querySelectorAll(".square-div");
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.setAttribute("style", "background-color: black")
        });
    });
}

function getGridSize() {
    let gridSize = prompt("Please enter a number between 1 and 100 to a grid.");
    return gridSize
}

function deleteGrid() {
    const rowDivs = document.querySelectorAll(".row-container");
    rowDivs.forEach((rowDiv) => {
        rowDiv.remove();
    });
}

function changeSizeOfGrid() {    
    deleteGrid();
    createGrid(getGridSize());
    changeColorOfSquares();
}

createGrid(standardGrid);
changeColorOfSquares();
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    changeSizeOfGrid();
});
