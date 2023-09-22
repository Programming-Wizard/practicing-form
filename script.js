document.getElementById("confirm-password").addEventListener("input", function () {
    var password = document.getElementById("password").value;
    var confirmPassword = this.value;

    var message = document.getElementById("password-match-message");
    // here rather than printing something we can maybe change the css or maybe show a tooltip
    // to maybe show that they dont match and when they match just update the display status of that tooltip
    // to none 
    // pseudocode for it :
    // IF they match
    // tooltip.style.display = none
    // ELSE
    // tooltip.style.display = block or maybe flex or whatever suits
    if (password === confirmPassword) {
        console.log("they both match")

    } else {
        console.log("they both dont match")
    }
});
