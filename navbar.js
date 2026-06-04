function renderNavbar() {

  return `
    <div class="navbar">

      <button onclick="showMap()">
        🌍 Map
      </button>

      <button onclick="showFeed()">
        📰 Feed
      </button>

      <button onclick="showMessages()">
        💬 Messages
      </button>

      <button onclick="showStats()">
        📊 Stats
      </button>

      <button onclick="showCollection()">
        👥 Collection
      </button>
    
      <button onclick="showProjects()">
        🚀 Projects
      </button>
      
    </div>
  `;
}