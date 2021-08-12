// recuperando o tbody do html - será nele que os dados digitados serão escritos

const tbody = document.querySelector('tbody');

// cancelar o envio dos dados(submit) para gravar as informações na tabela
// escutador de eventos
document.querySelector('form').addEventListener('submit', function(event){
    // cancelar o evento
    event.preventDefault();

    // recuperar as informações
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // criar no JS um TR - linha da tabela
    const tr = document.createElement('tr');

    // percorrer o elemento 'campos' e a cada ocorrência criará uma TD alocada na TR
    campos.forEach((campo) => {
        // criar a coluna da tabela - TD
        const td = document.createElement('td');

        // atribui o valor digitado para dentro da TD
        td.textContent = campo.value;

        // adicionar a TD na TR
        tr.appendChild(td);
    });

    // adicionando a linha TR no TBody
    tbody.appendChild(tr);

    // limpando o formulário
    this.reset();

    campos[0].focus();

});