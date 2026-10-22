import { useState } from "react";
import {
  Home, Gamepad2, Music2, Clapperboard, Tv, CircleDot, Sparkles,
  Search, ArrowRight, Settings, Bookmark, ExternalLink
} from "lucide-react";

const sections = [
  { name: "Home", icon: Home },
  { name: "Games", icon: Gamepad2 },
  { name: "Music", icon: Music2 },
  { name: "Movies", icon: Clapperboard },
  { name: "TV Shows", icon: Tv },
  { name: "Anime", icon: CircleDot },
  { name: "AI", icon: Sparkles },
];

const shortcuts = [
  { name: "Games", icon: Gamepad2, color: "pink", description: "Explore the game library" },
  { name: "Music", icon: Music2, color: "green", description: "Open Spotify playlists" },
  { name: "Movies", icon: Clapperboard, color: "pink", description: "Find films and trailers" },
  { name: "TV Shows", icon: Tv, color: "purple", description: "Browse shows" },
  { name: "Anime", icon: CircleDot, color: "pink", description: "Discover anime" },
  { name: "AI", icon: Sparkles, color: "purple", description: "Chat with the AI assistant" },
];

export default function App() {
  const [active, setActive] = useState("Home");
  const [query, setQuery] = useState("");

  function searchWeb(event) {
    event.preventDefault();
    const q = query.trim();
    if (q) window.open(`https://duckduckgo.com/?q=${encodeURIComponent(q)}`, "_blank", "noopener,noreferrer");
  }

  function openSection(name) {
    setActive(name);
    if (name === "Music") {
      window.open("https://open.spotify.com/", "_blank", "noopener,noreferrer");
    }
  }

  return (
    <main className="app">
      <video className="video-bg" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="shade" />
      <header className="browser-bar">
        <div className="mini-mark">◆</div>
        <div className="tab"><span className="tab-mark">◆</span> FluxGate <span className="tab-close">×</span></div>
        <span className="plus">+</span>
        <div className="address"><Search size={15} /><span>FluxGate homepage</span><span className="address-right">⌕</span></div>
      </header>

      <nav className="nav">
        <button className="wordmark" onClick={() => setActive("Home")}>FluxGate</button>
        <div className="nav-links">
          {sections.map(({ name, icon: Icon }) => (
            <button key={name} className={`nav-link ${active === name ? "selected" : ""}`} onClick={() => openSection(name)}>
              <Icon size={17} strokeWidth={2.3} /> <span>{name}</span>
            </button>
          ))}
        </div>
        <div className="nav-tools"><Bookmark size={18} /><Settings size={18} /></div>
      </nav>

      <section className="hero">
        {active === "Home" ? (
          <>
            <div className="eyebrow"><span className="live-dot" /> YOUR PERSONAL START PAGE</div>
            <h1>FluxGate</h1>
            <p className="tagline">YOUR WORLD. ONE GATEWAY.</p>
            <form className="search-box" onSubmit={searchWeb}>
              <Search size={19} className="search-icon" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search the web with DuckDuckGo..." aria-label="Search the web" />
              <button type="submit" aria-label="Search"><ArrowRight size={25} /></button>
            </form>
            <div className="shortcut-grid">
              {shortcuts.map(({ name, icon: Icon, color, description }) => (
                <button className="shortcut" key={name} onClick={() => openSection(name)} title={description}>
                  <Icon className={color} size={27} strokeWidth={2.4} />
                  <span>{name}</span>
                </button>
              ))}
            </div>
            <p className="hint">Pick a shortcut to get started</p>
          </>
        ) : (
          <div className="section-card">
            <div className="section-icon"><Sparkles size={27} /></div>
            <p className="eyebrow">FLUXGATE / {active.toUpperCase()}</p>
            <h2>{active}</h2>
            <p className="section-description">
              {active === "Games" ? "Your game library will live here. Next, we can add searchable categories and game cards." :
               active === "Music" ? "Spotify should have opened in a new tab." :
               active === "AI" ? "Next, connect a secure AI backend so this assistant can give real answers." :
               "This section is ready for us to build. We can add searchable titles, artwork, trailers and official viewing links."}
            </p>
            <button className="back-button" onClick={() => setActive("Home")}>← Back to home</button>
            {active === "Movies" || active === "TV Shows" || active === "Anime" ? (
              <a className="external-link" href="https://www.justwatch.com/" target="_blank" rel="noreferrer">Find legal streaming options <ExternalLink size={15} /></a>
            ) : null}
          </div>
        )}
      </section>
      <footer><span>FLUXGATE <span className="footer-dot">●</span> PIXEL SUNSET EDITION</span><span>Made for your next adventure</span></footer>
    </main>
  );
}