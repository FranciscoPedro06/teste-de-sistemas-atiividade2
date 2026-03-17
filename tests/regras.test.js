const Sistema=require("../src/sistema")

describe("Testes de Regras de Negócio",()=>{

let sistema

beforeEach(()=>{
sistema=new Sistema()
})

// desconto para compras acima de 100
test("Compra acima de R$100 deve aplicar desconto de 10%",()=>{

let p1=sistema.criarProduto("Ração",70)
let p2=sistema.criarProduto("Brinquedo",50)

sistema.adicionarCarrinho(p1)
sistema.adicionarCarrinho(p2)

expect(sistema.calcularTotal()).toBe(108)

})

// desconto adicional para cliente VIP
test("Cliente VIP deve receber desconto de 15%",()=>{

let cliente=sistema.criarCliente("Ana","ana@email.com",true)

let p=sistema.criarProduto("Ração",100)

sistema.adicionarCarrinho(p)

let total=sistema.calcularTotal(cliente)

expect(total).toBe(85)

})

// carrinho vazio retorna 0
test("Carrinho vazio deve retornar total igual a 0",()=>{

expect(sistema.calcularTotal()).toBe(0)

})

// finalizar compra deve limpar carrinho
test("Ao finalizar compra o carrinho deve ser limpo",()=>{

let p=sistema.criarProduto("Ração",50)

sistema.adicionarCarrinho(p)

sistema.finalizarCompra()

expect(sistema.carrinho.length).toBe(0)

})

})