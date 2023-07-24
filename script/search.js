let search_input = document.getElementById("search_input");
search_input.oninput = function() {
    search_function();
}

function search_function() {
    let table_data = document.getElementById("table1");
    let tr = table_data.querySelectorAll("tr");


    let myvalue = search_input.value.toLowerCase();
    let i;
    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0].innerHTML;
        // var name = tr[i].getElementsByTagName("td")[1].innerHTML;
        // alert(td.innerHTML);

        if (td.toLowerCase().indexOf(myvalue) > -1) {
            tr[i].style.display = "";
        }
        // else if(name.toLowerCase().indexOf(myvalue)>-1){
        //     tr[i].style.display = "";
        // }
        else {
            tr[i].style.display = "none";
        }
    }
}