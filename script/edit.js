popup = document.getElementById("edit1")

function openpopup(a) {


    popup.classList.add("edit-popup")
    document.getElementById("idx").value = a
    document.getElementById("edit-startdate").value = arr[a].startdate
    document.getElementById("edit-enddate").value = arr[a].enddate
    document.getElementById("edit-status").value = arr[a].status
    document.getElementById("edit-taskname").value = arr[a].taskname



}

function closepopup() {
    let idx = document.getElementById("idx").value;
    arr[idx].startdate = document.getElementById("edit-startdate").value
    arr[idx].enddate = document.getElementById("edit-enddate").value
    arr[idx].status = document.getElementById("edit-status").value
    arr[idx].taskname = document.getElementById("edit-taskname").value


    table1.innerHTML = str;
    popup.classList.remove("edit-popup")

}