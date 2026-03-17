# Sistema de Pet Shop com Testes em JavaScript

> **Nota:** Este projeto é uma atividade prática desenvolvida para a disciplina de **Testes de Sistemas** do **SENAI**, ministrada pelo professor **Yanes Costa**.

Este projeto consiste em um pequeno sistema de **Pet Shop**, desenvolvido em **JavaScript**, com foco principal na aplicação de **testes automatizados** utilizando o framework Jest.

O objetivo do projeto é validar regras de negócio do sistema através de **testes unitários e testes de integração**, garantindo que os principais módulos funcionem corretamente.

---

## Funcionalidades

O sistema simula algumas operações básicas de um pet shop:

* Cadastro de **clientes**
* Cadastro de **produtos**
* Cadastro de **pets**
* Manipulação de **carrinho de compras**
* Aplicação de **regras de negócio**

Todos esses módulos possuem **testes automatizados**, garantindo que as funcionalidades estejam funcionando corretamente.

---

## Testes Automatizados

Os testes foram desenvolvidos utilizando o framework **Jest**, bastante utilizado em projetos JavaScript.

A suíte de testes inclui:

* Testes de **clientes**
* Testes de **produtos**
* Testes de **pets**
* Testes de **carrinho**
* Testes de **regras do sistema**

Resultado atual dos testes:

* **5 suites de testes**
* **21 testes executados**
* **100% dos testes passando**

---

## Estrutura do Projeto

A estrutura do projeto foi organizada para separar a lógica do sistema e os testes.

```
teste-de-sistemas-atividade2
│
├── sistema.js
│
├── tests
│   ├── cliente.test.js
│   ├── produto.test.js
│   ├── pet.test.js
│   ├── carrinho.test.js
│   └── regras.test.js
│
├── package.json
└── README.md
```

* **sistema.js** → contém as funções e regras do sistema.
* **tests/** → contém todos os testes automatizados do projeto.
* **package.json** → configuração do projeto Node.js e do Jest.

---

## Como Executar o Projeto

Antes de rodar os testes, é necessário ter o **Node.js** instalado.

### 1. Instalar as dependências

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

---

### 2. Executar os testes

Para rodar todos os testes automatizados:

```bash
npm test
```

---

### 3. Gerar relatório de cobertura de testes

Para visualizar a cobertura de testes do projeto:

```bash
npm test -- --coverage
```

Isso irá gerar um relatório mostrando quais partes do código estão sendo testadas.

---

## Autor

Desenvolvido por **Francisco Pedro**.
