
var toggl=false;
function takeInnerValue(pram){
	console.log(pram)
	doCompute(pram);
	
	
		 if(!winner()){
			 if(toggl){
			 document.getElementById('turn').innerHTML='<h2> Match Tie</h2>';
			 }
		 }
		checkAllFilled();
	
}
var lightLable='x';
var a;
function doCompute(pram){
	a=lightLable;
	if(document.getElementById(pram).innerHTML == '')
	{
	document.getElementById(pram).innerHTML=a;
	
	if(lightLable=== 'x'){
		lightLable='o';
	}else{
		lightLable='x';
	}
	document.getElementById('turn').innerHTML='<h2>'+lightLable+' Turn </h2>';
	}	

}

function checkAllFilled(){
	for(var i=1;i<10;i++){
		var a=i;
		console.log(document.getElementById(a).innerHTML);
		if(document.getElementById(a+'').innerHTML == ''){
			return false;
		}
	}
	return true;
}
function checkResult(x,y,z){
		/*console.log(document.getElementById(x).innerHTML);
		console.log(document.getElementById(y).innerHTML);
		console.log(document.getElementById(z).innerHTML);*/
		
		if(document.getElementById(x).innerHTML == document.getElementById(y).innerHTML && document.getElementById(y).innerHTML == document.getElementById(z).innerHTML && document.getElementById(z).innerHTML !=''){
			document.getElementById('turn').innerHTML='<h2>'+document.getElementById(x).innerHTML+'WON</h2>';
			toggl=true;
			return true;
		}
		return false;
	}
function winner(){
	if(checkResult(1,2,3) || checkResult(4,5,6) || checkResult(7,8,9) || checkResult(1,4,7) || checkResult(2,5,8) || checkResult(3,6,9) ||
	checkResult(1,5,9) || checkResult(7,5,3) )	
	{
		return true;
	}
	return false;

}
	