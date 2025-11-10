"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link href="/">Estevão Lima</Link>
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/academica">Experiência Acadêmica</Link>
          </li>
          <li>
            <Link href="/profissional">Experiência Profissional</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
