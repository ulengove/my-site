function showCollection() {

  screen.innerHTML = `
    ${renderNavbar()}

    <div class="card">

        <p>
            Discovery Progress
        </p>

        <progress
            value="${gameState.discoveredCharacters.length}"
            max="11">
        </progress>

        

      <ul>

        <li>
          ${
            gameState.discoveredCharacters.includes("Emma")
            ? "✅ Emma 🇬🇧"
            : "⬜ Emma"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Sofia")
            ? "✅ Sofia 🇪🇸"
            : "⬜ Sofia"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Kenji")
            ? "✅ Kenji 🇯🇵"
            : "⬜ Kenji"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Priya")
            ? "✅ Priya 🇮🇳"
            : "⬜ Priya"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Min-jun")
            ? "✅ Min-jun 🇰🇷"
            : "⬜ Min-jun"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Omar")
            ? "✅ Omar 🇪🇬"
            : "⬜ Omar"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Amina")
            ? "✅ Amina 🇰🇪"
            : "⬜ Amina"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Jake")
            ? "✅ Jake 🇺🇸"
            : "⬜ Jake"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Chloe")
            ? "✅ Chloe 🇨🇦"
            : "⬜ Chloe"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Rafael")
            ? "✅ Rafael 🇧🇷"
            : "⬜ Rafael"
          }
        </li>

        <li>
          ${
            gameState.discoveredCharacters.includes("Mia")
            ? "✅ Mia 🇦🇺"
            : "⬜ Mia"
          }
        </li>

      </ul>

      ${
        gameState.discoveredCharacters.length >= 5
        ? `
        <div class="card">
          🏆 Explorer I
        </div>
        `
        : ""
      }

      ${
        gameState.discoveredCharacters.length >= 8
        ? `
        <div class="card">
          🏆 Explorer II
        </div>
        `
        : ""
      }

      ${
        gameState.discoveredCharacters.length >= 11
        ? `
        <div class="card">
          🏆 World Explorer
        </div>
        `
        : ""
      }

    </div>
  `;
}