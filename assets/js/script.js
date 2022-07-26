
// This script creates a randomly generated password based on user selected criteria
// Mac Greene July 23, 2022

var btn = document.getElementById("button");
btn.addEventListener("click", createPassword);

function createPassword() {
var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
var alphabetUpper = alphabetLower.toUpperCase()  //create uppcase string
var numbers = "123456789"
var chars = "" // create empty string for appending selected characters
var input = prompt("Enter Desired Length of Password, between 8 to 128: ") //todo data validation
var charInput = false;

// todo improve data validation so that cancel does not need to be pushed twice on initial dialog box

while (parseInt(input) < 8 || parseInt(input) > 128 || isNaN(parseInt(input))) {
    input = prompt("Error, Please Enter Length of Password between 8 to 128: ")
    if (input === null) break ;  //break if cancel is selected
}

if (input !== null) {
    var upper = confirm("Include Uppercase? Confirm for Yes, Cancel for No.")
    var lower = confirm("Include Lowercase? Confirm for Yes, Cancel for No.")
    var numerics= confirm("Include Numerics? Confirm for Yes, Cancel for No.")
    // var special= confirm("Include Special Characters?")

    if (upper) {
        chars = chars + alphabetUpper;
        charInput = true;
    } if (lower) {
        chars = chars + alphabetLower ;
        charInput = true;
    } if (numerics) {
        chars = chars + numbers;
        charInput = true;
    } 

    if (charInput) {
        var password = "" 
        var index = 0

        for (var i = 0; i < Number(input); i++)
        {
            index = Math.floor(Math.random() * chars.length)
            password = password +  chars[index]
            console.log(chars[index])
        }
        console.log(password)

        var div = document.getElementById("passwordElement");
        var textElement = document.createElement("h2");
        textElement.textContent = password;
        div.appendChild(textElement);   
        // alert("Password Created Successfully!")

    } else {
        alert("No Criteria Selected");
    }
    
} else {
    alert("Canceled");
} 
}
