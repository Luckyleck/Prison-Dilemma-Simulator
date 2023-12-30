export function move(lastMove, round) {
    // Initially cooperate
    if (round === 0) {
        return 1;
    }

    // Defect occasionally after the initial round
    const randomBetray = Math.random() < 0.2; // 20% chance of betraying
    return randomBetray ? -1 : 1;
}