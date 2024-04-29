const { json } = require("express");

let fetchdata = () => {
    let httprequest = new XMLHttpRequest();
    httprequest.open("GET","https://jsonplaceholder.typicode.com/users");
    httprequest.send();
    httprequest.onload=()=>{
        let res= JSON.parse(httprequest.responseText);
        console.log(res);
        displayData();
    };
};

let displayData=()=>{
    let tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    let storedUser=json.parse(localStorage.getItem("users"));
    storedUser.map(
        (user,index)=>
        (tbody,innerHTML += "" `
        
                <tr>
                    <td>${index+1}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address.city}</td>
                </tr>`)
    );
};

fetchdata();

let btn=document.getElementById("btn");
btn.addEventListener("click",() =>{
    
})