let standardGrid = 32

function createGrid(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-container");
        const gridContainer = document.querySelector(".grid-container");
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

function changeColorOfSquaresRandomly() { //generate colors only for a certain colors spectrum --> vielleicht doch mit rgb (als string)
    const squareDivs = document.querySelectorAll(".square-div");
    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener("mouseover", () => {
            const color = Math.floor(Math.random()*16777215).toString(16);
            squareDiv.setAttribute("style", "background-color: #" + color);
        });
    });
}

function getGridSize() {
    let gridSizeInput = document.querySelector(".gridsize-input");
    let gridSize = gridSizeInput.valueAsNumber
    return gridSize
}

function deleteGrid() {
    let gridSize = 0;
    const rowDivs = document.querySelectorAll(".row-container");
    rowDivs.forEach((rowDiv) => {
        gridSize++
        rowDiv.remove();
    });
    return gridSize
}

function changeSizeOfGrid() {    
    deleteGrid();
    createGrid(getGridSize());
    changeColorOfSquares();
}

function resetGrid() {
    createGrid(deleteGrid());
    changeColorOfSquares();
}

function changeColor(color) { //note: add white border for selected button
    switch(color){
        case "colorful":
            changeColorOfSquaresRandomly();
            break;
        case "color":
            changeColorOfSquares()
            break;
    }
}

//main
createGrid(standardGrid);
changeColorOfSquaresRandomly();
const changeSizeInput = document.querySelector(".gridsize-input");
changeSizeInput.addEventListener("click", () => {
    changeSizeOfGrid();
});
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
    resetGrid();
});
const colorfulBtn = document.querySelector(".colorful")
colorfulBtn.addEventListener("click", () => {
    changeColor("colorful");
});