//Previnindo que a página seja atualizada ao enviar o conteúdo do formulário
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()

    //Declarando as variáveis através do id do html
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let mensagem = document.getElementById('mensagem').value
    
    //Declarando a variável de confirmação
    let confirmacao = `Por favor confirme seus dados:\n Nome: ${nome}\n E-mail: ${email}\n Telefone: ${telefone}\n Mensagem: ${mensagem}\n Os dados estão corretos? `

    //Se o usuário confirmar os dados, o formulário será enviado
    if (confirm(confirmacao)) {

    alert(`Olá, ${nome}!\n Obrigado por entrar em contato conosco!\n\n\n Mensagem enviada.`)
    document.querySelector('form').reset()

    //Senão, ele revisará os dados
    } else {
        alert('Revise o formulário antes de enviar.')
    }
})