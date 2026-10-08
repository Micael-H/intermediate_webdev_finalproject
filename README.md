# Calculadora de Taxa de Juros Simples

Projeto final com testes Jasmine e distribuição Webpack.

A fórmula usada é juros = capital × taxa anual × prazo em anos ÷ 100. O aplicativo converte as entradas em números e exibe juros e total em reais.

## Executar

```sh
npm install
npx jasmine
npx webpack
```

Abra dist/index.html após o build. Para desenvolver sem build, abra src/index.html.

## Estrutura

- src/index.html: favicon, CSS, JavaScript e SEO (title, meta description e h1).
- src/script.js: cálculo e referências explícitas aos IDs principal, rate e years.
- src/style.css: estilos da calculadora.
- src/favicon.ico: favicon no formato ICO.
- spec/scriptSpec.js: duas especificações Jasmine.
- webpack.config.js: gera dist/main.js e copia os demais arquivos para distribuição.

## Evidências para avaliação

- no-spec: registro inicial, antes da criação das especificações, com os comandos npx jasmine init e npx jasmine.
- both-tests-passed: saída atual de npx jasmine com 2 specs, 0 failures.
- dist-directory: saída atual de npx webpack com favicon.ico, main.js e ./src/script.js.
- [SUBMISSAO.md](./SUBMISSAO.md): respostas completas para copiar na avaliação.

## Arquivos para submissão

- [index.html](https://github.com/Micael-H/intermediate_webdev_finalproject/blob/main/src/index.html)
- [script.js](https://github.com/Micael-H/intermediate_webdev_finalproject/blob/main/src/script.js)
