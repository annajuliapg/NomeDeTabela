function findTabela() {

    var result = document.querySelector('#resultado');

    document.getElementById("resultado").innerHTML = '';

    var textArea = document.getElementById('texto').value;

    var lines = textArea.split(/from\s+|join\s+/i);

    lines.splice(0,1);

    for (item of lines){

        for (var i = 0; i < item.length; i++){
            if(item[i] == " "){
                item = item.substr(0, i);
                break;
            }
            else if(item.substr(i,5) == "#(lf)"){
                item = item.substr(0, i);
                break;
            }
        }

        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);

        itemElement.appendChild(itemText);
        result.appendChild(itemElement);
    }
}

function enterPesquisa(e){
    if (e.keyCode == 13) findTabela();
}

function limpar() {
    document.getElementById('texto').value = '';
    document.getElementById("resultado").innerHTML = '';
}
