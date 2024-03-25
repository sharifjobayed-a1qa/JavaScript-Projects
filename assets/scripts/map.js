

let map1=new Map(
	[
		[`apple`,400],
		[`orange`,200],
		[`berry`,500]
	]
);

map1.set(`Laptop`,`HP`);
console.log(map1.get(`Laptop`));
console.log(map1.size);

map1.delete(`Laptop`);
console.log(map1.size);

/* map1.clear();
console.log(map1.size); */

const mapToObject=Object.fromEntries(map1);
console.log(typeof(mapToObject));

const objectToMap=new Map(Object.entries(mapToObject));
console.log(objectToMap);

// Iterate through the Map
const mapIterate=()=>{
	for(let i of map1){
		console.log(map1[i]);
		console.log(i);
	}
}
mapIterate();
