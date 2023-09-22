

function calcValuta() {

    var userInput = document.getElementById("userInput").value;
    var output = document.getElementById("userOutput").value;
    var valuta = document.getElementById("valuta").value;
    var valuta2 = document.getElementById("valuta2").value;

    
    if (valuta == "DKK" && valuta2 == "USD")
    {
        document.getElementById("userOutput").value = userInput * 0.14;
        console.log("DKK to USD");
    }

    if (valuta == "DKK" && valuta2 == "EUR")
    {
        document.getElementById("userOutput").value = userInput * 0.13;
        console.log("DKK to EUR");
    }
    
    if (valuta == "USD" && valuta2 == "EUR")
    {
        document.getElementById("userOutput").value = userInput * 0.94;
        console.log("USD to EUR");
    }

    if (valuta == "USD" && valuta2 == "DKK")
    {
        document.getElementById("userOutput").value = userInput * 7.00;
        console.log("USD to DKK");
    }

    if (valuta == "EUR" && valuta2 == "USD")
    {
        document.getElementById("userOutput").value = userInput * 1.06;
        console.log("EUR to USD");
    }

    if (valuta == "EUR" && valuta2 == "DKK")
    {
        document.getElementById("userOutput").value = userInput * 7.46;
        console.log("EUR to DKK");
    }
    
    

}