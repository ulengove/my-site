function showFeed() {

  let event =
    EVENTS[gameState.currentEvent];

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>
        ${event.author}
      </h2>

      <p>
        ${event.text}
      </p>

      <button
        onclick="feedGoodChoice()">

        ${event.good}

      </button>

      <button
        onclick="feedBadChoice()">

        ${event.bad}

      </button>

    </div>
  `;
}

function feedGoodChoice() {

  let event =
    EVENTS[gameState.currentEvent];

  gameState.understanding += 5;

  if (
    CHARACTERS[event.target]
  ) {

    CHARACTERS[event.target].trust += 10;

    if (
    !gameState.unlockedMessages.includes(
        event.target
    )
    ) {

    gameState.unlockedMessages.push(
        event.target
    );

    }

  }

  gameState.currentEvent++;

  nextEvent();
}

function feedBadChoice() {

  let event =
    EVENTS[gameState.currentEvent];

  gameState.understanding -= 5;

  if (
    CHARACTERS[event.target]
  ) {

    CHARACTERS[event.target].trust -= 10;

  }

  gameState.currentEvent++;

  nextEvent();
}

function nextEvent() {

  if (
    gameState.currentEvent >=
    EVENTS.length
  ) {

    showFeedComplete();

    return;
  }

  showFeed();
}

function showFeedComplete() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>📰 Feed Complete</h1>

      <p>
        You have completed all available
        community events.
      </p>

      <p>
        New opportunities are available.
      </p>

      <button onclick="showProjects()">
        🚀 Open Projects
      </button>

    </div>
  `;
}