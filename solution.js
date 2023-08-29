function executeCommands(initialPosition, initialDirection, commands) {
    let position = initialPosition.slice();
    let direction = initialDirection;
  
    for (const command of commands) {
      if (command === 'f') {
        // Move forward based on the current direction
        if (direction === 'N') {
          position[1]++; // Move in the positive y direction
        } else if (direction === 'S') {
          position[1]--; // Move in the negative y direction
        } else if (direction === 'E') {
          position[0]++; // Move in the positive x direction
        } else if (direction === 'W') {
          position[0]--; // Move in the negative x direction
        } else if (direction === 'U') {
          position[2]++; // Move in the positive z direction
        } else if (direction === 'D') {
          position[2]--; // Move in the negative z direction
        }
      } else if (command === 'b') {
        // Move backward based on the current direction
        if (direction === 'N') {
          position[1]--; // Move in the negative y direction
        } else if (direction === 'S') {
          position[1]++; // Move in the positive y direction
        } else if (direction === 'E') {
          position[0]--; // Move in the negative x direction
        } else if (direction === 'W') {
          position[0]++; // Move in the positive x direction
        } else if (direction === 'U') {
          position[2]--; // Move in the negative z direction
        } else if (direction === 'D') {
          position[2]++; // Move in the positive z direction
        }
      }
    }
  
    return { position, direction };
  }
  
  module.exports = { executeCommands };
  