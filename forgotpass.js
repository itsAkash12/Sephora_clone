document.querySelector("#flip").addEventListener("submit",forgotThis);

function forgotThis(event){
    event.preventDefault();
    let emailIt=document.querySelector("#emailIt").value;

    if(emailIt == ""){

        alert("Email not Found");

    }
    else{
        alert("Reset Password Link is Sent Successfully");
    }
}