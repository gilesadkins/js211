'use strict'


let createContacts = function(contacts){
  let contactCountText = document.createTextNode(`Number of Contacts : ${contacts.length}`)
  document.getElementById('count').appendChild(contactCountText)
  
  for(let i=0; i < contacts.length; i++){
    let contact = contacts[i];

    //The following code creates a user div and puts it inside my users container in html.
    let contactDiv = document.createElement('div')
    contactDiv.id = "contactDiv";
    document.getElementById("usersContainer").appendChild(contactDiv)

    //then the image and first and last name are inserted onto the page.
    let contactImg = document.createElement('img');
    contactImg.src = contact.picture.thumbnail;
    contactDiv.appendChild(contactImg);
    
    let nameText = document.createTextNode(contact.name.first + " " + contact.name.last);
    contactDiv.appendChild(nameText);

    //Pop up code 
    let popUp = document.createElement('div');
    popUp.style.display = 'none';
    let popUpString = `cell : ${contact.cell} <br> email : ${contact.email}`
    popUp.innerHTML = popUpString;
    contactDiv.appendChild(popUp);

    // Event Listener
    contactDiv.addEventListener('mouseover', function(){
      popUp.style.display = 'block'
    })
    contactDiv.addEventListener('mouseout', function(){
      popUp.style.display = 'none'
    })
  }
};


let getInfo = function(){
  
  let result = fetch("https://randomuser.me/api/?results=10");
  
  let jsonResponse = result.then(function(response){
    return response.json();
  })
  
  jsonResponse.then(function(json){
    let contactArray = json.results;
    createContacts(contactArray);
    console.log('Contacts Array:', json.results);
  })
  
};


document.body.onload = getInfo();



