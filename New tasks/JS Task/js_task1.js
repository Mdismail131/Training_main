arr = [];
function display() {
    var html="";
    for (var i = 0 ; i < arr.length ; i++ ) {
        html +='<li><input class="mx-2" type="checkbox" data-check='+i+'>'+arr[i]+'<input class="mx-5" type="text" id="input'+i+'" ><a href="javascript:void(0)" onclick="myfunction_edit('+i+')" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+')" class="delete btn px-3 py-2 btn-success">Delete</a></li>';
    }
    document.getElementById("to-do-list").innerHTML = html;
    document.getElementById("completed-task-list").innerHTML = html;
    console.log(arr);
}
function myfunction() {
    arr.push(document.getElementById("task_name").value);
    document.getElementById("task_name").value = "";
    display();    
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
    var val = "";
    var html="";
    for (var i = 0 ; i < arr.length ; i++ ) {
        if (id == i){
            document.getElementById('input'+id+'').value = arr[i];
            break;
        }
    }
}