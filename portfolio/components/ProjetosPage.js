export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "Lorem ipsum dolor sit amet",
      linguagem: "Lorem",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sistema de machine learning para classificação de imagens utilizando redes neurais convolucionais. Implementado com TensorFlow e PyTorch.",
      link: "#",
    },
    {
      titulo: "Lorem ipsum dolor sit amet",
      linguagem: "Lorem",
      descricao:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Editor de texto minimalista desenvolvido em C puro, com suporte a sintaxe highlighting e múltiplos buffers.",
      link: "#",
    },
    {
      titulo: "Lorem ipsum dolor sit amet",
      linguagem: "Lorem",
      descricao:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Compilador para linguagem de programação customizada, desenvolvido em Zig com foco em performance.",
      link: "#",
    },
    {
      titulo: "Lorem ipsum dolor sit amet",
      linguagem: "Lorem",
      descricao:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse. Sistema de web scraping com processamento paralelo e armazenamento em banco de dados.",
      link: "#",
    },
    {
      titulo: "Lorem ipsum dolor sit amet",
      linguagem: "Lorem",
      descricao:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa. Engine de jogos 2D desenvolvida do zero em C++ com OpenGL para renderização gráfica.",
      link: "#",
    },
    {
      titulo: "Lorem ipsum dolor sit amet",
      linguagem: "Lorem",
      descricao:
        "Quis nostrum exercitationem ullam corporis suscipit laboriosam. Aplicação web interativa para visualização de diferentes algoritmos de ordenação em tempo real.",
      link: "#",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>➤ Meus Projetos</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p>
            Aqui estão alguns dos projetos que desenvolvi ao longo da minha
            jornada no mundo da programação. Cada projeto representa um desafio
            único e uma oportunidade de aprendizado.
          </p>
        </section>

        <div className="projects-grid">
          {projetos.map((projeto, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{projeto.titulo}</h3>
                <span className="project-language">{projeto.linguagem}</span>
              </div>
              <p className="project-description">{projeto.descricao}</p>
              <a href={projeto.link} className="project-link">
                Ver projeto →
              </a>
            </div>
          ))}
        </div>

        <section className="content-section">
          <h2>Projetos em Desenvolvimento</h2>
          <p>
            Atualmente estou trabalhando em novos projetos focados em
            inteligência artificial e Análise de Dados. Em breve mais
            atualizações!
          </p>
        </section>
      </div>
    </div>
  );
}
