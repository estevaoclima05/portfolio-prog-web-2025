export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-ascii">
          <pre>{`
    ____             __  ____      ___     
   / __ \\____  _____/ /_/ __/___  / (_)___ 
  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\
 / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /
/_/    \\____/_/   \\__/_/  \\____/_/_/\\____/ 
          `}</pre>
        </div>

        <div className="hero-text">
          <h1>➤ Hello, World!</h1>
          <p className="hero-links">
            <a
              href="https://github.com/estevaoclima05"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/estev%C3%A3o-lima-510152219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>

          <div className="hero-description">
            <p>
              Opaa, tudo bem? Me chamo Estevão e irei falar um pouco sobre mim
              abaixo:
            </p>

            <p>
              Atualmente, estou cursando Sistemas para Internet na Universidade
              Católica de Pernambuco e atuo como Analista de Inteligência
              Comercial na Heineken, onde aplico minhas habilidades em análise
              de dados para apoiar decisões estratégicas na área comercial.
            </p>

            <p>
              Minha experiência profissional em vendas contribuiu e continua a
              contribuir para o desenvolvimento das minhas habilidades
              analíticas e comunicativas, proporcionando uma visão ampla das
              necessidades do negócio e da importância dos dados na tomada de
              decisões.
            </p>

            <p>
              Estou sempre em busca de aprender mais sobre tecnologias, vendas e
              de como alinhar esses dois mundos para gerar valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
