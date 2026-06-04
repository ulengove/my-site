function showProjects() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🚀 Global Projects</h1>

      <button onclick="showRoboticsProject()">
        Robotics Challenge
      </button>

      <br><br>

      <button onclick="showClimateProject()">
        Climate Initiative
      </button>

      <br><br>

      <button onclick="showSpaceProject()">
        Space Program
      </button>

    </div>
  `;
}

function showRoboticsProject() {

  if (gameState.projects.robotics) {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🤖 Robotics Challenge</h1>

      <p>
        ✅ Completed
      </p>

      <p>
        This project has already been completed.
      </p>

    </div>
  `;

  return;
}

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      

      <h1>🤖 Robotics Challenge</h1>

      <p>
        Team:
      </p>

      <ul>
        <li>Kenji</li>
        <li>Sofia</li>
        <li>Priya</li>
      </ul>

      <p>
        Build a robot that helps people
        after natural disasters.
      </p>

      <p>
        Progress:
        ${gameState.roboticsProgress}%
      </p>

      <button onclick="roboticsDecision1()">
        Start Project
      </button>

    </div>
  `;
}

function roboticsDecision1() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Team Meeting</h2>

      <p>
        Kenji wants reliability.
      </p>

      <p>
        Sofia wants creativity.
      </p>

      <p>
        Priya wants better software.
      </p>

      <button onclick="roboticsCooperate()">
        Encourage Cooperation
      </button>

      <button onclick="roboticsPickSide()">
        Choose One Side
      </button>

    </div>
  `;
}

function roboticsCooperate() {

  CHARACTERS.kenji.trust += 5;
  CHARACTERS.sofia.trust += 5;
  CHARACTERS.priya.trust += 5;

  gameState.roboticsProgress += 50;

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Success</h2>

      <p>
        The team starts working together.
      </p>

      <button onclick="roboticsFinalStage()">
        Continue
      </button>

    </div>
  `;
}

function roboticsPickSide() {

  gameState.roboticsProgress += 20;

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Conflict</h2>

      <p>
        Some team members feel ignored.
      </p>

      <button onclick="roboticsFinalStage()">
        Continue
      </button>

    </div>
  `;
}

function roboticsFinalStage() {

  let trustAverage =
    (
      CHARACTERS.kenji.trust +
      CHARACTERS.sofia.trust +
      CHARACTERS.priya.trust
    ) / 3;

  if (
    trustAverage >= 60 &&
    gameState.roboticsProgress >= 50
  ) {

    roboticsSuccess();

  } else {

    roboticsFailure();

  }

}

function roboticsSuccess() {

  gameState.projects.robotics = true;

  gameState.understanding += 10;

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🏆 Robotics Challenge Success</h1>

      <p>
        The robot wins an international award.
      </p>

      <p>
        Global Understanding +10
      </p>

    </div>
  `;
}

function roboticsFailure() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>❌ Project Failed</h1>

      <p>
        The team could not work together effectively. (Not enought trust or project progress)
      </p>

    </div>
  `;
}


function showClimateProject() {

  if (
    gameState.projects.climate
  ) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h1>🌱 Climate Initiative</h1>

        <h2>🏆 Completed</h2>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🌱 Climate Initiative</h1>

      <p>
        Team:
      </p>

      <ul>
        <li>Mia 🇦🇺</li>
        <li>Chloe 🇨🇦</li>
        <li>Rafael 🇧🇷</li>
      </ul>

      <button onclick="climateDecision1()">
        Start Project
      </button>

    </div>
  `;
}

function climateDecision1() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Project Discussion</h2>

      <p>
        Mia wants to focus on oceans.
      </p>

      <p>
        Chloe wants climate education.
      </p>

      <p>
        Rafael wants sustainable cities.
      </p>

      <button onclick="climateCooperate()">
        Combine All Ideas
      </button>

      <button onclick="climateChooseOne()">
        Choose One Idea
      </button>

    </div>
  `;
}

function climateCooperate() {

  CHARACTERS.chloe.trust += 5;
  CHARACTERS.rafael.trust += 5;

  gameState.climateProgress += 50;

  climateFinalStage();
}

function climateChooseOne() {

  gameState.climateProgress += 20;

  climateFinalStage();
}

function climateFinalStage() {

  let averageTrust = (

    CHARACTERS.chloe.trust +
    CHARACTERS.rafael.trust

  ) / 2;

  if (
    averageTrust >= 60 &&
    gameState.climateProgress >= 50
  ) {

    climateSuccess();

  } else {

    climateFailure();

  }

}

function climateSuccess() {

  if (
    gameState.projects.climate
  ) {
    return;
  }

  gameState.projects.climate = true;

  gameState.understanding += 10;

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🌱 Success</h1>

      <p>
        Students around the world join
        the campaign.
      </p>

      <p>
        Global Understanding +10
      </p>

    </div>
  `;
}

function climateFailure() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>❌ Project Failed</h1>

      <p>
        The team could not agree on a plan.
      </p>

    </div>
  `;
}

function showSpaceProject() {

  if (
    gameState.projects.space
  ) {

    screen.innerHTML = `
      ${renderNavbar()}

      <div class="card">

        <h1>🚀 Space Program</h1>

        <h2>🏆 Completed</h2>

      </div>
    `;

    return;
  }

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🚀 Space Program</h1>

      <p>
        Team:
      </p>

      <ul>
        <li>Omar 🇪🇬</li>
        <li>Emma 🇬🇧</li>
        <li>Min-jun 🇰🇷</li>
      </ul>

      <button onclick="spaceDecision1()">
        Start Project
      </button>

    </div>
  `;
}

function spaceDecision1() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h2>Research Planning</h2>

      <p>
        Omar wants scientific accuracy.
      </p>

      <p>
        Emma wants better technology.
      </p>

      <p>
        Min-jun wants global outreach.
      </p>

      <button onclick="spaceCooperate()">
        Combine Ideas
      </button>

      <button onclick="spaceChooseOne()">
        Choose One Idea
      </button>

    </div>
  `;
}

function spaceCooperate() {

  CHARACTERS.omar.trust += 5;
  CHARACTERS.emma.trust += 5;
  CHARACTERS.minjun.trust += 5;

  gameState.spaceProgress += 50;

  spaceFinalStage();
}

function spaceChooseOne() {

  gameState.spaceProgress += 20;

  spaceFinalStage();
}

function spaceFinalStage() {

  let averageTrust = (

    CHARACTERS.omar.trust +
    CHARACTERS.emma.trust +
    CHARACTERS.minjun.trust

  ) / 3;

  if (
    averageTrust >= 60 &&
    gameState.spaceProgress >= 50
  ) {

    spaceSuccess();

  } else {

    spaceFailure();

  }

}

function spaceSuccess() {

  if (
    gameState.projects.space
  ) {
    return;
  }

  gameState.projects.space = true;

  gameState.understanding += 10;

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>🚀 Success</h1>

      <p>
        The international research program
        launches successfully.
      </p>

      <p>
        Global Understanding +10
      </p>

    </div>
  `;
}

function spaceFailure() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

      <h1>❌ Project Failed</h1>

      <p>
        The team could not agree on a plan.
      </p>

    </div>
  `;
}