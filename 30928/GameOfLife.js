const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cellSize = 10;
const gridWidth = 80;
const gridHeight = 60;
canvas.width = cellSize * gridWidth;
canvas.height = cellSize * gridHeight;

let grid = createGrid();

function createGrid() {
    return new Array(gridHeight).fill(null)
        .map(() => new Array(gridWidth).fill(0)
            .map(() => Math.random() < 0.5 ? 1 : 0));
}

function drawGrid() {
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            ctx.fillStyle = grid[y][x] ? 'black' : 'white';
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

function updateGrid() {
    const newGrid = createGrid();
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const neighbors = [
                [-1, -1], [0, -1], [1, -1],
                [-1, 0],           [1, 0],
                [-1, 1], [0, 1], [1, 1]
            ].reduce((acc, [dx, dy]) => {
                const newY = y + dy;
                const newX = x + dx;
                if (newY >= 0 && newY < gridHeight && newX >= 0 && newX < gridWidth) {
                    acc += grid[newY][newX];
                }
                return acc;
            }, 0);
            newGrid[y][x] = grid[y][x] ?
                (neighbors === 2 || neighbors === 3) ? 1 : 0 :
                (neighbors === 3) ? 1 : 0;
        }
    }
    grid = newGrid;
}

function gameLoop() {
    drawGrid();
    updateGrid();
    requestAnimationFrame(gameLoop);
}

gameLoop();
