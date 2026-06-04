function showMission() {
  screen.innerHTML = `
    ${renderNavbar()}
    <div class="card">

      <h2>Community Moderator</h2>

      <p>
        Your mission:
      </p>

      <ul>
        <li>Challenge stereotypes</li>
        <li>Build trust</li>
        <li>Support global cooperation</li>
      </ul>

      <button onclick="showTutorial()">
        Start Training
      </button>

    </div>
  `;
}