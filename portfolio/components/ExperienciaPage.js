export default function ExperienciaPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>➤ Experiência Acadêmica</h1>
      </div>

      <div className="page-content">
        <section className="content-section timeline-item">
          <div className="timeline-marker">🎓</div>
          <h2>Ensino Médio</h2>
          <p className="timeline-date">2021 - 2023</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Curso
            técnico integrado focado em desenvolvimento de software e ciências
            da computação.
          </p>
          <p>
            Disciplinas principais: Programação, Banco de Dados, Redes de
            Computadores, Desenvolvimento Web, Engenharia de Software.
          </p>
        </section>

        <section className="content-section timeline-item">
          <div className="timeline-marker">💻</div>
          <h2>Projetos Extracurriculares</h2>
          <p className="timeline-date">2025 - Presente</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Participação ativa em
            projetos de código aberto e desenvolvimento de aplicações pessoais.
          </p>
          <p>
            Áreas de foco: Inteligência Artificial, Programação de Sistemas,
            Algoritmos e Estruturas de Dados.
          </p>
        </section>

        <section className="content-section timeline-item">
          <div className="timeline-marker">📚</div>
          <h2>Cursos e Certificações</h2>
          <p className="timeline-date">2023 - 2025</p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Diversos cursos online e
            presenciais focados em aprofundamento técnico.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Linguagens de Programação</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>JavaScript/TypeScript</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Ferramentas e Tecnologias</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>React & Next.js</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Áreas de Interesse</h3>
              <ul>
                <li>Inteligência Artificial</li>
                <li>Programação de Baixo Nível</li>
                <li>Algoritmos e Estrutura de Dados</li>
                <li>Matemática Computacional</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
