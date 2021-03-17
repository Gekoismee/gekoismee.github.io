let selected;
let userPlayed = false;
let otherReg;
let otherKing;
let currentReg;
let currentKing;
let random;
let totalCPU;
let toMoveCPU;
let isOver = false;
let totalWhite;
let totalGreen;
let game = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
 ];
 let gameKey = [
     'a1c',
     'a2c',
     'a3c',
     'a4c',
     'b1c',
     'b2c',
     'b3c',
     'b4c',
     'c1c',
     'c2c',
     'c3c',
     'c4c',
     'd1c',
     'd2c',
     'd3c',
     'd4c',
     'e1c',
     'e2c',
     'e3c',
     'e4c',
     'f1c',
     'f2c',
     'f3c',
     'f4c',
     'g1c',
     'g2c',
     'g3c',
     'g4c',
     'h1c',
     'h2c',
     'h3c',
     'h4c'
 ]

let temp;
function select(place){
    move(place);
    
    if(userPlayed){
        unselect();
        computerPlay();
    }else{
        unselect();
        temp = toHTML(place);
        if(temp.style.fill=='white'){
            for(var i = 0; i <game.length;i++){
                if(place==gameKey[i]&&(game[i]==2||game[i]==4)){
                    if(game[i]==2){
                        game[i]=5;
                    }else if(game[i]==4){
                        game[i]=7;
                    }
                }
            }
        }
        selected = place;
        posibleMoves(selected);
    }
}

function move(place){
    temp = toHTML(place);
    if(temp.style.fill=='orange'){
        if(place=='a1c'&&game[0]==6){
            if(game[4]==5){
                game[0]=7;
                game[4]=0;
            }else if(game[4]==7){
                game[0]=7;
                game[4]=0;
            }else if(game[9]==5){
                game[0]=7;
                game[9]=0;
                game[4]=0;
            }else if(game[9]==7){
                game[0]=7;
                game[9]=0;
                game[4]=0;
            }
        }else if(place=='a2c'&&game[1]==6){
            if(game[4]==5){
                game[1]=7;
                game[4]=0;
            }else if(game[4]==7){
                game[1]=7;
                game[4]=0;
            }else if(game[5]==5){
                game[1]=7;
                game[5]=0;
            }else if(game[5]==7){
                game[1]=7;
                game[5]=0;
            }else if(game[8]==5){
                game[1]=7;
                game[8]=0;
                game[4]=0;
            }else if(game[8]==7){
                game[1]=7;
                game[8]=0;
                game[4]=0;
            }else if(game[10]==5){
                game[1]=7;
                game[10]=0;
                game[5]=0;
            }else if(game[10]==7){
                game[1]=7;
                game[10]=0;
                game[5]=0;
            }
        }else if(place=='a3c'&&game[2]==6){
            if(game[5]==5){
                game[2]=7;
                game[5]=0;
            }else if(game[5]==7){
                game[2]=7;
                game[5]=0;
            }else if(game[6]==5){
                game[2]=7;
                game[6]=0;
            }else if(game[6]==7){
                game[2]=7;
                game[6]=0;
            }else if(game[9]==5){
                game[2]=7;
                game[9]=0;
                game[5]=0;
            }else if(game[9]==7){
                game[2]=7;
                game[9]=0;
                game[5]=0;
            }else if(game[11]==5){
                game[2]=7;
                game[11]=0;
                game[6]=0;
            }else if(game[11]==7){
                game[2]=7;
                game[11]=0;
                game[6]=0;
            }
        }else if(place=='a4c'&&game[3]==6){
            if(game[6]==5){
                game[3]=7;
                game[6]=0;
            }else if(game[6]==7){
                game[3]=7;
                game[6]=0;
            }else if(game[7]==5){
                game[3]=7;
                game[7]=0;
            }else if(game[7]==7){
                game[3]=7;
                game[7]=0;
            }else if(game[10]==5){
                game[3]=7;
                game[10]=0;
                game[6]=0;
            }else if(game[10]==7){
                game[3]=7;
                game[10]=0;
                game[6]=0;
            }
        }else if(place=='b1c'&&game[4]==6){
            if(game[0]==7){
                game[4]=7;
                game[0]=0;
            }else if(game[1]==7){
                game[4]=7;
                game[1]=0;
            }else if(game[8]==5){
                game[4]=5;
                game[8]=0;
            }else if(game[8]==7){
                game[4]=7;
                game[8]=0;
            }else if(game[9]==5){
                game[4]=5;
                game[9]=0;
            }else if(game[9]==7){
                game[4]=7;
                game[9]=0;
            }else if(game[13]==5){
                game[4]=5;
                game[13]=0;
                game[9]=0;
            }else if(game[13]==7){
                game[4]=7;
                game[13]=0;
                game[9]=0;
            }
        }else if(place=='b2c'&&game[5]==6){
            if(game[1]==7){
                game[5]=7;
                game[1]=0;
            }else if(game[2]==7){
                game[5]=7;
                game[2]=0;
            }else if(game[9]==5){
                game[5]=5;
                game[9]=0;
            }else if(game[9]==7){
                game[5]=7;
                game[9]=0;
            }else if(game[10]==5){
                game[5]=5;
                game[10]=0;
            }else if(game[10]==7){
                game[5]=7;
                game[10]=0;
            }else if(game[12]==5){
                game[5]=5;
                game[12]=0;
                game[9]=0;
            }else if(game[12]==7){
                game[5]=7;
                game[12]=0;
                game[9]=0;
            }else if(game[14]==5){
                game[5]=5;
                game[14]=0;
                game[10]=0;
            }else if(game[14]==7){
                game[5]=7;
                game[14]=0;
                game[10]=0;
            }
        }else if(place=='b3c'&&game[6]==6){
            if(game[2]==7){
                game[6]=7;
                game[2]=0;
            }else if(game[3]==7){
                game[6]=7;
                game[3]=0;
            }else if(game[10]==5){
                game[6]=5;
                game[10]=0;
            }else if(game[10]==7){
                game[6]=7;
                game[10]=0;
            }else if(game[11]==5){
                game[6]=5;
                game[11]=0;
            }else if(game[11]==7){
                game[6]=7;
                game[11]=0;
            }else if(game[13]==5){
                game[6]=5;
                game[13]=0;
                game[10]=0;
            }else if(game[13]==7){
                game[6]=7;
                game[13]=0;
                game[10]=0;
            }else if(game[15]==5){
                game[6]=5;
                game[15]=0;
                game[11]=0;
            }else if(game[15]==7){
                game[6]=7;
                game[15]=0;
                game[11]=0;
            }
        }else if(place=='b4c'&&game[7]==6){
            if(game[3]==7){
                game[7]=7;
                game[3]=0;
            }else if(game[11]==5){
                game[7]=5;
                game[11]=0;
            }else if(game[11]==7){
                game[7]=7;
                game[11]=0;
            }else if(game[14]==5){
                game[7]=5;
                game[14]=0;
                game[11]=0;
            }else if(game[14]==7){
                game[7]=7;
                game[14]=0;
                game[11]=0;
            }
        }else if(place=='c1c'&&game[8]==6){
            if(game[1]==7){
                game[8]=7;
                game[1]=0;
                game[4]=0;
            }else if(game[4]==7){
                game[8]=7;
                game[4]=0;
            }else if(game[12]==5){
                game[8]=5;
                game[12]=0;
            }else if(game[12]==7){
                game[8]=7;
                game[12]=0;
            }else if(game[17]==5){
                game[8]=5;
                game[17]=0;
                game[12]=0;
            }else if(game[17]==7){
                game[8]=7;
                game[17]=0;
                game[12]=0;
            }
        }else if(place=='c2c'&&game[9]==6){
            if(game[0]==7){
                game[9]=7;
                game[4]=0;
                game[0]=0;
            }else if(game[2]==7){
                game[9]=7;
                game[5]=0;
                game[2]=0;
            }else if(game[4]==7){
                game[9]=7;
                game[4]=0;
            }else if(game[5]==7){
                game[9]=7;
                game[5]=0;
            }else if(game[12]==5){
                game[9]=5;
                game[12]=0;
            }else if(game[12]==7){
                game[9]=7;
                game[12]=0;
            }else if(game[13]==5){
                game[9]=5;
                game[13]=0;
            }else if(game[13]==7){
                game[9]=7;
                game[13]=0;
            }else if(game[16]==5){
                game[9]=5;
                game[16]=0;
                game[12]=0;
            }else if(game[16]==7){
                game[9]=7;
                game[16]=0;
                game[12]=0;
            }else if(game[18]==5){
                game[9]=5;
                game[18]=0;
                game[13]=0;
            }else if(game[18]==7){
                game[9]=7;
                game[18]=0;
                game[13]=0;
            }
        }else if(place=='c3c'&&game[10]==6){
            if(game[1]==7){
                game[10]=7;
                game[1]=0;
                game[5]=0;
            }else if(game[3]==7){
                game[10]=7;
                game[3]=0;
                game[6]=0;
            }else if(game[5]==7){
                game[10]=7;
                game[5]=0;
            }else if(game[6]==7){
                game[10]=7;
                game[6]=0;
            }else if(game[13]==5){
                game[10]=5;
                game[13]=0;
            }else if(game[13]==7){
                game[10]=7;
                game[13]=0;
            }else if(game[14]==5){
                game[10]=5;
                game[14]=0;
            }else if(game[14]==7){
                game[10]=7;
                game[14]=0;
            }else if(game[17]==5){
                game[10]=5;
                game[17]=0;
                game[13]=0;
            }else if(game[17]==7){
                game[10]=7;
                game[17]=0;
                game[13]=0;
            }else if(game[19]==5){
                game[10]=5;
                game[19]=0;
                game[14]=0;
            }else if(game[19]==7){
                game[10]=7;
                game[19]=0;
                game[14]=0;
            }
        }else if(place=='c4c'&&game[11]==6){
            if(game[2]==7){
                game[11]=7;
                game[2]=0;
                game[6]=0;
            }else if(game[6]==7){
                game[11]=7;
                game[6]=0;
            }else if(game[7]==7){
                game[11]=7;
                game[7]=0;
            }else if(game[14]==5){
                game[11]=5;
                game[14]=0;
            }else if(game[14]==7){
                game[11]=7;
                game[14]=0;
            }else if(game[15]==5){
                game[11]=5;
                game[15]=0;
            }else if(game[15]==7){
                game[11]=7;
                game[15]=0;
            }else if(game[18]==5){
                game[11]=5;
                game[18]=0;
                game[14]=0;
            }else if(game[18]==7){
                game[11]=7;
                game[18]=0;
                game[14]=0;
            }
        }else if(place=='d1c'&&game[12]==6){
            if(game[5]==7){
                game[12]=7;
                game[5]=0;
                game[9]=0;
            }else if(game[8]==7){
                game[12]=7;
                game[8]=0;
            }else if(game[9]==7){
                game[12]=7;
                game[9]=0;
            }else if(game[16]==5){
                game[12]=5;
                game[16]=0;
            }else if(game[16]==7){
                game[12]=7;
                game[16]=0;
            }else if(game[17]==5){
                game[12]=5;
                game[17]=0;
            }else if(game[17]==7){
                game[12]=7;
                game[17]=0;
            }else if(game[21]==5){
                game[12]=5;
                game[21]=0;
                game[17]=0;
            }else if(game[21]==7){
                game[12]=7;
                game[21]=0;
                game[17]=0;
            }
        }else if(place=='d2c'&&game[13]==6){
            if(game[4]==7){
                game[13]=7;
                game[4]=0;
                game[9]=0;
            }else if(game[6]==7){
                game[13]=7;
                game[6]=0;
                game[10]=0;
            }else if(game[9]==7){
                game[13]=7;
                game[9]=0;
            }else if(game[10]==7){
                game[13]=7;
                game[10]=0;
            }else if(game[17]==5){
                game[13]=5;
                game[17]=0;
            }else if(game[17]==7){
                game[13]=7;
                game[17]=0;
            }else if(game[18]==5){
                game[13]=5;
                game[18]=0;
            }else if(game[18]==7){
                game[13]=7;
                game[18]=0;
            }else if(game[20]==5){
                game[13]=5;
                game[20]=0;
                game[17]=0;
            }else if(game[20]==7){
                game[13]=7;
                game[20]=0;
                game[17]=0;
            }else if(game[22]==5){
                game[13]=5;
                game[22]=0;
                game[18]=0;
            }else if(game[22]==7){
                game[13]=7;
                game[22]=0;
                game[18]=0;
            }
        }else if(place=='d3c'&&game[14]==6){
            if(game[5]==7){
                game[14]=7;
                game[5]=0;
                game[10]=0;
            }else if(game[7]==7){
                game[14]=7;
                game[7]=0;
                game[11]=0;
            }else if(game[10]==7){
                game[14]=7;
                game[10]=0;
            }else if(game[11]==7){
                game[14]=7;
                game[11]=0;
            }else if(game[18]==5){
                game[14]=5;
                game[18]=0;
            }else if(game[18]==7){
                game[14]=7;
                game[18]=0;
            }else if(game[19]==5){
                game[14]=5;
                game[19]=0;
            }else if(game[19]==7){
                game[14]=7;
                game[19]=0;
            }else if(game[21]==5){
                game[14]=5;
                game[21]=0;
                game[18]=0;
            }else if(game[21]==7){
                game[14]=7;
                game[21]=0;
                game[18]=0;
            }else if(game[23]==5){
                game[14]=5;
                game[23]=0;
                game[19]=0;
            }else if(game[23]==7){
                game[14]=7;
                game[23]=0;
                game[19]=0;
            }
        }else if(place=='d4c'&&game[15]==6){
            if(game[6]==7){
                game[15]=7;
                game[6]=0;
                game[11]=0;
            }else if(game[11]==7){
                game[15]=7;
                game[11]=0;
            }else if(game[19]==5){
                game[15]=5;
                game[19]=0;
            }else if(game[19]==7){
                game[15]=7;
                game[19]=0;
            }else if(game[22]==5){
                game[15]=5;
                game[22]=0;
                game[19]=0;
            }else if(game[22]==7){
                game[15]=7;
                game[22]=0;
                game[19]=0;
            }
        }else if(place=='e1c'&&game[16]==6){
            if(game[9]==7){
                game[16]=7;
                game[9]=0;
                game[13]=0;
            }else if(game[12]==7){
                game[16]=7;
                game[12]=0;
            }else if(game[20]==5){
                game[16]=5;
                game[20]=0;
            }else if(game[20]==7){
                game[16]=7;
                game[20]=0;
            }else if(game[25]==5){
                game[16]=5;
                game[25]=0;
                game[20]=0;
            }else if(game[25]==7){
                game[16]=7;
                game[25]=0;
                game[20]=0;
            }
        }else if(place=='e2c'&&game[17]==6){
            if(game[8]==7){
                game[17]=7;
                game[12]=0;
                game[8]=0;
            }else if(game[10]==7){
                game[17]=7;
                game[13]=0;
                game[10]=0;
            }else if(game[12]==7){
                game[17]=7;
                game[12]=0;
            }else if(game[13]==7){
                game[17]=7;
                game[13]=0;
            }else if(game[20]==5){
                game[17]=5;
                game[20]=0;
            }else if(game[20]==7){
                game[17]=7;
                game[20]=0;
            }else if(game[21]==5){
                game[17]=5;
                game[21]=0;
            }else if(game[21]==7){
                game[17]=7;
                game[21]=0;
            }else if(game[24]==5){
                game[17]=5;
                game[20]=0;
                game[24]=0;
            }else if(game[24]==7){
                game[17]=7;
                game[20]=0;
                game[24]=0;
            }else if(game[26]==5){
                game[17]=5;
                game[21]=0;
                game[26]=0;
            }else if(game[26]==7){
                game[17]=7;
                game[21]=0;
                game[26]=0;
            }            
        }else if(place=='e3c'&&game[18]==6){
            if(game[9]==7){
                game[18]=7;
                game[9]=0;
                game[13]=0;
            }else if(game[11]==7){
                game[18]=7;
                game[11]=0;
                game[14]=0;
            }else if(game[13]==7){
                game[18]=7;
                game[13]=0;
            }else if(game[14]==7){
                game[18]=7;
                game[14]=0;
            }else if(game[21]==5){
                game[18]=5;
                game[21]=0;
            }else if(game[21]==7){
                game[18]=7;
                game[21]=0;
            }else if(game[22]==5){
                game[18]=5;
                game[22]=0;
            }else if(game[22]==7){
                game[18]=7;
                game[22]=0;
            }else if(game[25]==5){
                game[18]=5;
                game[25]=0;
                game[21]=0;
            }else if(game[25]==7){
                game[18]=7;
                game[25]=0;
                game[21]=0;
            }else if(game[27]==5){
                game[18]=5;
                game[27]=0;
                game[22]=0;
            }else if(game[27]==7){
                game[18]=7;
                game[27]=0;
                game[22]=0;
            }
        }else if(place=='e4c'&&game[19]==6){
            if(game[10]==7){
                game[19]=7;
                game[10]=0;
                game[14]=0;
            }else if(game[14]==7){
                game[19]=7;
                game[14]=0;
            }else if(game[15]==7){
                game[19]=7;
                game[15]=0;
            }else if(game[22]==5){
                game[19]=5;
                game[22]=0;
            }else if(game[22]==7){
                game[19]=7;
                game[22]=0;
            }else if(game[23]==5){
                game[19]=5;
                game[23]=0;
            }else if(game[23]==7){
                game[19]=7;
                game[23]=0;
            }else if(game[26]==5){
                game[19]=5;
                game[26]=0;
                game[22]=0;
            }else if(game[26]==7){
                game[19]=7;
                game[26]=0;
                game[22]=0;
            }
        }else if(place=='f1c'&&game[20]==6){
            if(game[13]==7){
                game[20]=7;
                game[13]=0;
                game[17]=0;
            }else if(game[16]==7){
                game[20]=7;
                game[16]=0;
            }else if(game[17]==7){
                game[20]=7;
                game[17]=0;
            }else if(game[24]==5){
                game[20]=5;
                game[24]=0;
            }else if(game[24]==7){
                game[20]=7;
                game[24]=0;
            }else if(game[25]==5){
                game[20]=5;
                game[25]=0;
            }else if(game[25]==7){
                game[20]=7;
                game[25]=0;
            }else if(game[29]==5){
                game[20]=5;
                game[29]=0;
                game[25]=0;
            }else if(game[29]==7){
                game[20]=7;
                game[29]=0;
                game[25]=0;
            }
        }else if(place=='f2c'&&game[21]==6){
            if(game[12]==7){
                game[21]=7;
                game[12]=0;
                game[17]=0;
            }else if(game[14]==7){
                game[21]=7;
                game[14]=0;
                game[18]=0;
            }else if(game[17]==7){
                game[21]=7;
                game[17]=0;
            }else if(game[18]==7){
                game[21]=7;
                game[18]=0;
            }else if(game[25]==5){
                game[21]=5;
                game[25]=0;
            }else if(game[25]==7){
                game[21]=7;
                game[25]=0;
            }else if(game[26]==5){
                game[21]=5;
                game[26]=0;
            }else if(game[26]==7){
                game[21]=7;
                game[26]=0;
            }else if(game[28]==5){
                game[21]=5;
                game[28]=0;
                game[25]=0;
            }else if(game[28]==7){
                game[21]=7;
                game[28]=0;
                game[25]=0;
            }else if(game[30]==5){
                game[21]=5;
                game[30]=0;
                game[26]=0;
            }else if(game[30]==7){
                game[21]=7;
                game[30]=0;
                game[26]=0;
            }
        }else if(place=='f3c'&&game[22]==6){
            if(game[13]==7){
                game[22]=7;
                game[13]=0;
                game[18]=0;
            }else if(game[15]==7){
                game[22]=7;
                game[15]=0;
                game[19]=0;
            }else if(game[18]==7){
                game[22]=7;
                game[18]=0;
            }else if(game[19]==7){
                game[22]=7;
                game[19]=0;
            }else if(game[26]==5){
                game[22]=5;
                game[26]=0;
            }else if(game[26]==7){
                game[22]=7;
                game[26]=0;
            }else if(game[27]==5){
                game[22]=5;
                game[27]=0;
            }else if(game[27]==7){
                game[22]=7;
                game[27]=0;
            }else if(game[29]==5){
                game[22]=5;
                game[29]=0;
                game[26]=0;
            }else if(game[29]==7){
                game[22]=7;
                game[29]=0;
                game[26]=0;
            }else if(game[31]==5){
                game[22]=5;
                game[31]=0;
                game[27]=0;
            }else if(game[31]==7){
                game[22]=7;
                game[31]=0;
                game[27]=0;
            }
        }else if(place=='f4c'&&game[23]==6){
            if(game[14]==7){
                game[23]=7;
                game[14]=0;
                game[19]=0;
            }else if(game[19]==7){
                game[23]=7;
                game[19]=0;
            }else if(game[27]==5){
                game[23]=5;
                game[27]=0;
            }else if(game[27]==7){
                game[23]=7;
                game[27]=0;
            }else if(game[30]==5){
                game[23]=5;
                game[30]=0;
                game[27]=0;
            }else if(game[30]==7){
                game[23]=7;
                game[30]=0;
                game[27]=0;
            }
        }else if(place=='g1c'&&game[24]==6){
            if(game[17]==7){
                game[24]=7;
                game[17]=0;
                game[20]=0;
            }else if(game[20]==7){
                game[24]=7;
                game[20]=0;
            }else if(game[28]==5){
                game[24]=5;
                game[28]=0;
            }else if(game[28]==7){
                game[24]=7;
                game[28]=0;
            }
        }else if(place=='g2c'&&game[25]==6){
            if(game[16]==7){
                game[25]=7;
                game[20]=0;
                game[16]=0;
            }else if(game[18]==7){
                game[25]=7;
                game[21]=0;
                game[18]=0;
            }else if(game[20]==7){
                game[25]=7;
                game[20]=0;
            }else if(game[21]==7){
                game[25]=7;
                game[21]=0;
            }else if(game[28]==5){
                game[25]=5;
                game[28]=0;
            }else if(game[28]==7){
                game[25]=7;
                game[28]=0;
            }else if(game[29]==5){
                game[25]=5;
                game[29]=0;
            }else if(game[29]==7){
                game[25]=7;
                game[29]=0;
            }           
        }else if(place=='g3c'&&game[26]==6){
            if(game[17]==7){
                game[26]=7;
                game[17]=0;
                game[21]=0;
            }else if(game[19]==7){
                game[26]=7;
                game[19]=0;
                game[22]=0;
            }else if(game[21]==7){
                game[26]=7;
                game[21]=0;
            }else if(game[22]==7){
                game[26]=7;
                game[22]=0;
            }else if(game[29]==5){
                game[26]=5;
                game[29]=0;
            }else if(game[29]==7){
                game[26]=7;
                game[29]=0;
            }else if(game[30]==5){
                game[26]=5;
                game[30]=0;
            }else if(game[30]==7){
                game[26]=7;
                game[30]=0;
            }
        }else if(place=='g4c'&&game[27]==6){
            if(game[18]==7){
                game[27]=7;
                game[18]=0;
                game[22]=0;
            }else if(game[22]==7){
                game[27]=7;
                game[22]=0;
            }else if(game[23]==7){
                game[27]=7;
                game[23]=0;
            }else if(game[30]==5){
                game[27]=5;
                game[30]=0;
            }else if(game[30]==7){
                game[27]=7;
                game[30]=0;
            }else if(game[31]==5){
                game[27]=5;
                game[31]=0;
            }else if(game[31]==7){
                game[27]=7;
                game[31]=0;
            }
        }else if(place=='h1c'&&game[28]==6){
            if(game[21]==7){
                game[28]=7;
                game[21]=0;
                game[25]=0;
            }else if(game[24]==7){
                game[28]=7;
                game[24]=0;
            }else if(game[25]==7){
                game[28]=7;
                game[25]=0;
            }
        }else if(place=='h2c'&&game[29]==6){
            if(game[20]==7){
                game[29]=7;
                game[20]=0;
                game[25]=0;
            }else if(game[22]==7){
                game[29]=7;
                game[22]=0;
                game[26]=0;
            }else if(game[25]==7){
                game[29]=7;
                game[25]=0;
            }else if(game[26]==7){
                game[29]=7;
                game[26]=0;
            }
        }else if(place=='h3c'&&game[30]==6){
            if(game[21]==7){
                game[30]=7;
                game[21]=0;
                game[26]=0;
            }else if(game[23]==7){
                game[30]=7;
                game[23]=0;
                game[27]=0;
            }else if(game[26]==7){
                game[30]=7;
                game[26]=0;
            }else if(game[27]==7){
                game[30]=7;
                game[27]=0;
            }
        }else if(place=='h4c'&&game[31]==6){
            if(game[22]==7){
                game[31]=7;
                game[22]=0;
                game[27]=0;
            }else if(game[27]==7){
                game[31]=7;
                game[27]=0;
            }
        }
    userPlayed = true;
    }
    
}

function moveCPU(place){
        if(place=='a1c'&&game[0]==6){
            if(game[4]==7){
                game[0]=7;
                game[4]=0;
            }else if(game[9]==7){
                game[0]=7;
                game[9]=0;
                game[4]=0;
            }
        }else if(place=='a2c'&&game[1]==6){
            if(game[4]==7){
                game[1]=7;
                game[4]=0;
            }else if(game[5]==7){
                game[1]=7;
                game[5]=0;
            }else if(game[8]==7){
                game[1]=7;
                game[8]=0;
                game[4]=0;
            }else if(game[10]==7){
                game[1]=7;
                game[10]=0;
                game[5]=0;
            }
        }else if(place=='a3c'&&game[2]==6){
            if(game[5]==7){
                game[2]=7;
                game[5]=0;
            }else if(game[6]==7){
                game[2]=7;
                game[6]=0;
            }else if(game[9]==7){
                game[2]=7;
                game[9]=0;
                game[5]=0;
            }else if(game[11]==7){
                game[2]=7;
                game[11]=0;
                game[6]=0;
            }
        }else if(place=='a4c'&&game[3]==6){
            if(game[6]==7){
                game[3]=7;
                game[6]=0;
            }else if(game[7]==7){
                game[3]=7;
                game[7]=0;
            }else if(game[10]==7){
                game[3]=7;
                game[10]=0;
                game[6]=0;
            }
        }else if(place=='b1c'&&game[4]==6){
            if(game[0]==5){
                game[4]=5;
                game[0]=0;
            }else if(game[0]==7){
                game[4]=7;
                game[0]=0;
            }else if(game[1]==5){
                game[4]=5;
                game[1]=0;
            }else if(game[1]==7){
                game[4]=7;
                game[1]=0;
            }else if(game[8]==7){
                game[4]=7;
                game[8]=0;
            }else if(game[9]==7){
                game[4]=7;
                game[9]=0;
            }else if(game[13]==7){
                game[4]=7;
                game[13]=0;
                game[9]=0;
            }
        }else if(place=='b2c'&&game[5]==6){
            if(game[1]==5){
                game[5]=5;
                game[1]=0;
            }else if(game[1]==7){
                game[5]=7;
                game[1]=0;
            }else if(game[2]==5){
                game[5]=5;
                game[2]=0;
            }else if(game[2]==7){
                game[5]=7;
                game[2]=0;
            }else if(game[9]==7){
                game[5]=7;
                game[9]=0;
            }else if(game[10]==7){
                game[5]=7;
                game[10]=0;
            }else if(game[12]==7){
                game[5]=7;
                game[12]=0;
                game[9]=0;
            }else if(game[14]==7){
                game[5]=7;
                game[14]=0;
                game[10]=0;
            }
        }else if(place=='b3c'&&game[6]==6){
            if(game[2]==5){
                game[6]=5;
                game[2]=0;
            }else if(game[2]==7){
                game[6]=7;
                game[2]=0;
            }else if(game[3]==5){
                game[6]=5;
                game[3]=0;
            }else if(game[3]==7){
                game[6]=7;
                game[3]=0;
            }else if(game[10]==7){
                game[6]=7;
                game[10]=0;
            }else if(game[11]==7){
                game[6]=7;
                game[11]=0;
            }else if(game[13]==7){
                game[6]=7;
                game[13]=0;
                game[10]=0;
            }else if(game[15]==7){
                game[6]=7;
                game[15]=0;
                game[11]=0;
            }
        }else if(place=='b4c'&&game[7]==6){
            if(game[3]==5){
                game[7]=5;
                game[3]=0;
            }else if(game[3]==7){
                game[7]=7;
                game[3]=0;
            }else if(game[11]==7){
                game[7]=7;
                game[11]=0;
            }else if(game[14]==7){
                game[7]=7;
                game[14]=0;
                game[11]=0;
            }
        }else if(place=='c1c'&&game[8]==6){
            if(game[1]==5){
                game[8]=5;
                game[1]=0;
                game[4]=0;
            }else if(game[1]==7){
                game[8]=7;
                game[1]=0;
                game[4]=0;
            }else if(game[4]==5){
                game[8]=5;
                game[4]=0;
            }else if(game[4]==7){
                game[8]=7;
                game[4]=0;
            }else if(game[12]==7){
                game[8]=7;
                game[12]=0;
            }else if(game[17]==7){
                game[8]=7;
                game[17]=0;
                game[12]=0;
            }
        }else if(place=='c2c'&&game[9]==6){
            if(game[0]==5){
                game[9]=5;
                game[4]=0;
                game[0]=0;
            }else if(game[0]==7){
                game[9]=7;
                game[4]=0;
                game[0]=0;
            }else if(game[2]==5){
                game[9]=5;
                game[5]=0;
                game[2]=0;
            }else if(game[2]==7){
                game[9]=7;
                game[5]=0;
                game[2]=0;
            }else if(game[4]==5){
                game[9]=5;
                game[4]=0;
            }else if(game[4]==7){
                game[9]=7;
                game[4]=0;
            }else if(game[5]==5){
                game[9]=5;
                game[5]=0;
            }else if(game[5]==7){
                game[9]=7;
                game[5]=0;
            }else if(game[12]==7){
                game[9]=7;
                game[12]=0;
            }else if(game[13]==7){
                game[9]=7;
                game[13]=0;
            }else if(game[16]==7){
                game[9]=7;
                game[16]=0;
                game[12]=0;
            }else if(game[18]==7){
                game[9]=7;
                game[18]=0;
                game[13]=0;
            }
        }else if(place=='c3c'&&game[10]==6){
            if(game[1]==5){
                game[10]=5;
                game[1]=0;
                game[5]=0;
            }else if(game[1]==7){
                game[10]=7;
                game[1]=0;
                game[5]=0;
            }else if(game[3]==5){
                game[10]=5;
                game[3]=0;
                game[6]=0;
            }else if(game[3]==7){
                game[10]=7;
                game[3]=0;
                game[6]=0;
            }else if(game[5]==5){
                game[10]=5;
                game[5]=0;
            }else if(game[5]==7){
                game[10]=7;
                game[5]=0;
            }else if(game[6]==5){
                game[10]=5;
                game[6]=0;
            }else if(game[6]==7){
                game[10]=7;
                game[6]=0;
            }else if(game[13]==7){
                game[10]=7;
                game[13]=0;
            }else if(game[14]==7){
                game[10]=7;
                game[14]=0;
            }else if(game[17]==7){
                game[10]=7;
                game[17]=0;
                game[13]=0;
            }else if(game[19]==7){
                game[10]=7;
                game[19]=0;
                game[14]=0;
            }
        }else if(place=='c4c'&&game[11]==6){
            if(game[2]==5){
                game[11]=5;
                game[2]=0;
                game[6]=0;
            }else if(game[2]==7){
                game[11]=7;
                game[2]=0;
                game[6]=0;
            }else if(game[6]==5){
                game[11]=5;
                game[6]=0;
            }else if(game[6]==7){
                game[11]=7;
                game[6]=0;
            }else if(game[7]==5){
                game[11]=5;
                game[7]=0;
            }else if(game[7]==7){
                game[11]=7;
                game[7]=0;
            }else if(game[14]==7){
                game[11]=7;
                game[14]=0;
            }else if(game[15]==7){
                game[11]=7;
                game[15]=0;
            }else if(game[18]==7){
                game[11]=7;
                game[18]=0;
                game[14]=0;
            }
        }else if(place=='d1c'&&game[12]==6){
            if(game[5]==5){
                game[12]=5;
                game[5]=0;
                game[9]=0;
            }else if(game[5]==7){
                game[12]=7;
                game[5]=0;
                game[9]=0;
            }else if(game[8]==5){
                game[12]=5;
                game[8]=0;
            }else if(game[8]==7){
                game[12]=7;
                game[8]=0;
            }else if(game[9]==5){
                game[12]=5;
                game[9]=0;
            }else if(game[9]==7){
                game[12]=7;
                game[9]=0;
            }else if(game[16]==7){
                game[12]=7;
                game[16]=0;
            }else if(game[17]==7){
                game[12]=7;
                game[17]=0;
            }else if(game[21]==7){
                game[12]=7;
                game[21]=0;
                game[17]=0;
            }
        }else if(place=='d2c'&&game[13]==6){
            if(game[4]==5){
                game[13]=5;
                game[4]=0;
                game[9]=0;
            }else if(game[4]==7){
                game[13]=7;
                game[4]=0;
                game[9]=0;
            }else if(game[6]==5){
                game[13]=5;
                game[6]=0;
                game[10]=0;
            }else if(game[6]==7){
                game[13]=7;
                game[6]=0;
                game[10]=0;
            }else if(game[9]==5){
                game[13]=5;
                game[9]=0;
            }else if(game[9]==7){
                game[13]=7;
                game[9]=0;
            }else if(game[10]==5){
                game[13]=5;
                game[10]=0;
            }else if(game[10]==7){
                game[13]=7;
                game[10]=0;
            }else if(game[17]==7){
                game[13]=7;
                game[17]=0;
            }else if(game[18]==7){
                game[13]=7;
                game[18]=0;
            }else if(game[20]==7){
                game[13]=7;
                game[20]=0;
                game[17]=0;
            }else if(game[22]==7){
                game[13]=7;
                game[22]=0;
                game[18]=0;
            }
        }else if(place=='d3c'&&game[14]==6){
            if(game[5]==5){
                game[14]=5;
                game[5]=0;
                game[10]=0;
            }else if(game[5]==7){
                game[14]=7;
                game[5]=0;
                game[10]=0;
            }else if(game[7]==5){
                game[14]=5;
                game[7]=0;
                game[11]=0;
            }else if(game[7]==7){
                game[14]=7;
                game[7]=0;
                game[11]=0;
            }else if(game[10]==5){
                game[14]=5;
                game[10]=0;
            }else if(game[10]==7){
                game[14]=7;
                game[10]=0;
            }else if(game[11]==5){
                game[14]=5;
                game[11]=0;
            }else if(game[11]==7){
                game[14]=7;
                game[11]=0;
            }else if(game[18]==7){
                game[14]=7;
                game[18]=0;
            }else if(game[19]==7){
                game[14]=7;
                game[19]=0;
            }else if(game[21]==7){
                game[14]=7;
                game[21]=0;
                game[18]=0;
            }else if(game[23]==7){
                game[14]=7;
                game[23]=0;
                game[19]=0;
            }
        }else if(place=='d4c'&&game[15]==6){
            if(game[6]==5){
                game[15]=5;
                game[6]=0;
                game[11]=0;
            }else if(game[6]==7){
                game[15]=7;
                game[6]=0;
                game[11]=0;
            }else if(game[11]==5){
                game[15]=5;
                game[11]=0;
            }else if(game[11]==7){
                game[15]=7;
                game[11]=0;
            }else if(game[19]==7){
                game[15]=7;
                game[19]=0;
            }else if(game[22]==7){
                game[15]=7;
                game[22]=0;
                game[19]=0;
            }
        }else if(place=='e1c'&&game[16]==6){
            if(game[9]==5){
                game[16]=5;
                game[9]=0;
                game[13]=0;
            }else if(game[9]==7){
                game[16]=7;
                game[9]=0;
                game[13]=0;
            }else if(game[12]==5){
                game[16]=5;
                game[12]=0;
            }else if(game[12]==7){
                game[16]=7;
                game[12]=0;
            }else if(game[20]==7){
                game[16]=7;
                game[20]=0;
            }else if(game[25]==7){
                game[16]=7;
                game[25]=0;
                game[20]=0;
            }
        }else if(place=='e2c'&&game[17]==6){
            if(game[8]==5){
                game[17]=5;
                game[12]=0;
                game[8]=0;
            }else if(game[8]==7){
                game[17]=7;
                game[12]=0;
                game[8]=0;
            }else if(game[10]==5){
                game[17]=5;
                game[13]=0;
                game[10]=0;
            }else if(game[10]==7){
                game[17]=7;
                game[13]=0;
                game[10]=0;
            }else if(game[12]==5){
                game[17]=5;
                game[12]=0;
            }else if(game[12]==7){
                game[17]=7;
                game[12]=0;
            }else if(game[13]==5){
                game[17]=5;
                game[13]=0;
            }else if(game[13]==7){
                game[17]=7;
                game[13]=0;
            }else if(game[20]==7){
                game[17]=7;
                game[20]=0;
            }else if(game[21]==7){
                game[17]=7;
                game[21]=0;
            }else if(game[24]==7){
                game[17]=7;
                game[16]=0;
                game[24]=0;
            }else if(game[26]==7){
                game[17]=7;
                game[18]=0;
                game[26]=0;
            }            
        }else if(place=='e3c'&&game[18]==6){
            if(game[9]==5){
                game[18]=5;
                game[9]=0;
                game[13]=0;
            }else if(game[9]==7){
                game[18]=7;
                game[9]=0;
                game[13]=0;
            }else if(game[11]==5){
                game[18]=5;
                game[11]=0;
                game[14]=0;
            }else if(game[11]==7){
                game[18]=7;
                game[11]=0;
                game[14]=0;
            }else if(game[13]==5){
                game[18]=5;
                game[13]=0;
            }else if(game[13]==7){
                game[18]=7;
                game[13]=0;
            }else if(game[14]==5){
                game[18]=5;
                game[14]=0;
            }else if(game[14]==7){
                game[18]=7;
                game[14]=0;
            }else if(game[21]==7){
                game[18]=7;
                game[21]=0;
            }else if(game[22]==7){
                game[18]=7;
                game[22]=0;
            }else if(game[25]==7){
                game[18]=7;
                game[25]=0;
                game[21]=0;
            }else if(game[27]==7){
                game[18]=7;
                game[27]=0;
                game[22]=0;
            }
        }else if(place=='e4c'&&game[19]==6){
            if(game[10]==5){
                game[19]=5;
                game[10]=0;
                game[14]=0;
            }else if(game[10]==7){
                game[19]=7;
                game[10]=0;
                game[14]=0;
            }else if(game[14]==5){
                game[19]=5;
                game[14]=0;
            }else if(game[14]==7){
                game[19]=7;
                game[14]=0;
            }else if(game[15]==5){
                game[19]=5;
                game[15]=0;
            }else if(game[15]==7){
                game[19]=7;
                game[15]=0;
            }else if(game[22]==7){
                game[19]=7;
                game[22]=0;
            }else if(game[23]==7){
                game[19]=7;
                game[23]=0;
            }else if(game[26]==7){
                game[19]=7;
                game[26]=0;
                game[22]=0;
            }
        }else if(place=='f1c'&&game[20]==6){
            if(game[13]==5){
                game[20]=5;
                game[13]=0;
                game[17]=0;
            }else if(game[13]==7){
                game[20]=7;
                game[13]=0;
                game[17]=0;
            }else if(game[16]==5){
                game[20]=5;
                game[16]=0;
            }else if(game[16]==7){
                game[20]=7;
                game[16]=0;
            }else if(game[17]==5){
                game[20]=5;
                game[17]=0;
            }else if(game[17]==7){
                game[20]=7;
                game[17]=0;
            }else if(game[24]==7){
                game[20]=7;
                game[24]=0;
            }else if(game[25]==7){
                game[20]=7;
                game[25]=0;
            }else if(game[29]==7){
                game[20]=7;
                game[29]=0;
                game[25]=0;
            }
        }else if(place=='f2c'&&game[21]==6){
            if(game[12]==5){
                game[21]=5;
                game[12]=0;
                game[17]=0;
            }else if(game[12]==7){
                game[21]=7;
                game[12]=0;
                game[17]=0;
            }else if(game[14]==5){
                game[21]=5;
                game[14]=0;
                game[18]=0;
            }else if(game[14]==7){
                game[21]=7;
                game[14]=0;
                game[18]=0;
            }else if(game[17]==5){
                game[21]=5;
                game[17]=0;
            }else if(game[17]==7){
                game[21]=7;
                game[17]=0;
            }else if(game[18]==5){
                game[21]=5;
                game[18]=0;
            }else if(game[18]==7){
                game[21]=7;
                game[18]=0;
            }else if(game[25]==7){
                game[21]=7;
                game[25]=0;
            }else if(game[26]==7){
                game[21]=7;
                game[26]=0;
            }else if(game[28]==7){
                game[21]=7;
                game[28]=0;
                game[25]=0;
            }else if(game[30]==7){
                game[21]=7;
                game[30]=0;
                game[26]=0;
            }
        }else if(place=='f3c'&&game[22]==6){
            if(game[13]==5){
                game[22]=5;
                game[13]=0;
                game[18]=0;
            }else if(game[13]==7){
                game[22]=7;
                game[13]=0;
                game[18]=0;
            }else if(game[15]==5){
                game[22]=5;
                game[15]=0;
                game[19]=0;
            }else if(game[15]==7){
                game[22]=7;
                game[15]=0;
                game[19]=0;
            }else if(game[18]==5){
                game[22]=5;
                game[18]=0;
            }else if(game[18]==7){
                game[22]=7;
                game[18]=0;
            }else if(game[19]==5){
                game[22]=5;
                game[19]=0;
            }else if(game[19]==7){
                game[22]=7;
                game[19]=0;
            }else if(game[26]==7){
                game[22]=7;
                game[26]=0;
            }else if(game[27]==7){
                game[22]=7;
                game[27]=0;
            }else if(game[29]==7){
                game[22]=7;
                game[29]=0;
                game[26]=0;
            }else if(game[31]==7){
                game[22]=7;
                game[31]=0;
                game[27]=0;
            }
        }else if(place=='f4c'&&game[23]==6){
            if(game[14]==5){
                game[23]=5;
                game[14]=0;
                game[19]=0;
            }else if(game[14]==7){
                game[23]=7;
                game[14]=0;
                game[19]=0;
            }else if(game[19]==5){
                game[23]=5;
                game[19]=0;
            }else if(game[19]==7){
                game[23]=7;
                game[19]=0;
            }else if(game[27]==7){
                game[23]=7;
                game[27]=0;
            }else if(game[30]==7){
                game[23]=7;
                game[30]=0;
                game[27]=0;
            }
        }else if(place=='g1c'&&game[24]==6){
            if(game[17]==5){
                game[24]=5;
                game[17]=0;
                game[20]=0;
            }else if(game[17]==7){
                game[24]=7;
                game[17]=0;
                game[20]=0;
            }else if(game[20]==5){
                game[24]=5;
                game[20]=0;
            }else if(game[20]==7){
                game[24]=7;
                game[20]=0;
            }else if(game[28]==7){
                game[24]=7;
                game[28]=0;
            }
        }else if(place=='g2c'&&game[25]==6){
            if(game[16]==5){
                game[25]=5;
                game[20]=0;
                game[16]=0;
            }else if(game[16]==7){
                game[25]=7;
                game[20]=0;
                game[16]=0;
            }else if(game[18]==5){
                game[25]=5;
                game[21]=0;
                game[18]=0;
            }else if(game[18]==7){
                game[25]=7;
                game[21]=0;
                game[18]=0;
            }else if(game[20]==5){
                game[25]=5;
                game[20]=0;
            }else if(game[20]==7){
                game[25]=7;
                game[20]=0;
            }else if(game[21]==5){
                game[25]=5;
                game[21]=0;
            }else if(game[21]==7){
                game[25]=7;
                game[21]=0;
            }else if(game[28]==7){
                game[25]=7;
                game[28]=0;
            }else if(game[29]==7){
                game[25]=7;
                game[29]=0;
            }           
        }else if(place=='g3c'&&game[26]==6){
            if(game[17]==5){
                game[26]=5;
                game[17]=0;
                game[21]=0;
            }else if(game[17]==7){
                game[26]=7;
                game[17]=0;
                game[21]=0;
            }else if(game[19]==5){
                game[26]=5;
                game[19]=0;
                game[22]=0;
            }else if(game[19]==7){
                game[26]=7;
                game[19]=0;
                game[22]=0;
            }else if(game[21]==5){
                game[26]=5;
                game[21]=0;
            }else if(game[21]==7){
                game[26]=7;
                game[21]=0;
            }else if(game[22]==5){
                game[26]=5;
                game[22]=0;
            }else if(game[22]==7){
                game[26]=7;
                game[22]=0;
            }else if(game[29]==7){
                game[26]=7;
                game[29]=0;
            }else if(game[30]==7){
                game[26]=7;
                game[30]=0;
            }
        }else if(place=='g4c'&&game[27]==6){
            if(game[18]==5){
                game[27]=5;
                game[18]=0;
                game[22]=0;
            }else if(game[18]==7){
                game[27]=7;
                game[18]=0;
                game[22]=0;
            }else if(game[22]==5){
                game[27]=5;
                game[22]=0;
            }else if(game[22]==7){
                game[27]=7;
                game[22]=0;
            }else if(game[23]==5){
                game[27]=5;
                game[23]=0;
            }else if(game[23]==7){
                game[27]=7;
                game[23]=0;
            }else if(game[30]==7){
                game[27]=7;
                game[30]=0;
            }else if(game[31]==7){
                game[27]=7;
                game[31]=0;
            }
        }else if(place=='h1c'&&game[28]==6){
            if(game[21]==7||game[21]==5){
                game[28]=7;
                game[21]=0;
                game[25]=0;
            }else if(game[24]==7||game[24]==5){
                game[28]=7;
                game[24]=0;
            }else if(game[25]==7||game[25]==5){
                game[28]=7;
                game[25]=0;
            }
        }else if(place=='h2c'&&game[29]==6){
            if(game[20]==7||game[20]==5){
                game[29]=7;
                game[20]=0;
                game[25]=0;
            }else if(game[22]==7||game[22]==5){
                game[29]=7;
                game[22]=0;
                game[26]=0;
            }else if(game[25]==7||game[25]==5){
                game[29]=7;
                game[25]=0;
            }else if(game[26]==7||game[26]==5){
                game[29]=7;
                game[26]=0;
            }
        }else if(place=='h3c'&&game[30]==6){
            if(game[21]==7||game[21]==5){
                game[30]=7;
                game[21]=0;
                game[26]=0;
            }else if(game[23]==7||game[23]==5){
                game[30]=7;
                game[23]=0;
                game[27]=0;
            }else if(game[26]==7||game[26]==5){
                game[30]=7;
                game[26]=0;
            }else if(game[27]==7||game[27]==5){
                game[30]=7;
                game[27]=0;
            }
        }else if(place=='h4c'&&game[31]==6){
            if(game[22]==7||game[22]==5){
                game[31]=7;
                game[22]=0;
                game[27]=0;
            }else if(game[27]==7||game[27]==5){
                game[31]=7;
                game[27]=0;
            }
        }
    
}

function unselect(){
    for(let i = 0; i < game.length;i++){
        if(game[i]==6){
            game[i]=0;
        }
    }
    for(let i = 0; i < game.length;i++){
            if(game[i]==5){
                game[i]=2;
            }else if(game[i]==7){
                game[i]=4;
            }
    }
}

function unselectCPU(){
    for(let i = 0; i < game.length;i++){
        if(game[i]==6){
            game[i]=0;
        }
    }
    for(let i = 0; i < game.length;i++){
            if(game[i]==5){
                game[i]=1;
            }else if(game[i]==7){
                game[i]=3;
            }
    }
}

function posibleMoves(place){
        otherReg = 1;
        otherKing = 3;
    if(place=='a1c'&&game[0]==7){
        if(game[4]==0){
            game[4] = 6;
        }else if((game[4]==otherReg||game[4]==otherKing)&&game[9]==0){
            game[9] = 6;
        }
    }else if(place=='a2c'&&game[1]==7){
        if(game[4]==0){
            game[4] = 6;
        }else if((game[4]==otherReg||game[4]==otherKing)&&game[8]==0){
            game[8] = 6;
        }
        if(game[5]==0){    
            game[5] = 6;
        }else if((game[5]==otherReg||game[5]==otherKing)&&game[10]==0){
            game[10] = 6;
        }
    }else if(place=='a3c'&&game[2]==7){
        if(game[5]==0){
            game[5] = 6;
        }else if((game[5]==otherReg||game[5]==otherKing)&&game[9]==0){
            game[9] = 6;
        }
        if(game[6]==0){    
            game[6] = 6;
        }else if((game[6]==otherReg||game[6]==otherKing)&&game[11]==0){
            game[11] = 6;
        }
    }else if(place=='a4c'&&game[3]==7){
        if(game[6]==0){
            game[6] = 6;
        }else if((game[6]==otherReg||game[6]==otherKing)&&game[10]==0){
            game[10] = 6;
        }
        if(game[7]==0){    
            game[7] = 6;
        }
    }else if(place=='b1c'&&game[4]==5){
        if(game[0]==0){
            game[0] = 6;
        }
        if(game[1]==0){
            game[1] = 6;
        }
    }else if(place=='b2c'&&game[5]==5){
        if(game[1]==0){
            game[1] = 6;
        }
        if(game[2]==0){    
            game[2] = 6;
        }
    }else if(place=='b3c'&&game[6]==5){
        if(game[2]==0){
            game[2] = 6;
        }
        if(game[3]==0){    
            game[3] = 6;
        }
    }else if(place=='b4c'&&game[7]==5){
        if(game[3]==0){
            game[3] = 6;
        }
    }else if(place=='b1c'&&game[4]==7){
        if(game[0]==0){
            game[0] = 6;
        }
        if(game[1]==0){
            game[1] = 6;
        }
        if(game[8]==0){
            game[8] = 6;
        }
        if(game[9]==0){
            game[9] = 6;
        }else if((game[9]==otherReg||game[9]==otherKing)&&game[13]==0){
            game[13] = 6;
        }
    }else if(place=='b2c'&&game[5]==7){
        if(game[1]==0){
            game[1] = 6;
        }
        if(game[2]==0){    
            game[2] = 6;
        }
        if(game[9]==0){
            game[9] = 6;
        }else if((game[9]==otherReg||game[9]==otherKing)&&game[12]==0){
            game[12] = 6;
        }
        if(game[10]==0){
            game[10] = 6;
        }else if((game[10]==otherReg||game[10]==otherKing)&&game[14]==0){
            game[14] = 6;
        }
    }else if(place=='b3c'&&game[6]==7){
        if(game[2]==0){
            game[2] = 6;
        }
        if(game[3]==0){    
            game[3] = 6;
        }
        if(game[10]==0){
            game[10] = 6;
        }else if((game[10]==otherReg||game[10]==otherKing)&&game[13]==0){
            game[13] = 6;
        }
        if(game[11]==0){
            game[11] = 6;
        }else if((game[11]==otherReg||game[11]==otherKing)&&game[15]==0){
            game[15] = 6;
        }
    }else if(place=='b4c'&&game[7]==7){
        if(game[3]==0){
            game[3] = 6;
        }
        if(game[11]==0){
            game[11] = 6;
        }else if((game[11]==otherReg||game[11]==otherKing)&&game[14]==0){
            game[14] = 6;
        }
    }else if(place=='c1c'&&game[8]==5){
        if(game[4]==0){
            game[4] = 6;
        }else if((game[4]==otherReg||game[4]==otherKing)&&game[1]==0){
            game[1] = 6;
        }
    }else if(place=='c2c'&&game[9]==5){
        if(game[4]==0){
            game[4] = 6;
        }else if((game[4]==otherReg||game[4]==otherKing)&&game[0]==0){
            game[0] = 6;
        }
        if(game[5]==0){    
            game[5] = 6;
        }else if((game[5]==otherReg||game[5]==otherKing)&&game[2]==0){
            game[2] = 6;
        }
    }else if(place=='c3c'&&game[10]==5){
        if(game[5]==0){
            game[5] = 6;
        }else if((game[5]==otherReg||game[5]==otherKing)&&game[1]==0){
            game[1] = 6;
        }
        if(game[6]==0){    
            game[6] = 6;
        }else if((game[6]==otherReg||game[6]==otherKing)&&game[3]==0){
            game[3] = 6;
        }
    }else if(place=='c4c'&&game[11]==5){
        if(game[6]==0){
            game[6] = 6;
        }else if((game[6]==otherReg||game[6]==otherKing)&&game[2]==0){
            game[2] = 6;
        }
        if(game[7]==0){
            game[7] = 6;
        }
    }else if(place=='c1c'&&game[8]==7){
        if(game[4]==0){
            game[4] = 6;
        }else if((game[4]==otherReg||game[4]==otherKing)&&game[1]==0){
            game[1] = 6;
        }
        if(game[12]==0){
            game[12] = 6;
        }else if((game[12]==otherReg||game[12]==otherKing)&&game[17]==0){
            game[17] = 6;
        }
    }else if(place=='c2c'&&game[9]==7){
        if(game[4]==0){
            game[4] = 6;
        }else if((game[4]==otherReg||game[4]==otherKing)&&game[0]==0){
            game[0] = 6;
        }
        if(game[5]==0){    
            game[5] = 6;
        }else if((game[5]==otherReg||game[5]==otherKing)&&game[2]==0){
            game[2] = 6;
        }
        if(game[12]==0){
            game[12] = 6;
        }else if((game[12]==otherReg||game[12]==otherKing)&&game[16]==0){
            game[16] = 6;
        }
        if(game[13]==0){
            game[13] = 6;
        }else if((game[13]==otherReg||game[13]==otherKing)&&game[18]==0){
            game[18] = 6;
        }
    }else if(place=='c3c'&&game[10]==7){
        if(game[5]==0){
            game[5] = 6;
        }else if((game[5]==otherReg||game[5]==otherKing)&&game[1]==0){
            game[1] = 6;
        }
        if(game[6]==0){    
            game[6] = 6;
        }else if((game[6]==otherReg||game[6]==otherKing)&&game[3]==0){
            game[3] = 6;
        }
        if(game[13]==0){
            game[13] = 6;
        }else if((game[13]==otherReg||game[13]==otherKing)&&game[17]==0){
            game[17] = 6;
        }
        if(game[14]==0){
            game[14] = 6;
        }else if((game[14]==otherReg||game[14]==otherKing)&&game[19]==0){
            game[19] = 6;
        }
    }else if(place=='c4c'&&game[11]==7){
        if(game[6]==0){
            game[6] = 6;
        }else if((game[6]==otherReg||game[6]==otherKing)&&game[2]==0){
            game[2] = 6;
        }
        if(game[7]==0){
            game[7] = 6;
        }
        if(game[14]==0){
            game[14] = 6;
        }else if((game[14]==otherReg||game[14]==otherKing)&&game[18]==0){
            game[18] = 6;
        }
        if(game[15]==0){
            game[15] = 6;
        }
    }else if(place=='d1c'&&game[12]==5){
        if(game[8]==0){
            game[8] = 6;
        }
        if(game[9]==0){
            game[9] = 6;
        }else if((game[9]==otherReg||game[9]==otherKing)&&game[5]==0){
            game[5] = 6;
        }
    }else if(place=='d2c'&&game[13]==5){
        if(game[9]==0){
            game[9] = 6;
        }else if((game[9]==otherReg||game[9]==otherKing)&&game[4]==0){
            game[4] = 6;
        }
        if(game[10]==0){    
            game[10] = 6;
        }else if((game[10]==otherReg||game[10]==otherKing)&&game[6]==0){
            game[6] = 6;
        }
    }else if(place=='d3c'&&game[14]==5){
        if(game[10]==0){
            game[10] = 6;
        }else if((game[10]==otherReg||game[10]==otherKing)&&game[5]==0){
            game[5] = 6;
        }
        if(game[11]==0){    
            game[11] = 6;
        }else if((game[11]==otherReg||game[11]==otherKing)&&game[7]==0){
            game[7] = 6;
        }
    }else if(place=='d4c'&&game[15]==5){
        if(game[11]==0){
            game[11] = 6;
        }else if((game[11]==otherReg||game[11]==otherKing)&&game[6]==0){
            game[6] = 6;
        }
    }else if(place=='d1c'&&game[12]==7){
        if(game[8]==0){
            game[8] = 6;
        }
        if(game[9]==0){
            game[9] = 6;
        }else if((game[9]==otherReg||game[9]==otherKing)&&game[5]==0){
            game[5] = 6;
        }
        if(game[16]==0){
            game[16] = 6;
        }
        if(game[17]==0){
            game[17] = 6;
        }else if((game[17]==otherReg||game[17]==otherKing)&&game[21]==0){
            game[21] = 6;
        }
    }else if(place=='d2c'&&game[13]==7){
        if(game[9]==0){
            game[9] = 6;
        }else if((game[9]==otherReg||game[9]==otherKing)&&game[4]==0){
            game[4] = 6;
        }
        if(game[10]==0){    
            game[10] = 6;
        }else if((game[10]==otherReg||game[10]==otherKing)&&game[6]==0){
            game[6] = 6;
        }
        if(game[17]==0){
            game[17] = 6;
        }else if((game[17]==otherReg||game[17]==otherKing)&&game[20]==0){
            game[20] = 6;
        }
        if(game[18]==0){
            game[18] = 6;
        }else if((game[18]==otherReg||game[18]==otherKing)&&game[22]==0){
            game[22] = 6;
        }
    }else if(place=='d3c'&&game[14]==7){
        if(game[10]==0){
            game[10] = 6;
        }else if((game[10]==otherReg||game[10]==otherKing)&&game[5]==0){
            game[5] = 6;
        }
        if(game[11]==0){    
            game[11] = 6;
        }else if((game[11]==otherReg||game[11]==otherKing)&&game[7]==0){
            game[7] = 6;
        }
        if(game[18]==0){
            game[18] = 6;
        }else if((game[18]==otherReg||game[18]==otherKing)&&game[21]==0){
            game[21] = 6;
        }
        if(game[19]==0){
            game[19] = 6;
        }else if((game[19]==otherReg||game[19]==otherKing)&&game[23]==0){
            game[23] = 6;
        }
    }else if(place=='d4c'&&game[15]==7){
        if(game[11]==0){
            game[11] = 6;
        }else if((game[11]==otherReg||game[11]==otherKing)&&game[6]==0){
            game[6] = 6;
        }
        if(game[19]==0){
            game[19] = 6;
        }else if((game[19]==otherReg||game[19]==otherKing)&&game[22]==0){
            game[22] = 6;
        }
    }else if(place=='e1c'&&game[16]==5){
        if(game[12]==0){
            game[12] = 6;
        }else if((game[12]==otherReg||game[12]==otherKing)&&game[9]==0){
            game[9] = 6;
        }
    }else if(place=='e2c'&&game[17]==5){
        if(game[12]==0){
            game[12] = 6;
        }else if((game[12]==otherReg||game[12]==otherKing)&&game[8]==0){
            game[8] = 6;
        }
        if(game[13]==0){    
            game[13] = 6;
        }else if((game[13]==otherReg||game[13]==otherKing)&&game[10]==0){
            game[10] = 6;
        }
    }else if(place=='e3c'&&game[18]==5){
        if(game[13]==0){
            game[13] = 6;
        }else if((game[13]==otherReg||game[13]==otherKing)&&game[9]==0){
            game[9] = 6;
        }
        if(game[14]==0){    
            game[14] = 6;
        }else if((game[14]==otherReg||game[14]==otherKing)&&game[11]==0){
            game[11] = 6;
        }
    }else if(place=='e4c'&&game[19]==5){
        if(game[14]==0){
            game[14] = 6;
        }else if((game[14]==otherReg||game[14]==otherKing)&&game[10]==0){
            game[10] = 6;
        }
        if(game[15]==0){
            game[15] = 6;
        }
    }else if(place=='e1c'&&game[16]==7){
        if(game[12]==0){
            game[12] = 6;
        }else if((game[12]==otherReg||game[12]==otherKing)&&game[9]==0){
            game[9] = 6;
        }
        if(game[20]==0){
            game[20] = 6;
        }else if((game[20]==otherReg||game[20]==otherKing)&&game[25]==0){
            game[25] = 6;
        }
    }else if(place=='e2c'&&game[17]==7){
        if(game[12]==0){
            game[12] = 6;
        }else if((game[12]==otherReg||game[12]==otherKing)&&game[8]==0){
            game[8] = 6;
        }
        if(game[13]==0){    
            game[13] = 6;
        }else if((game[13]==otherReg||game[13]==otherKing)&&game[10]==0){
            game[10] = 6;
        }
        if(game[20]==0){
            game[20] = 6;
        }else if((game[20]==otherReg||game[20]==otherKing)&&game[24]==0){
            game[24] = 6;
        }
        if(game[21]==0){
            game[21] = 6;
        }else if((game[21]==otherReg||game[21]==otherKing)&&game[26]==0){
            game[26] = 6;
        }
    }else if(place=='e3c'&&game[18]==7){
        if(game[13]==0){
            game[13] = 6;
        }else if((game[13]==otherReg||game[13]==otherKing)&&game[9]==0){
            game[9] = 6;
        }
        if(game[14]==0){    
            game[14] = 6;
        }else if((game[14]==otherReg||game[14]==otherKing)&&game[11]==0){
            game[11] = 6;
        }
        if(game[21]==0){
            game[21] = 6;
        }else if((game[21]==otherReg||game[21]==otherKing)&&game[25]==0){
            game[25] = 6;
        }
        if(game[22]==0){
            game[22] = 6;
        }else if((game[22]==otherReg||game[22]==otherKing)&&game[27]==0){
            game[27] = 6;
        }
    }else if(place=='e4c'&&game[19]==7){
        if(game[14]==0){
            game[14] = 6;
        }else if((game[14]==otherReg||game[14]==otherKing)&&game[10]==0){
            game[10] = 6;
        }
        if(game[15]==0){    
            game[15] = 6;
        }
        if(game[22]==0){
            game[22] = 6;
        }else if((game[22]==otherReg||game[22]==otherKing)&&game[26]==0){
            game[26] = 6;
        }
        if(game[23]==0){
            game[23] = 6;
        }
    }else if(place=='f1c'&&game[20]==5){
        if(game[16]==0){
            game[16] = 6;
        }
        if(game[17]==0){    
            game[17] = 6;
        }else if((game[17]==otherReg||game[17]==otherKing)&&game[13]==0){
            game[13] = 6;
        }
    }else if(place=='f2c'&&game[21]==5){
        if(game[17]==0){
            game[17] = 6;
        }else if((game[17]==otherReg||game[17]==otherKing)&&game[12]==0){
            game[12] = 6;
        }
        if(game[18]==0){    
            game[18] = 6;
        }else if((game[18]==otherReg||game[18]==otherKing)&&game[14]==0){
            game[14] = 6;
        }
    }else if(place=='f3c'&&game[22]==5){
        if(game[18]==0){
            game[18] = 6;
        }else if((game[18]==otherReg||game[18]==otherKing)&&game[13]==0){
            game[13] = 6;
        }
        if(game[19]==0){    
            game[19] = 6;
        }else if((game[19]==otherReg||game[19]==otherKing)&&game[15]==0){
            game[15] = 6;
        }
    }else if(place=='f4c'&&game[23]==5){
        if(game[19]==0){
            game[19] = 6;
        }else if((game[19]==otherReg||game[19]==otherKing)&&game[14]==0){
            game[14] = 6;
        }
    }else if(place=='f1c'&&game[20]==7){
        if(game[16]==0){
            game[16] = 6;
        }
        if(game[17]==0){    
            game[17] = 6;
        }else if((game[17]==otherReg||game[17]==otherKing)&&game[13]==0){
            game[13] = 6;
        }
        if(game[24]==0){
            game[24] = 6;
        }
        if(game[25]==0){
            game[25] = 6;
        }else if((game[25]==otherReg||game[25]==otherKing)&&game[29]==0){
            game[29] = 6;
        }
    }else if(place=='f2c'&&game[21]==7){
        if(game[17]==0){
            game[17] = 6;
        }else if((game[17]==otherReg||game[17]==otherKing)&&game[12]==0){
            game[12] = 6;
        }
        if(game[18]==0){    
            game[18] = 6;
        }else if((game[18]==otherReg||game[18]==otherKing)&&game[14]==0){
            game[14] = 6;
        }
        if(game[25]==0){
            game[25] = 6;
        }else if((game[25]==otherReg||game[25]==otherKing)&&game[28]==0){
            game[28] = 6;
        }
        if(game[26]==0){    
            game[26] = 6;
        }else if((game[26]==otherReg||game[26]==otherKing)&&game[30]==0){
            game[30] = 6;
        }
    }else if(place=='f3c'&&game[22]==7){
        if(game[18]==0){
            game[18] = 6;
        }else if((game[18]==otherReg||game[18]==otherKing)&&game[13]==0){
            game[13] = 6;
        }
        if(game[19]==0){    
            game[19] = 6;
        }else if((game[19]==otherReg||game[19]==otherKing)&&game[15]==0){
            game[15] = 6;
        }
        if(game[26]==0){
            game[26] = 6;
        }else if((game[26]==otherReg||game[26]==otherKing)&&game[29]==0){
            game[29] = 6;
        }
        if(game[27]==0){    
            game[27] = 6;
        }else if((game[27]==otherReg||game[27]==otherKing)&&game[31]==0){
            game[31] = 6;
        }
    }else if(place=='f4c'&&game[23]==7){
        if(game[19]==0){
            game[19] = 6;
        }else if((game[19]==otherReg||game[19]==otherKing)&&game[14]==0){
            game[14] = 6;
        }
        if(game[27]==0){
            game[27] = 6;
        }else if((game[27]==otherReg||game[27]==otherKing)&&game[30]==0){
            game[30] = 6;
        }
    }else if(place=='g1c'&&game[24]==5){
        if(game[20]==0){
            game[20] = 6;
        }else if((game[20]==otherReg||game[20]==otherKing)&&game[17]==0){
            game[17] = 6;
        }
    }else if(place=='g2c'&&game[25]==5){
        if(game[20]==0){
            game[20] = 6;
        }else if((game[20]==otherReg||game[20]==otherKing)&&game[16]==0){
            game[16] = 6;
        }
        if(game[21]==0){    
            game[21] = 6;
        }else if((game[21]==otherReg||game[21]==otherKing)&&game[18]==0){
            game[18] = 6;
        }
    }else if(place=='g3c'&&game[26]==5){
        if(game[21]==0){
            game[21] = 6;
        }else if((game[21]==otherReg||game[21]==otherKing)&&game[17]==0){
            game[17] = 6;
        }
        if(game[22]==0){    
            game[22] = 6;
        }else if((game[22]==otherReg||game[22]==otherKing)&&game[19]==0){
            game[19] = 6;
        }
    }else if(place=='g4c'&&game[27]==5){
        if(game[22]==0){
            game[22] = 6;
        }else if((game[22]==otherReg||game[22]==otherKing)&&game[18]==0){
            game[18] = 6;
        }
        if(game[23]==0){
            game[23] = 6;
        }
    }else if(place=='g1c'&&game[24]==7){
        if(game[20]==0){
            game[20] = 6;
        }else if((game[20]==otherReg||game[20]==otherKing)&&game[17]==0){
            game[17] = 6;
        }
        if(game[28]==0){
            game[28] = 6;
        }
    }else if(place=='g2c'&&game[25]==7){
        if(game[20]==0){
            game[20] = 6;
        }else if((game[20]==otherReg||game[20]==otherKing)&&game[16]==0){
            game[16] = 6;
        }
        if(game[21]==0){    
            game[21] = 6;
        }else if((game[21]==otherReg||game[21]==otherKing)&&game[18]==0){
            game[18] = 6;
        }
        if(game[28]==0){
            game[28] = 6;
        }
        if(game[29]==0){
            game[29] = 6;
        }
    }else if(place=='g3c'&&game[26]==7){
        if(game[21]==0){
            game[21] = 6;
        }else if((game[21]==otherReg||game[21]==otherKing)&&game[17]==0){
            game[17] = 6;
        }
        if(game[22]==0){    
            game[22] = 6;
        }else if((game[22]==otherReg||game[22]==otherKing)&&game[19]==0){
            game[19] = 6;
        }
        if(game[29]==0){
            game[29] = 6;
        }
        if(game[30]==0){
            game[30] = 6;
        }
    }else if(place=='g4c'&&game[27]==7){
        if(game[22]==0){
            game[22] = 6;
        }else if((game[22]==otherReg||game[22]==otherKing)&&game[18]==0){
            game[18] = 6;
        }
        if(game[23]==0){
            game[23] = 6;
        }
        if(game[30]==0){
            game[30] = 6;
        }
        if(game[31]==0){
            game[31] = 6;
        }
    }else if(place=='h1c'&&game[28]==5){
        if(game[24]==0){
            game[24] = 6;
        }
        if(game[25]==0){
            game[25] = 6;
        }else if((game[25]==otherReg||game[25]==otherKing)&&game[21]==0){
            game[21] = 6;
        }
    }else if(place=='h2c'&&game[29]==5){
        if(game[25]==0){
            game[25] = 6;
        }else if((game[25]==otherReg||game[25]==otherKing)&&game[20]==0){
            game[20] = 6;
        }
        if(game[26]==0){    
            game[26] = 6;
        }else if((game[26]==otherReg||game[26]==otherKing)&&game[22]==0){
            game[22] = 6;
        }
    }else if(place=='h3c'&&game[30]==5){
        if(game[26]==0){
            game[26] = 6;
        }else if((game[26]==otherReg||game[26]==otherKing)&&game[21]==0){
            game[21] = 6;
        }
        if(game[27]==0){    
            game[27] = 6;
        }else if((game[27]==otherReg||game[27]==otherKing)&&game[23]==0){
            game[23] = 6;
        }
    }else if(place=='h4c'&&game[31]==5){
        if(game[27]==0){
            game[27] = 6;
        }else if((game[27]==otherReg||game[27]==otherKing)&&game[22]==0){
            game[22] = 6;
        }
    }else if(place=='h1c'&&game[28]==7){
        if(game[24]==0){
            game[24] = 6;
        }
        if(game[25]==0){
            game[25] = 6;
        }else if((game[25]==otherReg||game[25]==otherKing)&&game[21]==0){
            game[21] = 6;
        }
    }else if(place=='h2c'&&game[29]==7){
        if(game[25]==0){
            game[25] = 6;
        }else if((game[25]==otherReg||game[25]==otherKing)&&game[20]==0){
            game[20] = 6;
        }
        if(game[26]==0){    
            game[26] = 6;
        }else if((game[26]==otherReg||game[26]==otherKing)&&game[22]==0){
            game[22] = 6;
        }
    }else if(place=='h3c'&&game[30]==7){
        if(game[26]==0){
            game[26] = 6;
        }else if((game[26]==otherReg||game[26]==otherKing)&&game[21]==0){
            game[21] = 6;
        }
        if(game[27]==0){    
            game[27] = 6;
        }else if((game[27]==otherReg||game[27]==otherKing)&&game[23]==0){
            game[23] = 6;
        }
    }else if(place=='h4c'&&game[31]==7){
        if(game[27]==0){
            game[27] = 6;
        }else if((game[27]==otherReg||game[27]==otherKing)&&game[22]==0){
            game[22] = 6;
        }
    }
}

function posibleMovesCPU(place){
    otherReg = 2;
    otherKing = 4;
if(place=='a1c'&&(game[0]==5||game[0]==7)){
    if(game[4]==0){
        game[4] = 6;
    }else if((game[4]==otherReg||game[4]==otherKing)&&game[9]==0){
        game[9] = 6;
    }
}else if(place=='a2c'&&(game[1]==5||game[1]==7)){
    if(game[4]==0){
        game[4] = 6;
    }else if((game[4]==otherReg||game[4]==otherKing)&&game[8]==0){
        game[8] = 6;
    }
    if(game[5]==0){    
        game[5] = 6;
    }else if((game[5]==otherReg||game[5]==otherKing)&&game[10]==0){
        game[10] = 6;
    }
}else if(place=='a3c'&&(game[2]==5||game[2]==7)){
    if(game[5]==0){
        game[5] = 6;
    }else if((game[5]==otherReg||game[5]==otherKing)&&game[9]==0){
        game[9] = 6;
    }
    if(game[6]==0){    
        game[6] = 6;
    }else if((game[6]==otherReg||game[6]==otherKing)&&game[11]==0){
        game[11] = 6;
    }
}else if(place=='a4c'&&(game[3]==5||game[3]==7)){
    if(game[6]==0){
        game[6] = 6;
    }else if((game[6]==otherReg||game[6]==otherKing)&&game[10]==0){
        game[10] = 6;
    }
    if(game[7]==0){    
        game[7] = 6;
    }
}else if(place=='b1c'&&game[4]==5){
    if(game[8]==0){
        game[8] = 6;
    }
    if(game[9]==0){
        game[9] = 6;
    }else if((game[9]==otherReg||game[9]==otherKing)&&game[13]==0){
        game[13] = 6;
    }
}else if(place=='b2c'&&game[5]==5){
    if(game[9]==0){
        game[9] = 6;
    }else if((game[9]==otherReg||game[9]==otherKing)&&game[12]==0){
        game[12] = 6;
    }
    if(game[10]==0){
        game[10] = 6;
    }else if((game[10]==otherReg||game[10]==otherKing)&&game[14]==0){
        game[14] = 6;
    }
}else if(place=='b3c'&&game[6]==5){
    if(game[10]==0){
        game[10] = 6;
    }else if((game[10]==otherReg||game[10]==otherKing)&&game[13]==0){
        game[13] = 6;
    }
    if(game[11]==0){
        game[11] = 6;
    }else if((game[11]==otherReg||game[11]==otherKing)&&game[15]==0){
        game[15] = 6;
    }
}else if(place=='b4c'&&game[7]==5){
    if(game[11]==0){
        game[11] = 6;
    }else if((game[11]==otherReg||game[11]==otherKing)&&game[14]==0){
        game[14] = 6;
    }
}else if(place=='b1c'&&game[4]==7){
    if(game[0]==0){
        game[0] = 6;
    }
    if(game[1]==0){
        game[1] = 6;
    }
    if(game[8]==0){
        game[8] = 6;
    }
    if(game[9]==0){
        game[9] = 6;
    }else if((game[9]==otherReg||game[9]==otherKing)&&game[13]==0){
        game[13] = 6;
    }
}else if(place=='b2c'&&game[5]==7){
    if(game[1]==0){
        game[1] = 6;
    }
    if(game[2]==0){    
        game[2] = 6;
    }
    if(game[9]==0){
        game[9] = 6;
    }else if((game[9]==otherReg||game[9]==otherKing)&&game[12]==0){
        game[12] = 6;
    }
    if(game[10]==0){
        game[10] = 6;
    }else if((game[10]==otherReg||game[10]==otherKing)&&game[14]==0){
        game[14] = 6;
    }
}else if(place=='b3c'&&game[6]==7){
    if(game[2]==0){
        game[2] = 6;
    }
    if(game[3]==0){    
        game[3] = 6;
    }
    if(game[10]==0){
        game[10] = 6;
    }else if((game[10]==otherReg||game[10]==otherKing)&&game[13]==0){
        game[13] = 6;
    }
    if(game[11]==0){
        game[11] = 6;
    }else if((game[11]==otherReg||game[11]==otherKing)&&game[15]==0){
        game[15] = 6;
    }
}else if(place=='b4c'&&game[7]==7){
    if(game[3]==0){
        game[3] = 6;
    }
    if(game[11]==0){
        game[11] = 6;
    }else if((game[11]==otherReg||game[11]==otherKing)&&game[14]==0){
        game[14] = 6;
    }
}else if(place=='c1c'&&game[8]==5){
    if(game[12]==0){
        game[12] = 6;
    }else if((game[12]==otherReg||game[12]==otherKing)&&game[17]==0){
        game[17] = 6;
    }
}else if(place=='c2c'&&game[9]==5){
    if(game[12]==0){
        game[12] = 6;
    }else if((game[12]==otherReg||game[12]==otherKing)&&game[16]==0){
        game[16] = 6;
    }
    if(game[13]==0){
        game[13] = 6;
    }else if((game[13]==otherReg||game[13]==otherKing)&&game[18]==0){
        game[18] = 6;
    }
}else if(place=='c3c'&&game[10]==5){
    if(game[13]==0){
        game[13] = 6;
    }else if((game[13]==otherReg||game[13]==otherKing)&&game[17]==0){
        game[17] = 6;
    }
    if(game[14]==0){
        game[14] = 6;
    }else if((game[14]==otherReg||game[14]==otherKing)&&game[19]==0){
        game[19] = 6;
    }
}else if(place=='c4c'&&game[11]==5){
    if(game[14]==0){
        game[14] = 6;
    }else if((game[14]==otherReg||game[14]==otherKing)&&game[18]==0){
        game[18] = 6;
    }
    if(game[15]==0){
        game[15] = 6;
    }
}else if(place=='c1c'&&game[8]==7){
    if(game[4]==0){
        game[4] = 6;
    }else if((game[4]==otherReg||game[4]==otherKing)&&game[1]==0){
        game[1] = 6;
    }
    if(game[12]==0){
        game[12] = 6;
    }else if((game[12]==otherReg||game[12]==otherKing)&&game[17]==0){
        game[17] = 6;
    }
}else if(place=='c2c'&&game[9]==7){
    if(game[4]==0){
        game[4] = 6;
    }else if((game[4]==otherReg||game[4]==otherKing)&&game[0]==0){
        game[0] = 6;
    }
    if(game[5]==0){    
        game[5] = 6;
    }else if((game[5]==otherReg||game[5]==otherKing)&&game[2]==0){
        game[2] = 6;
    }
    if(game[12]==0){
        game[12] = 6;
    }else if((game[12]==otherReg||game[12]==otherKing)&&game[16]==0){
        game[16] = 6;
    }
    if(game[13]==0){
        game[13] = 6;
    }else if((game[13]==otherReg||game[13]==otherKing)&&game[18]==0){
        game[18] = 6;
    }
}else if(place=='c3c'&&game[10]==7){
    if(game[5]==0){
        game[5] = 6;
    }else if((game[5]==otherReg||game[5]==otherKing)&&game[1]==0){
        game[1] = 6;
    }
    if(game[6]==0){    
        game[6] = 6;
    }else if((game[6]==otherReg||game[6]==otherKing)&&game[3]==0){
        game[3] = 6;
    }
    if(game[13]==0){
        game[13] = 6;
    }else if((game[13]==otherReg||game[13]==otherKing)&&game[17]==0){
        game[17] = 6;
    }
    if(game[14]==0){
        game[14] = 6;
    }else if((game[14]==otherReg||game[14]==otherKing)&&game[19]==0){
        game[19] = 6;
    }
}else if(place=='c4c'&&game[11]==7){
    if(game[6]==0){
        game[6] = 6;
    }else if((game[6]==otherReg||game[6]==otherKing)&&game[2]==0){
        game[2] = 6;
    }
    if(game[7]==0){
        game[7] = 6;
    }
    if(game[14]==0){
        game[14] = 6;
    }else if((game[14]==otherReg||game[14]==otherKing)&&game[18]==0){
        game[18] = 6;
    }
    if(game[15]==0){
        game[15] = 6;
    }
}else if(place=='d1c'&&game[12]==5){
    if(game[16]==0){
        game[16] = 6;
    }
    if(game[17]==0){
        game[17] = 6;
    }else if((game[17]==otherReg||game[17]==otherKing)&&game[21]==0){
        game[21] = 6;
    }
}else if(place=='d2c'&&game[13]==5){
    if(game[17]==0){
        game[17] = 6;
    }else if((game[17]==otherReg||game[17]==otherKing)&&game[20]==0){
        game[20] = 6;
    }
    if(game[18]==0){
        game[18] = 6;
    }else if((game[18]==otherReg||game[18]==otherKing)&&game[22]==0){
        game[22] = 6;
    }
}else if(place=='d3c'&&game[14]==5){
    if(game[18]==0){
        game[18] = 6;
    }else if((game[18]==otherReg||game[18]==otherKing)&&game[21]==0){
        game[21] = 6;
    }
    if(game[19]==0){
        game[19] = 6;
    }else if((game[19]==otherReg||game[19]==otherKing)&&game[23]==0){
        game[23] = 6;
    }
}else if(place=='d4c'&&game[15]==5){
    if(game[19]==0){
        game[19] = 6;
    }else if((game[19]==otherReg||game[19]==otherKing)&&game[22]==0){
        game[22] = 6;
    }
}else if(place=='d1c'&&game[12]==7){
    if(game[8]==0){
        game[8] = 6;
    }
    if(game[9]==0){
        game[9] = 6;
    }else if((game[9]==otherReg||game[9]==otherKing)&&game[5]==0){
        game[5] = 6;
    }
    if(game[16]==0){
        game[16] = 6;
    }
    if(game[17]==0){
        game[17] = 6;
    }else if((game[17]==otherReg||game[17]==otherKing)&&game[21]==0){
        game[21] = 6;
    }
}else if(place=='d2c'&&game[13]==7){
    if(game[9]==0){
        game[9] = 6;
    }else if((game[9]==otherReg||game[9]==otherKing)&&game[4]==0){
        game[4] = 6;
    }
    if(game[10]==0){    
        game[10] = 6;
    }else if((game[10]==otherReg||game[10]==otherKing)&&game[6]==0){
        game[6] = 6;
    }
    if(game[17]==0){
        game[17] = 6;
    }else if((game[17]==otherReg||game[17]==otherKing)&&game[20]==0){
        game[20] = 6;
    }
    if(game[18]==0){
        game[18] = 6;
    }else if((game[18]==otherReg||game[18]==otherKing)&&game[22]==0){
        game[22] = 6;
    }
}else if(place=='d3c'&&game[14]==7){
    if(game[10]==0){
        game[10] = 6;
    }else if((game[10]==otherReg||game[10]==otherKing)&&game[5]==0){
        game[5] = 6;
    }
    if(game[11]==0){    
        game[11] = 6;
    }else if((game[11]==otherReg||game[11]==otherKing)&&game[7]==0){
        game[7] = 6;
    }
    if(game[18]==0){
        game[18] = 6;
    }else if((game[18]==otherReg||game[18]==otherKing)&&game[21]==0){
        game[21] = 6;
    }
    if(game[19]==0){
        game[19] = 6;
    }else if((game[19]==otherReg||game[19]==otherKing)&&game[23]==0){
        game[23] = 6;
    }
}else if(place=='d4c'&&game[15]==7){
    if(game[11]==0){
        game[11] = 6;
    }else if((game[11]==otherReg||game[11]==otherKing)&&game[6]==0){
        game[6] = 6;
    }
    if(game[19]==0){
        game[19] = 6;
    }else if((game[19]==otherReg||game[19]==otherKing)&&game[22]==0){
        game[22] = 6;
    }
}else if(place=='e1c'&&game[16]==5){
    if(game[20]==0){
        game[20] = 6;
    }else if((game[20]==otherReg||game[20]==otherKing)&&game[25]==0){
        game[25] = 6;
    }
}else if(place=='e2c'&&game[17]==5){
    if(game[20]==0){
        game[20] = 6;
    }else if((game[20]==otherReg||game[20]==otherKing)&&game[24]==0){
        game[24] = 6;
    }
    if(game[21]==0){
        game[21] = 6;
    }else if((game[21]==otherReg||game[21]==otherKing)&&game[26]==0){
        game[26] = 6;
    }
}else if(place=='e3c'&&game[18]==5){
    if(game[21]==0){
        game[21] = 6;
    }else if((game[21]==otherReg||game[21]==otherKing)&&game[25]==0){
        game[25] = 6;
    }
    if(game[22]==0){
        game[22] = 6;
    }else if((game[22]==otherReg||game[22]==otherKing)&&game[27]==0){
        game[27] = 6;
    }
}else if(place=='e4c'&&game[19]==5){
    if(game[22]==0){
        game[22] = 6;
    }else if((game[22]==otherReg||game[22]==otherKing)&&game[26]==0){
        game[26] = 6;
    }
    if(game[23]==0){
        game[23] = 6;
    }
}else if(place=='e1c'&&game[16]==7){
    if(game[12]==0){
        game[12] = 6;
    }else if((game[12]==otherReg||game[12]==otherKing)&&game[9]==0){
        game[9] = 6;
    }
    if(game[20]==0){
        game[20] = 6;
    }else if((game[20]==otherReg||game[20]==otherKing)&&game[25]==0){
        game[25] = 6;
    }
}else if(place=='e2c'&&game[17]==7){
    if(game[12]==0){
        game[12] = 6;
    }else if((game[12]==otherReg||game[12]==otherKing)&&game[8]==0){
        game[8] = 6;
    }
    if(game[13]==0){    
        game[13] = 6;
    }else if((game[13]==otherReg||game[13]==otherKing)&&game[10]==0){
        game[10] = 6;
    }
    if(game[20]==0){
        game[20] = 6;
    }else if((game[20]==otherReg||game[20]==otherKing)&&game[24]==0){
        game[24] = 6;
    }
    if(game[21]==0){
        game[21] = 6;
    }else if((game[21]==otherReg||game[21]==otherKing)&&game[26]==0){
        game[26] = 6;
    }
}else if(place=='e3c'&&game[18]==7){
    if(game[13]==0){
        game[13] = 6;
    }else if((game[13]==otherReg||game[13]==otherKing)&&game[9]==0){
        game[9] = 6;
    }
    if(game[14]==0){    
        game[14] = 6;
    }else if((game[14]==otherReg||game[14]==otherKing)&&game[11]==0){
        game[11] = 6;
    }
    if(game[21]==0){
        game[21] = 6;
    }else if((game[21]==otherReg||game[21]==otherKing)&&game[25]==0){
        game[25] = 6;
    }
    if(game[22]==0){
        game[22] = 6;
    }else if((game[22]==otherReg||game[22]==otherKing)&&game[27]==0){
        game[27] = 6;
    }
}else if(place=='e4c'&&game[19]==7){
    if(game[14]==0){
        game[14] = 6;
    }else if((game[14]==otherReg||game[14]==otherKing)&&game[10]==0){
        game[10] = 6;
    }
    if(game[15]==0){    
        game[15] = 6;
    }
    if(game[22]==0){
        game[22] = 6;
    }else if((game[22]==otherReg||game[22]==otherKing)&&game[26]==0){
        game[26] = 6;
    }
    if(game[23]==0){
        game[23] = 6;
    }
}else if(place=='f1c'&&game[20]==5){
    if(game[24]==0){
        game[24] = 6;
    }
    if(game[25]==0){
        game[25] = 6;
    }else if((game[25]==otherReg||game[25]==otherKing)&&game[29]==0){
        game[29] = 6;
    }
}else if(place=='f2c'&&game[21]==5){
    if(game[25]==0){
        game[25] = 6;
    }else if((game[25]==otherReg||game[25]==otherKing)&&game[28]==0){
        game[28] = 6;
    }
    if(game[26]==0){    
        game[26] = 6;
    }else if((game[26]==otherReg||game[26]==otherKing)&&game[30]==0){
        game[30] = 6;
    }
}else if(place=='f3c'&&game[22]==5){
    if(game[26]==0){
        game[26] = 6;
    }else if((game[26]==otherReg||game[26]==otherKing)&&game[29]==0){
        game[29] = 6;
    }
    if(game[27]==0){    
        game[27] = 6;
    }else if((game[27]==otherReg||game[27]==otherKing)&&game[31]==0){
        game[31] = 6;
    }
}else if(place=='f4c'&&game[23]==5){
    if(game[27]==0){
        game[27] = 6;
    }else if((game[27]==otherReg||game[27]==otherKing)&&game[30]==0){
        game[30] = 6;
    }
}else if(place=='f1c'&&game[20]==7){
    if(game[16]==0){
        game[16] = 6;
    }
    if(game[17]==0){    
        game[17] = 6;
    }else if((game[17]==otherReg||game[17]==otherKing)&&game[13]==0){
        game[13] = 6;
    }
    if(game[24]==0){
        game[24] = 6;
    }
    if(game[25]==0){
        game[25] = 6;
    }else if((game[25]==otherReg||game[25]==otherKing)&&game[29]==0){
        game[29] = 6;
    }
}else if(place=='f2c'&&game[21]==7){
    if(game[17]==0){
        game[17] = 6;
    }else if((game[17]==otherReg||game[17]==otherKing)&&game[12]==0){
        game[12] = 6;
    }
    if(game[18]==0){    
        game[18] = 6;
    }else if((game[18]==otherReg||game[18]==otherKing)&&game[14]==0){
        game[14] = 6;
    }
    if(game[25]==0){
        game[25] = 6;
    }else if((game[25]==otherReg||game[25]==otherKing)&&game[28]==0){
        game[28] = 6;
    }
    if(game[26]==0){    
        game[26] = 6;
    }else if((game[26]==otherReg||game[26]==otherKing)&&game[30]==0){
        game[30] = 6;
    }
}else if(place=='f3c'&&game[22]==7){
    if(game[18]==0){
        game[18] = 6;
    }else if((game[18]==otherReg||game[18]==otherKing)&&game[13]==0){
        game[13] = 6;
    }
    if(game[19]==0){    
        game[19] = 6;
    }else if((game[19]==otherReg||game[19]==otherKing)&&game[15]==0){
        game[15] = 6;
    }
    if(game[26]==0){
        game[26] = 6;
    }else if((game[26]==otherReg||game[26]==otherKing)&&game[29]==0){
        game[29] = 6;
    }
    if(game[27]==0){    
        game[27] = 6;
    }else if((game[27]==otherReg||game[27]==otherKing)&&game[31]==0){
        game[31] = 6;
    }
}else if(place=='f4c'&&game[23]==7){
    if(game[19]==0){
        game[19] = 6;
    }else if((game[19]==otherReg||game[19]==otherKing)&&game[14]==0){
        game[14] = 6;
    }
    if(game[27]==0){
        game[27] = 6;
    }else if((game[27]==otherReg||game[27]==otherKing)&&game[30]==0){
        game[30] = 6;
    }
}else if(place=='g1c'&&game[24]==5){
    if(game[28]==0){
        game[28] = 6;
    }
}else if(place=='g2c'&&game[25]==5){
    if(game[28]==0){
        game[28] = 6;
    }
    if(game[29]==0){
        game[29] = 6;
    }
}else if(place=='g3c'&&game[26]==5){
    if(game[29]==0){
        game[29] = 6;
    }
    if(game[30]==0){
        game[30] = 6;
    }
}else if(place=='g4c'&&game[27]==5){
    if(game[30]==0){
        game[30] = 6;
    }
    if(game[31]==0){
        game[31] = 6;
    }
}else if(place=='g1c'&&game[24]==7){
    if(game[20]==0){
        game[20] = 6;
    }else if((game[20]==otherReg||game[20]==otherKing)&&game[17]==0){
        game[17] = 6;
    }
    if(game[28]==0){
        game[28] = 6;
    }
}else if(place=='g2c'&&game[25]==7){
    if(game[20]==0){
        game[20] = 6;
    }else if((game[20]==otherReg||game[20]==otherKing)&&game[16]==0){
        game[16] = 6;
    }
    if(game[21]==0){    
        game[21] = 6;
    }else if((game[21]==otherReg||game[21]==otherKing)&&game[18]==0){
        game[18] = 6;
    }
    if(game[28]==0){
        game[28] = 6;
    }
    if(game[29]==0){
        game[29] = 6;
    }
}else if(place=='g3c'&&game[26]==7){
    if(game[21]==0){
        game[21] = 6;
    }else if((game[21]==otherReg||game[21]==otherKing)&&game[17]==0){
        game[17] = 6;
    }
    if(game[22]==0){    
        game[22] = 6;
    }else if((game[22]==otherReg||game[22]==otherKing)&&game[19]==0){
        game[19] = 6;
    }
    if(game[29]==0){
        game[29] = 6;
    }
    if(game[30]==0){
        game[30] = 6;
    }
}else if(place=='g4c'&&game[27]==7){
    if(game[22]==0){
        game[22] = 6;
    }else if((game[22]==otherReg||game[22]==otherKing)&&game[18]==0){
        game[18] = 6;
    }
    if(game[23]==0){
        game[23] = 6;
    }
    if(game[30]==0){
        game[30] = 6;
    }
    if(game[31]==0){
        game[31] = 6;
    }
}else if(place=='h1c'&&game[28]==7){
    if(game[24]==0){
        game[24] = 6;
    }
    if(game[25]==0){
        game[25] = 6;
    }else if((game[25]==otherReg||game[25]==otherKing)&&game[21]==0){
        game[21] = 6;
    }
}else if(place=='h2c'&&game[29]==7){
    if(game[25]==0){
        game[25] = 6;
    }else if((game[25]==otherReg||game[25]==otherKing)&&game[20]==0){
        game[20] = 6;
    }
    if(game[26]==0){    
        game[26] = 6;
    }else if((game[26]==otherReg||game[26]==otherKing)&&game[22]==0){
        game[22] = 6;
    }
}else if(place=='h3c'&&game[30]==7){
    if(game[26]==0){
        game[26] = 6;
    }else if((game[26]==otherReg||game[26]==otherKing)&&game[21]==0){
        game[21] = 6;
    }
    if(game[27]==0){    
        game[27] = 6;
    }else if((game[27]==otherReg||game[27]==otherKing)&&game[23]==0){
        game[23] = 6;
    }
}else if(place=='h4c'&&game[31]==7){
    if(game[27]==0){
        game[27] = 6;
    }else if((game[27]==otherReg||game[27]==otherKing)&&game[22]==0){
        game[22] = 6;
    }
}
}

function colorUpdate(){
    totalGreen = 0;
    totalWhite = 0;
        for(let i = 0;i<game.length;i++){
            if(game[i]==0){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '0';
                temp.innerHTML = '';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'black';
                temp.style.stroke = 'black';
            }else if(game[i]==1){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '0';
                temp.innerHTML = '';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'lightseagreen';
                temp.style.stroke = 'lightseagreen';
                totalGreen++;
            }else if(game[i]==2){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '0';
                temp.innerHTML = '';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'white';
                temp.style.stroke = 'white';
                totalWhite++;
            }else if(game[i]==3){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '1';
                temp.innerHTML = 'K';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'lightseagreen';
                temp.style.stroke = 'lightseagreen';
                totalGreen++;
            }else if(game[i]==4){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '1';
                temp.innerHTML = 'K';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'white';
                temp.style.stroke = 'white';
                totalWhite++;
            }else if(game[i]==5){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '0';
                temp.innerHTML = '';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'red';
                temp.style.stroke = 'red';
            }else if(game[i]==6){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '0';
                temp.innerHTML = '';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'orange';
                temp.style.stroke = 'orange';
            }else if(game[i]==7){
                temp = toHTML(gameKey[i].concat('k'));
                temp.style.opacity = '1';
                temp.innerHTML = 'K';
                temp = toHTML(gameKey[i]);
                temp.style.fill = 'red';
                temp.style.stroke = 'red';
            }
        }
    if(totalGreen==0||totalWhite==0){
        temp = toHTML('resetButton');
        temp.style.opacity = 1;
        temp = toHTML('winText');
        if(totalGreen==0){
            temp.innerHTML = 'User wins! Click the button to reset.';
        }else if(totalWhite==0){
            temp.innerHTML = 'CPU wins! Click the button to reset.';
        }
    }
}

function toHTML(name){
    return document.getElementById(name);
}
function computerPlay(){
    totalCPU = 0;
    userPlayed = false;
    for(let i = 0; i < game.length;i++){
        if(game[i]==1||game[i]==3){
            totalCPU++;
        }
    }
    random = Math.floor((Math.random()*(totalCPU)));
    totalCPU = 0;
    for(let i =0; i < game.length;i++){
        if(game[i]==1||game[i]==3){
            if(totalCPU==random){
                toMoveCPU = gameKey[i];
                totalCPU++;
                if(game[i]==1){
                    game[i]=5;
                }else{
                    game[i]=7;
                }
            }else{
                totalCPU++;
            }
        }
    }
    posibleMovesCPU(toMoveCPU);
    totalCPU=0;
    for(let i = 0; i < game.length;i++){
        if(game[i]==6){
            totalCPU++;
        }
    }
    if(totalCPU==0){
        for(let i = 0; i < game.length;i++){
            if(game[i]==5){
                game[i]=1;
            }else if(game[1]==7){
                game[i]=3;
            }
        }
        computerPlay();
    }else{
        if(totalCPU==1){
            random = Math.floor(Math.random());
        }else if(totalCPU==2){
            random = Math.floor((Math.random()*(totalCPU)));
        }else{
            random = Math.floor((Math.random()*(totalCPU)));
        }
    totalCPU=0;
    for(let i =0; i < game.length;i++){
        if(game[i]==6){
            if(totalCPU==random){
                toMoveCPU = gameKey[i];
                totalCPU++;
            }else{
                totalCPU++;
            }
        }
    }
    moveCPU(toMoveCPU);
    unselectCPU();
    colorUpdate();
}
}

function reset(){
    game = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
    ]
    colorUpdate();
    temp = toHTML('resetButton');
    temp.style.opacity = 0;
    temp = toHTML('winText');
    temp.innerHTML = 'Click a white cherker to start the game.';
}