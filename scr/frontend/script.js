const formLogin = document.getElementById('formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    // Impede envio padrão e recarregamento da página
    e.preventDefault();

    // Aqui futuramente você pode capturar valores:
    // const usuario = document.getElementById('usuario').value.trim();
    // const senha = document.getElementById('senha').value;

    // Redireciona corretamente
    window.location.href = "tela_aluno.html";
  });
}
