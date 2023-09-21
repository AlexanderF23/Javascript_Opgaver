

var tal = Math.floor(Math.random() * 100) + 1;
//var userInput = document.getElementById("userInput").value;



function gæt()
{


    var userInput = document.getElementById("userInput").value;


    if (userInput > tal)
    {
        document.getElementById("info header").textContent = "Tallet er mindre";
        console.log("Tallet er mindre");
    }

    if (userInput < tal)
    {
        document.getElementById("info header").textContent = "Tallet er større";
        console.log("Tallet er større");
    }

    if (userInput == tal)
    {
        document.getElementById("info header").textContent = "Du har gættet rigtigt!";
        console.log("Du har gættet rigtigt!");


    }




    console.log("gæt");

}