let tamanhoFonte = 16;
document.getElementById('btnAmais').addEventListener('click', () => {
  tamanhoFonte += 2; document.body.style.fontSize = tamanhoFonte + 'px';
});
document.getElementById('btnAmenos').addEventListener('click', () => {
  tamanhoFonte = Math.max(12, tamanhoFonte‑2); document.body.style.fontSize = tamanhoFonte + 'px';
});
document.getElementById('btnContraste').addEventListener('click', () => {
  document.body.classList.toggle('alto‑contraste');
});

document.getElementById('formLogin').addEventListener('submit', e => {
  e.preventDefault();
  const u = document.getElementById('usuario').value.trim();
  const s = document.getElementById('senha').value;
  const msg = document.getElementById('erro');
  if (!u || !s) {
    msg.textContent = 'Preencha todos os campos!'; msg.className = 'erro';
  } else {
    msg.textContent = 'Login simulado OK — em breve: direciona para tela_aluno.html / tela_professor.html';
    msg.className = '';
    // Aqui depois liga com backend ou muda para a página certa
  }
});
