export function titForTat(lastMove) {
    return lastMove === 1 ? 1 : lastMove === -1 ? -1 : 1;
}