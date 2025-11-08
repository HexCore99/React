import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { label: "HTML + CSS", color: "#d1e4ff" },
  { label: "JavaScript", color: "#ffe89e" },
  { label: "Web Design", color: "#bff0b2" },
  { label: "Git & GitHub", color: "#ffd1a5" },
  { label: "React", color: "#bce6ff" },
  { label: "Svelte", color: "#ffb5b5" },
];

function App() {
  return (
    <div className="container">
      <img src="/photos/SluR.png" alt="ekhono uplod dei ni!" />
      <Description />
      <div className="miniCardGrid">
        {skills.map((skill) => (
          <MiniCard key={skill.label} card={skill.label} color={skill.color} />
        ))}
      </div>
    </div>
  );
}

function Description() {
  const name = "SluR";
  const userDetails =
    "I am a web developer. I love to code and design beautiful websites. I am passionate about creating user-friendly and responsive web applications. I enjoy learning new technologies and staying up-to-date with the latest trends in web development.";
  return (
    <div className="userDescription">
      <h1>{name}</h1>
      <p>{userDetails}</p>
    </div>
  );
}

function MiniCard({ card, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <p>{card}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
