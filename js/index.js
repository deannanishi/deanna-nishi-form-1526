// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let fullname = document.getElementById("fullname");
let message = document.getElementById("message");


// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {
    
    console.clear();
    
    // save data and errors:
    let errors = [];
    let data = {};
    
    // validation code
    if (fullname.value === "") {
        errors.push("Please enter your Full Name!");
    } else {
        data.fullnameProp = fullname.value;
    }
    
    if (email.value === "") {
        errors.push("Please enter your email!");
    } else {
        data.emailProp = email.value;
    }
    
    if (message.value === "") {
        errors.push("Please enter your message!");
    } else {
        data.messageProp = message.value;
    }
    
    // test printings
    //console.log("Errors", errors);
    //console.log("Data Object", data);
    
    // create the feedback
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(`Full Name: ${data.fullnameProp},  Email: ${data.emailProp},  Message: ${data.messageProp}`);
    } else {
        console.log(`Errors: ${errors}`);
    } 
}

// registering event
btn.addEventListener("click", validateForm);