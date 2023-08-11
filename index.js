// Add To List
function addToList(){
    let input = document.getElementById('todo-input').value;
    if(input == ''){
        return;
    }
    const count = parseInt(document.getElementById("taskNo").innerHTML);
	const number = document.getElementById("taskNo").innerHTML = count + 1;
    let design = '<div id="light_'+number+'" class="list-data border-box"><div class="w-10"><input type="checkbox" value="1" id="checkbox_'+number+'" class="checkbox" onclick="highLight('+number+')"></div><div class="w-90">'+input+'</div><div class="w-10"><button onclick="delList('+number+')" class="close-button"><span>&times</span></button></div></div>';
    document.getElementById("list-data").innerHTML += design;
    document.getElementById('todo-input').value = '';
}

// Deleting List
function delList(index){
    document.getElementById("taskNo").innerHTML = parseInt(document.getElementById("taskNo").innerHTML) - 1;
    let list = document.getElementById("list-data");
    let elementToDelete = document.getElementById(`light_${index}`);
    list.removeChild(elementToDelete)
}


// Highlighting List Which Is Checked
function highLight(i){
    let data = document.getElementById('light_'+i);
    if(data.style.backgroundColor != ''){
        document.getElementById('light_'+i).style.backgroundColor = '';
       
    }
    else{
        document.getElementById('light_'+i).style.backgroundColor = 'gray';
        document.getElementById('checkbox_'+i).setAttribute('checked', 'checked');
    }
}
