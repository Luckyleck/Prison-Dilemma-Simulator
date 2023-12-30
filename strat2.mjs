export function move(lastMove) {
    // if (!lastMove) {
    //     return 1;
    // }

    return lastMove === 1 ? 1 : lastMove === -1 ? -1 : 1;
}