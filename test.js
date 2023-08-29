const { executeCommands } = require('./solution');


describe('Chandrayaan 3 Lunar Craft', () => {
  test('should move the spacecraft forward', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['f'];

    const finalState = executeCommands(initialPosition, initialDirection, commands);

    expect(finalState.position).toEqual([0, 1, 0]);
    expect(finalState.direction).toBe('N');
  });

  test('should move the spacecraft backward', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['b'];

    const finalState = executeCommands(initialPosition, initialDirection, commands);

    expect(finalState.position).toEqual([0, -1, 0]);
    expect(finalState.direction).toBe('N');
  });

  
  test('should turn the spacecraft left', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['l'];

    const finalState = executeCommands(initialPosition, initialDirection, commands);

    expect(finalState.position).toEqual([0, 0, 0]);
    expect(finalState.direction).toBe('W');
  });

  test('should turn the spacecraft right', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['r'];

    const finalState = executeCommands(initialPosition, initialDirection, commands);

    expect(finalState.position).toEqual([0, 0, 0]);
    expect(finalState.direction).toBe('E');
  });

  test('should turn the spacecraft up', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['u'];

    const finalState = executeCommands(initialPosition, initialDirection, commands);

    expect(finalState.position).toEqual([0, 0, 0]);
    expect(finalState.direction).toBe('U');
  });

  test('should turn the spacecraft down', () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = 'N';
    const commands = ['d'];

    const finalState = executeCommands(initialPosition, initialDirection, commands);

    expect(finalState.position).toEqual([0, 0, 0]);
    expect(finalState.direction).toBe('D');
  });
  
});
