fetch("/api/battleresults/winsandlosses")
    .then(response => response.json())
    .then(results => {

        const wins_pTag = document.getElementById("wins");
        const losses_pTag = document.getElementById("losses");

        wins_pTag.textContent = results.wins;
        losses_pTag.textContent = results.losses;
    });