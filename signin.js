let loginData=JSON.parse(localStorage.getItem("info")) || [];
let secureData=JSON.parse(localStorage.getItem("login")) || [];



document.querySelector("#lift").addEventListener("submit", loginEntries);

function loginEntries(event){

    event.preventDefault();

    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    let objLogin={

        email:email,
        password:password,
        
    }

    let flag=false;
    let sign=document.querySelector("#sign");
        loginData.forEach(function (elem){

            if(elem.email==objLogin.email && elem.password==objLogin.password){
                localStorage.setItem("login",JSON.stringify(secureData));
                sign.innerText=elem.first;
                alert("Successfully Loged In");
                flag=true;
            }
        })
        if(flag==false){
            alert("Wrong Credentials");
        }
}