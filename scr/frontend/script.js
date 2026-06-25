let tamanhoFonte = 16;
const btnAmais = document.getElementById('btnAmais');
const btnAmenos = document.getElementById('btnAmenos');
const btnContraste = document.getElementById('btnContraste');
const formLogin = document.getElementById('formLogin');

if (btnAmais) {
  btnAmais.addEventListener('click', () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  });
}
if (btnAmenos) {
  btnAmenos.addEventListener('click', () => {
    tamanhoFonte = Math.max(12, tamanhoFonte - 2);
    document.body.style.fontSize = tamanhoFonte + "px";
  });
}
if (btnContraste) {
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
}

if (formLogin) {
  formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const usu = document.getElementById('usuario').value.trim();
    const sen = document.getElementById('senha').value;
    const erro = document.getElementById('erro');

    if (usu === 'admin@napne.br' && sen === '123456') {
      window.location.href = 'tela_admin.html';
    } else if (usu === 'professor@napne.br' && sen === '123456') {
      window.location.href = 'tela_professor.html';
    } else if (usu === 'aluno@napne.br' && sen === '123456') {
      window.location.href = 'tela_aluno.html';
    } else {
      erro.textContent = 'Usuário ou senha inválidos.';
    }
  });
}
