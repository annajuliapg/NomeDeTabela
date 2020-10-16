function findTabela() {

    var result = document.querySelector('#resultado');

    document.getElementById("resultado").innerHTML = '';

    var textArea = document.getElementById('texto').value;

    var lines = textArea.split(/from\s+|join\s+/i);

    lines.splice(0,1);

    for (var i = 0; i < lines.length; i++){

        for (var j = 0; j < lines[i].length; j++){
            if(lines[i][j] == " "){
                lines[i] = lines[i].substr(0, j);
                break;
            }
            else if(lines[i].substr(j,5) == "#(lf)"){
                lines[i] = lines[i].substr(0, j);
                break;
            }
        }
    }

    lines = removeDuplicate(lines);

    for (item of lines){
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);

        itemElement.appendChild(itemText);
        result.appendChild(itemElement);
    }

}

function removeDuplicate (arr){
    var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
    return novaArr;
}

function limpar() {
    document.getElementById('texto').value = '';
    document.getElementById("resultado").innerHTML = '';
}