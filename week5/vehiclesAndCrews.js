/**
 * 2 classes
 * Class Crew Member
 * title titles of crew member (captain, engineer, driver)
 * name of crew member
 * assignedVehicle: what vehicle a crew member is assigned to in an instance
 * Class Vehicle
 * type of vehicle (ship, bus, train)
 * name of vehicle 
 * assignedCrew array of members on board vehicle
 * 
 * isReady()
 * 
 * 
 * for extra practice: a crew cannot be in more than 1 vehicle at a time
 */

let jobs = {
  'Driver': 'Bus',
  'Pilot': 'Plane',
  'Engineer': 'Train'
}

class CrewMember{
  constructor(name, title){
    this.title = title
    this.name = name
    this.assignedVehicle;
  }
  assignVehicle(vehicle){
    if(!this.assignedVehicle){

      this.assignedVehicle = vehicle.name;
      vehicle.crewOnBoard.push(this.title);

    } else {

      console.log(`${this.name} is already assigned a vehicle`);

    }
  }
}

class Vehicle{
  constructor(name, type){
    this.name = name;
    this.type = type;
    this.crewOnBoard = [];
  }

  isReady(){
    for(let i = 0; i < this.crewOnBoard.length; i++){
      if(jobs[this.crewOnBoard[i]] == this.type){
        console.log(`READY`)
        return true;
      }
    }
  return false
    }

  }


let plane1 = new Vehicle("Big Bertha", "Plane");
let plane2 = new Vehicle("Tiny Tin", "Plane");

let train1 = new Vehicle("Thomas", "Train");
let bus1 = new Vehicle("Big Red", "Bus");

let c1 = new CrewMember("John", "Pilot");
let c2 = new CrewMember("MadMax", "Engineer");


console.log(plane1.isReady()) // false

c1.assignVehicle(plane2)
console.log(plane2.isReady()) // true

c2.assignVehicle(bus1)
console.log(bus1.isReady()) // false