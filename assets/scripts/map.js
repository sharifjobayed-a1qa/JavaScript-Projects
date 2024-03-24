

let map1=new Map(
	[
		[`apple`,400],
		[`orange`,200]
	]
);

map1.set(`Laptop`,`HP`);
console.log(map1.get(`Laptop`));
console.log(map1.size);

map1.delete(`Laptop`);
console.log(map1.size);

map1.clear();
console.log(map1.size);