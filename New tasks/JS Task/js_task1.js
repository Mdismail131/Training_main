arr = []; 
chk = [];
function display() {
    var html="";
    for (var i = 0 ; i < arr.length ; i++ ) {
        html +='<li class="row"><div class="col-6 my-auto"><input class="mx-2" type="checkbox" onclick="to_do_ckeck('+i+')" data-check='+i+'>'+arr[i]+'</div><div class="col-6"><input class="my-auto" type="text" id="input'+i+'" ><a href="javascript:void(0)" onclick="myfunction_edit('+i+')" class="edit btn btn-success px-3 mx-2 mt-1">Edit</a><a style="display:none;" href="javascript:void(0)" onclick="myfunction_update('+i+')" class="update btn btn-success px-3 mx-2 mt-1">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+')" class="delete btn px-3 mt-1 btn-danger">Delete</a></div></li>';
    }
    document.getElementById("to-do-list").innerHTML = html;
    console.log(arr);
}
function display_chk() {
    var html="";
    for (var i = 0 ; i < chk.length ; i++ ) {
        html +='<li class="row"><div class="col-6 my-auto"><input class="mx-2" checked type="checkbox" onclick="to_do_unckeck('+i+')" data-check='+i+'>'+chk[i]+'</div><div class="col-6"><input class="my-auto" type="text" id="input_chk'+i+'" ><a href="javascript:void(0)" onclick="mychk_edit('+i+')" class="edit_chk btn btn-success px-3 mx-2 mt-1">Edit</a><a style="display:none;" href="javascript:void(0)" onclick="mychk_update('+i+')" class="update_chk btn btn-success px-3 mx-2 mt-1">Edit</a><a href="javascript:void(0)" onclick="mychk_delete('+i+')" class="delete_chk btn px-3 mt-1 btn-danger">Delete</a></div></li>';
    }
    document.getElementById("completed-task-list").innerHTML = html;
    console.log(chk);
}
function myfunction() {
    if (document.getElementById("task_name").value == "") {
        alert("Please Insert Task Name");
    } else {
        arr.push(document.getElementById("task_name").value);
        document.getElementById("task_name").value = "";
        display();
    }    
}
function myfunction_delete(id) {
    for (var i = 0 ; i < arr.length ; i++ ) {
        if (id == i){
            arr.splice(i,1);
            break;
        }
    }
    display();
}
function myfunction_edit(id) {
    for (var i = 0 ; i < arr.length ; i++ ) {
        if (id == i){
            document.getElementById('input'+id+'').value = arr[i];
            document.getElementsByClassName('edit')[i].style.display = 'none';
            document.getElementsByClassName('update')[i].style.display = 'inline-block';
            break;
        }
    }
}
function myfunction_update(id) {
    for (var i = 0 ; i < arr.length ; i++ ) {
        if (id == i){
            arr[i]  = document.getElementById('input'+id+'').value;
            document.getElementsByClassName('edit')[i].style.display = 'inline-block';
            document.getElementsByClassName('update')[i].style.display = 'none';
            break;
        }
    }
    display();
}
function to_do_ckeck(id) {
        chk.push(arr[id]);
        arr.splice(id,1);
        display();
        display_chk();
}
function mychk_edit(id) {
    for (var i = 0 ; i < chk.length ; i++ ) {
        if (id == i){
            document.getElementById('input_chk'+id+'').value = chk[i];
            document.getElementsByClassName('edit_chk')[i].style.display = 'none';
            document.getElementsByClassName('update_chk')[i].style.display = 'inline-block';
            break;
        }
    }
}
function mychk_delete(id) {
    for (var i = 0 ; i < chk.length ; i++ ) {
        if (id == i){
            chk.splice(i,1);
            break;
        }
    }
    display_chk();
}
function mychk_update(id) {
    for (var i = 0 ; i < chk.length ; i++ ) {
        if (id == i){
            chk[i]  = document.getElementById('input_chk'+id+'').value;
            document.getElementsByClassName('edit_chk')[i].style.display = 'inline-block';
            document.getElementsByClassName('update_chk')[i].style.display = 'none';
            break;
        }
    }
    display_chk();
}
function to_do_unckeck(id) {
    arr.push(chk[id]);
    chk.splice(id,1);
    display();
    display_chk();
}