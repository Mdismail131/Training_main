arr = [];
function myfunction() {
    arr.push(document.getElementById("task_name").value);
    var html="";
    for (var i = 0 ; i < arr.length ; i++ ) {
        // document.getElementById("to-do-list").html = ('<li><input class="mx-2" type="checkbox">'+arr[i]+'<input class="mx-5" type="text" ><a href="javascript:void(0)" onclick="myfunction_edit()" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete()" class="delete btn px-3 py-2 btn-success">Delete</a></li>');
        html +='<li><input class="mx-2" type="checkbox" data-check='+i+'>'+arr[i]+'<input class="mx-5" type="text" id="input" ><a href="javascript:void(0)" onclick="myfunction_edit('+i+')" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+')" class="delete btn px-3 py-2 btn-success">Delete</a></li>';
        
    }
    document.getElementById("to-do-list").innerHTML = html;
    // document.getElementById("to-do-list").innerHTML += ('<li><input class="mx-2" type="checkbox">'+task_name+'<input class="mx-5" type="text" ><a href="javascript:void(0)" onclick="myfunction_edit()" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete()" class="delete btn px-3 py-2 btn-success">Delete</a></li>');
    console.log(arr);
}
function myfunction_delete(id) {
    alert(id);
    for (var i = 0 ; i < arr.length ; i++ ) {
        if (id == i){
            arr.splice(i,1);
            break;
        }
    }
    var html="";
    for (var i = 0 ; i < arr.length ; i++ ) {
        // document.getElementById("to-do-list").html = ('<li><input class="mx-2" type="checkbox">'+arr[i]+'<input class="mx-5" type="text" ><a href="javascript:void(0)" onclick="myfunction_edit()" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete()" class="delete btn px-3 py-2 btn-success">Delete</a></li>');
        html +='<li><input class="mx-2" type="checkbox" data-check='+i+'>'+arr[i]+'<input class="mx-5" type="text" ><a href="javascript:void(0)" onclick="myfunction_edit()" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+')" class="delete btn px-3 py-2 btn-success">Delete</a></li>';
        
    }
    document.getElementById("to-do-list").innerHTML = html;
}
function myfunction_edit(id) {
    alert(id);
    var val = "";
    var html="";
    for (var i = 0 ; i < arr.length ; i++ ) {
        // document.getElementById("to-do-list").html = ('<li><input class="mx-2" type="checkbox">'+arr[i]+'<input class="mx-5" type="text" ><a href="javascript:void(0)" onclick="myfunction_edit()" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete()" class="delete btn px-3 py-2 btn-success">Delete</a></li>');
        html +='<li><input class="mx-2" type="checkbox" data-check='+i+'>'+arr[i]+'<input class="mx-5" type="text" value="';
        if (id == i){
            val= arr[i];
        }
        else{
            val = "";
        }
            html += val+'"><a href="javascript:void(0)" onclick="myfunction_edit()" class="edit btn btn-success px-3 py-2 mx-2">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+')" class="delete btn px-3 py-2 btn-success">Delete</a></li>';
        
    }
    document.getElementById("to-do-list").innerHTML = html;
}