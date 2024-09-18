# news-feed-extension
<h2>Visão Geral</h2>
<p>Esta aplicação é um feed simples de notícias de esportes, para ser utilizada no trabalho de sistematização da disciplina Engenharia e Projeto de Software do UniCeub.</p>
<p>A aplicação foi desenvolvida em HTML e JavaScript, e os testes são realizados com Jest.</p>
<p>A ferramenta de IA Generativa Copilot foi utilizada em alguns momentos, para melhora e depuração do código. Foram realizados os devidos ajustes e correções, especialmente quanto a referências e nomes de variáveis.</p>
<h3>Estrutura do Projeto</h3>
<p>news-feed-extension/</p>
<p>├── public/</p>
<p>│   ├── bundle.js</p>
<p>│   ├── icon16.png</p>
<p>│   ├── icon48.png</p>
<p>│   ├── index.html</p>
<p>│   └── manifest.json</p>
<p>├── src/</p>
<p>│   ├── index.js</p>
<p>│   └── newsFeed.test.js</p>
<p>├── .babelrc</p>
<p>├── .gitignore</p>
<p>├── README.md</p>
<p>├── jest.config.js</p>
<p>├── manual_do_usuario.md</p>
<p>├── package-lock.json</p>
<p>├── package.json</p>
<p>└── webpack.config.js</p>
<h3>Arquivos e funções</h3>
<p>O arquivo manifest.json traz as informações - nome e objetivo - da aplicação.</p>
<p>O arquivo index.html traz a estrutura da página</p>
<p>O arquivo index.js traz o script de carregamento das notícias no popup</p>
<p>O arquivo bundle.js faz a montagem das notícias na estrutura do popup</p>
<p>O arquivo newsFeed.test.js traz o scrip de testes automatizados do carregamento das notícias</p>
<h3>Instalar as dependências</h3>
<p>npm install</p>
<h3>Compilar o projeto</h3>
<p>npx webpack </p>
<p>Isso gerará o arquivo bundle.js na pasta dist. Copie o arquivo bundle.js na pasta public.</p>
<p>Executar os testes:</p> 
<p>npx jest </p>
<h3>Carregar a extensão no Chrome</h3>
<p>• Abra o Chrome e vá para chrome://extensions/. </p>
<p>• Ative o modo de desenvolvedor. </p>
<p>Clique em “Carregar sem compactação" e selecione a pasta public.</p>
