## Drum Kit

A simple browser-based drum kit. Click the on-screen pads or press keys to play sounds.

### Features

- **Interactive pads**: Click buttons or use your keyboard
- **Keyboard controls**: W A S D J K L
- **Visual feedback**: Subtle glow animation on hit

### Controls

- **W**: Tom 1
- **A**: Tom 2
- **S**: Tom 3
- **D**: Tom 4
- **J**: Snare
- **K**: Crash
- **L**: Kick

### Run locally

No build or install needed.

- Clone or download this repo
- Open `index.html` in any modern browser

### Project structure

```
.
├── index.html      # Markup and layout (buttons)
├── style.css       # Styles, background and animations
├── script.js       # Event handlers and audio playback
├── images/         # Button and background images
└── sounds/         # Drum samples (mp3)
```

### How it works

- `script.js` listens for button clicks and key presses
- Maps keys to audio files in `sounds/`
- Triggers a short CSS animation for visual feedback

### Notes

- All assets are local; works fully offline
- Tested in latest Chrome/Edge/Firefox
