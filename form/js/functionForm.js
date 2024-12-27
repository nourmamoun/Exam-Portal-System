
function validate(fName,lName,email){
    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");

    let onlyLetters = /^[a-zA-Z]+$/;
    let emailrgex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!onlyLetters.test(fName)) {
        fnameError.style.display = "block";
        isValid = false;
    } else {
        fnameError.style.display = "none";
    }

    if (!onlyLetters.test(lName)) {
        lnameError.style.display = "block";
        isValid = false;
    } else {
        lnameError.style.display = "none";
    }

    if(!emailrgex.test(email)){
        emailError.style.display="block";
        isValid=false;
    }else{
        emailError.style.display="none";
    }

    return isValid;
}