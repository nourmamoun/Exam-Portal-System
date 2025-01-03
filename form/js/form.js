    const openRegisterationBtn = document.getElementById("registeration-btn");
    const registerDataBtn = document.getElementById("registerationData-btn");
    const registerationForm = document.querySelector(".registeration-form");
    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");
    const getFname = document.querySelector("input[name=fname]");
    const getLname = document.querySelector("input[name=lname]");
    const getEmail = document.querySelector("input[name=email]");

    //popup registeration form
    openRegisterationBtn.addEventListener("click",function () {
        registerationForm.style.display = "block";
        document.title="Registeration Form";
    })
    
    //to register students data
    registerDataBtn.addEventListener("click",function (event) {
    
        event.preventDefault();      
         
        if(validate(getFname.value, getLname.value,getEmail.value)){
            fnameError.style.display="none";
            lnameError.style.display="none";
            emailError.style.display="none";
            window.open("/confirmation/confirmationPage.html", "_self");
        }
       
        
    })    

