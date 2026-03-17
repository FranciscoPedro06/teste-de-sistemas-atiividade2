const Sistema=require("../src/sistema")

describe("Testes de Carrinho",()=>{

let sistema

beforeEach(()=>{
sistema=new Sistema()
})

// adiciona produto ao carrinho
test("Deve permitir adicionar produto ao carrinho",()=>{

let p=sistema.criarProduto("Ração",50)

sistema.adicionarCarrinho(p)

expect(sistema.carrinho.length).toBe(1)

})

// remove produto do carrinho
test("Deve permitir remover produto do carrinho",()=>{

let p=sistema.criarProduto("Ração",50)

sistema.adicionarCarrinho(p)

sistema.removerCarrinho()

expect(sistema.carrinho.length).toBe(0)

})

// carrinho deve armazenar vários produtos
test("Carrinho deve listar todos os produtos adicionados",()=>{

let p1=sistema.criarProduto("Ração",50)
let p2=sistema.criarProduto("Brinquedo",20)

sistema.adicionarCarrinho(p1)
sistema.adicionarCarrinho(p2)

expect(sistema.carrinho.length).toBe(2)

})

// cálculo do total da compra
test("Carrinho deve calcular o valor total da compra",()=>{

let p1=sistema.criarProduto("Ração",60)
let p2=sistema.criarProduto("Brinquedo",50)

sistema.adicionarCarrinho(p1)
sistema.adicionarCarrinho(p2)

expect(sistema.calcularTotal()).toBe(99)

})

})