

let set1=new Set([`A dummy text`,12,false,345.54]);
console.log(set1);

set1.add(345);
console.log(set1.has(false));
console.log(set1);

set1.delete(345);
console.dir(set1);

/*set1.clear();
console.dir(set1);*/