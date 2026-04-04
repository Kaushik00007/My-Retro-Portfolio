# Project Overview: Kaushik - Retro Portfolio

[**🔴 Live Website**](https://kaushik-k.onrender.com)

A 3D interactive portfolio website featuring a retro computer interface. It combines a 3D WebGL scene (Three.js) with a functional terminal emulator and a standard DOM overlay for content.

## 🛠️ Tech Stack

### 🖥️ Frontend
![3D](https://img.shields.io/badge/3D-Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white) 
![Frontend](https://img.shields.io/badge/Frontend-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![Styling](https://img.shields.io/badge/Styling-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![Tools](https://img.shields.io/badge/Tools-Lil--GUI-FF69B4?style=for-the-badge&logo=google-chrome&logoColor=white)

### ⚙️ Backend & Development
![Runtime](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) 
![Bundler](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) 
![Package Manager](https://img.shields.io/badge/Tools-NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### 📧 Services
![Contact Form](https://img.shields.io/badge/Auth-EmailJS-F0AB00?style=for-the-badge&logo=mailgun&logoColor=white) 
![Stats](https://img.shields.io/badge/Stats-Stats.js-000000?style=for-the-badge&logo=speedtest&logoColor=white)

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

## 📧 Contact
For any queries, reach out via:

- 📧 Email: kaushi00007@gmail.com
- 🔗 LinkedIn: [Kaushik K](https://www.linkedin.com/in/kaushik-k-dev)
- 🌍 GitHub: [Kaushik00007](https://github.com/Kaushik00007/Kaushik00007)

## Built with ❤️ using TypeScript, Three.js, Vite and Node.js.
