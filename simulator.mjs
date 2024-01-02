import { move as strat1 } from "./strategies/tit_for_tat.mjs";
import { move as strat2 } from "./strategies/strat1.mjs";

const COOPERATE = 5;
const DEFECT = 3;
const BOTH_DEFECT = 1;

class Simulator {
    constructor(rounds, strat1, strat2) {
        this.rounds = rounds
        this.strat1 = strat1
        this.strat2 = strat2
        this.strat1Score = 0;
        this.strat2Score = 0;
        this.strat1Moves = [];
        this.strat2Moves = [];
    }

    run() {
        let strat1LastMove = null;
        let strat2LastMove = null;
        let i = 0;
        while (i < this.rounds) {
            const result1 = this.makeMove(this.strat1, strat2LastMove, i);
            const result2 = this.makeMove(this.strat2, strat1LastMove, i);

            strat1LastMove = result1;
            strat2LastMove = result2;
            this.strat1Moves.push(result1);
            this.strat2Moves.push(result2);

            this.updateScores(result1, result2);
            i+= 1;
        }

        console.log('Finished running game')
        this.printScores(this.strat1Score, this.strat2Score);
    }

    updateScores(result1, result2) {
        if ([result1, result2].every(val => val === 1)) {
            this.strat1Score += COOPERATE;
            this.strat2Score += COOPERATE;
        } else if([result1, result2].every(val => val === -1)) {
            this.strat1Score += BOTH_DEFECT;
            this.strat2Score += BOTH_DEFECT;
        } else if(result1 === -1 && result2 === 1) {
            this.strat1Score += DEFECT;
        } else if(result1 === 1 && result2 === -1) {
            this.strat2Score += DEFECT;
        }
    }

    makeMove(strat, lastMove, round) {
        return strat(lastMove, round);
    }

    printScores(score1, score2) { 
        console.log(`Strategy 1 score: ${score1}`);
        console.log(`Strategy 2 score: ${score2}`);
    }

    seeMoves() {
        console.log(this.strat1Moves)
        console.log(this.strat2Moves)
    }
}

const rounds = 200
const game = new Simulator(rounds, strat1, strat2);
game.run();
// game.seeMoves();
