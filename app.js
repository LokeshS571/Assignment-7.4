// outer function
function outerfunction(myfunction)
{
	myfunction();
}
// inner functon  
function innerfunction()
{
	console.log("Hello World From Inner Function");
}
//a call to innrefunction through outerfunction
outerfunction(innerfunction);

