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
          <p className="timeline-date">2023 - 2023</p>
          <p>
            Fui bolsista de extensão durante o curso de Análise e
            Desenvolvimento de Sistemas no Instituto Federal de Pernambuco
            (IFPE), participando do projeto “Social Media: Introdução, Análise e
            Utilização de Forma Estratégica”. Nesse projeto, realizei análises
            métricas de dados de empresas locais do município de Paulista - PE,
            utilizando a plataforma BuzzMonitor, em parceria com a FACEPE e o
            IFPE. A iniciativa teve como foco o uso estratégico de mídias
            sociais e a aplicação prática de ferramentas de análise de dados e
            marketing digital.
          </p>
          <p>Áreas de foco: Análise de Dados, Marketing Digital.</p>
        </section>

        <section className="content-section timeline-item">
          <div className="timeline-marker">📚</div>
          <h2>Cursos e Certificações</h2>
          <p className="timeline-date">2022 - 2025</p>
          <ul>
            <li>ReactJS - Rocketseat </li>
            <li>Introdução à análise de mídias sociais com a Buzzmonitor</li>
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
