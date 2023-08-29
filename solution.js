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
      }  else if (command === 'l') {
        // Turn left based on the current direction
        if (direction === 'N') {
          direction = 'W';
        } else if (direction === 'S') {
          direction = 'E';
        } else if (direction === 'E') {
          direction = 'N';
        } else if (direction === 'W') {
          direction = 'S';
        }
      } else if (command === 'r') {
        // Turn right based on the current direction
        if (direction === 'N') {
          direction = 'E';
        } else if (direction === 'S') {
          direction = 'W';
        } else if (direction === 'E') {
          direction = 'S';
        } else if (direction === 'W') {
          direction = 'N';
        }
      } else if (command === 'u') {
        // Turn up based on the current direction
        if (direction === 'N') {
          direction = 'U';
        } else if (direction === 'S') {
          direction = 'D';
        }
      } else if (command === 'd') {
        // Turn down based on the current direction
        if (direction === 'N') {
          direction = 'D';
        } else if (direction === 'S') {
          direction = 'U';
        }
      }

      

    }
  
    return { position, direction };
  }
  
  module.exports = { executeCommands };