

const hondaBike={
	brand:"Honda",
	model:"CBR100RR",
	cc:1000,
	wheels:2,
	large:false,

	review:function(){
		console.log(`${this.brand} ${this.model} is a the best bike.`);
	}
}
hondaBike.review();

const toyotaCar={
	brand:"Toyota",
	model:"Carina",
	cc:1500,
	wheels:4,
	large:true,

	review:function(){
		console.log(`${this.brand} ${this.model} is a a good car.`);
	}
}
toyotaCar.review();


// Add properties to an object
toyotaCar.color="White";
toyotaCar.review=function(){
	console.log(`${this.brand} ${this.model} comes into ${this.color} color.`);
}
toyotaCar.review();

// Remove properties of an object
delete toyotaCar.cc;
console.log(toyotaCar.cc);

// Make the object immutable
Object.freeze(hondaBike);
hondaBike.brand="Porshe";
console.log(hondaBike.brand); // Doesn't change the brand

// Other methods
console.log(Object.keys(hondaBike));
console.log(Object.values(hondaBike));
console.log(Object.entries(hondaBike));
console.log(hondaBike.hasOwnProperty(`cc`));

