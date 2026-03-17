const Sistema=require("../src/sistema")

describe("Testes de Pet",()=>{

let sistema

// reinicia o sistema antes de cada teste
beforeEach(()=>{
sistema=new Sistema()
})

// cadastro básico de pet
test("Deve permitir cadastrar um pet",()=>{

let pet=sistema.cadastrarPet("Rex","Cachorro",4)

expect(pet.nome).toBe("Rex")

})

// pet precisa ter nome
test("Pet deve possuir nome obrigatório",()=>{

expect(()=>{

sistema.cadastrarPet("","Cachorro",4)

}).toThrow()

})

// tipo do pet é obrigatório
test("Pet deve possuir tipo",()=>{

expect(()=>{

sistema.cadastrarPet("Rex","",4)

}).toThrow()

})

// idade precisa ser número
test("Pet deve possuir idade válida",()=>{

expect(()=>{

sistema.cadastrarPet("Rex","Cachorro","abc")

}).toThrow()

})

})