export default function AcademicaPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>➤ Experiência Acadêmica</h1>
      </div>

      <div className="page-content">
        <section className="content-section timeline-item">
          <div className="timeline-marker">🎓</div>
          <h2>
            Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco
            (IFPE - Campus Paulista)
          </h2>
          <p className="timeline-date">2022 - 2025</p>
          <p>
            Atividades e grupos: Projeto de Extensão Tecnológica – PET – Segunda
            Parte 2022, "Social Media: Introdução, Análise e Utilização de Forma
            Estratégica".
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
            marketing digital.
          </p>
          <p>Áreas de foco: Análise de Dados, Marketing Digital.</p>
        </section>

        <section className="content-section timeline-item">
          <div className="timeline-marker">📚</div>
          <h2>Cursos e Certificações Online</h2>
          <p className="timeline-date">2022 - 2025</p>
          <ul>
            <li>ReactJS - Rocketseat</li>
            <li>Introdução à análise de mídias sociais com a Buzzmonitor</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Habilidades Acadêmicas Desenvolvidas</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Linguagens de Programação</h3>
              <ul>
                <li>Javascript</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Áreas de Conhecimento</h3>
              <ul>
                <li>Algoritmos e Estruturas de Dados</li>
                <li>Programação Orientada a Objetos</li>
                <li>Banco de Dados Relacionais</li>
                <li>Desenvolvimento Web</li>
                <li>Machine Learning Básico</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Áreas de Interesse</h3>
              <ul>
                <li>Inteligência Artificial</li>
                <li>Programação de Baixo Nível</li>
                <li>Algoritmos e Estrutura de Dados</li>
                <li>Gestão de Tempo</li>
                <li>Matemática Computacional</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
