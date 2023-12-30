# Prison Dilemma Simulator

Simulate and experiment with strategies in the classic Iterated Prisoner's Dilemma game using this JavaScript simulator.

## Overview

The simulator allows you to define strategies for two players and observe their interactions over a specified number of rounds in a repeated Prisoner's Dilemma scenario. The outcome of each round is determined based on the players' moves, and scores are calculated accordingly.  

**To cooperate, return 1**      
**To betray, return 0** 

If both players cooperate, each shall receive 5 points. If only 1 cooperates, the one who cooperated will receive 0 points, and the betrayer will receive 3 points. If none cooperate (both betray), then each will receive 1 point.

### Objective
Create a strategy that will come out with the most amount of points after n amount of rounds.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/luckyleck/prison-dilemma-simulator.git
   cd prison-dilemma-simulator

2. **Create your strategy scripts:**

    1. Create a new file in the strategies folder with your strategy name, and be sure to use the .mjs extension to ensure that it will be treated as a module.

    2. Implement your strategies within the move function, considering the opponent's last move and the current round.

3. **Customize the main script:**
    1. Open `simulator.mjs` to set the number of rounds and import your strategy scripts.

    2. Customize the scoring logic in the updateScores method if needed.

4. **Customize the main script:**  
    - run in terminal `node simulator.js`
    - View the scores and moves of each strategy in the console.

## Example
```js
// tit_for_tat.mjs
export function move(lastMove, round) {
    return lastMove === 1 ? 1 : lastMove === -1 ? -1 : 1;
}

// strat2.mjs
export function move(lastMove, round) {
    // Your custom strategy logic here
    // Return 'cooperate' or 'betray'
}

// simulator.mjs
import { move as strat1 } from "./tit_for_tat.mjs";
import { move as strat2 } from "./strat2.mjs";
```

Feel free to experiment with different strategies and parameters to analyze their performance in the Iterated Prisoner's Dilemma.


