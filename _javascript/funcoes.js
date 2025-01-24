//Página de Exemplos

//Função para criar um buraco na interface do site com um clique
function quebra() {
    document.getElementById("estado").src = "_imagens/crack.png";
}

//Função para mostrar imagem conforme posição do cursor do mouse
function mudafoto(foto) {
    document.getElementById("escolha").src = foto;
}