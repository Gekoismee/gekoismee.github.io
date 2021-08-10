let optionsButtons = document.getElementById('optionsButtons');
let applyBtn = document.getElementById('applyBtn');

let temp;
let choices=[];
let finalChoices=" ";

function pick(self){
    temp = toHTML(self);
    if(temp.classList.contains('unpicked')){
        temp.classList.remove('unpicked');
        temp.classList.add('picked');
    }else if(temp.classList.contains('picked')){
        temp.classList.remove('picked');
        temp.classList.add('unpicked');
    }
}

function toHTML(name){
    return document.getElementById(name);
}

function setChoices(){
    for(let i = 0; i < 25;i++){
        choices.pop();
    }
    let choice = 'choice';
    for(let i = 1; i <25;i++){
        temp = choice.concat(i);
        let temp2 = toHTML(temp);
        if(temp2.classList.contains('picked')){
            choices.push(i);
        }
    }
    window.localStorage.choices = choices;
    applyBtn.innerHTML = 'Applied!';
    
}

function clearLocal(){
    window.localStorage.choices = null;
}