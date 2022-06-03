
let contProd = 0;
function alertCarrinho() {
    alert("Item adicionado ao carrinho de compras");
    contProd++;
    console.log(contProd);
    document.getElementById('contProd').innerHTML = contProd;
}

