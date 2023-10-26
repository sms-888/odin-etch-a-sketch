function drawGrid(sideLength) {
    const containerDiv = document.querySelector(".container");
    const flexBasis = Math.round(100 / sideLength);
    const styleText = `flex: 1 0 ${flexBasis}%; background-color:pink`;

    // draw a square grid of divs
    for (i = sideLength * sideLength; i > 0; i--) {
        let gridDiv = document.createElement('div');
        gridDiv.setAttribute("class", "box")
        gridDiv.style.cssText = styleText;
        // add event listener for mouse enter events
        gridDiv.addEventListener('mouseenter', highlightGridBoxRandom);
        containerDiv.appendChild(gridDiv);
    }
}

// remove old grid boxes
function removeGrid() {
    const containerDiv = document.querySelector(".container");
    const gridDivs = containerDiv.querySelectorAll("div");

    for (box of gridDivs) box.remove(); // remove each grid box
}

function resetGrid() {
    const MAXSIDE = 100;
    let sideLength = Infinity;

    // prompt for user to enter sidelength
    while (sideLength > MAXSIDE) {
        sideLength = prompt("Enter number of squares per side (Max 100): ", "");
    }
    // remove old grid
    removeGrid();
    // draw new grid
    drawGrid(sideLength);
}

// highlight grid box in blue
function highlightGridBox(e) {
    e.target.style.background = 'blue';
}

// return an random integer between 0 and num
function random(num) {
    return Math.round(Math.random() * num);
}

// hightlist grid box with random color
function highlightGridBoxRandom(e) {
    const MAXCOLOR = 255;
    boxColor = [random(MAXCOLOR), random(MAXCOLOR), random(MAXCOLOR)];
    rgb = `rgb(${boxColor.toString()})`;
    e.target.style.background = rgb;
}

// initialise web pages
function initialise() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', resetGrid);
    drawGrid(16);
}

initialise();

