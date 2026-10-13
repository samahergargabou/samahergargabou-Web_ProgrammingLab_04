# Student Task Management Dashboard

A modular JavaScript project illustrating asynchronous programming, DOM event listeners, and immutable state architecture.

## Structure
- `index.html`: Semantic entry point and UI markup.
- `style.css`: Clean, minimalist card interface with strikeout visual indicators.
- `taskManager.js`: Defines `Task` (with read-only properties) and `TaskManager` (handling pure array operations).
- `api.js`: Simulates asynchronous network requests using Promises with standard delays.
- `main.js`: Asynchronous controller binding events, processing JSON data, and updating the DOM dynamically.

## Implementation Reflections
- **State Preservation**: Guaranteed that class methods never use mutating methods such as `.splice()` or direct assignment (`.tasks = ...`), preserving immutability across toggles and deletions.
- **Dynamic Node Management**: Implemented DOM tree construction via `document.createElement` rather than direct `innerHTML` injections for improved event handling and safety.

## Commit Plan (7+ Commits)
1. `init: set up basic workspace and index.html markup`
2. `style: define clean responsive card layout in style.css`
3. `feat(core): construct Task class with read-only id property`
4. `feat(core): add TaskManager class with immutable operations`
5. `feat(api): mock asynchronous backend request with simulated delay`
6. `feat(ui): implement dynamic DOM rendering and event listeners`
7. `refactor: integrate JSON serialization cycle and error handling`
8. `docs: write project overview and submission details`