let grid = document.querySelector("div.grid");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", clickButton, false );
})

function clickButton(e) {
    console.log(e.currentTarget.id);
    if (e.target.id === "clear") {
        let gridSize = "";
        do {
            gridSize = prompt("Please enter the grid size: ");
        } while( parseInt(gridSize) > 100);
        createGrid(gridSize, true);
    } else {
        colorGrid(e.target.id);
    }
}

function createGrid(gridElements = 16, refresh = false) {
    if(refresh) {
        grid.innerHTML = '';
    }
    grid.style.gridTemplateColumns = `repeat(${gridElements}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridElements}, 1fr)`;
    for(let i=0; i < gridElements; i++) {
        for(let j=0; j < gridElements; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            grid.appendChild(div);
        }
    }
}

function clearGrid() {
    location.reload();
}

function colorGrid(color) {
    
    const coloredDivs = document.querySelectorAll("div.square")
    coloredDivs.forEach((div) => {
        div.addEventListener("mouseover", (event) => {
            let style = div.getAttribute("style");
            if(color === "randomColor" || color.includes("#")){
                color = randomColor();
                div.style = '';
                event.target.style.backgroundColor = color;
                console.log("Color used: " + color);
                console.log("Random color style: " + style);
            } else if (color === "dimgray") {
                div.style = '';
                let opacity = "";
                if(style === null || (!style.includes("dimgray"))) {
                    event.target.style.opacity = 0;
                } else {
                    if(style.includes("opacity: 1;") || style.includes("opacity: 0;")) {
                        console.log(style);
                        opacity = style.substring(9, 10);
                        console.log("Substring op 1 or 0: " + opacity);
                    } else {
                        console.log(style);
                        opacity = style.substring(9, 12);
                        console.log("Substring: " + opacity);
                    }

                    console.log("opacity: " + opacity);

                    if (parseFloat(opacity) < 1) {
                        console.log(opacity);
                        let opacityValue = parseFloat(opacity) + 0.1;
                        console.log(opacityValue);
                        event.target.style.opacity = opacityValue;
                    }
                }
                event.target.style.backgroundColor = color;
                console.log("Color used: " + color);
                style = div.getAttribute("style");
                console.log("Gray color style: " + style);
            } else if (color === "black"){
                div.style = '';
                event.target.style.backgroundColor = color;
                console.log("Color used: " + color);
                console.log("Black color style: " + style);
            } else if (color === "transparent") {
                event.target.style.backgroundColor = color;
            }
        });
    })
}

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

createGrid();
