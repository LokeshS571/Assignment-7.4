function outerfunction(myfunction)
{
	myfunction();
}
  
function innerfunction()
{
	console.log("Hello World From Inner Function");
}

outerfunction(innerfunction);

