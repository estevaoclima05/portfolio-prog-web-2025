export default function SobrePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>➤ Sobre o Projeto</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Tecnologias Utilizadas</h2>
          <p>
            Este site foi desenvolvido utilizando tecnologias modernas e
            eficientes para criar uma experiência web rápida e responsiva.
          </p>
        </section>

        <section className="content-section">
          <h3>⚛️ React</h3>
          <p>
            Biblioteca JavaScript para construção de interfaces de usuário.
            React permite criar componentes reutilizáveis e gerenciar o estado
            da aplicação de forma eficiente. Utilizamos hooks como useState e
            useEffect para gerenciar estado e efeitos colaterais nos
            componentes.
          </p>
        </section>

        <section className="content-section">
          <h3>⚡ Next.js</h3>
          <p>
            Framework React para produção que oferece renderização híbrida
            estática e no servidor, roteamento baseado em sistema de arquivos, e
            otimizações automáticas de performance. Next.js facilita a criação
            de aplicações web modernas com excelente SEO e carregamento rápido.
          </p>
        </section>

        <section className="content-section">
          <h3>🎨 CSS Puro</h3>
          <p>
            Estilização customizada sem dependências de frameworks CSS.
            Utilizamos CSS moderno com variáveis CSS, flexbox, grid, media
            queries para responsividade, e transições suaves. O design
            minimalista foi inspirado em terminais e interfaces de linha de
            comando.
          </p>
        </section>

        <section className="content-section">
          <h3>🌤️ Integração com API de Clima</h3>
          <p>
            Integração com a API Open-Meteo para exibir informações
            meteorológicas em tempo real. A API fornece dados de temperatura,
            velocidade do vento e outras condições climáticas para Recife, PE. A
            integração é feita através de fetch API nativa do JavaScript.
          </p>
        </section>

        <section className="content-section">
          <h2>Estrutura do Projeto</h2>
          <p>
            O projeto segue a estrutura padrão do Next.js com organização
            modular:
          </p>
          <ul>
            <li>
              <code>/app</code> - Páginas e rotas da aplicação
            </li>
            <li>
              <code>/components</code> - Componentes React reutilizáveis
            </li>
            <li>
              <code>/public</code> - Arquivos estáticos (imagens, ícones)
            </li>
            <li>
              <code>globals.css</code> - Estilos globais da aplicação
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Funcionalidades</h2>
          <ul>
            <li>
              Design responsivo que se adapta a diferentes tamanhos de tela
            </li>
            <li>Navegação intuitiva entre páginas</li>
            <li>Widget de clima com dados em tempo real</li>
            <li>Interface minimalista inspirada em terminal</li>
            <li>Performance otimizada com Next.js</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
