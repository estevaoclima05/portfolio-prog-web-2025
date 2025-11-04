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
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
          </p>

          <div className="hero-description">
            <p>Lorem ipsum dolor sit amet</p>

            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>

            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>

            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
