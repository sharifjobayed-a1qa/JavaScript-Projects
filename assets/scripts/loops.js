

let container=[];
let container2=[1,2,3,4,5,6,7,8,9,10];
let randNum=Math.round(Math.random()*10);

for(i=0;i<10;i++){
	container.push(i);
}
console.log(container);


container=[];
container2.forEach((i)=>{
	container.push(i*3);
});
console.log(container);


while(randNum<8){
	console.log(randNum);
	randNum++;
}


do{
	console.log(randNum);
	randNum++;
}while(randNum<14);


