function executeCommands(initialPosition, initialDirection, commands) {
    let position = initialPosition.slice();
    let direction = initialDirection;
  
    for (const command of commands) {
      if (command === 'f') {
        // Move forward based on the current direction
        if (direction === 'N') {
          position[1]++;
        } else if (direction === 'S') {
          position[1]--;
        } else if (direction === 'E') {
          position[0]++;
        } else if (direction === 'W') {
          position[0]--;
        } else if (direction === 'U') {
          position[2]++;
        } else if (direction === 'D') {
          position[2]--;
        }
      } else if (command === 'b') {
        // Move backward based on the current direction
        if (direction === 'N') {
          position[1]--;
        } else if (direction === 'S') {
          position[1]++;
        } else if (direction === 'E') {
          position[0]--;
        } else if (direction === 'W') {
          position[0]++;
        } else if (direction === 'U') {
          position[2]--;
        } else if (direction === 'D') {
          position[2]++;
        }
      } 
    }
  
    return { position, direction };
  }
  
  module.exports = { executeCommands };
  