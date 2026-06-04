function showMessages() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>💬 Messages</h1>

      ${gameState.unlockedMessages.includes("kenji")
      ? `
      <button onclick="showKenjiMessages()">
        Kenji 🇯🇵
      </button>
      `
      : ""}

      ${gameState.unlockedMessages.includes("priya")
      ? `
      <button onclick="showPriyaMessages()">
        Priya 🇮🇳
      </button>
      `
      : ""}

      ${gameState.unlockedMessages.includes("minjun")
      ? `
      <button onclick="showMinjunMessages()">
        Min-jun 🇰🇷
      </button>
      `
      : ""}

      ${gameState.unlockedMessages.includes("amina")
      ? `
      <button onclick="showAminaMessages()">
        Amina 🇰🇪
      </button>
      `
      : ""}

      ${gameState.unlockedMessages.includes("emma")
      ? `
      <button onclick="showEmmaMessages()">
        Emma 🇬🇧
      </button>
      `
      : ""}

      ${gameState.unlockedMessages.includes("sofia")
      ? `
      <button onclick="showSofiaMessages()">
        Sofia 🇪🇸
      </button>
      `
      : ""}

      ${gameState.unlockedMessages.includes("omar")
      ? `
      <button onclick="showOmarMessages()">
        Omar 🇪🇬
      </button>
      `
      : ""}

      <br><br>

      <button onclick="showMap()">
        ← Back to Map
      </button>

    </div>
  `;
}
function showKenjiMessages() {

  if (CHARACTERS.kenji.trust < 60) {

    screen.innerHTML = `
    ${renderNavbar()}
      <div class="card">

        <h2>Kenji 🇯🇵</h2>

        <p>
          This user does not trust you enough yet.
        </p>

        <p>
          Trust Required: 60
        </p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Kenji 🇯🇵</h2>

      <p>
        People often think I only watch anime.
      </p>

      <p>
        Actually I spend most of my time
        building robots.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showEmmaMessages() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Emma 🇬🇧</h2>

      <p>
        Thanks for helping people understand each other.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showPriyaMessages() {

  if (CHARACTERS.priya.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Priya 🇮🇳</h2>

        <p>
          Trust Required: 60
        </p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Priya 🇮🇳</h2>

      <p>
        Technology can help students
        learn languages faster.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showMinjunMessages() {

  if (CHARACTERS.minjun.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Min-jun 🇰🇷</h2>

        <p>
          Trust Required: 60
        </p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Min-jun 🇰🇷</h2>

      <p>
        Music helps people connect
        even when they speak different languages.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showAminaMessages() {

  if (CHARACTERS.amina.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Amina 🇰🇪</h2>

        <p>
          Trust Required: 60
        </p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Amina 🇰🇪</h2>

      <p>
        Photography helps people understand
        cultures they have never seen before.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showJakeMessages() {

  if (CHARACTERS.jake.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Jake 🇺🇸</h2>

        <p>Trust Required: 60</p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Jake 🇺🇸</h2>

      <p>
        Games allow people from different
        countries to work together.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showChloeMessages() {

  if (CHARACTERS.chloe.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Chloe 🇨🇦</h2>

        <p>Trust Required: 60</p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Chloe 🇨🇦</h2>

      <p>
        Environmental issues affect
        every country.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showRafaelMessages() {

  if (CHARACTERS.rafael.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Rafael 🇧🇷</h2>

        <p>Trust Required: 60</p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Rafael 🇧🇷</h2>

      <p>
        Cities become better when people
        share ideas internationally.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}

function showMiaMessages() {

  if (CHARACTERS.mia.trust < 60) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h2>Mia 🇦🇺</h2>

        <p>
          Trust Required: 60
        </p>

        <button onclick="showMessages()">
          Back
        </button>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Mia 🇦🇺</h2>

      <p>
        Healthy oceans benefit every country,
        not just coastal ones.
      </p>

      <button onclick="showMessages()">
        Back
      </button>

    </div>
  `;
}