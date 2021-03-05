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
    contactDiv.appendChild(contactImg)
    
    let nameText = document.createTextNode(contact.name.first + " " + contact.name.last)
    contactDiv.appendChild(nameText)
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



// for (let i = 0; i < contacts.length; i++){
//   let newDiv = document.createElement("div");
//   newDiv.id = "contact"+i;
//   addressBook.appendChild(newDiv);

//   let newPicture = contacts[i].picture.thumbnail;
//   let newImage = document.createElement("img");
//   newDiv.appendChild(newImage);
//   newImage.src = newPicture;

//   let firstName = contacts[i].name.first;
//   let lastName = contacts[i].name.last;
//   let nameText = document.createTextNode(firstName + " " + lastName);
//   newDiv.appendChild(nameText);

//   let hiddenDiv = document.createElement("div");
//   hiddenDiv.style.display = 'none';
//   newDiv.appendChild(hiddenDiv);

//   let streetNumber = contacts[i].location.street.number;
//   let streetName = contacts[i].location.street.name;
//   let city = contacts[i].location.city;
//   let state = contacts[i].location.state;
//   let postcode = contacts[i].location.postcode;
//   let cell = contacts[i].cell;

//   let additionalInfo = document.createTextNode(Address: ${streetNumber} ${streetName}, ${city}, ${state}, ${postcode})
//   let cellNumber = document.createTextNode( Cell: ${cell});

//   hiddenDiv.appendChild(additionalInfo);
//   hiddenDiv.appendChild(cellNumber);

//   let currentDiv = document.getElementById("contact"+i);
//   currentDiv.addEventListener('mouseover', function(){
//     console.log("Moused over " + contacts[i].name.first);
//     hiddenDiv.style.display = 'block';
//   })
//   currentDiv.addEventListener('mouseout', function(){
//     console.log("Moused over " + contacts[i].name.first);
//     hiddenDiv.style.display = 'none';
//   })


// }