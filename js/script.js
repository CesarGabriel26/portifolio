function enviarMensagem(event){
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const mensagem = document.querySelector('#mensagem').value;
    const telefone = "5518998055199";

    const text = `Olá! Me chamo ${nome}, ${mensagem}`;

    const mensagemFormatada = encodeURIComponent(text);
    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url), '_blank';
}