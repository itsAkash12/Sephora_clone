document.querySelector("#sheet").addEventListener("submit", myEntries);

dataEntry=JSON.parse(localStorage.getItem("info")) || [];

function myEntries(event){

    event.preventDefault();
    let first=document.querySelector("#first").value;
    let last=document.querySelector("#last").value;
    let email=document.querySelector("#email2").value;
    let password=document.querySelector("#password2").value;
    let number=document.querySelector("#number").value;
    let month=document.querySelector("#month").value;
    let day=document.querySelector("#day").value;
    let pin=document.querySelector("#pin").value;

    let objEntry={

        first:first,
        last:last,
        email:email,
        password:password,
        number:number,
        month:month,
        day:day,
        pin:pin,
    }


    if(objEntry.first=="" || objEntry.last=="" || objEntry.email=="" || objEntry.password=="" || objEntry.month=="" || objEntry.day=="" || objEntry.pin==""){
        alert("Fill all Necessary Fields")
        return;
    }
    else{
        dataEntry.push(objEntry);
        localStorage.setItem("info",JSON.stringify(dataEntry));
        alert("Great! Signup Acomplished");
        window.location.href="index.html";
    }

    
}

