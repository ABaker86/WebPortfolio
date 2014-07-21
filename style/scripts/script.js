/**
 * @author Adam
 */

var year = new Date();
document.getElementById('date').innerHTML = year.getFullYear();


var x = document.getElementById("menu-toggle");

x.addEventListener('click', function(){
	var op = document.getElementById('menu');
	if(op.className=="simple-toggle "){
		op.className += 'open';
	}else
	{op.className = "simple-toggle ";}
	
});

