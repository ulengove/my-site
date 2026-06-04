function showTutorial() {
  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Emma 🇬🇧</h2>

      <p>
        Hi!
      </p>

      <p>
        Welcome to FutureConnect.
      </p>

      <p>
        Let me show you how it works.
      </p>

      <button onclick="showEvent1()">
        Continue
      </button>

    </div>
  `;
}