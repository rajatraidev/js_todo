let data = [];
function addToList(){
    const count = parseInt(document.getElementById("numberOfRows").value);
	document.getElementById("numberOfRows").value = count + 1;
    const number = parseInt(document.getElementById("numberOfRows").value);
    let input = document.getElementById('todo-input').value;
    let design = '<p id="light_'+number+'" class="list-data"><input type="checkbox" onclick="highLight('+number+')">'+input+'<button onclick="delList('+number+')" class="close-button"><span>&times;</span></button></p>';
    data.push(input);
    document.getElementById("list-data").innerHTML += design;
    document.cookie = "data="+design;
}

show();
function show(){
    let getData = document.cookie;
    let length = data.length;
    let design = '';
    for (let i = 0; i < length; i++) {
        design += '<p id="light_'+i+'" class="list-data"><input type="checkbox" onclick="highLight('+i+')">'+data[i]+'<button onclick="delList('+i+')" class="close-button"><span>&times;</span></button></p>';
    }
}


function delList(index){
    document.getElementById("numberOfRows").value = parseInt(document.getElementById("numberOfRows").value) - 1;
    let list = document.getElementById("list-data");
    let elementToDelete = document.getElementById(`light_${index}`);
    list.removeChild(elementToDelete)
}

function highLight(i){
    let data = document.getElementById('light_'+i).style.fontWeight = 'bold';
}
