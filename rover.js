const Message = require('./message.js');
const Command = require('./command.js');



class Rover {
  constructor(position) {
    this.position = position,
      this.mode = 'Normal',
      this.generatorWatts = 110
  }
 
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: message.commands,
      roverStatus:{
        mode: this.mode,
        generatorWatts: this.generatorWatts,
        position: this.position
      }
    }
    
  return response;

    
    
  }
}


module.exports = Rover;
// let rover = new Rover(100);
// let commands = [
//    new Command('MOVE', 4321),
//    new Command('STATUS_CHECK'),
//    new Command('MODE_CHANGE', 'LOW_POWER'),
//    new Command('MOVE', 3579),
//    new Command('STATUS_CHECK')
// ];
// let message = new Message('TA power', commands);
// let response = rover.receiveMessage(message);
// console.log(rover);
// console.log(response);

// console.log(JSON.stringify(response, null, 2));