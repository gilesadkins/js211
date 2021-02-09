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
  constructor(name, title, assignedVehicle){
    this.title = title
    this.name = name
    this.assignVehicle = assignedVehicle
  }
  assignVehicle(vehicle){
    this.assignedVehicle = vehicle;
    vehicle.assignedCrew.push(this.title);
  }
}

class Vehicle{
  constructor(type, name, ){
    this.type = type;
    this.name = name;
    this.assignedCrew = [];
  }
  isReady(type, title){
    //returns true if vehicle is ready to go
    //ready to go IF there is the correct crew member on board vehicle
  }
}

let plane1 = new Vehicle();
let plane2 = new Vehicle();

let train1 = new Vehicle();
let bus1 = new Vehicle();

let c1 = new CrewMember();
let c2 = new CrewMember();