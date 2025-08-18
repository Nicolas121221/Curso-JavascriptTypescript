// agregação entre classe é quando uma classe depende de outra para funcionar corretamente
export class CarrinhoDeCompras {
	private readonly produtos: Produto[] = [];

	inserirProduto(...produtos: Produto[]): void {
		for (const produto of produtos) {
			this.produtos.push(produto);
		}
	}

	quantidadeDeProdutos(): number {
		return this.produtos.length;
	}

	valorTotal(): number {
		return Math.round(
			this.produtos.reduce((soma, produto) => soma + produto.preco, 0),
		);
	}
}

export class Produto {
	constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("camiseta", 49.9);
const produto2 = new Produto("Caneca", 1.9);
const produto3 = new Produto("Caneta", 0.9);
console.log(produto1.nome);

const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto2);
carrinhoDeCompras.inserirProduto(produto3);

console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeDeProdutos());
