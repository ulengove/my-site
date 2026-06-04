function showMap() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h1>🌍 World Map</h1>

      <p>
        Click a region to discover people.
      </p>

      <div class="map-region" onclick="showEurope()">
        🇪🇺 Europe
      </div>

      <div class="map-region" onclick="showAsia()">
        🌏 Asia
      </div>

      <div class="map-region" onclick="showAfrica()">
        🌍 Africa
      </div>

      <div class="map-region" onclick="showAmericas()">
        🌎 Americas
      </div>

      <div class="map-region" onclick="showOceania()">
        🌊 Oceania
      </div>

    </div>

    <button onclick="showCollection()">
        Character Collection
    </button>

    <button onclick="showMessages()">
        💬 Messages
    </button>

    <button onclick="showStats()">
        📊 Statistics
    </button>

    <button onclick="showFeed()">
        📰 Feed
    </button>
  `;
}

function showEurope() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>🇪🇺 Europe</h2>

      <button onclick="showEmmaProfile()">
        Emma 🇬🇧
      </button>

      <button onclick="showSofiaProfile()">
        Sofia 🇪🇸
      </button>

      <button onclick="showLukasProfile()">
        Lukas 🇩🇪
      </button>

      <button onclick="showMap()">
        Back
      </button>

    </div>
  `;
}

function showAsia() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>🌏 Asia</h2>

      <button onclick="showKenjiProfile()">
        Kenji 🇯🇵
      </button>

      <button onclick="showPriyaProfile()">
        Priya 🇮🇳
      </button>

      <button onclick="showMinjunProfile()">
        Min-jun 🇰🇷
      </button>

      <br><br>

      <button onclick="showMap()">
        Back
      </button>

    </div>
  `;
}

function showAfrica() {

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>🌍 Africa</h2>

      <button onclick="showOmarProfile()">
        Omar 🇪🇬
      </button>

      <button onclick="showAminaProfile()">
        Amina 🇰🇪
      </button>

      <button onclick="showMap()">
        Back
      </button>

    </div>
  `;
}

function showAmericas() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>🌎 Americas</h2>

      <button onclick="showJakeProfile()">
        Jake 🇺🇸
      </button>

      <button onclick="showChloeProfile()">
        Chloe 🇨🇦
      </button>

      <button onclick="showRafaelProfile()">
        Rafael 🇧🇷
      </button>

      <br><br>

      <button onclick="showMap()">
        Back
      </button>

    </div>
  `;
}

function showOceania() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>🌊 Oceania</h2>

      <button onclick="showMiaProfile()">
        Mia 🇦🇺
      </button>

      <br><br>

      <button onclick="showMap()">
        Back
      </button>

    </div>
  `;
}