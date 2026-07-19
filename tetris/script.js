class Game {
    playfield = this.createPlayfield();
 
    activePiece = this.createPiece();
    nextPiece = this.createPiece();
 
    getState() {
        const playfield = this.createPlayfield();
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;
 
        for (let y = 0; y < this.playfield.length; y++) {
            playfield[y] = [];
 
            for (let x = 0; x < this.playfield[y].length; x++) {
                playfield[y][x] = this.playfield[y][x];
            }
        }
 
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    playfield[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }
 
        return {
            playfield
        }
    }
 
    moveIsLeft() {
        this.activePiece.x--;
 
        if (this.hasCollision()) {
            this.activePiece.x++;
        }
    }
 
    moveIsRight() {
        this.activePiece.x++;
 
        if (this.hasCollision()) {
            this.activePiece.x--;
        }
    }
 
    moveIsDown() {
        this.activePiece.y++;
 
        if (this.hasCollision()) {
            this.activePiece.y--;
            this.lockPiece();
            this.updatePieces();
        }
    }
 
    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;
 
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x] && ((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined || this.playfield[pieceY + y][pieceX + x]))) {
                    return true;
                }
            }
        }
        return false;
    }
 
    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;
 
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }
    }
 
    createPlayfield() {
        const plyfield = [];  // []
 
        for (let y = 0; y < 20; y++) {
            plyfield[y] = [];  // [[], [], [], ...]
 
            for (let x = 0; x < 10; x++) {
                plyfield[y][x] = 0; // [[0, 0, 0, ...], [0], [0], ...]                
            }
        }
        return plyfield;
    }
 
    rotationPiece() {
        const blocks = this.activePiece.blocks;
        const length = blocks.length;
 
        const temp = [];
        for (let i = 0; i < length; i++) {
            temp[i] = new Array(length).fill(0); // [[0,0,0], [0,0,0], [0,0,0]]            
        }
 
        for (let y = 0; y < length; y++) {
            for (let x = 0; x < length; x++) {
                temp[x][y] = blocks[length - 1 - y][x];
            }
        }
 
        this.activePiece.blocks = temp;
 
        if (this.hasCollision()) {
            this.activePiece.blocks = blocks;
        }
    }
 
    updatePieces(){
        this.activePiece = this.nextPiece;
        this.nextPiece = this.createPiece();
    }
 
    createPiece() {
        const index = Math.floor(Math.random() * 7);
        const type = "IJLOSTZ"[index];
        const piece = {x: 0, y: 0};

        switch(type){
            case "I":
                piece.blocks = [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ];
            break;
            case "J":
                piece.blocks = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
            ];
            break;
            case "L":
                piece.blocks = [
                [0, 0, 0],
                [1, 1, 1],
                [1, 0, 0],
            ];
            break;
            case "O":
                piece.blocks = [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
            ];
            break;
            case "S":
                piece.blocks = [
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0],
            ];
            break;
            case "T":
                piece.blocks = [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0],
            ];
            break;
            case "Z":
                piece.blocks = [
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 1],
            ];
            break;
            default:
                throw new Error("Неизвестный тип фигуры");
        }

        return piece;
    }
}
 


class View{
    constructor(element, width, height, rows, columns){
        this.element = element;
        this.width = width;
        this.height = height ;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;

        this.element.append(this.canvas);

    }

    clearScreen(){
        this.context.clearRect(0, 0, this.width, this.height);
    }

    render({playfield}){
        this.clearScreen();
        this.renderPlayfield(playfield);
    }

    renderPlayfield(playfield){
        for(let y = 0; y < playfield.length; y++){
            const line = playfield[y];
            
            for(let x = 0; x < line.length; x++){
                const block = line[x];
                if(block){
                    this.context.fillStyle = "red";
                    this.context.strokeStyle = "black";
                    this.context.lineWidth = 2;

                    this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                    this.context.strokeRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                }
            }
        }
    }
}

const game = new Game();
const root = document.getElementById("root");
const view = new View(root, 320, 640, 20, 10);
//view.renderPlayfield(game.playfield);
//console.log(game.playfield);


document.addEventListener("keydown", event =>{
    switch(event.keyCode){ // which
        case 37:
            game.moveIsLeft();
            view.render(game.getState());
            break;  
        case 38:
            game.rotationPiece();
            view.render(game.getState());
            break;  
        case 39:
            game.moveIsRight();
            view.render(game.getState());
            break;  
        case 40:
            game.moveIsDown();
            view.render(game.getState());
            break;

    }
})