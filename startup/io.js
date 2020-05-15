const Room = require('../models/room');

module.exports = async io => {
	io.on('connection', client=>{
		console.log('new user connected, client id => ', client.id);
		client.on('getRooms', async ()=>{
			let rooms = await Room.find();
			client.emit('roomList', rooms)
		})
	})	
}