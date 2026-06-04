function showEmmaProfile() {
    if (
    !gameState.discoveredCharacters.includes("Emma")
    ) {

    gameState.discoveredCharacters.push("Emma");

    }

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h1>Emma 🇬🇧</h1>

      <p>
        Country: United Kingdom
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Programming</li>
        <li>Artificial Intelligence</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.emma.trust}      
      </p>

      <button onclick="showEurope()">
        Back
      </button>

    </div>
  `;
}

function showSofiaProfile() {

  if (
    !gameState.discoveredCharacters.includes("Sofia")
  ) {

    gameState.discoveredCharacters.push("Sofia");

  }

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h1>Sofia 🇪🇸</h1>

      <p>
        Country: Spain
      </p>

      <p>
        Age: 16
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Engineering</li>
        <li>Robotics</li>
      </ul>

      <p>
        Personality:
      </p>

      <ul>
        <li>Creative</li>
        <li>Energetic</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.sofia.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          I spent my weekend building
          a robot arm for a competition.
        </p>

      </div>

      ${CHARACTERS.sofia.trust >= 60 ? `

        <div class="card">

          <h3>💬 Private Message</h3>

          <p>
            Many people think Spanish students
            only care about parties.
          </p>

          <p>
            Actually I spend most of my free time
            building things and learning robotics.
          </p>

        </div>

      ` : ""}

      ${CHARACTERS.sofia.trust >= 75 ? `

        <div class="card">

          <h3>🔒 Personal Goal</h3>

          <p>
            My dream is to become an engineer
            and design technology that helps people.
          </p>

        </div>

      ` : ""}

      <button onclick="showEurope()">
        Back
      </button>

    </div>
  `;
}

function showKenjiProfile() {

  if (
    !gameState.discoveredCharacters.includes("Kenji")
  ) {

    gameState.discoveredCharacters.push("Kenji");

  }

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h1>Kenji 🇯🇵</h1>

      <p>
        Country: Japan
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Robotics</li>
        <li>Football</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.kenji.trust}
      </p>

      ${CHARACTERS.kenji.trust >= 60 ? `
        <div class="card">

            <h3>💬 Private Message</h3>

            <p>
            Thanks for asking before making assumptions.
            </p>

        </div>
        ` : ""}

      <button onclick="showAsia()">
        Back
      </button>

    </div>
  `;
}

function showOmarProfile() {

  if (
    !gameState.discoveredCharacters.includes("Omar")
  ) {

    gameState.discoveredCharacters.push("Omar");

  }

  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h1>Omar 🇪🇬</h1>

      <p>
        Country: Egypt
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Astronomy</li>
        <li>Space Science</li>
      </ul>

      <p>
        Trust:
        ${CHARACTERS.omar.trust}
      </p>

      <button onclick="showAfrica()">
        Back
      </button>

    </div>
  `;
}

function showPriyaProfile() {

  if (
    !gameState.discoveredCharacters.includes("Priya")
  ) {

    gameState.discoveredCharacters.push("Priya");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Priya 🇮🇳</h1>

      <p>
        Country: India
      </p>

      <p>
        Age: 17
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>App Development</li>
        <li>Mathematics</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.priya.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          I am building an app that helps
          students learn languages.
        </p>

      </div>

      ${CHARACTERS.priya.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          Technology can help students
          communicate across cultures.
        </p>

      </div>

      ` : ""}

      <button onclick="showAsia()">
        Back
      </button>

    </div>
  `;
}

function showMinjunProfile() {

  if (
    !gameState.discoveredCharacters.includes("Min-jun")
  ) {

    gameState.discoveredCharacters.push("Min-jun");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Min-jun 🇰🇷</h1>

      <p>
        Country: South Korea
      </p>

      <p>
        Age: 16
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Music Production</li>
        <li>Design</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.minjun.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          Music can connect people
          from different cultures.
        </p>

      </div>

      ${CHARACTERS.minjun.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          I enjoy working with artists
          from other countries.
        </p>

      </div>

      ` : ""}

      <button onclick="showAsia()">
        Back
      </button>

    </div>
  `;
}

function showAminaProfile() {

  if (
    !gameState.discoveredCharacters.includes("Amina")
  ) {

    gameState.discoveredCharacters.push("Amina");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Amina 🇰🇪</h1>

      <p>
        Country: Kenya
      </p>

      <p>
        Age: 16
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Photography</li>
        <li>Wildlife</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.amina.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          Photography helps people
          understand different cultures.
        </p>

      </div>

      ${CHARACTERS.amina.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          Pictures can tell stories that
          words sometimes cannot.
        </p>

      </div>

      ` : ""}

      <button onclick="showAfrica()">
        Back
      </button>

    </div>
  `;
}

function showJakeProfile() {

  if (
    !gameState.discoveredCharacters.includes("Jake")
  ) {

    gameState.discoveredCharacters.push("Jake");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Jake 🇺🇸</h1>

      <p>
        Country: United States
      </p>

      <p>
        Age: 17
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Game Development</li>
        <li>Basketball</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.jake.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          Games can teach people about
          different cultures.
        </p>

      </div>

      ${CHARACTERS.jake.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          Online games allow people from
          different countries to become friends.
        </p>

      </div>

      ` : ""}

      ${CHARACTERS.jake.trust >= 75 ? `

      <div class="card">

        <h3>🔒 Personal Goal</h3>

        <p>
          I want to create games that help
          people learn about the world.
        </p>

      </div>

      ` : ""}

      <button onclick="showAmericas()">
        Back
      </button>

    </div>
  `;
}

function showChloeProfile() {

  if (
    !gameState.discoveredCharacters.includes("Chloe")
  ) {

    gameState.discoveredCharacters.push("Chloe");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Chloe 🇨🇦</h1>

      <p>
        Country: Canada
      </p>

      <p>
        Age: 17
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Environment</li>
        <li>Hiking</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.chloe.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          Environmental problems affect
          every country on Earth.
        </p>

      </div>

      ${CHARACTERS.chloe.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          Climate change is a global problem.
        </p>

        <p>
          Countries need to work together
          to find solutions.
        </p>

      </div>

      ` : ""}

      ${CHARACTERS.chloe.trust >= 75 ? `

      <div class="card">

        <h3>🔒 Personal Goal</h3>

        <p>
          I want to work on international
          environmental projects.
        </p>

      </div>

      ` : ""}

      <button onclick="showAmericas()">
        Back
      </button>

    </div>
  `;
}

function showRafaelProfile() {

  if (
    !gameState.discoveredCharacters.includes("Rafael")
  ) {

    gameState.discoveredCharacters.push("Rafael");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Rafael 🇧🇷</h1>

      <p>
        Country: Brazil
      </p>

      <p>
        Age: 16
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Sustainable Cities</li>
        <li>Football</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.rafael.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          Cities can become greener through
          innovation and cooperation.
        </p>

      </div>

      ${CHARACTERS.rafael.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          Different countries often face
          similar urban challenges.
        </p>

      </div>

      ` : ""}

      ${CHARACTERS.rafael.trust >= 75 ? `

      <div class="card">

        <h3>🔒 Personal Goal</h3>

        <p>
          I want to help build sustainable
          cities for future generations.
        </p>

      </div>

      ` : ""}

      <button onclick="showAmericas()">
        Back
      </button>

    </div>
  `;
}

function showMiaProfile() {

  if (
    !gameState.discoveredCharacters.includes("Mia")
  ) {

    gameState.discoveredCharacters.push("Mia");

  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>Mia 🇦🇺</h1>

      <p>
        Country: Australia
      </p>

      <p>
        Age: 17
      </p>

      <p>
        Interests:
      </p>

      <ul>
        <li>Marine Biology</li>
        <li>Environment</li>
      </ul>

      <p>
        Trust: ${CHARACTERS.mia.trust}
      </p>

      <h3>Recent Post</h3>

      <div class="card">

        <p>
          Oceans connect every continent
          on our planet.
        </p>

      </div>

      ${CHARACTERS.mia.trust >= 60 ? `

      <div class="card">

        <h3>💬 Private Message</h3>

        <p>
          Protecting the oceans requires
          global cooperation.
        </p>

      </div>

      ` : ""}

      ${CHARACTERS.mia.trust >= 75 ? `

      <div class="card">

        <h3>🔒 Personal Goal</h3>

        <p>
          I want to help protect marine
          ecosystems around the world.
        </p>

      </div>

      ` : ""}

      <button onclick="showOceania()">
        Back
      </button>

    </div>
  `;
}