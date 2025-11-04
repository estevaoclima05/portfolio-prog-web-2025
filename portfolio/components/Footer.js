export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: estevao.00000855153@unicap.br</p>
          <p>GitHub: estevaoclima05</p>
        </div>

        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <a href="/projetos">Projetos</a>
            </li>
            <li>
              <a href="/experiencia">Experiência</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="https://github.com/estevaoclima05">GitHub</a>
            <a href="https://www.linkedin.com/in/estev%C3%A3o-lima-510152219/">
              LinkedIn
            </a>
            <a href="https://x.com/home">Twitter/X</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Portfolio. Desenvolvido com React + Next.js</p>
      </div>
    </footer>
  );
}
