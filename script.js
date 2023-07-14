let gridSide = 4

function createGrid(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-container");
        const gridContainer = document.querySelector(".container");
        gridContainer.appendChild(rowDiv)
        for (let i = 0; i < sizeOfGrid; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square-div");
            squareDiv.textContent = "Test";
            const rowContainer = document.querySelector(".row-container");
            rowContainer.appendChild(squareDiv);
        };
    }
    
        
}

createGrid(gridSide);