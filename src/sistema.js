// Classe principal do sistema do PetShop
class SistemaPetshop{

// Construtor inicializa as listas do sistema
constructor(){

this.clientes=[]
this.pets=[]
this.produtos=[]
this.carrinho=[]

}


/* ===== CLIENTES ===== */

// Cria um cliente e valida nome e email
criarCliente(nome,email,vip=false){

if(!nome || nome=="")
throw new Error("Nome inválido")

if(!email.includes("@"))
throw new Error("Email inválido")

let cliente={nome,email,vip}

this.clientes.push(cliente)

return cliente

}


/* ===== PET ===== */

// Cadastra um pet no sistema
cadastrarPet(nome,tipo,idade){

if(!nome)
throw new Error("Pet precisa de nome")

if(!tipo)
throw new Error("Pet precisa de tipo")

if(isNaN(idade))
throw new Error("Idade inválida")

let pet={nome,tipo,idade}

this.pets.push(pet)

return pet

}


/* ===== PRODUTOS ===== */

// Cria um produto e valida o preço
criarProduto(nome,preco){

if(!nome)
throw new Error("Produto precisa de nome")

if(preco<=0)
throw new Error("Preço inválido")

let produto={nome,preco}

this.produtos.push(produto)

return produto

}


/* ===== CARRINHO ===== */

// Adiciona produto ao carrinho
adicionarCarrinho(produto){

if(produto.preco===0)
throw new Error("Produto inválido")

this.carrinho.push(produto)

}

// Remove o primeiro produto do carrinho
removerCarrinho(){

return this.carrinho.shift()

}


/* ===== TOTAL ===== */

// Calcula o total da compra aplicando descontos
calcularTotal(cliente){

let total=0

this.carrinho.forEach(p=>{
total+=p.preco
})

// desconto de 10% acima de 100
if(total>100)
total*=0.9

// desconto adicional para cliente VIP
if(cliente && cliente.vip)
total*=0.85

return Number(total.toFixed(2))

}


/* ===== FINALIZAR COMPRA ===== */

// Finaliza a compra e limpa o carrinho
finalizarCompra(cliente){

let total=this.calcularTotal(cliente)

this.carrinho=[]

return total

}

}

// Exporta a classe para os testes
module.exports=SistemaPetshop