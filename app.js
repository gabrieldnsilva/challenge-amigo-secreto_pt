const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Constantes para mensagens
const ERRO_NOME_VAZIO = "Por favor, digite um nome.";
const ERRO_NOME_DUPLICADO = "Este nome já está na lista.";
const ERRO_LISTA_CHEIA =
	"A lista está cheia. Remova algum nome antes de adicionar outro.";
const ERRO_LISTA_VAZIA = "A lista está vazia! Adicione nomes antes de sortear.";

// Configurações
const MAX_AMIGOS = 20;

// Lista para guardar os nomes
const nomes = [];

// Função para adicionar amigos
function adicionarAmigo() {
	const nome = inputAmigo.value.trim();

	if (nome === "") {
		alert(ERRO_NOME_VAZIO);
		return;
	}

	if (nomes.includes(nome)) {
		alert(ERRO_NOME_DUPLICADO);
		return;
	}

	if (nomes.length >= MAX_AMIGOS) {
		alert(ERRO_LISTA_CHEIA);
		return;
	}

	nomes.push(nome);
	atualizarListaHTML();
	limparInput();
}

// Função para atualizar a lista no HTML
function atualizarListaHTML() {
	listaAmigos.innerHTML = "";
	nomes.forEach((nome, index) => {
		//Cria Elemento "lista"
		const itemLista = document.createElement("li");
		itemLista.textContent = nome;

		//Cria Botão dinamicamente para remover nome
		const botaoRemover = document.createElement("button");
		botaoRemover.className = "button-remove";
		botaoRemover.textContent = "Remover";
		botaoRemover.onclick = () => removerAmigo(index);

		itemLista.appendChild(botaoRemover);
		listaAmigos.appendChild(itemLista);
	});
}
o;
function removerAmigo(index) {
	nomes.splice(index, 1);
	atualizarListaHTML();
	limparInput();
}

// Função para sortear um amigo
function sortearAmigo() {
	if (nomes.length === 0) {
		alert(ERRO_LISTA_VAZIA);
		return;
	}

	const indexSorteado = Math.floor(Math.random() * nomes.length);
	const amigoSorteado = nomes[indexSorteado];

	resultado.textContent = `Sorteado: ${amigoSorteado}`;
}

function limparInput() {
	inputAmigo.value = "";
	inputAmigo.focus();
	resultado.textContent = "";
}
