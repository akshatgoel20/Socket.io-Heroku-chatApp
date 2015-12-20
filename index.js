//Set up express framework
var app = require('express')();

//Set port given by heroku else set default port 3000
app.set('port', (process.env.PORT || 3000));

//Create http server - express 4 no longer supports 
//server creation
var http = require('http').createServer(app);

//Set http server to listen on this port
http.listen(app.get('port'), function(){
	console.log('listening on *:' + app.get('port'));
});

//Attach socket.io to the http server
var io = require('socket.io')(http);

//Set default get path / home path
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//XHR polling doesnt seem to work with heroku :|
//io.set('transports', ['xhr-polling']);

//Socket.io listners
io.sockets.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect',function(){
		console.log('a user disconnected');
	});
	socket.on('chat message',function(msg){
		console.log('message: '+msg);
		io.emit('chat message',msg);
	});
});