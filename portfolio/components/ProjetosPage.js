export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "Relatório Matinal de Vendas | Heineken Brasil",
      linguagem: "Python",
      descricao:
        "Desenvolvimento de um relatório automatizado de vendas no Power BI, com integração em Python e uso de arquivos Parquet para otimização de performance e redução do tamanho dos arquivos. O painel é atualizado diariamente e utilizado pelo time de vendas da Heineken, proporcionando maior eficiência, escalabilidade e visual moderno às análises operacionais.",
      link: "#",
    },
    {
      titulo: "Relatório Executivo para Diretoria | Heineken Brasil",
      linguagem: "Power BI",
      descricao:
        "Criação de um dashboard estratégico no Power BI, voltado à diretoria da Heineken, com visões consolidadas de desempenho e indicadores de negócio. O projeto envolveu tratamento e integração de múltiplas fontes de dados, com foco em clareza visual, performance e proteção das informações corporativas.",
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
            jornada profissional. Cada projeto representa um desafio único e uma
            oportunidade de aprendizado.
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
                Confidencial
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
