function showStats() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h1>📊 Statistics</h1>

      <p>
        Global Understanding:
        ${gameState.understanding}
      </p>

      <p>
        Rank:
        ${gameState.rank}
      </p>

      <p>
        Discovered Characters:
        ${gameState.discoveredCharacters.length}
      </p>

      <button onclick="showMap()">
        Back
      </button>

    </div>
  `;
}