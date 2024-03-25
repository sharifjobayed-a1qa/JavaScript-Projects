

// Parent class
class Vehicle{
	constructor(brand,model,doors,wheels){
		this.brand=brand;
		this.model=model;
		this.doors=doors;
		this.wheels=wheels;

		this.vehicleStarts=function(){console.log(`${this.brand} ${this.model} starts.`)}
	}
}

let Toyota=new Vehicle(`Toyota`,`Corolla`,4,4);
Toyota.vehicleStarts();




// Child class
class Bike extends Vehicle{
	constructor(brand,model,doors,wheels){
		super(brand,model,doors,wheels);
		super.vehicleStarts;
	}
}

let Honda=new Bike(`Honda`,`CBR`,false,2);
Honda.vehicleStarts();