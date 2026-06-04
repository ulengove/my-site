function showIntro() {
  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">
      <h1>YEAR 2040</h1>

      <p>
        The world is more connected than ever.
      </p>

      <p>
        People from different cultures study,
        work and communicate online.
      </p>

      <p>
        But stereotypes and misinformation
        still create barriers.
      </p>

      <h2>Welcome to FutureConnect.</h2>

      <button onclick="showMission()">
        Continue
      </button>
    </div>
  `;
}