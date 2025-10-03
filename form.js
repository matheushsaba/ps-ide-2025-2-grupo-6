/**
 * Função para validar emails, usando regex
 * @param {string} email
 * @returns {boolean} true se o email for válido, false caso contrário
 */
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Função para mostrar mensagem de erro
 * @param {string} elementoId - ID do elemento de erro
 * @param {boolean} mostrar - true para mostrar, false para esconder
 */
function mostrarErro(elementoId, mostrar) {
  const elemento = document.querySelector(`#${elementoId}`);
  if (elemento) {
    if(mostrar){
      elemento.classList.add("aviso-erro-ativo");
    }else{
      elemento.classList.remove("aviso-erro-ativo");
    }
  }
}

/**
 * Função para validar todos os campos do formulário
 * @returns {boolean} true se todos os campos são válidos
 */
function validarFormularioContato(nome, email, mensagem) {
  let formularioValido = true;

  // Validar nome
  if (nome === "") {
    mostrarErro("erro_nome", true);
    formularioValido = false;
  } else {
    mostrarErro("erro_nome", false);
  }

  // Validar email
  if (email === "" || !validarEmail(email)) {
    mostrarErro("erro_email", true);
    formularioValido = false;
  } else {
    mostrarErro("erro_email", false);
  }

  // Validar mensagem
  if (mensagem === "") {
    mostrarErro("erro_mensagem", true);
    formularioValido = false;
  } else {
    mostrarErro("erro_mensagem", false);
  }

  return formularioValido;
}

function eventoFormulario(ev) {
  // impedir o envio padrão do formulário (refresh da página)
  ev.preventDefault();
  //variáveis do formulário
  const nome_input = document.querySelector("#formulario_nome_input");
  const email_input = document.querySelector("#formulario_email_input");
  const mensagem_input = document.querySelector("#formulario_mensagem_input");

  const nome_value = nome_input.value;
  // deixar trim para email, pois espaços antes ou depois do email são inválidos
  const email_value = email_input.value.trim();
  const mensagem_value = mensagem_input.value;

  //Se o formulário não for válido, não enviar
  if (!validarFormularioContato(nome_value, email_value, mensagem_value)) {
    return;
  }else{
  //senão, enviar o formulário (por hora, enviar = console.log())
  console.log({ nome_value, email_value, mensagem_value });

    //limpar os campos do formulário
    nome_input.value = "";
    email_input.value = "";
    mensagem_input.value = "";
    
    // Esconder todas as mensagens de erro
    mostrarErro("erro_nome", false);
    mostrarErro("erro_email", false);
    mostrarErro("erro_mensagem", false);
  }
}

//exportar a função para ser usada em outro arquivo
export { eventoFormulario };
