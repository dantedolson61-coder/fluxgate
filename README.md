# FluxGate starter

This is a starter website for your FluxGate homepage. It includes:
- Your uploaded sunset MP4 as a looping background (`public/background.mp4`)
- A dark red-glow browser-inspired design
- DuckDuckGo search
- Navigation and starter pages for Games, Music, Movies, TV Shows, Anime, and AI
- A Spotify shortcut that opens Spotify

## 1. Install Node.js
Install the current LTS version from https://nodejs.org/

## 2. Open this project
Extract the ZIP. Open the `fluxgate-starter` folder in VS Code.

## 3. Install dependencies
In VS Code, choose Terminal -> New Terminal and run:

```bash
npm install
```

## 4. Start the website
Run:

```bash
npm run dev
```

Vite will print a local address, usually `http://localhost:5173`. Ctrl-click it in the terminal or paste it into your browser.

## 5. Build it for publishing
Run:

```bash
npm run build
```

The production site will be created in the `dist` folder.

## Notes
This is the first homepage starter, not a full browser or a complete proxy. The Movies/TV/Anime sections are placeholders with a link to find legal streaming options. The AI section needs a secure backend and AI provider before it can answer questions. Do not put private API keys in frontend code.
