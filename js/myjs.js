
function openModal(){
    var obj = document.getElementsByName('idade')[0];
    var value = obj.options[obj.selectedIndex].value;
    
    var botao = document.getElementById("botao");
    botao.setAttribute("data-target", value);
}