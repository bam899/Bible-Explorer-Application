// App is the top-level component: the whole screen is built from here.
// Milestone 0: a static shell only. The search bar is not connected yet,
// and the empty canvas is where the historical timeline will live.

function App() {
  return (
    <div className="app">
      <header className="top-bar">
        <h1 className="brand">Bible Map</h1>
        <input
          className="search"
          type="search"
          placeholder="Search people, places, years, verses…"
          disabled
        />
      </header>

      <main className="canvas">
        <p className="canvas-note">The historical canvas will appear here.</p>
      </main>
    </div>
  )
}

export default App
