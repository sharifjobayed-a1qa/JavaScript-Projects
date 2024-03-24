

async function asyncJS1(aNum1,aNum2){
	try{
		let result=await (aNum1+aNum2);
		console.log(result);
	}catch(exception){
		new console.error(exception);
	}finally{
		console.log(`Operation ends.`);
	}
}

asyncJS1(23,90);