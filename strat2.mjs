export function move(lastMove) {
    return lastMove === 1 ? 1 : lastMove === -1 ? -1 : 1;
}