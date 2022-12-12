console.log("Ready to run.")

function CHANGE(hiding, showing){

    console.log("hiding" + hiding + "," + "showing" + showing)

    document.getElementById(`${hiding}`).style.visibility = "hidden"
    document.getElementById(`${showing}`).style.visibility = "visible"

}

