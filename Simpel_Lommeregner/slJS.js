




function seven()
{
    document.getElementById("resultDisplay").value += "7";

    console.log("7");


}

function eight()
{

    document.getElementById("resultDisplay").value += "8";
    console.log("8");

}

function nine()
{

    document.getElementById("resultDisplay").value += "9";
    console.log("9");


}

function divide()
{


    document.getElementById("resultDisplay").value += "/";
    console.log("/");

}

function four()
{

    document.getElementById("resultDisplay").value += "4";
    console.log("4");

}

function five()
{

    document.getElementById("resultDisplay").value += "5";
    console.log("5");

}


function six()
{

    document.getElementById("resultDisplay").value += "6";
    console.log("6");


}

function times()
{

    document.getElementById("resultDisplay").value += "*";
    console.log("*");




}

function one()
{

    document.getElementById("resultDisplay").value += "1";
    console.log("1");

}

function two()
{

    document.getElementById("resultDisplay").value += "2";
    console.log("2");


}

function three()
{

    document.getElementById("resultDisplay").value += "3";
    console.log("3");


}

function minus()
{



    document.getElementById("resultDisplay").value += "-";
    console.log("-");

}

//Må ikke hedde clear åbenbart
function clear2()
{


    document.getElementById("resultDisplay").value = "";
    console.log("clear");


}

function zero()
{

    document.getElementById("resultDisplay").value += "0";
    console.log("0");

}

function erase()
{

    document.getElementById("resultDisplay").value = document.getElementById("resultDisplay").value.slice(0, -1);
    console.log("erase");


}

function plus()
{



    document.getElementById("resultDisplay").value += "+";
    console.log("+");

}


function calc()
{

    document.getElementById("resultDisplay").value = eval(document.getElementById("resultDisplay").value);

    console.log("calculate");

}






