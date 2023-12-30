// Random betray

export function move(lastMove, round) {
    // Randomly choose to cooperate (1) or betray (-1)
    const randomMove = Math.random() < 0.5 ? 1 : -1;
    return randomMove;
}