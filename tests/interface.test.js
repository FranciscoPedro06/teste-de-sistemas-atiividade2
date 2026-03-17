/**
 * Testes da interface do sistema Doguito
 * Aqui testamos a interação com o DOM (inputs, botões, listas e carrossel)
 */

require("../app.js")

describe("Testes de Interface", () => {

  /**
   * Antes de cada teste recriamos a estrutura mínima do HTML
   * necessária para que as funções do sistema funcionem.
   */
  beforeEach(() => {

    document.body.innerHTML = `

      <input id="clienteNome">
      <input id="clienteEmail">
      <input type="checkbox" id="clienteVip">
      <ul id="listaClientes"></ul>

      <input id="petNome">
      <input id="petTipo">
      <input id="petIdade">
      <ul id="listaPets"></ul>

      <input id="produtoNome">
      <input id="produtoPreco">
      <ul id="listaProdutos"></ul>

      <select id="produtoSelect"></select>

      <ul id="listaCarrinho"></ul>

      <span id="total"></span>

      <div class="slides" style="transform:translateX(0%)">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div>

    `
  })


  // ---------------- CLIENTE ----------------

  /**
   * Verifica se um cliente pode ser cadastrado
   * quando nome e email são válidos.
   */
  test("Deve permitir cadastrar cliente pela interface", () => {

    clienteNome.value = "João"
    clienteEmail.value = "joao@email.com"

    criarCliente()

    expect(listaClientes.children.length).toBe(1)

  })


  /**
   * Verifica se o sistema impede cadastro
   * quando o nome está vazio.
   */
  test("Não deve cadastrar cliente com nome vazio", () => {

    window.alert = jest.fn()

    clienteNome.value = ""
    clienteEmail.value = "teste@email.com"

    criarCliente()

    expect(alert).toHaveBeenCalled()

  })


  // ---------------- CARRINHO ----------------

  /**
   * Testa se o botão de adicionar produto
   * realmente inclui o item no carrinho.
   */
  test("Adicionar produto deve inserir item no carrinho", () => {

    produtoNome.value = "Ração"
    produtoPreco.value = "50"

    criarProduto()

    produtoSelect.value = 0

    adicionarCarrinho()

    expect(listaCarrinho.children.length).toBe(1)

  })


  /**
   * Verifica se a remoção de produto
   * funciona corretamente no carrinho.
   */
  test("Remover produto deve atualizar carrinho", () => {

    produtoNome.value = "Ração"
    produtoPreco.value = "50"

    criarProduto()

    produtoSelect.value = 0

    adicionarCarrinho()
    removerCarrinho()

    expect(listaCarrinho.children.length).toBe(0)

  })


  /**
   * Testa se finalizar a compra limpa o carrinho
   * e atualiza a interface.
   */
  test("Finalizar compra deve limpar o carrinho", () => {

    window.alert = jest.fn()

    produtoNome.value = "Ração"
    produtoPreco.value = "50"

    criarProduto()

    produtoSelect.value = 0

    adicionarCarrinho()

    finalizarCompra()

    expect(listaCarrinho.children.length).toBe(0)

  })


  // ---------------- CARROSSEL ----------------

  /**
   * Verifica se o carrossel avança
   * para o próximo slide.
   */
  test("Carrossel deve avançar slide", () => {

    const slides = document.querySelector(".slides")

    nextSlide()

    expect(slides.style.transform).toContain("100")

  })


  /**
   * Verifica se o carrossel consegue
   * voltar para o slide anterior.
   */
  test("Carrossel deve voltar slide", () => {

    const slides = document.querySelector(".slides")

    nextSlide()
    prevSlide()

    expect(slides.style.transform).toContain("0")

  })

})