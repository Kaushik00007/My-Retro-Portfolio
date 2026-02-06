# Project Overview: Kaushik - Retro Portfolio

A 3D interactive portfolio website featuring a retro computer interface. It combines a 3D WebGL scene (Three.js) with a functional terminal emulator and a standard DOM overlay for content.

## 🛠 Technology Stack

-   **Runtime**: Node.js (v18+ recommended)
-   **Language**: TypeScript
-   **Bundler**: Vite
-   **3D Framework**: Three.js
-   **UI/Styling**: HTML5, CSS3, Lil-GUI (for debug controls)
-   **Utilities**: Stats.js (performance monitoring), EmailJS (contact form)

## 📂 Project Structure

### Root Directory
-   `index.html`: Main entry point for the application.
-   `package.json`: Dependency and script configuration.
-   `vite.config.ts`: Vite build configuration.
-   `public/`: Static assets (3D models, textures, fonts, icons).

### Source Code (`src/`)

#### 1. Core Logic
-   `main.ts`: Application bootstrap, event listeners, and component initialization.
-   `loader.ts`: Handles loading of 3D assets (GLTF models, textures).
-   `TimeUtils.ts`: Utility for calculating delta time (frame independence).

#### 2. WebGL Engine (`src/webgl/`)
Renders the 3D scene (Retro Computer).
-   `index.ts`: Main scene setup (Camera, Lights, Renderer, Model instantiation).
-   `screen/`: Handles the texture rendered onto the computer screen (CRT effect).
    -   `renderEngine.ts`: Composes the final screen texture with bloom and noise effects.
    -   `textEngine.ts`: Renders text onto the screen texture.
-   `shaders/`: Custom GLSL shaders for visual effects (noise, vertex displacement).

#### 3. Terminal Emulator (`src/terminal/`)
Simulates a functional command-line interface.
-   `index.ts`: Terminal core, handling input and rendering output to the 3D screen.
-   `bash.ts`: Command parser and dispatcher.
-   `fileSystemBash.ts`: Virtual file system structure.
-   `applications/`: Command implementations.
    -   **Built-in Commands**: `ls`, `cd`, `echo`, `cat` (via `show`), `help`, `date`, `time`, `version`.

#### 4. DOM Overlay
Standard HTML/CSS UI elements overlaid on the 3D canvas.
-   `resume-window.ts`: Controls the dragging and visibility of the resume popup.
-   `contact-form.ts`: Handles the "Contact Me" form submission.
-   `animations.ts`: GSAP-like animations for DOM elements.

## 🚀 Key Features

-   **Interactive 3D Scene**: A retro computer desk setup that responds to scroll and mouse movement.
-   **Virtual Terminal**: A working CLI shell ("KASH") that can "execute" commands and navigate a virtual file system.
-   **Responsive Design**: Adjusts layout and 3D camera angles for mobile and desktop screens.
-   **Command System**: Recently added `date`, `time`, and `version` commands to the terminal.

## 🏃‍♂️ How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Access at `http://localhost:5173` (or the port shown in terminal).

3.  **Build for Production**:
    ```bash
    npm run build
    ```
