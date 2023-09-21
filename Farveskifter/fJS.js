

function changeColor()
{

    var dropdown = document.getElementById("farver");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;



    document.getElementById("idFContainer").style.background = selectedValue;

    console.log(selectedValue);
    console.log("changeColor");


}