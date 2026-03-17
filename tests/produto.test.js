const Sistema=require("../src/sistema")

describe("Testes de Produto",()=>{

let sistema

beforeEach(()=>{
sistema=new Sistema()
})

// criação básica de produto
test("Deve permitir criar produto com nome",()=>{

let produto=sistema.criarProduto("Ração",50)

expect(produto.nome).toBe("Ração")

})

// preço precisa ser maior que zero
test("Produto deve possuir preço maior que zero",()=>{

let produto=sistema.criarProduto("Brinquedo",20)

expect(produto.preco).toBeGreaterThan(0)

})

// preço negativo não deve ser permitido
test("Produto não pode possuir preço negativo",()=>{

expect(()=>{

sistema.criarProduto("Ração",-5)

}).toThrow()

})

// produto criado deve aparecer na lista
test("Produto deve aparecer na lista de produtos cadastrados",()=>{

sistema.criarProduto("Coleira",30)

expect(sistema.produtos.length).toBe(1)

})

})