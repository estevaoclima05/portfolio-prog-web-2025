"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <a href="/">Estevão Lima</a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/">🏠 Home</a>
          </li>
          <li>
            <a href="/sobre">💡 Sobre</a>
          </li>
          <li>
            <a href="/experiencia">🎓 Experiência</a>
          </li>
          <li>
            <a href="/projetos">💻 Projetos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
