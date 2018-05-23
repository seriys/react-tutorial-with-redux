export const addMove = position => ({
    type: 'ADD_MOVE',
    position
});

export const jumpTo = step => ({
    type: 'JUMP_TO',
    step
});
