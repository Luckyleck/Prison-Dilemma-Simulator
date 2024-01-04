// always cooperate

export function move() {
    return 1;
}

// always defect

export function move() {
    return -1;
}

// Random betray

export function move(lastMove, round) {
    // Randomly choose to cooperate (1) or betray (-1)
    const randomMove = Math.random() < 0.5 ? 1 : -1;
    return randomMove;
}

// 20% chance of betray

export function move(lastMove, round) {
    // Initially cooperate
    if (round === 0) {
        return 1;
    }

    // Defect occasionally after the initial round
    const randomBetray = Math.random() < 0.2; // 20% chance of betraying
    return randomBetray ? -1 : 1;
}

// tit for tat

export function move(lastMove) {
    return lastMove === 1 ? 1 : lastMove === -1 ? -1 : 1;
}