// my solution
function tournamentWinner(competitons, results) {
  let winners = {},
    finalWinner = ["", 0];

  for (let i = 0; i < competitons.length; i++) {
    const winner = competitons[i][+!results[i]];

    if (winners.hasOwnProperty(winner)) {
      winners[winner] += 1;
    } else {
      winners[winner] = 1;
    }

    if (winners[winner] > finalWinner[1]) {
      finalWinner = [winner, winners[winner]];
    }
  }

  return { finalWinner, winners };
}
