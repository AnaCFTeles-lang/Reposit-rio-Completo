const formLogin = document.getElementById('formLogin');
if (formLogin) {
  formLogin.addEventListener('submit', e => {
    e.preventDefault(); // não recarrega
    // teste direto — ignora usuário/senha
    window.location.href = "tela_aluno.html"; 
  });
}
