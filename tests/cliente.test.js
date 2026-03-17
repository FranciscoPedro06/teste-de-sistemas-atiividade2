const Sistema=require("../src/sistema")

describe("Testes de Cliente",()=>{

let sistema

// cria um sistema novo antes de cada teste
beforeEach(()=>{
sistema=new Sistema()
})

// cliente com nome válido deve funcionar
test("Deve permitir criar cliente com nome válido",()=>{

let cliente=sistema.criarCliente("João","joao@email.com")

expect(cliente.nome).toBe("João")

})

// nome vazio não deve ser aceito
test("Não deve permitir cliente com nome vazio",()=>{

expect(()=>{

sistema.criarCliente("","email@email.com")

}).toThrow()

})

// email válido deve ser aceito
test("Deve permitir cadastrar cliente com email válido",()=>{

let cliente=sistema.criarCliente("Ana","ana@email.com")

expect(cliente.email).toContain("@")

})

// email inválido deve gerar erro
test("Não deve permitir email inválido",()=>{

expect(()=>{

sistema.criarCliente("Ana","anaemail.com")

}).toThrow()

})

// cliente pode ser marcado como VIP
test("Deve permitir marcar cliente como VIP",()=>{

let cliente=sistema.criarCliente("Pedro","pedro@email.com",true)

expect(cliente.vip).toBe(true)

})

})