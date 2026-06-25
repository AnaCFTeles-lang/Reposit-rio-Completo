// Tamanho da fonte
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

// Alto contraste — hífen normal "-"
if (btnContraste) {
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
}

// LOGIN — ABRE EM NOVA ABA, ou remova "_blank" se quiser mesma janela
if (formLogin) {
  formLogin.addEventListener('submit', e => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('erro');

    if (usuario === 'admin@napne.br' && senha === '123456') {
      erro.textContent = '';
      window.open('tela_admin.html'); // ← nova aba
    } else if (usuario === 'professor@napne.br' && senha === '123456') {
      erro.textContent = '';
      window.open('tela_professor.html');
    } else if (usuario === 'aluno@napne.br' && senha === '123456') {
      erro.textContent = '';
      window.open('tela_aluno.html');
    } else {
      erro.textContent = 'Usuário ou senha inválidos.';
    }
  });
}
