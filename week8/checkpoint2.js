'use strict'

// 20pts - 3 new tests, or a write up for the functionality of your app and how you would test it.
// If you do a write up, please be detailed on what functionality you are testing and what the expected results are.


//These arrays are used to assign id numbers, and to reference in console logs.
let personArray = [];
let leaguePlayersArray = [];

//This first Person Class was created just so I could use inputs and create my own array of players within the gui.
//It is not for the assignment parameters. I just wanted to experiment.
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.id = personArray.length + 1;
  }
  //Sign up is a method that allows us to use an input to create a new potential league member.
  //It adds this person to an Array of People.

  signUp(){
    personArray.push(this); 

    //Code below attaches a person to the dom using the person.
    //creates a button with and ID of "signedUp(with the id number at the end to differentiate buttons)".

    let signedUpDiv = document.getElementById('signedUpPlayers');
    let personDiv = document.createElement('div');
    let personButton = document.createElement('button');
    
    personButton.innerHTML = 'Add to league';
    personButton.id = `pb${this.id}`
    personDiv.innerHTML = `Name : ${this.name} <br> Age : ${this.age} <br>`;
    personDiv.id = `pd${this.id}`
    signedUpDiv.appendChild(personDiv);
    personDiv.appendChild(personButton);
    
  }
  //The addToLeagueMethod is used to add a person in to the League.
  //It uses the same idea as the sign up method.
  //This method grants access to the assign team method.

  addToLeague(leaguePlayer){
    leaguePlayersArray.push(leaguePlayer);

    //this code moves the info into the next div and creates two team select buttons.

    let playerDiv = document.createElement('div');
    let blueButton = document.createElement('button');
    let redButton = document.createElement('button');
    blueButton.innerHTML = 'Blue Team';
    redButton.innerHTML = 'Red Team';
    playerDiv.innerHTML = `Name : ${leaguePlayer.name} `;
    playerDiv.appendChild(blueButton);
    playerDiv.appendChild(redButton);
    redButton.id = `redB${leaguePlayer.id}`;
    blueButton.id = `blueB${leaguePlayer.id}`;
    playerDiv.id = `lpd${leaguePlayer.id}`;
    document.getElementById('leaguePlayers').appendChild(playerDiv);

  };
}

class LeaguePlayer extends Person {
  constructor(name, age){
    super(name, age);
    this.id = leaguePlayersArray.length + 1;
    this.assignedTeam;
  }
  //the assign team method takes in the team object as an argument and assigns the player to the corresponding team.

  assignTeam(team){
    if(team.color == 'blue'){
      blueTeam.players.push(this);
      this.assignedTeam = 'blue';
      console.log(blueTeam.players);
    } else {
      redTeam.players.push(this);
      this.assignedTeam = 'red';
      console.log(redTeam.players);
    }
  }
}
//The team class will hold its color value and an array of players.

class Team {
  constructor(color){
    this.color = color;
    this.players = [];
  }
}

let blueTeam = new Team ('blue');
let redTeam = new Team ('red');

      //The code below is comprised of an event listener waiting for the first submit button to be clicked.
      //It has three other nested event listeners waiting for the listener before it to create objects
      //and Buttons. Once a button is created the next event listener will find that specific button 
      //using the id of object as a reference to that specific instance.

let personSubmitButton = document.getElementById('signUpButton');

personSubmitButton.addEventListener('mousedown', function(){
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  if(name != ''){
    if(age != ''){
      //The code below creates a new person and then signs them up for "tryouts" using the signUpMethod.

      let person = new Person(name, age);
      person.signUp()
      console.log(personArray);
      //This button is created specific to the button just created in the .signUp method.

      let button = document.getElementById(`pb${person.id}`)

      //this is when the player trying out is accepted into the league. 
      //The players info will be passed into the League player constructor.

      button.addEventListener('click', function(){
        let leaguePlayer = new LeaguePlayer(person.name, person.age);
        leaguePlayer.addToLeague(leaguePlayer)
        console.log(leaguePlayersArray);
        document.getElementById(`pd${person.id}`).style.display = 'none';
        
        //the same thing is happening here. 
        //Buttons are created and referenced with the id of the object it was created around.

        let blueButton = document.getElementById(`blueB${leaguePlayer.id}`)
        let redButton = document.getElementById(`redB${leaguePlayer.id}`)
        let playerDiv = document.getElementById(`lpd${leaguePlayer.id}`)
      
        //the assignTeam method from the League player class is called.
        //puting the player in teams the array of players.
        //one event listener passes the blue team into the argument. And the other does the red. 

        blueButton.addEventListener('click', function(){
          leaguePlayer.assignTeam(blueTeam);
          console.log(blueTeam);
          playerDiv.style.display = 'none';
          let blueTeamDiv = document.getElementById('blueTeamDiv');
          let nameHolder = document.createElement('p');
          blueTeamDiv.appendChild(nameHolder);
          nameHolder.appendChild(document.createTextNode(leaguePlayer.name));
        })
        redButton.addEventListener('click', function(){
          leaguePlayer.assignTeam(redTeam);
          console.log(redTeam);
          playerDiv.style.display = 'none';
          let redTeamDiv = document.getElementById('redTeamDiv');
          let nameHolder = document.createElement('p');
          redTeamDiv.appendChild(nameHolder);
          nameHolder.appendChild(document.createTextNode(leaguePlayer.name));
          console.log(redTeam.players)
        })
      })
    }
  }
})

//the mouse up event is to clear out the inputs this helps prevent accidental duplicates when creating a person.
personSubmitButton.addEventListener('mouseup', function(){
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
});

/**
 * Test 1 (passed) When the Name and Age inputs are empty you cannot create a person object. 
 * I would test this by saying if both input values are "" it is expected that the personArray length does not change.
 *
 * Test 2 (passed) Test that adding a player to the league creates a new League player. If the button is hit and there is a
 * person in tryouts. The league player array should increase by one. 
 * And the dom should have a new div inside of the leaguePlayers div. 
 * 
 * Test 3 (passed)The team.players array should be updated everytime a player is added. If a player is assigned to a team. 
 * team.players.length should increase by one.
 * 
 * Test 4 (failed) the age input should only work with numbers. If age input is not a number. 
 * A person shouldnt be added to the program.
 * 
 * These tests are important because they ensure that the right data AND the right amount of data is going to the right place.
 */








