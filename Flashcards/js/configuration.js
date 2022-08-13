let optionsButtons = document.getElementById('optionsButtons');
let applyBtn = document.getElementById('applyBtn');

let temp;
let choices=[];

function pick(self){
    temp = toHTML(self);
    if(temp.classList.contains('unpicked')){
        temp.classList.remove('unpicked');
        temp.classList.add('picked');
        choices.push(self);
    }else if(temp.classList.contains('picked')){
        temp.classList.remove('picked');
        temp.classList.add('unpicked');
        let a = choices.indexOf(self);
        choices[a] = null;
        if(choices.length-1 > a)
        {
            for(let i = a; i < choices.length-1; i++)
            {
                choices[i] = choices[i+1];
            }
        }
        choices.pop();
    }
}

function toHTML(name){
    return document.getElementById(name);
}

function setChoices(){
    
    window.localStorage.choices = choices;
    applyBtn.innerHTML = 'Applied!';
    
}

function clearLocal(){
    window.localStorage.choices = null;
}