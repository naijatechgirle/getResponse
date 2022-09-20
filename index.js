// require('dotenv').config()
// console.log(process.env)
let showDiv = document.getElementById('showDiv');

let myFunction =()=> {
  
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic YXBpOmtleS01MDYwNmIxODViMWU2YjlhNzNjODQyZmNhYjM4NjQ2MQ==");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.mailgun.net/v3/app.myxalary.com/events", requestOptions)
  .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
}
showDiv.addEventListener("click", myFunction);