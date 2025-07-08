function alternarModo() {
    const body = document.body;
    const botao = document.getElementById("modoBotao");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        botao.innerHTML = "Modo Claro";
    } else {
        botao.innerHTML = "Modo Escuro";
    }
}