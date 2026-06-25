// Ajuste de tamanho da fonte
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

// LOGIN — só funciona se as telas existirem NA MESMA PASTA
if (formLogin) {
  formLogin.addEventListener('submit', e => {
    e.preventDefault(); // essencial para não recarregar

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('erro');

    // Dados de teste corretos
    if (usuario === 'admin@napne.br' && senha === '123456') {
      erro.textContent = '';
      window.location.href = 'tela_admin.html';
    } else if (usuario === 'professor@napne.br' && senha === '123456') {
      erro.textContent = '';
      window.location.href = 'tela_professor.html';
    } else if (usuario === 'aluno@napne.br' && senha === '123456') {
      erro.textContent = '';
      window.location.href = 'tela_aluno.html';
    } else {
      erro.textContent = 'Usuário ou senha inválidos.';
    }
  });
}
