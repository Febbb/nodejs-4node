

$(document).ready(function(){


var socket = io.connect('http://localhost:3010');
    socket.emit('join');
    socket.on('UserOnline',(UserOnline)=>{
        alert(UserOnline);
    })

$('#email').mouseover(function(){
	$('#email').css('width','65%')
	$('#email').css('height','65%')
});


$('#email').mouseout(function(){
	$('#email').css('width','50%')
	$('#email').css('height','50%')
});



$('#profile').mouseover(function(){
	$('#profile').css('width','65%')
	$('#profile').css('height','65%')
});


$('#profile').mouseout(function(){
	$('#profile').css('width','50%')
	$('#profile').css('height','50%')
});


$('#skills').mouseover(function(){
	$('#skills').css('width','65%')
	$('#skills').css('height','65%')
});


$('#skills').mouseout(function(){
	$('#skills').css('width','50%')
	$('#skills').css('height','50%')
});

})

