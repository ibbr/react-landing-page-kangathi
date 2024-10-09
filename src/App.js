import React, { useCallback } from 'react';
import { Particles } from "react-particles";
import { loadSlim } from "tsparticles-slim";
import logo from './logo.jpg';
import './App.css';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log("Particles initializing");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#f0f0f0",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: "#3d3e3e" },
            links: {
              color: "#3d3e3e",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web Development | Software Development | Consultation
        </p>
        <p>+960 9559500</p>
      </header>
    </div>
  );
}

export default App;
