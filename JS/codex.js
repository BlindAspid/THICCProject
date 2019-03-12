var button = document.getElementById('btn');
var myP = document.getElementById('text');
var click = true;

function getText(){
    if(click == true){
        button.textContent = 'ON';
        myP.textContent = "Ur mom gay";
        click = false;
    }else{
        button.textContent = 'OFF';
        myP.textContent = '';
        click = true;
    }
}
