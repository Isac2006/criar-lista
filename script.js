var nomedoproduto = document.getElementById("nome");
var preco = document.getElementById("preco");
var categoria = document.getElementById("opcaocategoria");


form = document.getElementById("formularioo");
ul = document.getElementById("lista-produtos");

class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }
}

let produtos = [];

function mostrarProdutos() {
  ul.innerHTML = "";

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const nomeProduto = produto.nome;
    const precoProduto = produto.preco;
    const categoriaProduto = produto.categoria;

    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    const br = document.createElement('br');
    const apagar = document.createElement("button");
    apagar.innerHTML = "Apagar";

    h3.innerHTML = `Nome: ${nomeProduto}`;
    h4.innerHTML = `Preço: ${precoProduto}`;
    h5.innerHTML = `Categoria: ${categoriaProduto}`;
    apagar.textContent = "Apagar";
    apagar.addEventListener("click", function() {
      produtos.splice(i, 1);
      mostrarProdutos();
    });
    li.appendChild(h3);
    li.appendChild(br);
    li.appendChild(h4);
    li.appendChild(br);
    li.appendChild(h5);
    li.appendChild(apagar);
    ul.appendChild(li);
  }
}





preco.addEventListener("input", function(event) {
    console.log("Valor do preço alterado:", event.target.value);
    const valorLimpo = event.target.value.replace(/\D/g, "");
    event.target.value = `R$ ${valorLimpo}`;
})
form.addEventListener("submit", function(event) {
  event.preventDefault();


  adicionarProduto();
})
function adicionarProduto(){
    const nomeProduto = nomedoproduto.value;
    console.log(nomeProduto);
        const precoProduto = preco.value;
        console.log(precoProduto);
         const categoriaProduto = categoria.value;
         console.log(categoriaProduto);
    produtos.push(new Produto(nomeProduto,precoProduto,categoriaProduto));

mostrarProdutos();
}
function removerProduto(){

mostrarProdutos();
}
function limparCampos() {
produtos.length = 0; 
  ul.innerHTML = "";   
  mostrarProdutos();
}
mostrarProdutos();