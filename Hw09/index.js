let container = document.getElementById('container');
const generateRandom = () => {
    return Math.floor(Math.random() * 256);
};

const generateBlocks = () => {
    for ( let i = 1; i <= 25; i++) {
        let square = document.createElement('div');
        square.style.width='50px';
        square.style.height='50px';
        square.style.backgroundColor = `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`;
        container.appendChild(square);
    }
};

generateBlocks();