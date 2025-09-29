/**
 * Função para validar emails, usando regex
 * @param {string} email
 * @returns {boolean} true se o email for válido, false caso contrário
 */
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function eventoFormulario(ev) {
  // impedir o envio padrão do formulário (refresh da página)
  ev.preventDefault();

  //variáveis do formulário
  const nome_input = document.querySelector("#formulario_nome_input");
  const email_input = document.querySelector("#formulario_email_input");
  const mensagem_input = document.querySelector("#formulario_mensagem_input");

  // pegar os valores dos inputs
  const nome_value = nome_input.value;
  const email_value = email_input.value;
  const mensagem_value = mensagem_input.value;

  // validar o email
  if (!validarEmail(email_value)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  console.log({ nome_value, email_value, mensagem_value });
  alert("Mensagem enviada com sucesso!");

  //limpar os campos do formulário
  nome_input.value = "";
  email_input.value = "";
  mensagem_input.value = "";
}

//exportar a função para ser usada em outro arquivo
export { eventoFormulario };
