arr = []; 
chk = [];
function myfunction() {
    if (document.getElementById("task_name").value == "") {
        alert("Please Insert Task Name");
    } else {
        var count = 0;
        arr.push(document.getElementById("task_name").value);
        document.getElementById("task_name").value = "";
        display(count);
    }    
}
function myfunction_delete(id,count) {
    if (count == 0) {
        for (var i = 0 ; i < arr.length ; i++ ) {
            if (id == i){
                arr.splice(i,1);
                break;
            }
        }
    } else {
        for (var i = 0 ; i < chk.length ; i++ ) {
            if (id == i){
                chk.splice(i,1);
                break;
            }
        }
    }
    display(count);
}
function myfunction_edit(id, count) {
    if (count == 0) {
        for (var i = 0 ; i < arr.length ; i++ ) {
            if (id == i){
                document.getElementById('input'+id+'').value = arr[i];
                document.getElementsByClassName('edit')[i].style.display = 'none';
                document.getElementsByClassName('update')[i].style.display = 'inline-block';
                break;
            }
        }
    } else {
        for (var i = 0 ; i < chk.length ; i++ ) {
            if (id == i){
                document.getElementById('input_chk'+id+'').value = chk[i];
                document.getElementsByClassName('edit_chk')[i].style.display = 'none';
                document.getElementsByClassName('update_chk')[i].style.display = 'inline-block';
                break;
            }
        }
    }
}
function myfunction_update(id, count) {
    if (count == 0) {
        for (var i = 0 ; i < arr.length ; i++ ) {
            if (id == i){
                arr[i]  = document.getElementById('input'+id+'').value;
                document.getElementsByClassName('edit')[i].style.display = 'inline-block';
                document.getElementsByClassName('update')[i].style.display = 'none';
                break;
            }
        }
        display(count);
    } else {
        for (var i = 0 ; i < chk.length ; i++ ) {
            if (id == i){
                chk[i]  = document.getElementById('input_chk'+id+'').value;
                document.getElementsByClassName('edit_chk')[i].style.display = 'inline-block';
                document.getElementsByClassName('update_chk')[i].style.display = 'none';
                break;
            }
        }
        display(count);
    }
}
function to_do_ckeck(id, count) {
    if (count == 0) {
        chk.push(arr[id]);
        arr.splice(id,1);
        display(count);
        count++;
    } else {
        arr.push(chk[id]);
        chk.splice(id,1);
        display(count);
        count--;
    }
    display(count);
}
function display(count) {
    var html="";
    if (count == 0) {
        for (var i = 0 ; i < arr.length ; i++ ) {
            var c1= 0;
            html +='<li class="row"><div class="col-6 my-auto"><input class="mx-2" type="checkbox" onclick="to_do_ckeck('+i+','+c1+')" data-check='+i+'>'+arr[i]+'</div><div class="col-6"><input class="my-auto" type="text" id="input'+i+'" ><a href="javascript:void(0)" onclick="myfunction_edit('+i+','+c1+')" class="edit btn btn-success px-3 mx-2 mt-1">Edit</a><a style="display:none;" href="javascript:void(0)" onclick="myfunction_update('+i+','+c1+')" class="update btn btn-success px-3 mx-2 mt-1">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+','+c1+')" class="delete btn px-3 mt-1 btn-danger">Delete</a></div></li>';
        }
        document.getElementById("to-do-list").innerHTML = html;
    } else {
        for (var i = 0 ; i < chk.length ; i++ ) {
            var c1 = 1;
            html +='<li class="row"><div class="col-6 my-auto"><input class="mx-2" checked type="checkbox" onclick="to_do_ckeck('+i+','+c1+')"  data-check='+i+'>'+chk[i]+'</div><div class="col-6"><input class="my-auto" type="text" id="input_chk'+i+'" ><a href="javascript:void(0)" onclick="myfunction_edit('+i+','+c1+')" class="edit_chk btn btn-success px-3 mx-2 mt-1">Edit</a><a style="display:none;" href="javascript:void(0)" onclick="myfunction_update('+i+','+c1+')" class="update_chk btn btn-success px-3 mx-2 mt-1">Edit</a><a href="javascript:void(0)" onclick="myfunction_delete('+i+','+c1+')" class="delete_chk btn px-3 mt-1 btn-danger">Delete</a></div></li>';
        }
        document.getElementById("completed-task-list").innerHTML = html;
    }
}