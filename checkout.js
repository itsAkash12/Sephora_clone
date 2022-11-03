

document.querySelector("#itsEntry").addEventListener("submit", entry);

function entry(event){
    event.preventDefault();
    let acc=document.querySelector("#acc").value;
    let cvv=document.querySelector("#acc").value;
    

    if(acc=="123456789" || cvv=="123"){
        alert("OTP Sent Successfully");
    }else{
        alert("Please Enter Valid Card Details")
    }
}

document.querySelector("#itsOtp").addEventListener("submit", otp);

function otp(event){
    event.preventDefault();
    let otp=document.querySelector("#otp").value;
    let cvv=document.querySelector("#acc").value;
    

    if(otp=="12345"){
        alert("Hurray! Order Placed");
        window.location.href="index.html"
    }else{
        alert("Enter Valid OTP");
    }
}