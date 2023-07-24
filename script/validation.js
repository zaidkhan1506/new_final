function validate() {
    let startdate = document.getElementById("startdate")
    let enddate = document.getElementById("enddate")
    let taskname = document.getElementById("taskname")
    let status = document.getElementById("status")
    let start_label = document.getElementById("status")
    let end_label = document.getElementById("status")
    let task_label = document.getElementById("status")
    let stat_label = document.getElementById("status")
    let dis_label = document.getElementById("disc")
    let flag = 0;

    if (startdate.value == "") {
        start_label.innerHTML = "*Please enter start date"
        flag--

    } else {
        start_label.innerHTML = ""
        flag++
        console.log("hekki")
    }
    if (enddate.value == "") {
        end_label.innerHTML = "*Please end date"
        flag--
    } else {
        end_label.innerHTML = ""
        flag++
    }
    if (taskname.value == "") {
        taskname.innerHTML = "*Please enter TaskName"
        flag--
    } else {
        task_label.innerHTML = ""
        flag++
    }
    if (status.value == "none") {
        stat_label.innerHTML = "*Please enter label"
        flag--
    } else {
        stat_label
        flag++
    }
    if (startdate.value > enddate.value) {
        dis_label.innerHTML = "*Start date cannot be greater than end date"
        flag--
    } else {
        dis_label.innerHTML = ""
        flag++
    }
    if (flag == 5) {
        data();
    }
}