const Message = require('./message.js');
const Command = require('./command.js');



class Rover {
  constructor(position) {
    this.position = position,
      this.mode = 'NORMAL',
      this.generatorWatts = 110
  }

  receiveMessage(message) {
    let response = {
      message: message.name,
      results: []
    };



    for (let i = 0; i < message.commands.length; i++) {

      if (message.commands[i].commandType === 'STATUS_CHECK') {
        response.results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
          }
        })


      }
      if (message.commands[i].commandType === 'MODE_CHANGE') {
          response.results.push({
            completed: true,
          })
          this.mode = message.commands[i].value
        }

        
        if (message.commands[i].commandType === 'MOVE') {
          if (this.mode === 'NORMAL') {
            response.results.push({
              completed: true,
            })
          this.position= message.commands[i].value
          }
          if (this.mode === 'LOW_POWER') {
            response.results.push({
              completed: false,
            })
          }
      }
    }
    return response;

  }


}


module.exports = Rover;
