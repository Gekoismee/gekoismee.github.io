let a1c = document.getElementById('a1c');
let a2c = document.getElementById('a2c');
let a3c = document.getElementById('a3c');
let b1c = document.getElementById('b1c');
let b2c = document.getElementById('b2c');
let b3c = document.getElementById('b3c');
let c1c = document.getElementById('c1c');
let c2c = document.getElementById('c2c');
let c3c = document.getElementById('c3c');
let a1x1 = document.getElementById('a1x1');
let a1x2 = document.getElementById('a1x2');
let a2x1 = document.getElementById('a2x1');
let a2x2 = document.getElementById('a2x2');
let a3x1 = document.getElementById('a3x1');
let a3x2 = document.getElementById('a3x2');
let b1x1 = document.getElementById('b1x1');
let b1x2 = document.getElementById('b1x2');
let b2x1 = document.getElementById('b2x1');
let b2x2 = document.getElementById('b2x2');
let b3x1 = document.getElementById('b3x1');
let b3x2 = document.getElementById('b3x2');
let c1x1 = document.getElementById('c1x1');
let c1x2 = document.getElementById('c1x2');
let c2x1 = document.getElementById('c2x1');
let c2x2 = document.getElementById('c2x2');
let c3x1 = document.getElementById('c3x1');
let c3x2 = document.getElementById('c3x2');
let gameState = document.getElementById('state');
let resetButton = document.getElementById('resetButton');

let game = [
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0
];
let isOver = false;

function select(place){
    if(place=='a1c'&&game[0]==0&&!isOver){
        a1c.style.opacity = '1';
        game[0] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='a2c'&&game[1]==0&&!isOver){
        a2c.style.opacity = '1';
        game[1] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='a3c'&&game[2]==0&&!isOver){
        a3c.style.opacity = '1';
        game[2] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='b1c'&&game[3]==0&&!isOver){
        b1c.style.opacity = '1';
        game[3] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='b2c'&&game[4]==0&&!isOver){
        b2c.style.opacity = '1';
        game[4] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='b3c'&&game[5]==0&&!isOver){
        b3c.style.opacity = '1';
        game[5] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='c1c'&&game[6]==0&&!isOver){
        c1c.style.opacity = '1';
        game[6] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='c2c'&&game[7]==0&&!isOver){
        c2c.style.opacity = '1';
        game[7] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }else if(place=='c3c'&&game[8]==0&&!isOver){
        c3c.style.opacity = '1';
        game[8] = 1;
        isOver = checkWin();
        if(!isOver){
            cpuPlay();
        }
    }
    
}

function checkWin(){
    if(game[0]==1&&game[1]==1&&game[2]==1||game[3]==1&&game[4]==1&&game[5]==1||game[6]==1&&game[7]==1&&game[8]==1||game[0]==1&&game[3]==1&&game[6]==1||game[1]==1&&game[4]==1&&game[7]==1||game[2]==1&&game[5]==1&&game[8]==1||game[0]==1&&game[4]==1&&game[8]==1||game[2]==1&&game[4]==1&&game[6]==1){
        gameState.innerHTML = "User wins! Click the button below to reset.";
        resetButton.style.opacity = '1';
        return true;
    }else if(game[0]==2&&game[1]==2&&game[2]==2||game[3]==2&&game[4]==2&&game[5]==2||game[6]==2&&game[7]==2&&game[8]==2||game[0]==2&&game[3]==2&&game[6]==2||game[1]==2&&game[4]==2&&game[7]==2||game[2]==2&&game[5]==2&&game[8]==2||game[0]==2&&game[4]==2&&game[8]==2||game[2]==2&&game[4]==2&&game[6]==2){
        gameState.innerHTML = "CPU wins! Click the button below to reset.";
        resetButton.style.opacity = '1';
        return true;
    }else if(game[0]!=0&&game[1]!=0&&game[2]!=0&&game[3]!=0&&game[4]!=0&&game[5]!=0&&game[6]!=0&&game[7]!=0&&game[8]!=0){
        gameState.innerHTML = "Tie! Click the button below to reset.";
        resetButton.style.opacity = '1';
        return true;
    }
}

function cpuPlay(){
    let random = Math.random();
    if(random<=0.11111111111&&game[0]==0){
        a1x1.style.opacity = '1';
        a1x2.style.opacity = '1';
        game[0] = 2;
        isOver = checkWin();
    }else if(random<=0.22222222222&&game[1]==0){
        a2x1.style.opacity = '1';
        a2x2.style.opacity = '1';
        game[1] = 2;
        isOver = checkWin();
    }else if(random<=0.33333333333&&game[2]==0){
        a3x1.style.opacity = '1';
        a3x2.style.opacity = '1';
        game[2] = 2;
        isOver = checkWin();
    }else if(random<=0.44444444444&&game[3]==0){
        b1x1.style.opacity = '1';
        b1x2.style.opacity = '1';
        game[3] = 2;
        isOver = checkWin();
    }else if(random<=0.55555555555&&game[4]==0){
        b2x1.style.opacity = '1';
        b2x2.style.opacity = '1';
        game[4] = 2;
        isOver = checkWin();
    }else if(random<=0.66666666666&&game[5]==0){
        b3x1.style.opacity = '1';
        b3x2.style.opacity = '1';
        game[5] = 2;
        isOver = checkWin();
    }else if(random<=0.77777777777&&game[6]==0){
        c1x1.style.opacity = '1';
        c1x2.style.opacity = '1';
        game[6] = 2;
        isOver = checkWin();
    }else if(random<=0.88888888888&&game[7]==0){
        c2x1.style.opacity = '1';
        c2x2.style.opacity = '1';
        game[7] = 2;
        isOver = checkWin();
    }else if(random<=1&&game[8]==0){
        c3x1.style.opacity = '1';
        c3x2.style.opacity = '1';
        game[8] = 2;
        isOver = checkWin();
    }else{
        cpuPlay();
    }
}

function reset(){
    if(isOver){
    for(let i = 0; i < game.length;i++){
        game[i]=0;
    }
    a1x1.style.opacity = '0';
    a1x2.style.opacity = '0';
    a2x1.style.opacity = '0';
    a2x2.style.opacity = '0';
    a3x1.style.opacity = '0';
    a3x2.style.opacity = '0';
    b1x1.style.opacity = '0';
    b1x2.style.opacity = '0';
    b2x1.style.opacity = '0';
    b2x2.style.opacity = '0';
    b3x1.style.opacity = '0';
    b3x2.style.opacity = '0';
    c1x1.style.opacity = '0';
    c1x2.style.opacity = '0';
    c2x1.style.opacity = '0';
    c2x2.style.opacity = '0';
    c3x1.style.opacity = '0';
    c3x2.style.opacity = '0';
    a1c.style.opacity = '0';
    a2c.style.opacity = '0';
    a3c.style.opacity = '0';
    b1c.style.opacity = '0';
    b2c.style.opacity = '0';
    b3c.style.opacity = '0';
    c1c.style.opacity = '0';
    c2c.style.opacity = '0';
    c3c.style.opacity = '0';
    isOver = false;
    gameState.innerHTML = "Click in any box to start the game.";
    resetButton.style.opacity = '0';
}
}