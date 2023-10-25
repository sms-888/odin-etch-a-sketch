function drawGrid(sideLength) {
    const containerDiv = document.querySelector(".container");
    const flexBasis = Math.round(100 / sideLength);
    const styleText = `flex: 1 0 ${flexBasis}%; background-color:pink`;

    for (i = sideLength * sideLength; i > 0; i--) {
        let gridDiv = document.createElement('div');
        gridDiv.setAttribute("class", "box")
        gridDiv.style.cssText = styleText;
        containerDiv.appendChild(gridDiv);
    }
}

drawGrid(16);