const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    userName: String,
    password: String,
    room:{
        roomId: String,
        roomName: String
    },
}, 
{
    timestamps: true,
    versionKey: false,
  }
);


//messages are pushed to the Rooms collection array
const roomsSchema = new mongoose.Schema({
    roomName: String,
    messages: [{ 
        user: {
            userName: String, 
            userId: String
        }, 
        room: {
            roomName: String, 
            roomId: String
        }, 
        text: String }]
}, 
{
    timestamps: true,
    versionKey: false,
  }
);
const Users = mongoose.model('Users', usersSchema);
const Rooms = mongoose.model('Rooms', roomsSchema);

module.exports = { Users, Rooms };

