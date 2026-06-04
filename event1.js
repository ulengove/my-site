function showEvent1() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Emma 🇬🇧</h2>

      <p>
        I think all Japanese people
        watch anime every day.
      </p>

      <h3>What should you do?</h3>

      <button onclick="wrongAnswer()">
        Agree
      </button>

      <button onclick="goodAnswer()">
        Ask Kenji
      </button>

      <button onclick="wrongAnswer()">
        Ignore
      </button>

    </div>
  `;
}

function goodAnswer() {

  gameState.understanding += 5;

  CHARACTERS.kenji.trust += 10;

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Kenji 🇯🇵</h2>

      <p>
        Actually, I spend most of my time
        building robots and playing football.
      </p>

      <p>
        I watch anime sometimes,
        but it is not my whole life.
      </p>

      <h3>
        +5 Global Understanding
      </h3>

      <button onclick="unlockMap()">
        Continue
      </button>

    </div>
  `;
}

function wrongAnswer() {

  gameState.understanding -= 5;

  CHARACTERS.kenji.trust -= 10;

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Missed Opportunity</h2>

      <p>
        Nobody questioned the stereotype.
      </p>

      <p>
        Global Understanding -5
      </p>

      <button onclick="unlockMap()">
        Continue
      </button>

    </div>
  `;
}

function unlockMap() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>
        Achievement Unlocked
      </h2>

      <h3>
        🌍 First Connection
      </h3>

      <button onclick="showMapUnlocked()">
        Continue
      </button>

    </div>
  `;
}

function showMapUnlocked() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>
        NEW FEATURE
      </h2>

      <h3>
        🌍 World Map Unlocked
      </h3>

      <button onclick="showMap()">
        Open Map
        </button>

    </div>
  `;
}